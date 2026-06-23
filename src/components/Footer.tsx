import { Link, useLocation } from 'react-router-dom'
import { CONTACT_EMAIL } from '../config/cal'

function sectionHref(pathname: string, basePath: string, hash: string) {
  return pathname === basePath ? hash : `${basePath}${hash}`
}

export default function Footer() {
  const { pathname } = useLocation()
  const contactHref = sectionHref(
    pathname,
    pathname.startsWith('/fractional-cto') ? '/fractional-cto' : '/',
    '#contact',
  )

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Nickel Intelligence</span>
        <div className="footer-links">
          <Link to="/">Coaching</Link>
          <Link to="/fractional-cto">Fractional CTO</Link>
          <a href={contactHref}>Contact</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
