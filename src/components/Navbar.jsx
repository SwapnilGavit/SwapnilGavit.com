import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import { personal } from '../data/content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/devops', label: 'DevOps' },
  { to: '/education', label: 'Education' },
  { to: '/travel', label: 'Travel' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="glass-card flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl">
          <NavLink to="/" className="font-display text-lg font-bold tracking-tight">
            <span className="gradient-text">Swapnil Gavit</span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1 no-scrollbar overflow-x-auto max-w-3xl">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-white bg-grad-primary shadow-glow'
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-purple dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <FiDownload /> Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-card hover:scale-105 transition-transform"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2.5 rounded-full glass-card hover:scale-105 transition-transform"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-card mt-2 rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-2">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-white bg-grad-primary'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
