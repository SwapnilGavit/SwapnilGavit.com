import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/content.js'
import { ExternalLink } from 'lucide-react'

const filters = ['All', 'Full Stack', 'DevOps']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category.includes(active))),
    [active]
  )

  return (
    <>
      <SEO title="Projects" description="Projects by Swapnil Gavit including CBRICS, EBP and Clinic Management System." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">Selected <span className="gradient-text">Projects</span></h1>
          <p className="section-subtitle">Enterprise applications I've built and operated, from analysis through production support.</p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'bg-grad-primary text-white shadow-glow'
                  : 'glass-card hover:border-brand-purple/50'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
              >
                <h3 className="font-display text-xl font-bold gradient-text">{p.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{p.fullName}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{p.summary}</p>
                <ul className="space-y-1.5 mb-4">
                  {p.highlights.slice(0, 4).map((h, idx) => (
                    <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <FiCheckCircle className="text-brand-purple shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-lg bg-grad-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity mb-4"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
