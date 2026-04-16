import SkipLink from '../components/SkipLink'
import SiteHeader from '../components/SiteHeader'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import SiteFooter from '../components/SiteFooter'

const HomePage = () => (
  <>
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
