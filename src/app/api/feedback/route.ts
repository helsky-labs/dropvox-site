import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

/** Sanitize user input for safe HTML embedding */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  // --- Auth: shared secret ---
  const apiKey = request.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.DROPVOX_FEEDBACK_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = getResend();

  try {
    const body = await request.json();
    const { subject, message, email, app_version, os_version } = body;

    // --- Validation ---
    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Length limits to prevent abuse
    if (subject.length > 200) {
      return NextResponse.json(
        { error: "Subject too long" },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message too long" },
        { status: 400 }
      );
    }

    // --- Build email ---
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim());
    const safeEmail = email ? escapeHtml(String(email).trim()) : "";
    const safeAppVersion = app_version
      ? escapeHtml(String(app_version).trim())
      : "";
    const safeOsVersion = os_version
      ? escapeHtml(String(os_version).trim())
      : "";

    const emailOptions: {
      from: string;
      to: string;
      subject: string;
      html: string;
      replyTo?: string;
    } = {
      from: "DropVox Feedback <noreply@dropvox.app>",
      to: "helrabelo@gmail.com",
      subject: `[DropVox Feedback] ${subject.trim()}`,
      html: `
        <h2>${safeSubject}</h2>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <table style="font-size: 13px; color: #666;">
          ${safeEmail ? `<tr><td style="padding-right: 12px;"><strong>Reply email:</strong></td><td>${safeEmail}</td></tr>` : ""}
          ${safeAppVersion ? `<tr><td style="padding-right: 12px;"><strong>App version:</strong></td><td>${safeAppVersion}</td></tr>` : ""}
          ${safeOsVersion ? `<tr><td style="padding-right: 12px;"><strong>OS version:</strong></td><td>${safeOsVersion}</td></tr>` : ""}
        </table>
      `,
    };

    if (email && typeof email === "string" && email.includes("@")) {
      emailOptions.replyTo = String(email).trim();
    }

    await resend.emails.send(emailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
