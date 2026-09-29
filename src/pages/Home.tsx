import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { ArrowRight } from '../components/ArrowIcon'
import { SERVICES } from '../data/services'
import './Home.css'

const PILLARS = [
  {
    title: 'Strategic Thinking',
    description: 'We start with insights and build with purpose.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Creative Minds',
    description: 'Ideas that are original, relevant and effective.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 6l3.2 8.2L36 17l-8.8 2.8L24 28l-3.2-8.2L12 17l8.8-2.8L24 6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M36 32l1.6 4L42 38l-4.4 2-1.6 4-1.6-4-4.4-2 4.4-2 1.6-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Business Driven',
    description: 'Solutions that drive real business impact.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M8 40h36M12 40V22h10v18M26 40V12h10v28M40 40V28h4v12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'People First',
    description: 'We believe good work connects with people.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="20" cy="17" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 40c0-7 5.5-12 12-12s12 5 12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="34" cy="20" r="4.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M32 33.5c4.5.7 8 3.6 8 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="FDM"
        description="FDM is a strategy-led communications partner that helps businesses speak with clarity, connect with the right audience, and drive meaningful impact."
        path="/"
      />

      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <Reveal>
              <span className="eyebrow">FDM — Strategy, Branding &amp; Communications</span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mega home-hero__title text-yellow">
                Ideas
                <br />
                In Motion
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="home-hero__copy muted">
                We are a strategy-led communications partner that helps businesses speak
                with clarity, connect with the right audience, and drive meaningful impact.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Link to="/work" className="btn btn--dark home-hero__cta">
                Explore Our Work
                <ArrowRight className="btn-arrow" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="home-hero__visual-wrap">
            <figure className="home-hero__visual">
              <img
                src="/logo/hand-logo.png"
                alt="A hand holding a glowing lightbulb — ideas ready to take shape"
                className="home-hero__image"
                loading="eager"
              />
            </figure>
            <span className="home-hero__dot" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="section section--dark home-philosophy">
        <div className="container">
          <Reveal className="home-philosophy__head">
            <span className="eyebrow eyebrow--light">Why partner with us?</span>
            <h2 className="home-philosophy__title">Built on purpose. Driven by ideas.</h2>
          </Reveal>
          <div className="home-philosophy__grid">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="home-philosophy__item">
                <span className="home-philosophy__icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3 className="home-philosophy__card-title">{pillar.title}</h3>
                <p className="muted--light home-philosophy__desc">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Introduction ---------- */}
      <section className="section home-intro">
        <div className="container">
          <div className="home-intro__grid">
            <Reveal>
              <h2 className="display home-intro__title">
                Strategy
                <br />
                meets
                <br />
                <span className="yellow-underline">creativity.</span>
              </h2>
            </Reveal>
            <Reveal delay={140} className="home-intro__copy">
              <p className="muted">
                FDM works at the intersection of business understanding, communication and
                creativity. We help businesses clarify what they stand for, say it
                memorably, and stay relevant in a changing market.
              </p>
              <p className="muted">
                Every engagement begins with thinking — a clear view of the business, its
                audience and the outcome we need to create. From that foundation, we build
                brands, stories and campaigns that are as intentional as they are
                imaginative.
              </p>
              <Link to="/about" className="text-link">
                More about us <ArrowRight className="btn-arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Services preview ---------- */}
      <section className="section section--white home-services">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="WHAT WE DO"
            intro="We build brands, create conversations, and shape how businesses are seen."
          />
          <div className="home-services__grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 90} className="home-services__cell">
                <ServiceCard service={{ ...service, items: [] }} />
              </Reveal>
            ))}
          </div>
          <Reveal className="home-services__more">
            <Link to="/work" className="btn btn--outline">
              See everything we do
              <ArrowRight className="btn-arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
