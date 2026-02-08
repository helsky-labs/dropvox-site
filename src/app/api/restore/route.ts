import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  const resend = getResend();
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Look up licenses by email
    const { data: licenses } = await supabase
      .from("licenses")
      .select("license_key, major_version, created_at")
      .eq("email", email.toLowerCase().trim());

    // Always return success to avoid revealing whether email exists
    if (licenses && licenses.length > 0) {
      const licenseList = licenses
        .map(
          (l) =>
            `<div style="background: #f5f5f5; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 20px; text-align: center; margin: 12px 0;">
              ${l.license_key}
            </div>
            <p style="text-align: center; color: #666; font-size: 14px; margin-top: 4px;">
              Purchased: ${new Date(l.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>`
        )
        .join("");

      await resend.emails.send({
        from: "DropVox <noreply@dropvox.app>",
        to: email.toLowerCase().trim(),
        subject: "Your DropVox License Key(s)",
        html: `
          <h1>Your DropVox License(s)</h1>
          <p>Here are the license keys associated with your email:</p>
          ${licenseList}
          <p>To activate:</p>
          <ol>
            <li>Open DropVox</li>
            <li>Click Settings &rarr; Enter License Key</li>
            <li>Paste your key and click Activate</li>
          </ol>
          <p>Each license is valid for DropVox on up to 3 machines.</p>
          <p>Questions? Reply to this email.</p>
        `,
      });
    }

    // Always return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Restore error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
