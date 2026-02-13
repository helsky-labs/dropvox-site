import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and updates about audio transcription, WhatsApp voice messages, and the DropVox app for Mac.",
  openGraph: {
    title: "DropVox Blog - Audio Transcription Tips & Guides",
    description:
      "Tips, guides, and updates about audio transcription, WhatsApp voice messages, and the DropVox app for Mac.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <Navbar showPricing showGetPro />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tips, guides, and updates about audio transcription and privacy.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
