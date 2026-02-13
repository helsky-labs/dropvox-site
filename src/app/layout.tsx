import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const BASE_URL = "https://dropvox.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DropVox - Transcribe WhatsApp Audio Messages on Mac",
    template: "%s | DropVox",
  },
  description:
    "DropVox is a native macOS app that transcribes WhatsApp voice messages and audio files using WhisperKit AI. 100% local, private, and offline. Requires macOS 14+ and Apple Silicon.",
  keywords: [
    "whatsapp voice message transcription",
    "mac audio transcription",
    "whisperkit transcription",
    "voice to text mac",
    "audio transcription app",
    "macos sonoma app",
    "macos transcription",
    "offline transcription",
    "private transcription",
    "local ai transcription",
    "whatsapp audio to text",
    "mac voice to text",
    "apple silicon transcription",
    "native swift app",
    "on-device ai",
  ],
  authors: [{ name: "Helsky Labs" }],
  creator: "Helsky Labs",
  publisher: "Helsky Labs",
  applicationName: "DropVox",
  category: "Utilities",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "DropVox - Transcribe WhatsApp Audio Messages",
    description:
      "Native macOS app with WhisperKit AI for transcribing audio files. Full app window, menu bar, and drag-and-drop. 100% local and private.",
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: BASE_URL,
    siteName: "DropVox",
  },
  twitter: {
    card: "summary_large_image",
    title: "DropVox - Audio Transcription for Mac",
    description:
      "Native macOS app with WhisperKit AI for transcribing audio files. Full app window, menu bar, and drag-and-drop. Requires macOS 14+ and Apple Silicon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <JsonLd />
        <Script
          defer
          src="https://analytics.helsky-labs.com/script.js"
          data-website-id="0ad0ef26-6851-478a-aba6-d2cb149707e7"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
