import { siteConfig } from '../config/site'

const initialsFromName = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

const AboutSection = () => (
  <section className="about" id="about" aria-labelledby="about-heading">
    <div className="about__grid">
      <div className="about__main">
        <h2 id="about-heading">About</h2>
        {siteConfig.bio.map((paragraph, index) => (
          <p key={index} className="about__lead">
            {paragraph}
          </p>
        ))}
      </div>
      <aside className="about__sidebar" aria-label="Quick facts">
        <div className="sidebar__avatar" aria-hidden="true">
          {initialsFromName(siteConfig.name)}
        </div>
        <dl className="sidebar__dl">
          <div>
            <dt className="sidebar__dt">Location</dt>
            <dd className="sidebar__dd">{siteConfig.location}</dd>
          </div>
          <div>
            <dt className="sidebar__dt">Now reading</dt>
            <dd className="sidebar__dd">{siteConfig.nowReading}</dd>
          </div>
        </dl>
        <div className="sidebar__links">
          <a
            className="sidebar__ext"
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="sidebar__ext"
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>
    </div>
  </section>
)

export default AboutSection
