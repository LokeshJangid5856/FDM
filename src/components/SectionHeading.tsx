import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && <span className={`eyebrow ${tone === 'light' ? 'eyebrow--light' : ''}`}>{eyebrow}</span>}
      <h2 className="display section-heading__title">{title}</h2>
      {intro && (
        <p className={`section-heading__intro ${tone === 'light' ? 'muted--light' : 'muted'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
