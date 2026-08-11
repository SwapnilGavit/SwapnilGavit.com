import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import ParticleBackground from '../components/ParticleBackground.jsx'
import GitHubContributions from '../components/GitHubContributions.jsx'
import VisitorCounter from '../components/VisitorCounter.jsx'
import { personal, socials, about } from '../data/content.js'

function TypingText() {
  const roles = personal.typingRoles
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex % roles.length]
    const speed = deleting ? 40 : 80
    const pause = 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }
    const t = setTimeout(() => {
      setText((prev) => (deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex, roles])

  return (
    <span className="gradient-text font-semibold">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-brand-purple ml-1 animate-blink" />
    </span>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Swapnil Gavit — Full Stack Java Developer & DevOps Engineer with 4+ years building enterprise-grade applications with Java, Spring Boot, React.js, Oracle SQL, Linux, Apache Tomcat and Jenkins."
        keywords="Full Stack Java Developer, DevOps Engineer, Spring Boot Developer, React Developer, Linux Engineer, Oracle SQL Developer"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grad-radial pointer-events-none" />
        <ParticleBackground className="absolute inset-0 opacity-60 pointer-events-none" />

        <div className="relative section flex flex-col items-center text-center min-h-[86vh] justify-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pill mb-6 text-brand-purple dark:text-purple-300"
          >
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-xl sm:text-2xl md:text-3xl font-display font-semibold h-10"
          >
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            {about.intro} Passionate about Linux, clean deployments, and turning complex systems into
            reliable, production-grade software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href={personal.resumeUrl} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <Link to="/projects" className="btn-secondary">
              View Projects <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <FiMail /> Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href={socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiGithub /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiLinkedin /></a>
            <VisitorCounter />
          </motion.div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="section grid grid-cols-2 md:grid-cols-4 gap-6">
        {about.highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 0.08}>
            <div className="glass-card p-6 rounded-2xl text-center h-full">
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                {/^[0-9]/.test(h.value) ? <AnimatedCounter value={h.value} /> : h.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{h.label}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* GitHub + philosophy */}
      <section className="section grid md:grid-cols-2 gap-8 items-center">
        <Reveal>
          <GitHubContributions />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-card p-8 rounded-2xl">
            <p className="font-display text-xl sm:text-2xl leading-relaxed">
              "<span className="gradient-text">{personal.philosophy}</span>"
            </p>
            <Link to="/travel" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:underline">
              See where I've been <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
