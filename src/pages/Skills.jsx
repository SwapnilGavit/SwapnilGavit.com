import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiGitBranch,
  FiTerminal,
  FiServer,
  FiGitCommit,
  FiPackage,
  FiLock,
  FiUploadCloud,
  FiActivity,
  FiTool,
  FiShield,
  FiCpu,
} from 'react-icons/fi'

import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'

import {
  skillCategories,
  devops,
  achievements,
  jenkinsPipelineSnippet,
} from '../data/content.js'


const iconMap = {
  code: FiCode,
  layers: FiLayers,
  database: FiDatabase,
  devops: FiGitBranch,
  server: FiServer,

  linux: FiTerminal,
  tomcat: FiServer,
  apache: FiServer,
  jenkins: FiGitCommit,
  jfrog: FiPackage,
  git: FiGitBranch,
  cicd: FiUploadCloud,
  ssl: FiLock,
  shell: FiCode,
  deploy: FiUploadCloud,
  monitor: FiActivity,
  troubleshoot: FiTool,
}


export default function Skills() {
  return (
    <>
      <SEO
        title="Technical Skills"
        description="Technical skills of Swapnil Gavit: Java, Spring Boot, React.js, Oracle SQL, Linux, Apache Tomcat, Apache HTTP Server, Jenkins, CI/CD and production support."
      />

      <section className="section">

        {/* =========================================================
            TECHNICAL SKILLS
        ========================================================== */}

        <Reveal>
          <h1 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h1>

          <p className="section-subtitle">
            The languages, frameworks, tools and technologies I use to
            design, build, deploy and operate applications.
          </p>
        </Reveal>


        {/* =========================================================
            CORE TECHNICAL SKILLS
        ========================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || FiCode

            return (
              <Reveal key={cat.title} delay={i * 0.08}>

                <div className="glass-card p-6 rounded-2xl h-full hover:shadow-glow transition-shadow duration-300 hover:-translate-y-1">

                  <div className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center text-white mb-4">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-display font-bold text-lg mb-3">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span key={s} className="pill">
                        {s}
                      </span>
                    ))}
                  </div>

                </div>

              </Reveal>
            )
          })}

        </div>


        {/* =========================================================
            DEVOPS & INFRASTRUCTURE
        ========================================================== */}

        <Reveal>
          <h2 className="section-title text-2xl sm:text-3xl mb-3">
            DevOps <span className="gradient-text">& Infrastructure</span>
          </h2>

          <p className="section-subtitle mb-8">
            Hands-on experience managing servers, deployments,
            automation, security, monitoring and production systems.
          </p>
        </Reveal>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {devops.map((d, i) => {
            const Icon = iconMap[d.icon] || FiCpu

            return (
              <Reveal key={d.title} delay={i * 0.05}>

                <div className="glass-card p-6 rounded-2xl h-full hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-300">

                  <div className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center text-white mb-4">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-display font-bold text-lg mb-2">
                    {d.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {d.description}
                  </p>

                </div>

              </Reveal>
            )
          })}

        </div>


        {/* =========================================================
            JENKINS PIPELINE + ACHIEVEMENTS
        ========================================================== */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Jenkins Pipeline */}

          <Reveal className="min-w-0">

            <div className="glass-card min-w-0 max-w-full rounded-2xl overflow-hidden">

              <div className="px-5 py-3 border-b border-black/5 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">

                <span className="w-3 h-3 shrink-0 rounded-full bg-red-400" />
                <span className="w-3 h-3 shrink-0 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 shrink-0 rounded-full bg-green-400" />

                <span className="ml-2 truncate">
                  Jenkinsfile
                </span>

              </div>

              <pre className="max-w-full overflow-x-auto p-5 text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300">
                <code>{jenkinsPipelineSnippet}</code>
              </pre>

            </div>

          </Reveal>


          {/* Key Achievements */}

          <Reveal delay={0.1}>

            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full">

              <div className="flex items-center gap-2 mb-5">

                <FiShield className="text-brand-purple" />

                <h3 className="font-display font-bold text-lg">
                  Key DevOps Achievements
                </h3>

              </div>

              <ul className="space-y-3">

                {achievements.map((a, i) => (

                  <li
                    key={i}
                    className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >

                    <span className="text-brand-purple mt-0.5">
                      ✓
                    </span>

                    <span>
                      {a}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </Reveal>

        </div>

      </section>
    </>
  )
}