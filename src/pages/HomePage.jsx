import SkipLink from '../components/SkipLink'
import SiteHeader from '../components/SiteHeader'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SiteFooter from '../components/SiteFooter'
import SEO from '../components/SEO'
import { siteConfig } from '../config/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.tagline,
  url: 'https://personal-website-turbonerd.appwrite.network',
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location,
  },
}

const HomePage = () => (
  <>
    <SEO />
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    <SkipLink />
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <AboutSection />
    </main>
    <SiteFooter />
  </>
)

export default HomePage
