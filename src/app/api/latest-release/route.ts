import { NextResponse } from "next/server";
import { CURRENT_VERSION } from "@/lib/version";

export async function GET() {
  return NextResponse.json({
    version: CURRENT_VERSION,
    tagName: `v${CURRENT_VERSION}`,
    downloadUrl: `/downloads/DropVox-${CURRENT_VERSION}.dmg`,
    fileName: `DropVox-${CURRENT_VERSION}.dmg`,
  });
}
