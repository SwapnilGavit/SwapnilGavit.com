import { FiDownload, FiExternalLink } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { personal, experience, education, skillCategories } from '../data/content.js'

export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="Resume of Swapnil Gavit — Full Stack Java Developer & DevOps Engineer." />
      <section className="section max-w-4xl">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="section-title mb-2">My <span className="gradient-text">Resume</span></h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Preview below, or download the PDF.</p>
          </div>
          <div className="flex gap-3">
            <a href={personal.resumeUrl} download className="btn-primary">
              <FiDownload /> Download PDF
            </a>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <FiExternalLink /> Open
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6 mb-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">{personal.name}</h2>
                <p className="text-brand-purple font-medium mt-1">{personal.titles.join(' · ')}</p>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 text-right">
                <p>{personal.email}</p>
                <p>{personal.location}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-display font-bold uppercase text-xs tracking-widest text-brand-purple mb-3">Experience</h3>
              {experience.map((job) => (
                <div key={job.company} className="mb-4">
                  <div className="flex flex-wrap justify-between gap-2">
                    <span className="font-semibold">{job.position} — {job.company}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{job.duration}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {job.points.map((p, i) => <li key={i}>• {p}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="font-display font-bold uppercase text-xs tracking-widest text-brand-purple mb-3">Education</h3>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3 flex flex-wrap justify-between gap-2">
                  <span className="font-semibold text-sm">{edu.qualification} — {edu.institution}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{edu.duration}</span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display font-bold uppercase text-xs tracking-widest text-brand-purple mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories.flatMap((c) => c.skills).map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">
          A placeholder PDF is bundled at <code>/public{personal.resumeUrl}</code> — replace it with your real resume file (same filename) to update the download.
        </p>
      </section>
    </>
  )
}
