import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
// import Experience from './pages/Experience.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
// import DevOps from './pages/DevOps.jsx'
import Education from './pages/Education.jsx'
import Travel from './pages/Travel.jsx'
import Gallery from './pages/Gallery.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen show={loading} />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/devops" element={<DevOps />} /> */}
          <Route path="/education" element={<Education />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
