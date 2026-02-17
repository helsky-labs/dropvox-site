"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { trackEvent, ANALYTICS_EVENTS, getAttributionData } from "@/lib/analytics";

type Platform = "macos" | "windows";

interface DownloadButtonProps {
  macosHref: string;
  windowsHref: string;
  version: string;
  children: React.ReactNode;
  className?: string;
  location: "hero" | "cta" | "how-it-works" | "home-pricing";
}

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "macos";
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "windows";
  return "macos";
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12V6.75l6-1.32v6.48L3 12zm6.98.09l.02 6.63-6.98-1.01V12.1l6.96-.01zm.99-6.9L21 3.5v8.44H10.97V5.19zM21 12.5v8.01l-9.01-1.36V12.5H21z" />
    </svg>
  );
}

export function usePlatform() {
  const [platform, setPlatform] = useState<Platform>("macos");
  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);
  return platform;
}

export function DownloadButton({
  macosHref,
  windowsHref,
  version,
  children,
  className,
  location,
}: DownloadButtonProps) {
  const platform = usePlatform();

  const href = platform === "windows" ? windowsHref : macosHref;

  const handleClick = () => {
    trackEvent(ANALYTICS_EVENTS.DOWNLOAD_CLICKED, {
      version,
      location,
      platform,
      download_url: href,
      ...getAttributionData(),
    });
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {platform === "windows" ? (
        <WindowsIcon className="w-5 h-5" />
      ) : (
        <AppleIcon className="w-5 h-5" />
      )}
      {children}
    </a>
  );
}

interface AlsoAvailableLinkProps {
  macosHref: string;
  windowsHref: string;
  version: string;
  location: "hero" | "cta" | "how-it-works" | "home-pricing";
  className?: string;
}

export function AlsoAvailableLink({
  macosHref,
  windowsHref,
  version,
  location,
  className,
}: AlsoAvailableLinkProps) {
  const platform = usePlatform();
  const t = useTranslations();

  const otherPlatform: Platform = platform === "windows" ? "macos" : "windows";
  const otherHref = platform === "windows" ? macosHref : windowsHref;
  const otherLabel =
    otherPlatform === "windows"
      ? t("hero.alsoAvailableWindows")
      : t("hero.alsoAvailableMac");

  const handleClick = () => {
    trackEvent(ANALYTICS_EVENTS.DOWNLOAD_CLICKED, {
      version,
      location,
      platform: otherPlatform,
      download_url: otherHref,
      ...getAttributionData(),
    });
  };

  return (
    <a
      href={otherHref}
      onClick={handleClick}
      className={className ?? "text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"}
    >
      {otherLabel}
    </a>
  );
}
