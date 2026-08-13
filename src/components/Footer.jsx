import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram, FiArrowUp, FiFacebook, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { socials } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-xl font-bold gradient-text">Swapnil Gavit</Link>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            Building scalable software while exploring the world — one deployment and one destination at a time.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold mb-1">Quick Links</span>
          <Link to="/projects" className="text-slate-500 dark:text-slate-400 hover:text-brand-purple transition-colors">Projects</Link>
          <Link to="/devops" className="text-slate-500 dark:text-slate-400 hover:text-brand-purple transition-colors">DevOps</Link>
          <Link to="/travel" className="text-slate-500 dark:text-slate-400 hover:text-brand-purple transition-colors">Travel</Link>
          <Link to="/blog" className="text-slate-500 dark:text-slate-400 hover:text-brand-purple transition-colors">Blog</Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-semibold mb-1 text-sm">Connect</span>
          <div className="flex items-center gap-3">
            <a href={socials.email} aria-label="Email" className="p-2.5 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiMail /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiLinkedin /></a>
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiGithub /></a>
            <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2.5 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiX /></a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiInstagram /></a>
            <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiFacebook /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>© {year} Designed &amp; Developed by Swapnil Gavit</span>
          <button onClick={scrollTop} className="flex items-center gap-1.5 hover:text-brand-purple transition-colors">
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
