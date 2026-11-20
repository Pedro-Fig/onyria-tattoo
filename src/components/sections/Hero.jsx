export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true" tabIndex={-1}>
        <source src="/videos/Vid vertical.MP4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/videos/Vid horizontal.mov" media="(min-width: 768px)" type="video/quicktime" />
      </video>
      <div className="hero-content" data-reveal>
        <img className="hero-logo" src="/images/Logo Onyria.svg" alt="Onyria Tattoo" />
        <p className="hero-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
      </div>
      <a className="button hero-book" href="https://wa.me/351969223676" target="_blank" rel="noreferrer">Agenda agora!</a>
      {/* <a className="button hero-book" href="https://www.instagram.com/onyria.tattoo/" target="_blank" rel="noreferrer">Book now</a> */}
    </section>
  )
}
