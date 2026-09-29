import { Link } from 'react-router-dom'
import Logo from './Logo'
import Reveal from './Reveal'
import { ArrowRight } from './ArrowIcon'
import './CTASection.css'

interface CTASectionProps {
  tone?: 'yellow' | 'black'
  heading?: string
}

export default function CTASection({ tone = 'yellow' }: CTASectionProps) {
  return (
    <section className={`cta cta--${tone}`} aria-label="Call to action">
      <div className="container cta__inner">
        <Reveal className="cta__plate">
          <Logo size="md" tone={tone === 'black' ? 'white' : 'black'} className="cta__logo" alt="FDM" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="cta__title">
            Have an idea worth exploring<span className="text-yellow">?</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <Link to="/contact" className="btn cta__btn">
            Let&apos;s Talk
            <ArrowRight className="btn-arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
