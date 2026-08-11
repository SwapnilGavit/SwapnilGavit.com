import { FiCode, FiLayers, FiDatabase, FiGitBranch, FiServer } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { skillCategories } from '../data/content.js'

const iconMap = {
  code: FiCode,
  layers: FiLayers,
  database: FiDatabase,
  devops: FiGitBranch,
  server: FiServer,
}

export default function Skills() {
  return (
    <>
      <SEO title="Technical Skills" description="Technical skills of Swapnil Gavit: Java, Spring Boot, React.js, Oracle SQL, Linux, Jenkins, CI/CD and more." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">Technical <span className="gradient-text">Skills</span></h1>
          <p className="section-subtitle">The languages, frameworks and tools I use to design, build and operate applications.</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || FiCode
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="glass-card p-6 rounded-2xl h-full hover:shadow-glow transition-shadow duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center text-white mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span key={s} className="pill">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
