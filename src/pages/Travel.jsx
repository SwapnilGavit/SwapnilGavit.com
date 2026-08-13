import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiFlag, FiMap, FiNavigation, FiCheckSquare, FiSquare } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import WorldMapPins from '../components/WorldMapPins.jsx'
import TravelStoryModal from '../components/TravelStoryModal.jsx'
import { travelDestinations, travelStats, bucketList, galleryCategories, galleryPhotos } from '../data/content.js'

export default function Travel() {
  const [active, setActive] = useState(null)
  const [galleryFilter, setGalleryFilter] = useState('All')
  const [checked, setChecked] = useState(() => bucketList.map((b) => b.done))

  const years = useMemo(() => [...new Set(travelDestinations.map((d) => d.year))].sort(), [])
  const filteredGallery = useMemo(
    () => (galleryFilter === 'All' ? galleryPhotos : galleryPhotos.filter((p) => p.category === galleryFilter)),
    [galleryFilter]
  )

  return (
    <>
      <SEO title="Travel" description="Interactive travel timeline, map and gallery of Swapnil Gavit's journeys across India and abroad." />

      <section className="section">
        <Reveal>
          <h1 className="section-title"><span className="gradient-text">Travel</span> &amp; Adventures</h1>
          <p className="section-subtitle">Building scalable software while exploring the world — one deployment and one destination at a time.</p>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[
            { label: 'Countries', value: travelStats.countries },
            { label: 'States Explored', value: travelStats.states },
            { label: 'Trips Completed', value: travelStats.trips },
            { label: 'Kilometers Travelled', value: travelStats.kilometers },
            { label: 'Highest Altitude', value: travelStats.highestAltitude, isText: true },
            { label: 'Favorite Destination', value: travelStats.favoriteDestination, isText: true },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="glass-card p-4 rounded-2xl text-center h-full flex flex-col justify-center">
                <div className="text-lg sm:text-xl font-display font-bold gradient-text">
                  {s.isText ? s.value : <AnimatedCounter value={s.value} />}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive map */}
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <FiMap className="text-brand-purple" />
            <h2 className="font-display text-2xl font-bold">Interactive Map</h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Hover a pin for a quick preview, click to open the full story.</p>
        </Reveal>
        <Reveal delay={0.1} className="mb-16">
          <WorldMapPins destinations={travelDestinations} onViewStory={setActive} />
        </Reveal>

        {/* Timeline */}
        <Reveal>
          <div className="flex items-center gap-2 mb-8">
            <FiNavigation className="text-brand-purple" />
            <h2 className="font-display text-2xl font-bold">Travel Timeline</h2>
          </div>
        </Reveal>
        <div className="space-y-12 mb-16">
          {years.map((year) => (
            <div key={year}>
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-3xl font-extrabold gradient-text">{year}</span>
                  <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {travelDestinations.filter((d) => d.year === year).map((d, i) => (
                  <Reveal key={d.id} delay={i * 0.06}>
                    <button
                      onClick={() => setActive(d)}
                      className="text-left glass-card p-5 rounded-2xl w-full h-full hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
                    >
                      <div className="flex items-center gap-1.5 font-display font-bold">
                        <FiMapPin className="text-brand-purple" /> {d.place}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                        <FiCalendar /> {d.date}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-2">{d.overview}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {d.category.map((c) => <span key={c} className="pill text-[10px]">{c}</span>)}
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-4">Travel Gallery</h2>
        </Reveal>
        <Reveal delay={0.05} className="flex flex-wrap gap-2 mb-6">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setGalleryFilter(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                galleryFilter === c ? 'bg-grad-primary text-white shadow-glow' : 'glass-card hover:border-brand-purple/50'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 mb-16">
          {filteredGallery.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className={`break-inside-avoid rounded-2xl overflow-hidden relative group ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}
            >
              {/* <div className={`w-full h-full bg-gradient-to-br ${p.gradient}`} /> */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-medium">{p.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bucket list */}
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <FiFlag className="text-brand-purple" />
            <h2 className="font-display text-2xl font-bold">Bucket List</h2>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="glass-card p-6 sm:p-8 rounded-2xl grid sm:grid-cols-2 gap-3">
            {bucketList.map((b, i) => (
              <button
                key={b.destination}
                onClick={() => setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)))}
                className="flex items-center gap-3 text-left p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {checked[i] ? (
                  <FiCheckSquare className="text-brand-purple shrink-0" size={20} />
                ) : (
                  <FiSquare className="text-slate-400 shrink-0" size={20} />
                )}
                <span className={`text-sm ${checked[i] ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                  {b.destination}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <TravelStoryModal destination={active} onClose={() => setActive(null)} />
    </>
  )
}
