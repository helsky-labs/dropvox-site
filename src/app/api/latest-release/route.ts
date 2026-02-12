import { NextResponse } from "next/server";

const CURRENT_VERSION = "1.1.0";

export async function GET() {
  return NextResponse.json({
    version: CURRENT_VERSION,
    tagName: `v${CURRENT_VERSION}`,
    downloadUrl: `/downloads/DropVox-${CURRENT_VERSION}.dmg`,
    fileName: `DropVox-${CURRENT_VERSION}.dmg`,
  });
}
