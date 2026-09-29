import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Logo from '../components/Logo'
import ContactForm from '../components/ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Have a project in mind, a business challenge to solve, or simply an idea worth exploring? We'd love to hear from you."
        path="/contact"
      />

      {/* ---------- Hero ---------- */}
      <section className="contact-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mega contact-hero__title">
              Let&apos;s create
              <br />
              something that <span className="yellow-underline">matters.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="contact-hero__copy muted">
              Have a project in mind, a business challenge to solve, or simply an idea
              worth exploring? We&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Form + info ---------- */}
      <section className="section section--white contact-main">
        <div className="container contact-main__grid">
          <Reveal className="contact-form-col">
            <ContactForm />
          </Reveal>

          <Reveal delay={140} className="contact-info-col">
            <div className="contact-info">
              <span className="eyebrow">Get in touch</span>

              <div className="contact-info__group">
                <span className="contact-info__label">Email</span>
                <a className="contact-info__value" href="mailto:hello@fdm.example">
                  hello@fdm.example
                </a>
              </div>

              <div className="contact-info__group">
                <span className="contact-info__label">Phone</span>
                <span className="contact-info__value contact-info__value--muted">
                  +00 000 000 0000
                </span>
              </div>

              <div className="contact-info__group">
                <span className="contact-info__label">Studio</span>
                <span className="contact-info__value contact-info__value--muted">
                  Your city, Country
                </span>
              </div>

              <div className="contact-info__plate">
                <Logo size="md" className="contact-info__logo" alt="FDM" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
