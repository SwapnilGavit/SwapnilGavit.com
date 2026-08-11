import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryCategories, galleryPhotos } from '../data/content.js'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(
    () => (filter === 'All' ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <>
      <SEO title="Gallery" description="Photography gallery of Swapnil Gavit — mountains, cities, nature, architecture and more." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">Photo <span className="gradient-text">Gallery</span></h1>
          <p className="section-subtitle">Moments from the road, the mountains, and everywhere in between.</p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((c) => (
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

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className={`break-inside-avoid rounded-2xl overflow-hidden relative group ${i % 4 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
            >
              <div className={`w-full h-full bg-gradient-to-br ${p.gradient}`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-medium">{p.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500 dark:text-slate-500">Gradient placeholders shown until real photos are added — drop images into `src/assets/gallery` and update `src/data/content.js`.</p>
      </section>
    </>
  )
}
