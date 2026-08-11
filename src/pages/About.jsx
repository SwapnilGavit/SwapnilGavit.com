import { FiMapPin, FiMail } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { about, personal } from '../data/content.js'

export default function About() {
  return (
    <>
      <SEO title="About" description="About Swapnil Gavit — Full Stack Java Developer and DevOps Engineer." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">
            About <span className="gradient-text">Me</span>
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <Reveal className="md:col-span-1">
            <div className="glass-card p-8 rounded-2xl sticky top-28">
              {/* <div className="w-28 h-28 rounded-full bg-grad-primary flex items-center justify-center text-3xl font-display font-bold text-white mx-auto shadow-glow">
                SG
              </div> */}
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto shadow-glow border-4 border-white/20">
                <img
                  src="/profile.jpg"
                  alt="Swapnil Gavit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mt-5 text-center font-display text-xl font-bold">{personal.name}</h2>
              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                {personal.titles.join(' · ')}
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FiMapPin className="text-brand-purple" /> {personal.location}
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <FiMail className="text-brand-purple" /> {personal.email}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-2 space-y-6">
            <Reveal>
              <p className="text-lg sm:text-xl font-display font-semibold leading-relaxed">{about.intro}</p>
            </Reveal>
            {about.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {about.highlights.map((h) => (
                <div key={h.label} className="glass-card p-4 rounded-xl text-center">
                  <div className="font-display font-bold gradient-text">{h.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{h.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
