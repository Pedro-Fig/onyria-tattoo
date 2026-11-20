import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section className="about-section section-shell" id="about">
      <SectionHeading title="The studio" />
      <div className="about-grid">
        <div className="about-image" data-reveal>
          <img src="/images/image studio 1.jpeg" alt="Atmosphere inside Onyria Tattoo studio" />
        </div>
        <div className="about-copy" data-reveal>
          <p className="lead">Custom tattooing by appointment.</p>
          <p>Meet the artists, explore their styles, and get in touch to discuss a piece.</p>
          <a className="text-link" href="#artists">Artists <span>↗</span></a>
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
