import { Link } from 'react-router-dom'
import Logo from './Logo'
import { ArrowRight } from './ArrowIcon'
import './Footer.css'

const FOOTER_NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/work', label: 'Work We Do' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__brand-link" aria-label="FDM — back to home">
              <Logo size="md" tone="white" className="footer__logo" alt="FDM" />
            </Link>
            <p className="footer__tag muted--light">
              We build brands, create conversations, and shape how businesses are seen.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <span className="footer__label">Explore</span>
            {FOOTER_NAV.map((link) => (
              <Link key={link.to} to={link.to} className="footer__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer__contact">
            <span className="footer__label">Get in touch</span>
            <a className="footer__link" href="mailto:hello@fdm.example">
              hello@fdm.example
            </a>
            <span className="footer__link footer__link--muted">Your city, Country</span>
          </div>
        </div>

        <div className="footer__cta">
          <h2 className="footer__cta-title">
            Let&apos;s talk<span className="text-yellow">.</span>
          </h2>
          <Link to="/contact" className="btn btn--yellow">
            Start a conversation
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>

        <div className="footer__bottom">
          <span>© 2026 FDM. All rights reserved.</span>
          <span className="footer__note">Strategy · Branding · Communications</span>
        </div>
      </div>
    </footer>
  )
}
