"use client";

import { useState, useEffect } from "react";

interface PlatformRequirementsBadgeProps {
  macosTitle: string;
  macosDetail: string;
  windowsTitle: string;
  windowsDetail: string;
}

export function PlatformRequirementsBadge({
  macosTitle,
  macosDetail,
  windowsTitle,
  windowsDetail,
}: PlatformRequirementsBadgeProps) {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.includes("Win")) {
      setIsWindows(true);
    }
  }, []);

  const title = isWindows ? windowsTitle : macosTitle;
  const detail = isWindows ? windowsDetail : macosDetail;

  return (
    <div className="mt-6 inline-flex flex-col items-center gap-2 px-6 py-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
      <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold text-sm">
        {isWindows ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12V6.75l6-1.32v6.48L3 12zm6.98.09l.02 6.63-6.98-1.01V12.1l6.96-.01zm.99-6.9L21 3.5v8.44H10.97V5.19zM21 12.5v8.01l-9.01-1.36V12.5H21z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {title}
      </div>
      <p className="text-xs text-amber-700 dark:text-amber-400">
        {detail}
      </p>
    </div>
  );
}
