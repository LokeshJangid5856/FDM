import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { ArrowRight } from './ArrowIcon'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/work', label: 'Work We Do' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link
          to="/"
          className="nav__brand"
          aria-label="FDM — back to home"
          onClick={() => setOpen(false)}
        >
          <Logo size="md" className="nav__logo" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--dark nav__cta">
            Let&apos;s Talk
            <ArrowRight className="btn-arrow" />
          </Link>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__overlay ${open ? 'is-open' : ''}`}>
        <nav className="nav__mobile" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : '0ms' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn--yellow nav__mobile-cta"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
            <ArrowRight className="btn-arrow" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
