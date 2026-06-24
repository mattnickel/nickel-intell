import { Link, useLocation } from 'react-router-dom'

const SECTION_NAV = [
  { hash: '#outcomes', label: 'Outcomes' },
  { hash: '#packages', label: 'Engagements' },
  { hash: '#about', label: 'About' },
]

function sectionHref(pathname: string, basePath: string, hash: string) {
  return pathname === basePath ? hash : `${basePath}${hash}`
}

export default function Header() {
  const { pathname } = useLocation()
  const isFractional = pathname.startsWith('/fractional-cto')
  const basePath = isFractional ? '/fractional-cto' : '/'

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">N</span>
          Nickel Intelligence
        </Link>
        <nav className="nav">
          <Link
            to="/"
            className={pathname === '/' ? 'nav-active' : undefined}
          >
            Coaching
          </Link>
          <Link
            to="/fractional-cto"
            className={isFractional ? 'nav-active' : undefined}
          >
            Fractional CTO
          </Link>
          {SECTION_NAV.map((link) => (
            <a
              key={link.hash}
              href={sectionHref(pathname, basePath, link.hash)}
            >
              {link.label}
            </a>
          ))}
          <a href={sectionHref(pathname, basePath, '#contact')} className="nav-cta">
            Book intro call
          </a>
        </nav>
      </div>
    </header>
  )
}
