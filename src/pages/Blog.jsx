import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { blogCategories, blogPosts } from '../data/content.js'

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(
    () => (filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <>
      <SEO title="Blog" description="Articles by Swapnil Gavit on Java, Spring Boot, React, Linux, Apache, SQL, DevOps, Travel and Photography." />
      <section className="section">
        <Reveal>
          <h1 className="section-title"><span className="gradient-text">Blog</span></h1>
          <p className="section-subtitle">Notes on Java, Spring Boot, React, Linux, DevOps — and the occasional travel story.</p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-10">
          {['All', ...blogCategories].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === c ? 'bg-grad-primary text-white shadow-glow' : 'glass-card hover:border-brand-purple/50'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.05}>
              <Link
                to={`/blog/${post.id}`}
                className="block glass-card p-6 rounded-2xl h-full hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
              >
                <span className="pill text-brand-purple mb-3 inline-block">{post.category}</span>
                <h2 className="font-display text-lg sm:text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                  <span className="flex items-center gap-1.5"><FiCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><FiClock /> {post.readTime}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple">
                  Read more <FiArrowRight />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
