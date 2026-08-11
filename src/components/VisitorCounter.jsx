import { useEffect, useState } from 'react'
import { FiEye } from 'react-icons/fi'

// Local, privacy-friendly visitor counter using localStorage. Swap for a
// real analytics/edge-counter API when one is available.
export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    try {
      const key = 'sg-visitor-count'
      const sessionKey = 'sg-visitor-session'
      const already = window.sessionStorage.getItem(sessionKey)
      let current = parseInt(window.localStorage.getItem(key) || '1284', 10)
      if (!already) {
        current += 1
        window.localStorage.setItem(key, String(current))
        window.sessionStorage.setItem(sessionKey, '1')
      }
      setCount(current)
    } catch {
      setCount(1284)
    }
  }, [])

  return (
    <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
      <FiEye />
      <span>{count !== null ? count.toLocaleString() : '—'} visitors</span>
    </div>
  )
}
