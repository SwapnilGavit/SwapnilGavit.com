import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'
import { blogPosts } from '../data/content.js'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) return <NotFound />

  return (
    <>
      <SEO title={post.title} description={post.excerpt} keywords={post.category} />
      <article className="section max-w-3xl">
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-purple hover:underline mb-8">
            <FiArrowLeft /> Back to Blog
          </Link>
          <span className="pill text-brand-purple mb-4 inline-block">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-10">
            <span className="flex items-center gap-1.5"><FiCalendar /> {post.date}</span>
            <span className="flex items-center gap-1.5"><FiClock /> {post.readTime}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card p-6 sm:p-8 rounded-2xl prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">{post.excerpt}</p>
            <p className="text-slate-500 dark:text-slate-400 mt-6 text-sm">
              This is a placeholder article body. Replace this section in <code>src/pages/BlogPost.jsx</code> or move to a
              markdown/CMS-driven content pipeline to publish full posts.
            </p>
          </div>
        </Reveal>
      </article>
    </>
  )
}
