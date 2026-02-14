import { NextResponse } from "next/server";
import { CURRENT_VERSION, DOWNLOAD_DMG, DOWNLOAD_WIN } from "@/lib/version";

export async function GET() {
  return NextResponse.json({
    version: CURRENT_VERSION,
    tagName: `v${CURRENT_VERSION}`,
    macos: {
      downloadUrl: DOWNLOAD_DMG,
      fileName: `DropVox-${CURRENT_VERSION}.dmg`,
    },
    windows: {
      downloadUrl: DOWNLOAD_WIN,
      fileName: `DropVox-Windows-x64-${CURRENT_VERSION}.zip`,
    },
  });
}
