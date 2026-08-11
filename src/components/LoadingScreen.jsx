import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
              className="w-14 h-14 rounded-full border-2 border-white/10 border-t-brand-purple border-r-brand-blue"
            />
            <span className="font-display text-sm tracking-[0.3em] text-white/70 uppercase">Swapnil Gavit</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
