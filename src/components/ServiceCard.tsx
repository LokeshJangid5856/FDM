import { Link } from 'react-router-dom'
import { ArrowRight } from './ArrowIcon'
import './ServiceCard.css'

export interface Service {
  title: string
  description: string
  items: string[]
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <h3 className="service-card__title">{service.title}</h3>
        <Link to="/contact" className="service-card__arrow" aria-label={`${service.title} — enquire`}>
          <ArrowRight />
        </Link>
      </div>
      <p className="service-card__desc muted">{service.description}</p>
      <ul className="service-card__list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
