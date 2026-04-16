import { siteConfig } from '../config/site'

const Hero = () => (
  <section className="hero" id="top" aria-labelledby="hero-heading">
    <div className="hero__inner">
      <span className="hero__eyebrow">{siteConfig.role}</span>
      <h1 id="hero-heading">{siteConfig.name}</h1>
      <p className="hero__tagline">{siteConfig.tagline}</p>
      <div className="hero__actions">
        <a className="hero__cta" href="#about">
          Read more
        </a>
        <a className="hero__secondary" href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub profile ↗
        </a>
      </div>
    </div>
  </section>
)

export default Hero
