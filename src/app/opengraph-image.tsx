import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "DropVox - Transcribe Voice Messages with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconPath = join(process.cwd(), "public", "icon.png");
  const iconBuffer = readFileSync(iconPath);
  const iconBase64 = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* App Icon */}
        <img
          src={iconBase64}
          width={140}
          height={140}
          style={{
            borderRadius: 28,
            marginBottom: 32,
          }}
        />

        {/* App Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            marginBottom: 12,
            display: "flex",
          }}
        >
          DropVox
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#c7d2fe",
            textAlign: "center",
            maxWidth: 800,
            display: "flex",
          }}
        >
          Transcribe Voice Messages with On-Device AI
        </div>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.12)",
              color: "#e0e7ff",
              fontSize: 18,
            }}
          >
            macOS & Windows
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.12)",
              color: "#e0e7ff",
              fontSize: 18,
            }}
          >
            Powered by Whisper
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.12)",
              color: "#e0e7ff",
              fontSize: 18,
            }}
          >
            100% Private
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
