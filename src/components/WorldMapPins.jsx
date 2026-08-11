import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiCalendar, FiImage } from 'react-icons/fi'

// A stylized dotted "world map" panel with destination pins positioned by
// percentage coordinates. Not a geographically precise map — a lightweight,
// dependency-free stand-in that keeps the interaction (hover cards, view
// story) fully functional without any external map tiles or API keys.
export default function WorldMapPins({ destinations, onViewStory }) {
  const [hovered, setHovered] = useState(null)

  const dots = Array.from({ length: 12 * 7 })

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] glass-card rounded-2xl overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-7 gap-2 p-4 opacity-40">
        {dots.map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 justify-self-center self-center" />
        ))}
      </div>
      <div className="absolute inset-0 bg-grad-radial" />

      {destinations.map((d) => (
        <button
          key={d.id}
          onMouseEnter={() => setHovered(d.id)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(d.id)}
          onClick={() => onViewStory(d)}
          style={{ left: `${d.coords.x}%`, top: `${d.coords.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group"
          aria-label={`View ${d.place} travel story`}
        >
          <motion.span
            whileHover={{ scale: 1.3 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ y: { repeat: Infinity, duration: 2.4, ease: 'easeInOut' } }}
            className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple shadow-glow ring-4 ring-white/20"
          />

          <AnimatePresence>
            {hovered === d.id && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute z-20 top-6 left-1/2 -translate-x-1/2 w-56 glass-card rounded-xl p-4 text-left shadow-2xl"
              >
                <div className="flex items-center gap-1.5 font-display font-bold text-sm">
                  <FiMapPin className="text-brand-purple shrink-0" /> {d.place}, {d.country}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                  <FiCalendar /> {d.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <FiImage /> {d.photos} photos
                </div>
                <span className="mt-2 inline-block text-xs font-medium text-brand-purple">View Story →</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  )
}
