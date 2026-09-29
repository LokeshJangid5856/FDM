import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import './About.css'

const FOCUS_AREAS = [
  'Strategy',
  'Creativity',
  'Business understanding',
  'Communication',
  'Reputation',
  'Long-term brand building',
]

const PHILOSOPHY = [
  { index: '01', title: 'Think Deep', description: 'Understand the business before creating the communication.' },
  { index: '02', title: 'Create Distinctly', description: 'Build ideas that are memorable and meaningful.' },
  { index: '03', title: 'Communicate Clearly', description: 'Make complex businesses easier to understand and easier to remember.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="FDM is a strategic communications and brand partner — working at the intersection of strategy, creativity and business understanding."
        path="/about"
      />

      {/* ---------- Hero ---------- */}
      <section className="about-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About FDM</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mega about-hero__title">
              We turn ideas
              <br />
              into <span className="yellow-underline">impact.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="about-hero__copy muted">
              We are a strategic communications and brand partner. We help businesses
              define who they are, say it with confidence, and build a reputation that
              lasts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Who we are ---------- */}
      <section className="section section--white about-who">
        <div className="container">
          <SectionHeading eyebrow="Who we are" title="A partner for clarity and momentum." />
          <div className="about-who__grid">
            <Reveal className="about-who__lead">
              <p>
                FDM is a strategy-led communications consultancy. We sit at the
                intersection of business understanding, communication and creativity —
                helping organisations articulate their value, connect with the right
                people, and protect the reputation they work so hard to build.
              </p>
              <p className="muted">
                Our work is not about decoration. It is about direction. Every brand,
                message and campaign we shape is built on a clear understanding of the
                business first — so that what we create is relevant, believable and
                built to last.
              </p>
            </Reveal>
            <Reveal delay={120} className="about-who__side">
              <span className="about-who__label">What we bring</span>
              <ul className="about-who__list">
                {FOCUS_AREAS.map((area) => (
                  <li key={area}>
                    <span aria-hidden="true" className="about-who__mark" />
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="section section--dark about-philosophy">
        <div className="container">
          <SectionHeading
            eyebrow="Our philosophy"
            title="Three principles guide everything we make."
            tone="light"
          />
          <div className="about-philosophy__list">
            {PHILOSOPHY.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                as="div"
                className="about-philosophy__item"
              >
                <span className="about-philosophy__index" aria-hidden="true">
                  {item.index}
                </span>
                <h3 className="about-philosophy__title">{item.title}</h3>
                <p className="muted--light about-philosophy__desc">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing statement ---------- */}
      <section className="section about-close">
        <div className="container">
          <Reveal>
            <p className="about-close__statement">
              Clarity is a choice. We help businesses make it — every day, in every
              message, in every relationship that matters.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
