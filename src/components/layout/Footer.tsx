'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { OutboundLink } from '@/components/ui/OutboundLink'

export function Footer() {
  const t = useTranslations('footer')

  return (
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
            {t('builtBy')}{' '}
            <OutboundLink
              href="https://helsky-labs.com"
              location="footer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Helsky Labs
            </OutboundLink>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <Link
            href="/blog"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t('blog')}
          </Link>
          <Link
            href="/pricing"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t('pricing')}
          </Link>
          <Link
            href="/privacy"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t('privacy')}
          </Link>
          <Link
            href="/terms"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t('terms')}
          </Link>
          <Link
            href="/support"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t('support')}
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 text-center sm:text-left">
        <span className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} DropVox. {t('copyright')}
        </span>
      </div>
    </footer>
  )
}
