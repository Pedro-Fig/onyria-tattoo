import SectionHeading from '../ui/SectionHeading'

const previewReviews = [
  { quote: 'Bom ambiente, boas vibes, excelente tatuadoras! Hei de voltar.', author: 'Andre P.' },
  { quote: 'Adorei fazer tatuagem com a Andréa,super atenciosa e muito profissional ❤️', author: 'Cibeli S.' },
  { quote: 'Serviço impecável, espaço limpo e confortável e tatuagens incríveis. Recomendo!', author: 'Diogo S.' },
]

export default function Reviews() {
  return (
    <section className="reviews-section section-shell" id="reviews">
      <SectionHeading title="Reviews" align="center" />
      <div className="reviews-grid">
        {previewReviews.map((review) => (
          <blockquote className="review-card" key={review.author}>
            <p>“{review.quote}”</p>
            <footer>{review.author}</footer>
          </blockquote>
        ))}
      </div>
      <a className="button" href="https://maps.app.goo.gl/Se33eq7GgvCdeLau7" target="_blank" rel="noreferrer">Ver avaliações ↗</a>
    </section>
  )
}
