"use client";

import { useState, useEffect } from "react";

interface PlatformRequirementsProps {
  macosText: string;
  windowsText: string;
  className?: string;
}

export function PlatformRequirements({
  macosText,
  windowsText,
  className,
}: PlatformRequirementsProps) {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.includes("Win")) {
      setIsWindows(true);
    }
  }, []);

  return <p className={className}>{isWindows ? windowsText : macosText}</p>;
}
