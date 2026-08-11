import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  const numeric = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0
  const prefix = String(value).match(/^[^0-9]*/)?.[0] || ''
  const trailing = String(value).match(/[^0-9]*$/)?.[0] || ''

  useEffect(() => {
    if (!inView) return
    let start = null
    let raf
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * numeric))
      if (progress < 1) raf = requestAnimationFrame(step)
      else setDisplay(numeric)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, numeric, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className={className}
    >
      {prefix}
      {display.toLocaleString()}
      {trailing}
      {suffix}
    </motion.span>
  )
}
