import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog-posts'
import InlineCTA from '@/components/conversion/inline-cta'

export const metadata: Metadata = {
  title: 'Blog | PureWay OC',
  description: 'Expert water quality articles for Orange County homeowners from the PureWay OC team. Learn about water treatment, filtration, and healthier water.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="pt-32 pb-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary-dark, var(--color-primary)) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-cyan-light,#67e8f9)] text-sm font-semibold uppercase tracking-widest mb-3">
            Water Knowledge
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PureWay OC Blog
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Guides, tips, and research on water quality and treatment for Orange County homes.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--color-text-secondary)]">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-3 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <InlineCTA
          variant="banner"
          message="Concerned About Your Water Quality? We Test for Free"
          text="Book Free Water Test"
          phone="(408) 402-1920"
        />
      </div>
    </main>
  )
}
