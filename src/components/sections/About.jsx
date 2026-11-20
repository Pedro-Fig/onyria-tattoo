import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading title="O Estudio" />
      <div className="about-grid">
        <div className="about-image" data-reveal>
          <img src="/images/image studio 1.jpeg" alt="Atmosphere inside Onyria Tattoo studio" />
        </div>
        <div className="about-copy" data-reveal>
          <p className="lead">Lorem ipsum dolor sit amet.</p>
          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a className="text-link" href="#gallery">Galeria <span>↗</span></a>
        </div>
      </div>
      <div className="studio-sprinkles" aria-hidden="true">
        <figure className="studio-sprinkle studio-sprinkle--one" data-reveal>
          <img src="/images/image studio 2.jpeg" alt="" loading="lazy" />
        </figure>
        <figure className="studio-sprinkle studio-sprinkle--two" data-reveal>
          <img src="/images/image studio 4.jpeg" alt="" loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
