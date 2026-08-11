import { FiAward, FiBookOpen, FiBriefcase, FiFileText, FiCheckCircle } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { education, academicAchievements, certifications, careerTimeline } from '../data/content.js'

const achievementIcon = { award: FiAward, graduation: FiBookOpen, briefcase: FiBriefcase }

export default function Education() {
  return (
    <>
      <SEO title="Education" description="Academic background of Swapnil Gavit: PG-DAC from CDAC and B.Tech in Electronics & Telecommunication Engineering." />
      <section className="section">
        <Reveal>
          <h1 className="section-title"><span className="gradient-text">Education</span> &amp; Academics</h1>
          <p className="section-subtitle">The academic foundation behind the engineering.</p>
        </Reveal>

        {/* Education timeline */}
        <div className="relative border-l border-black/10 dark:border-white/10 ml-4 sm:ml-6 mb-16">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.1} className="relative pl-8 sm:pl-10 pb-14 last:pb-0">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-grad-primary shadow-glow" />
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h2 className="font-display text-xl sm:text-2xl font-bold">{edu.qualification}</h2>
                  {edu.grade && <span className="pill text-brand-purple">{edu.grade}</span>}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-1">
                  <span className="font-medium text-brand-purple">{edu.institution}</span>
                </div>
                {edu.branch && <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{edu.branch}</p>}
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">{edu.duration}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Academic achievements */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-6">Academic Achievements</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {academicAchievements.map((a, i) => {
            const Icon = achievementIcon[a.icon] || FiAward
            return (
              <Reveal key={a.label} delay={i * 0.08}>
                <div className="glass-card p-6 rounded-2xl text-center hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-grad-primary flex items-center justify-center text-white mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <div className="font-semibold text-sm">{a.label}</div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Certifications */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-6">Certifications</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {certifications.map((c, i) => (
            <Reveal key={c.title + i} delay={i * 0.08}>
              <div className={`glass-card p-6 rounded-2xl h-full ${!c.available ? 'opacity-60' : ''}`}>
                <FiFileText className="text-brand-purple mb-3" size={22} />
                <h3 className="font-display font-bold mb-1">{c.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{c.issuer}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">{c.date}</p>
                {c.available ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                    <FiCheckCircle /> Available on request
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">Placeholder — coming soon</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Career timeline */}
        <Reveal>
          <h2 className="font-display text-2xl font-bold mb-8">Career Timeline</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 sm:-translate-x-1/2" />
          <div className="space-y-8">
            {careerTimeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`relative flex sm:items-center gap-4 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'} pl-10 sm:pl-0`}>
                    <div className="glass-card inline-block p-4 rounded-xl">
                      <span className="text-xs font-semibold text-brand-purple">{t.year}</span>
                      <p className="text-sm mt-1">{t.label}</p>
                    </div>
                  </div>
                  <span className={`absolute left-4 sm:left-1/2 top-4 sm:top-1/2 w-3 h-3 rounded-full sm:-translate-x-1/2 sm:-translate-y-1/2 -translate-x-1/2 ${t.type === 'work' ? 'bg-brand-blue' : 'bg-brand-purple'} shadow-glow`} />
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
