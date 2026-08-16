import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryCategories, galleryPhotos } from '../data/content.js'

const PHOTOS_PER_PAGE = 24

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE)
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'All') return galleryPhotos

    return galleryPhotos.filter(
      (photo) => photo.destination === filter
    )
  }, [filter])

  useEffect(() => {
    setVisibleCount(PHOTOS_PER_PAGE)
    setActiveIndex(null)
  }, [filter])

  const visiblePhotos = filtered.slice(0, visibleCount)
  const hasMorePhotos = visibleCount < filtered.length
  const activePhoto = activeIndex === null ? null : filtered[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === 0 ? filtered.length - 1 : current - 1
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === filtered.length - 1 ? 0 : current + 1
        )
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex, filtered.length])

  return (
    <>
      <SEO
        title="Gallery"
        description="Photography gallery of Swapnil Gavit — mountains, cities, nature, architecture and more."
      />

      <section className="section">
        <Reveal>
          <h1 className="section-title">
            Photo <span className="gradient-text">Gallery</span>
          </h1>

          <p className="section-subtitle">
            Moments from the road, the mountains, and everywhere in between.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category)
                setVisibleCount(PHOTOS_PER_PAGE)
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${filter === category
                  ? 'bg-grad-primary text-white shadow-glow'
                  : 'glass-card hover:border-brand-purple/50'
                }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {visiblePhotos.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${photo.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
              }}
              className={`block w-full border-0 bg-transparent p-0 text-left break-inside-avoid rounded-2xl overflow-hidden relative group ${index % 4 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
            >
              <img
                src={photo.image}
                alt={`${photo.destination} - Photo ${index + 1}`}
                loading={index < 4 ? 'eager' : 'lazy'}
                fetchPriority={index < 2 ? 'high' : 'auto'}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white text-sm font-semibold">
                    {photo.title}
                  </p>

                  <p className="text-white/70 text-xs mt-1">
                    {photo.category.join(', ')}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {hasMorePhotos && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((current) => current + PHOTOS_PER_PAGE)
              }
              className="px-5 py-2.5 rounded-full bg-grad-primary text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
            >
              Load more photos
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="glass-card rounded-2xl p-10 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              No photos available for this destination.
            </p>
          </div>
        )}
      </section>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${activePhoto.title}`}
          >
            <motion.div
              className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                decoding="async"
                className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />

              <div className="mt-3 text-center text-white">
                <p className="font-display font-semibold">
                  {activePhoto.title}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {activePhoto.destination}, {activePhoto.country} ·{' '}
                  {activePhoto.date}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-0 top-0 -translate-y-12 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25 sm:right-2 sm:top-2 sm:translate-y-0"
                aria-label="Close photo viewer"
              >
                <FiX size={22} />
              </button>

              {filtered.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === 0 ? filtered.length - 1 : current - 1
                      )
                    }
                    className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75"
                    aria-label="Previous photo"
                  >
                    <FiChevronLeft size={28} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === filtered.length - 1 ? 0 : current + 1
                      )
                    }
                    className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75"
                    aria-label="Next photo"
                  >
                    <FiChevronRight size={28} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}