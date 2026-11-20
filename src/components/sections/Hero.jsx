import { useEffect, useState } from 'react'

const mobileVideoQuery = '(max-width: 767px)'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(mobileVideoQuery).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileVideoQuery)
    const updateVideoSource = (event) => setIsMobile(event.matches)

    mediaQuery.addEventListener('change', updateVideoSource)
    return () => mediaQuery.removeEventListener('change', updateVideoSource)
  }, [])

  return (
    <section className="hero-section" id="top">
      <video
        className="hero-video"
        src={isMobile ? '/videos/Vid vertical.mp4' : '/videos/Vid horizontal.mp4'}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="hero-content" data-reveal>
        <img className="hero-logo" src="/images/Logo Onyria.svg" alt="Onyria Tattoo" />
        <p className="hero-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
      </div>
      <a className="button hero-book" href="https://wa.me/351969223676" target="_blank" rel="noreferrer">Agenda agora!</a>
      {/* <a className="button hero-book" href="https://www.instagram.com/onyria.tattoo/" target="_blank" rel="noreferrer">Book now</a> */}
    </section>
  )
}
