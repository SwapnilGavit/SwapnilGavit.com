import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="section flex flex-col items-center justify-center text-center min-h-[70vh]">
        <span className="font-display text-7xl sm:text-9xl font-extrabold gradient-text">404</span>
        <h1 className="font-display text-xl sm:text-2xl font-bold mt-4">Looks like this page took a wrong turn.</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md">
          Even the best-planned road trips hit a dead end sometimes. Let's get you back on route.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <FiHome /> Back Home
        </Link>
      </section>
    </>
  )
}
