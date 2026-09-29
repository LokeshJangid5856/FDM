import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { ArrowRight } from '../components/ArrowIcon'
import { SERVICES } from '../data/services'
import './Work.css'

export default function Work() {
  return (
    <>
      <Seo
        title="Work We Do"
        description="We build brands, create conversations, and shape how businesses are seen. Branding, B2B marketing, curation and public relations."
        path="/work"
      />

      {/* ---------- Hero ---------- */}
      <section className="work-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Work we do</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mega work-hero__title">
              What <span className="yellow-underline">we do.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="work-hero__copy muted">
              We build brands, create conversations, and shape how businesses are seen.
              Four disciplines, one connected way of thinking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="work-services">
        <div className="container">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} as="div" className="work-services__row">
              <article
                className={`work-services__item ${i % 2 === 1 ? 'work-services__item--flip' : ''}`}
              >
                <div className="work-services__intro">
                  <h2 className="work-services__title">
                    {service.title.split(' (')[0]}
                    {service.title.includes('(') && (
                      <>
                        <br />
                        <span className="work-services__sub">({service.title.split(' (')[1]}</span>
                      </>
                    )}
                  </h2>
                  <p className="muted work-services__desc">{service.description}</p>
                  <Link to="/contact" className="text-link">
                    Start a project <ArrowRight className="btn-arrow" />
                  </Link>
                </div>
                <ul className="work-services__list">
                  {service.items.map((item, j) => (
                    <li key={item} className="work-services__list-item">
                      <span className="work-services__list-num" aria-hidden="true">
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span className="work-services__list-label">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection tone="black" />
    </>
  )
}
