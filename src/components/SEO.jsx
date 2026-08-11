import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords }) {
  const fullTitle = title ? `${title} | Swapnil Gavit` : 'Swapnil Gavit | Full Stack Java Developer & DevOps Engineer'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}
