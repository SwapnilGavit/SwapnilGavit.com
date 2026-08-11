import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiMapPin, FiSend, FiTwitter, FiInstagram } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { personal, socials } from '../data/content.js'

// --- EmailJS configuration -------------------------------------------------
// Create a free account at https://www.emailjs.com, then replace the three
// placeholder values below with your Service ID, Template ID and Public Key.
// Until then, the form falls back to opening the user's email client.
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'
const EMAILJS_CONFIGURED =
  !EMAILJS_SERVICE_ID.startsWith('YOUR_') &&
  !EMAILJS_TEMPLATE_ID.startsWith('YOUR_') &&
  !EMAILJS_PUBLIC_KEY.startsWith('YOUR_')

const contactItems = [
  { icon: FiMail, label: 'Email', value: personal.email, href: socials.email },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: socials.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: socials.github },
  { icon: FiPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: personal.location, href: null },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!EMAILJS_CONFIGURED) {
      const data = new FormData(formRef.current)
      const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Contact" description="Get in touch with Swapnil Gavit — Full Stack Java Developer and DevOps Engineer." />
      <section className="section">
        <Reveal>
          <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
          <p className="section-subtitle">Have a role, a project, or just want to talk shop about Java, DevOps or travel? I'd love to hear from you.</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-grad-primary flex items-center justify-center text-white shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
                    <div className="font-medium text-sm sm:text-base break-all">{item.value}</div>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}

            <div className="flex items-center gap-3 pt-2">
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiTwitter /></a>
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:scale-110 hover:text-brand-purple transition-all"><FiInstagram /></a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="name">Name</label>
                  <input required id="name" name="name" type="text" placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-purple/60" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="email">Email</label>
                  <input required id="email" name="email" type="email" placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-purple/60" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-purple/60" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" htmlFor="message">Message</label>
                <textarea required id="message" name="message" rows={5} placeholder="Tell me a bit about the opportunity or project..."
                  className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-purple/60 resize-none" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && <p className="text-sm text-emerald-500">Message sent — thank you! I'll get back to you soon.</p>}
              {status === 'error' && <p className="text-sm text-red-500">Something went wrong. Please email me directly instead.</p>}
              {!EMAILJS_CONFIGURED && (
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  EmailJS isn't configured yet, so this form opens your email client instead. Add your EmailJS keys in <code>src/pages/Contact.jsx</code> to send messages directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
