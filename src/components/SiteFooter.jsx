import { siteConfig } from '../config/site'

const SiteFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <p className="site-footer__meta">
          © {year} {siteConfig.name}.
        </p>
        <div className="site-footer__links">
          <a className="site-footer__link" href={`mailto:${siteConfig.email}`}>
            Email
          </a>
          <a
            className="site-footer__link"
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
