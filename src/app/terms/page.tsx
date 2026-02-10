// NOTE: This is a template Terms of Service. Have a legal professional review before launch.
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for DropVox, the native macOS app for transcribing audio files with on-device AI.",
};

export default function TermsPage() {
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

      {/* Content */}
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-slate-500 mb-8">Last updated: February 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-400">
                These Terms of Service (&quot;Terms&quot;) govern your use of
                DropVox (&quot;the App&quot;), a native macOS application for
                transcribing audio files using on-device AI. By downloading,
                installing, or using DropVox, you agree to be bound by these
                Terms. If you do not agree, do not use the App.
              </p>
            </section>

            {/* License Grant */}
            <section>
              <h2 className="text-xl font-semibold mb-3">2. License Grant</h2>
              <p className="text-slate-600 dark:text-slate-400">
                DropVox is available in two tiers: a free tier and a paid Pro
                tier. Upon purchase of a Pro license, you are granted a
                personal, non-exclusive, non-transferable, revocable license to
                use the Pro features of DropVox on up to three (3) macOS devices
                that you own or control. This license is valid for the current
                major version of the App (v1.x).
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                The free tier provides limited functionality, including a daily
                transcription cap and a maximum audio duration per file. The Pro
                tier unlocks unlimited transcriptions, longer audio files, and
                access to all available Whisper AI models.
              </p>
            </section>

            {/* Free Tier vs Pro Tier */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                3. Free Tier and Pro Tier
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                The free tier of DropVox is provided at no cost and includes
                basic transcription capabilities with usage limits. These limits
                may be adjusted at our discretion. The Pro tier requires a
                one-time purchase and removes usage restrictions for the current
                major version.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Future major versions (e.g., v2.0) may require a separate
                purchase or upgrade fee. Minor updates and bug fixes within the
                same major version are included at no additional cost.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Payment Terms</h2>
              <p className="text-slate-600 dark:text-slate-400">
                The Pro license is a one-time purchase processed securely
                through Stripe. Pricing may vary by region and currency. The
                price displayed at the time of purchase is the final price you
                will be charged. We do not store your payment information on our
                servers; all payment processing is handled by Stripe in
                accordance with their terms and privacy policy.
              </p>
            </section>

            {/* Refund Policy */}
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Refund Policy</h2>
              <p className="text-slate-600 dark:text-slate-400">
                We offer a 14-day money-back guarantee from the date of
                purchase. If you are not satisfied with DropVox Pro for any
                reason, you may request a full refund by contacting us at{" "}
                <a
                  href="mailto:support@dropvox.app"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  support@dropvox.app
                </a>{" "}
                within 14 days of your purchase. Refunds are processed through
                Stripe and typically appear within 5-10 business days. After the
                14-day period, purchases are non-refundable.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                6. Intellectual Property
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                DropVox is proprietary software. All rights, title, and interest
                in and to the App, including but not limited to its code,
                design, graphics, logos, and documentation, are owned by the
                developer. You may not copy, modify, distribute, sell, lease,
                reverse engineer, decompile, or disassemble the App or any part
                of it, except as expressly permitted by applicable law.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                7. User Responsibilities
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                You agree to use DropVox in compliance with all applicable laws
                and regulations. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-slate-600 dark:text-slate-400">
                <li>
                  Ensuring you have the right to transcribe any audio files you
                  process with the App.
                </li>
                <li>
                  Maintaining the confidentiality of your license key and not
                  sharing it with others.
                </li>
                <li>
                  Using the App only on devices you own or have authorization to
                  use.
                </li>
                <li>
                  Not attempting to circumvent any license restrictions or
                  usage limits.
                </li>
              </ul>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                DropVox is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, whether express
                or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that the App will be
                error-free, uninterrupted, or that transcription results will be
                accurate. Transcription quality depends on audio quality, the
                selected AI model, and other factors beyond our control.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                9. Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                To the maximum extent permitted by applicable law, in no event
                shall the developer be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of
                profits or revenues, whether incurred directly or indirectly, or
                any loss of data, use, goodwill, or other intangible losses,
                resulting from your use of or inability to use the App. Our
                total liability for any claim arising from these Terms or your
                use of the App shall not exceed the amount you paid for the Pro
                license.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
              <p className="text-slate-600 dark:text-slate-400">
                We reserve the right to revoke your license and terminate your
                access to Pro features if you violate these Terms, including but
                not limited to sharing license keys, attempting to reverse
                engineer the App, or using the App for unlawful purposes. Upon
                termination, you must cease all use of the App and delete any
                copies in your possession. Termination does not entitle you to a
                refund unless the 14-day money-back guarantee period has not yet
                expired.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                11. Changes to Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We may update these Terms from time to time. When we make
                material changes, we will update the &quot;Last updated&quot;
                date at the top of this page and, where feasible, notify users
                through the App or our website. Your continued use of DropVox
                after changes are posted constitutes your acceptance of the
                revised Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold mb-3">
                12. Governing Law
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where the developer resides,
                without regard to its conflict of law provisions. Any disputes
                arising from these Terms or your use of the App shall be
                resolved in the courts of that jurisdiction.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold mb-3">13. Contact</h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:support@dropvox.app"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  support@dropvox.app
                </a>
                .
              </p>
            </section>
          </div>
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
