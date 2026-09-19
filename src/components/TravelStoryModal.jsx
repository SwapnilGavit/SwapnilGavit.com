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
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl p-6 sm:p-8 relative dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition-transform hover:scale-105 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
            >
              <FiX />
            </button>

            <h2 className="font-display text-2xl sm:text-3xl font-bold gradient-text pr-10">
              {destination.place}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><FiMapPin /> {destination.country}</span>
              <span className="flex items-center gap-1.5"><FiCalendar /> {destination.date}</span>
              <span className="flex items-center gap-1.5"><FiImage /> {destination.images?.length || 0} photos</span>

            </div>

            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">{destination.overview}</p>

            <div className="mt-6">
              {/* ##### Itinerary ##### */}
              <div>
                <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-3">Itinerary</h3>
                <div className="grid gap-2">
                  {destination.itinerary.map((it, i) => (
                    <div key={i} className=" flex items-start gap-3 rounded-xl px-4 py-2 bg-gradient-to-r from-brand-purple/10 to-brand-blue/5 border border-brand-purple/20 hover:border-brand-purple/40 transition-all">
                      <span className="text-[15px] leading-6 text-slate-600 dark:text-slate-300">
                        {it.split(':').map((part, index) =>
                          index === 0 ? (
                            <span key={index} className="text-sm font-bold text-slate-800 dark:text-white">{part}:</span>
                          ) : (<span key={index}> {part}</span>))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            {/* ##### Route ##### */}
              <div className="mt-7">
                <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-3 flex items-center gap-2">
                  <FiNavigation />Route</h3>
                <div className="space-y-1.5">
                  {destination.route?.map((route, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[15px] leading-6 font-medium text-slate-600 dark:text-slate-300">
                      <span className="text-brand-purple shrink-0">→</span>
                      <span>{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-display font-bold text-sm uppercase tracking-wide text-brand-purple mb-2">Tips</h3>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                {destination.tips.map((t, i) => <li key={i}>💡 {t}</li>)}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {destination.images?.map((image, i) => (
                <div
                  key={image}
                  className="aspect-square rounded-lg overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`${destination.place} - ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
              Photos from {destination.place}
            </p>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">Photo placeholders — add your real trip photos here.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
