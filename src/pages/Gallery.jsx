import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryCategories, galleryPhotos } from '../data/content.js'


export default function Gallery() {
  const [filter, setFilter] = useState('All')

  // const filtered = useMemo(
  //   () =>
  //     filter === 'All'
  //       ? galleryPhotos
  //       : galleryPhotos.filter((p) => p.category === filter),
  //   [filter]
  // )

  const filtered = useMemo(() => {
  if (filter === 'All') return galleryPhotos

  return galleryPhotos.filter(
    (photo) => photo.destination === filter
  )
}, [filter])

  return (
    <>
      <SEO
        title="Gallery"
        description="Photography gallery of Swapnil Gavit — mountains, cities, nature, architecture and more."
      />

      <section className="section">

        {/* Page Header */}
        <Reveal>
          <h1 className="section-title">
            Photo <span className="gradient-text">Gallery</span>
          </h1>

          <p className="section-subtitle">
            Moments from the road, the mountains, and everywhere in between.
          </p>
        </Reveal>

        {/* Category Filters */}
        <Reveal className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${filter === c
                  ? 'bg-grad-primary text-white shadow-glow'
                  : 'glass-card hover:border-brand-purple/50'
                }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {/* Gallery */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.03,
              }}
              className={`break-inside-avoid rounded-2xl overflow-hidden relative group ${i % 4 === 0
                  ? 'aspect-[3/4]'
                  : 'aspect-square'
                }`}
            >
              {/* Actual Photo */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white text-sm font-semibold">
                    {p.title}
                  </p>

                  <p className="text-white/70 text-xs mt-1">
                    {p.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="glass-card rounded-2xl p-10 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              No photos available for this category.
            </p>
          </div>
        )}

      </section>
    </>
  )
}