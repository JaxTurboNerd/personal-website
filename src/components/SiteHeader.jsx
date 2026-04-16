import { siteConfig, navItems } from '../config/site'

const SiteHeader = () => (
  <header className="site-header">
    <a className="site-header__brand" href="#top" aria-label={`${siteConfig.name}, back to top`}>
      {siteConfig.name}
    </a>
    <nav className="site-header__nav" aria-label="Primary">
      {navItems.map((item) => (
        <a key={item.href} className="site-header__link" href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  </header>
)

export default SiteHeader
