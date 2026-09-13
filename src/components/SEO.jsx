import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://personal-website-turbonerd.appwrite.network'

const SEO = ({
  title = 'Gregory Boyd — Pilot & Self-Taught Developer',
  description = 'Gregory Boyd is a Navy and CBP pilot turned self-taught developer based in Jacksonville, FL. Exploring software with Swift, React, and CSS.',
  path = '/',
  image = '/og-image.png',
}) => {
  const url = `${SITE_URL}${path}`
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Gregory Boyd" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SEO
