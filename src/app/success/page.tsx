import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const CURRENT_VERSION = "1.0.0";

function getDownloadUrl() {
  return `/downloads/DropVox-${CURRENT_VERSION}.dmg`;
}

export default async function SuccessPage() {
  const downloadUrl = await getDownloadUrl();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="DropVox"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg">DropVox</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <FadeIn>
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600 dark:text-green-400"
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
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Thank you for your purchase!
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Your license key has been sent to your email. Check your inbox
              (and spam folder) for an email from{" "}
              <span className="font-medium">noreply@dropvox.app</span>.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mb-8">
              <h2 className="font-semibold text-lg mb-4">How to activate:</h2>
              <ol className="text-left text-slate-600 dark:text-slate-400 space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center justify-center">
                    1
                  </span>
                  <span>Open DropVox from your menu bar</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center justify-center">
                    2
                  </span>
                  <span>
                    Click <strong>Settings</strong> &rarr;{" "}
                    <strong>Enter License Key</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center justify-center">
                    3
                  </span>
                  <span>Paste your license key and click Activate</span>
                </li>
              </ol>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="space-y-4">
              <a
                href={downloadUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
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
                Download DropVox
              </a>
              <p className="text-sm text-slate-500">
                Didn&apos;t receive your email?{" "}
                <Link
                  href="/restore"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Restore your license
                </Link>
                {" "}&middot;{" "}
                <Link
                  href="/support"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Get help
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} DropVox. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
