import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMapPin, FiCalendar, FiDollarSign, FiNavigation, FiImage } from 'react-icons/fi'

export default function TravelStoryModal({ destination, onClose }) {
  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 relative"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full glass-card hover:scale-105 transition-transform"
            >
              <FiX />
            </button>

            <h2 className="font-display text-2xl sm:text-3xl font-bold gradient-text pr-10">
              {destination.place}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><FiMapPin /> {destination.country}</span>
              <span className="flex items-center gap-1.5"><FiCalendar /> {destination.date}</span>
              <span className="flex items-center gap-1.5"><FiImage /> {destination.photos} photos</span>
            </div>

            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">{destination.overview}</p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-2">Itinerary</h3>
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {destination.itinerary.map((it, i) => <li key={i}>• {it}</li>)}
                </ul>
              </div>
              <div className="space-y-4">
                {/* <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-2 flex items-center gap-1.5"><FiDollarSign /> Budget</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{destination.budget}</p>
                </div> */}
                <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-2 flex items-center gap-1.5"><FiNavigation /> Route</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{destination.route}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-2">Tips</h3>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                {destination.tips.map((t, i) => <li key={i}>💡 {t}</li>)}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-2">
              {Array.from({ length: Math.min(destination.photos, 8) }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-brand-blue/40 to-brand-purple/40" />
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">Photo placeholders — add your real trip photos here.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
