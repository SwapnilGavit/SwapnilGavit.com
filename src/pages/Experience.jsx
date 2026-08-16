import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <>
      <SEO title="Experience" description="Professional experience of Swapnil Gavit as a Full Stack Java Developer with DevOps expertise." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">Work <span className="gradient-text">Experience</span></h1>
          <p className="section-subtitle">Full software development lifecycle ownership — from requirements to production support.</p>
        </Reveal>

        <div className="relative border-l border-black/10 dark:border-white/10 ml-4 sm:ml-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pl-8 sm:pl-10 pb-14 last:pb-0">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-grad-primary shadow-glow" />
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <FiBriefcase className="text-brand-purple text-xl" />
                  <h2 className="font-display text-xl sm:text-2xl font-bold">{job.position}</h2>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-medium text-brand-purple">{job.company}</span>
                  <span>•</span>
                  <span>{job.duration}</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {job.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                      <span className="text-brand-purple mt-1">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    Key Projects:
                  </span>

                  {job.projects.map((project) => (
                    <span key={project} className="pill font-medium text-gradient ">
                      {project}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
