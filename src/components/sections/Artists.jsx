import { artists } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Artists() {
  return (
    <section className="artists-section section-shell" id="artists">
      <SectionHeading title="Artists" />
      <div className="artists-grid">
        {artists.map((artist) => (
          <article className="artist-card" key={artist.name} data-reveal>
            <div className="artist-portrait">
              <div className="artist-image">
                <img src={artist.image} alt={`${artist.name}, tattoo artist`} />
              </div>
            </div>
            <div className="artist-info">
              <p className="artist-role">{artist.role}</p>
              <h3>{artist.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
