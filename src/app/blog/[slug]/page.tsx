import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog-posts'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | PureWay OC`,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Article header */}
      <div
        className="pt-32 pb-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary-dark, var(--color-primary)) 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[var(--color-cyan-light,#67e8f9)] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[var(--color-cyan-light,#67e8f9)]">
              {post.category}
            </span>
            <span className="text-xs text-white/40">{post.date}</span>
            <span className="text-xs text-white/40">By {post.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            {post.description}
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <style>{`
          .blog-content h2 { font-size: 1.5rem; font-weight: 700; color: var(--color-text-primary); margin-top: 2.5rem; margin-bottom: 1rem; line-height: 1.3; }
          .blog-content p { color: var(--color-text-secondary, #4b5563); line-height: 1.8; margin-bottom: 1.25rem; font-size: 1.0625rem; }
          .blog-content strong { color: var(--color-text-primary); font-weight: 600; }
          .blog-content ul { margin: 1rem 0 1.5rem 1.5rem; list-style-type: disc; }
          .blog-content li { color: var(--color-text-secondary, #4b5563); line-height: 1.75; margin-bottom: 0.5rem; font-size: 1.0625rem; }
          .blog-content a { color: var(--color-primary); text-decoration: underline; }
          .blog-content em { font-style: italic; }
        `}</style>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Get a Free Water Test for Your OC Home
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-5">
            PureWay OC provides free, professional water testing across Orange County — no obligation, same-day results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Schedule a Free Water Test
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <article className="bg-white border border-[var(--color-border)] rounded-xl p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full flex flex-col">
                    <span className="text-xs font-semibold text-[var(--color-primary)] mb-2 block">{p.category}</span>
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug flex-1">
                      {p.title}
                    </h3>
                    <span className="text-xs text-[var(--color-text-secondary)] mt-3 block">{p.date}</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
