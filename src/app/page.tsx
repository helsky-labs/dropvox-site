import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/FadeIn";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { CopyPixButton, PIX_KEY } from "@/components/ui/CopyPixButton";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { OutboundLink } from "@/components/ui/OutboundLink";

const CURRENT_VERSION = "1.1.0";
const DOWNLOAD_DMG = `/downloads/DropVox-${CURRENT_VERSION}.dmg`;

function getLatestRelease() {
  return {
    version: CURRENT_VERSION,
    downloadUrl: DOWNLOAD_DMG,
  };
}

function FeatureIcon({ icon }: { icon: string }) {
  const iconClasses = "w-6 h-6";

  switch (icon) {
    case "brain":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    case "globe":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "window":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      );
    case "dropzone":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      );
    case "history":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "models":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          className={iconClasses}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default async function LandingPage() {
  const t = await getTranslations();
  const release = await getLatestRelease();
  const DOWNLOAD_URL = release.downloadUrl;
  const VERSION = release.version;

  const features = [
    {
      icon: "brain",
      title: t("features.items.localAI.title"),
      description: t("features.items.localAI.description"),
      popular: true,
      isNew: false,
    },
    {
      icon: "globe",
      title: t("features.items.languages.title"),
      description: t("features.items.languages.description"),
      popular: false,
      isNew: false,
    },
    {
      icon: "window",
      title: t("features.items.fullApp.title"),
      description: t("features.items.fullApp.description"),
      popular: false,
      isNew: true,
    },
    {
      icon: "clipboard",
      title: t("features.items.clipboard.title"),
      description: t("features.items.clipboard.description"),
      popular: true,
      isNew: false,
    },
    {
      icon: "dropzone",
      title: t("features.items.dropZone.title"),
      description: t("features.items.dropZone.description"),
      popular: false,
      isNew: true,
    },
    {
      icon: "history",
      title: t("features.items.history.title"),
      description: t("features.items.history.description"),
      popular: true,
      isNew: false,
    },
    {
      icon: "models",
      title: t("features.items.models.title"),
      description: t("features.items.models.description"),
      popular: false,
      isNew: true,
    },
    {
      icon: "lock",
      title: t("features.items.privacy.title"),
      description: t("features.items.privacy.description"),
      popular: false,
      isNew: false,
    },
  ];

  const steps = [
    {
      number: 1,
      title: t("howItWorks.steps.download.title"),
      description: t("howItWorks.steps.download.description"),
    },
    {
      number: 2,
      title: t("howItWorks.steps.select.title"),
      description: t("howItWorks.steps.select.description"),
    },
    {
      number: 3,
      title: t("howItWorks.steps.getText.title"),
      description: t("howItWorks.steps.getText.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="DropVox"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg">DropVox</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/pricing"
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {t("nav.pricing")}
              </Link>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              {t("hero.badge")}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("hero.title")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleEnd")}
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DownloadButton
                href={DOWNLOAD_URL}
                version={VERSION}
                location="hero"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {t("hero.downloadButton")}
              </DownloadButton>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 font-medium transition-colors"
              >
                {t("hero.featuresButton")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
              {t("hero.requirements")}
            </p>
          </FadeIn>
        </div>

        {/* App Preview - Dashboard */}
        <FadeIn delay={500} className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <Image
              src="/screenshots/dashboard.png"
              alt={t("preview.dashboardAlt")}
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>

        {/* Workflow Gallery */}
        <FadeIn delay={600} className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/screenshots/menu-bar.png", alt: t("preview.menuBarAlt"), label: t("preview.menuBarLabel"), w: 293, h: 294 },
              { src: "/screenshots/transcribing.png", alt: t("preview.transcribingAlt"), label: t("preview.transcribingLabel"), w: 303, h: 331 },
              { src: "/screenshots/transcription-popup.png", alt: t("preview.popupAlt"), label: t("preview.popupLabel"), w: 424, h: 308 },
            ].map((item) => (
              <div key={item.src} className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="aspect-square bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              {t("features.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 100}>
                <div
                  className={`relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border transition-all hover:shadow-lg hover:scale-[1.02] ${
                    feature.isNew
                      ? "border-green-200 dark:border-green-800"
                      : feature.popular
                      ? "border-indigo-200 dark:border-indigo-800"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {feature.isNew ? (
                    <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
                      {t("features.new")}
                    </span>
                  ) : feature.popular ? (
                    <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium bg-indigo-600 text-white rounded-full">
                      {t("features.popular")}
                    </span>
                  ) : null}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.isNew
                      ? "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400"
                      : "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                  }`}>
                    <FeatureIcon icon={feature.icon} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
              {t("howItWorks.description")}
            </p>
          </FadeIn>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 150}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-xl flex items-center justify-center">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("privacy.title")}
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("privacy.description")}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{t("privacy.noInternet")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{t("privacy.noAccount")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{t("privacy.openSource")}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {t("cta.description")}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DownloadButton
                href={DOWNLOAD_URL}
                version={VERSION}
                location="cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {t("cta.downloadButton")}
              </DownloadButton>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 font-medium transition-colors"
              >
                {t("hero.featuresButton")}
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-6 text-sm text-slate-500">
              v{VERSION} • {t("cta.version")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800/30">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              {t("support.title")}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t("support.description")}
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm max-w-sm mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="512" height="512" rx="64" fill="#00D4AA" />
                  <path
                    d="M193.8 295.4v73.5h-40.6V143.1h90.4c27.3 0 48.6 7.3 63.8 21.8 15.3 14.5 22.9 33.6 22.9 57.2 0 24-7.5 42.9-22.4 56.8-14.9 13.8-36.1 20.8-63.7 20.8h-50.4v-.3zm0-35.5h49.8c14.3 0 25.3-3.6 32.9-10.9 7.6-7.3 11.4-17.6 11.4-30.8 0-12.9-3.8-23.3-11.3-31.2-7.5-7.9-18.1-11.9-31.8-12H193.8v84.9zm148.6 109h-40.6V143.1h40.6v225.8zm61.3 0l-67.1-105.8v-.6l69.5-119.4h47.1l-72.7 119.4 75 106.4h-47.8z"
                    fill="white"
                  />
                </svg>
                <span className="font-medium text-slate-900 dark:text-white">
                  {t("support.pix")}
                </span>
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 mb-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  {t("support.pixKeyLabel")}
                </p>
                <p className="font-mono text-slate-900 dark:text-white select-all text-sm break-all">
                  {PIX_KEY}
                </p>
              </div>

              <CopyPixButton
                label={t("support.copyButton")}
                copiedLabel={t("support.copiedButton")}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="DropVox"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {t("footer.builtBy")}{" "}
              <OutboundLink
                href="https://github.com/helrabelo"
                location="footer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Hel Rabelo
              </OutboundLink>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link
              href="/blog"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/privacy"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
