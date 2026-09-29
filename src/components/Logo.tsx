interface LogoProps {
  size?: 'sm' | 'md' | 'full'
  tone?: 'black' | 'white'
  className?: string
  alt?: string
}

const LOGO_SRC: Record<
  NonNullable<LogoProps['size']>,
  Record<NonNullable<LogoProps['tone']>, string>
> = {
  sm: {
    black: '/logo/fdm-logo-sm.png',
    white: '/logo/fdm-logo-white-sm.png',
  },
  md: {
    black: '/logo/fdm-logo-md.png',
    white: '/logo/fdm-logo-white-md.png',
  },
  full: {
    black: '/logo/fdm-logo.png',
    white: '/logo/fdm-logo-white.png',
  },
}

export default function Logo({ size = 'md', tone = 'black', className = '', alt = 'FDM' }: LogoProps) {
  return <img src={LOGO_SRC[size][tone]} alt={alt} className={className} draggable={false} />
}
