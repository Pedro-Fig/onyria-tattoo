export default function Location() {
  return (
    <section className="location-section section-shell" id="location">
      <h2>Find the studio</h2>
      <div className="location-map" data-reveal>
        <iframe title="Onyria Tattoo on Google Maps" src="https://www.google.com/maps?q=Onyria%20Tattoo&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a className="button" href="https://maps.app.goo.gl/Se33eq7GgvCdeLau7" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
    </section>
  )
}
