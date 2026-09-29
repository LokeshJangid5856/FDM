import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight } from './ArrowIcon'
import './ContactForm.css'

const TOPICS = ['Branding', 'Marketing (B2B)', 'Curation', 'Public Relations', 'Other']

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-form-wrap">
      {submitted ? (
        <div className="contact-form__success" role="status">
          <h3 className="display--sm">Thank you.</h3>
          <p className="muted">
            Your message has been noted. We&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label className="contact-form__field">
              <span className="contact-form__label">Name</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your full name"
              />
            </label>
            <label className="contact-form__field">
              <span className="contact-form__label">Work Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <div className="contact-form__row">
            <label className="contact-form__field">
              <span className="contact-form__label">Company</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Company name"
              />
            </label>
            <label className="contact-form__field">
              <span className="contact-form__label">Phone</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+00 000 000 0000"
              />
            </label>
          </div>
          <label className="contact-form__field">
            <span className="contact-form__label">What can we help you with?</span>
            <select name="topic" defaultValue="">
              <option value="" disabled>
                Select a topic
              </option>
              {TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>
          <label className="contact-form__field">
            <span className="contact-form__label">Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us a little about your project or challenge…"
            />
          </label>
          <div className="contact-form__actions">
            <button type="submit" className="btn btn--dark contact-form__submit">
              Send Message
              <ArrowRight className="btn-arrow" />
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
