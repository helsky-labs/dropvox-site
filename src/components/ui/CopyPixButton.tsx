"use client";

import { useState } from "react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

const PIX_KEY = "772337c9-12fc-47fa-8849-32fb5f696129";

interface CopyPixButtonProps {
  label?: string;
  copiedLabel?: string;
}

export function CopyPixButton({
  label = "Copy PIX Key",
  copiedLabel = "Copied!"
}: CopyPixButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      trackEvent(ANALYTICS_EVENTS.PIX_COPIED);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`w-full py-3 rounded-xl font-semibold transition-colors ${
        copied
          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
          : "bg-indigo-600 hover:bg-indigo-700 text-white"
      }`}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}

export { PIX_KEY };
