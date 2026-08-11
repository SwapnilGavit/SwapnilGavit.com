import {
  FiTerminal, FiServer, FiGitBranch, FiPackage, FiLock, FiCode,
  FiUploadCloud, FiActivity, FiTool, FiGitCommit, FiShield, FiCpu,
} from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { devops, achievements, jenkinsPipelineSnippet } from '../data/content.js'

const iconMap = {
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

export default function DevOps() {
  return (
    <>
      <SEO title="DevOps" description="DevOps expertise of Swapnil Gavit: Linux administration, Apache Tomcat, Apache HTTP Server, Jenkins, CI/CD, SSL and production support." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">
            <span className="gradient-text">DevOps</span> &amp; Infrastructure
          </h1>
          <p className="section-subtitle">
            End-to-end ownership of the path to production — from Linux servers to CI/CD pipelines to keeping systems healthy.
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
                  <h3 className="font-display font-bold mb-2">{d.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{d.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-black/5 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2">Jenkinsfile</span>
              </div>
              <pre className="p-5 text-xs sm:text-sm overflow-x-auto leading-relaxed text-slate-700 dark:text-slate-300">
                <code>{jenkinsPipelineSnippet}</code>
              </pre>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full">
              <div className="flex items-center gap-2 mb-5">
                <FiShield className="text-brand-purple" />
                <h3 className="font-display font-bold text-lg">Key Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="text-brand-purple mt-0.5">✓</span>
                    <span>{a}</span>
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
