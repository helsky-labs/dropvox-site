import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DropVox - Transcribe Voice Messages with AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
            display: "flex",
          }}
        >
          DropVox
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#c7d2fe",
            textAlign: "center",
            maxWidth: 800,
            display: "flex",
          }}
        >
          Transcribe Voice Messages with On-Device AI
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#a5b4fc",
            marginTop: 24,
            display: "flex",
          }}
        >
          macOS App &bull; Powered by Whisper &bull; 100% Private
        </div>
      </div>
    ),
    { ...size }
  );
}
