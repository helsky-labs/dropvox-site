import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

interface ValidateRequest {
  license_key: string;
  machine_id: string;
  machine_name?: string;
  os_version?: string;
  app_version: string;
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  try {
    const body: ValidateRequest = await request.json();
    const { license_key, machine_id, machine_name, os_version, app_version } =
      body;

    if (!license_key || !machine_id) {
      return NextResponse.json(
        { valid: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate license key format (should be a reasonable string)
    if (typeof license_key !== "string" || license_key.length > 100) {
      return NextResponse.json({ valid: false, error: "Invalid license key format" }, { status: 400 });
    }

    // Validate machine_id format (UUID-like string)
    if (typeof machine_id !== "string" || machine_id.length > 100) {
      return NextResponse.json({ valid: false, error: "Invalid machine ID format" }, { status: 400 });
    }

    // Extract major version from app version (e.g., "1.2.3" -> 1)
    const appMajorVersion = parseInt(app_version.split(".")[0], 10) || 1;

    // Find license
    const { data: license, error: licenseError } = await supabase
      .from("licenses")
      .select("*")
      .eq("license_key", license_key)
      .eq("is_active", true)
      .single();

    if (licenseError || !license) {
      return NextResponse.json(
        { valid: false, error: "Invalid license key" },
        { status: 404 }
      );
    }

    // Check major version
    if (license.major_version < appMajorVersion) {
      return NextResponse.json(
        {
          valid: false,
          error: "License not valid for this version",
          upgrade_required: true,
          licensed_version: license.major_version,
        },
        { status: 403 }
      );
    }

    // Check/create activation
    const { data: existingActivation } = await supabase
      .from("license_activations")
      .select("*")
      .eq("license_id", license.id)
      .eq("machine_id", machine_id)
      .single();

    if (existingActivation) {
      // Update last validated timestamp
      await supabase
        .from("license_activations")
        .update({ last_validated_at: new Date().toISOString() })
        .eq("id", existingActivation.id);
    } else {
      // Try to create new activation (will fail if limit reached)
      const { error: activationError } = await supabase
        .from("license_activations")
        .insert({
          license_id: license.id,
          machine_id,
          machine_name,
          os_version,
        });

      if (activationError) {
        if (activationError.message.includes("ACTIVATION_LIMIT_REACHED")) {
          return NextResponse.json(
            {
              valid: false,
              error: "Maximum 3 machines reached. Deactivate a machine first.",
              machine_limit_reached: true,
            },
            { status: 403 }
          );
        }
        throw activationError;
      }
    }

    return NextResponse.json({
      valid: true,
      email: license.email,
      major_version: license.major_version,
      expires_at: null, // One-time purchase, no expiry
    });
  } catch (error) {
    console.error("License validation error:", error);
    return NextResponse.json(
      { valid: false, error: "Validation failed" },
      { status: 500 }
    );
  }
}
