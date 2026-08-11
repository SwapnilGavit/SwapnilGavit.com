import { useEffect, useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { githubUsername } from '../data/content.js'

// Renders a simple contributions-style grid. Attempts to fetch real public
// event data from GitHub's REST API (no auth required, rate-limited); falls
// back to a generated placeholder pattern if the request fails or is offline.
export default function GitHubContributions() {
  const [level, setLevel] = useState(() => Array.from({ length: 17 * 7 }, () => Math.floor(Math.random() * 4)))
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.github.com/users/${githubUsername}/events/public?per_page=100`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((events) => {
        if (cancelled || !Array.isArray(events)) return
        const counts = new Array(17 * 7).fill(0)
        events.forEach((_, i) => {
          counts[i % counts.length] += 1
        })
        setLevel(counts.map((c) => Math.min(3, c)))
        setLoaded(true)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const colors = [
    'bg-black/5 dark:bg-white/5',
    'bg-brand-blue/30',
    'bg-brand-purple/60',
    'bg-gradient-to-br from-brand-blue to-brand-purple',
  ]

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <FiGithub /> GitHub Activity
        </div>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-brand-purple hover:underline"
        >
          @{githubUsername}
        </a>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto no-scrollbar pb-1">
        {level.map((l, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${colors[l]}`} />
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        {loaded ? 'Live public activity from GitHub.' : 'Illustrative activity graph — connect to GitHub for live data.'}
      </p>
    </div>
  )
}
