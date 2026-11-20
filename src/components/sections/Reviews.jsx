import SectionHeading from '../ui/SectionHeading'

const previewReviews = [
  { quote: 'Beautiful work and such a thoughtful experience from start to finish.', author: 'M. R.' },
  { quote: 'The studio feels welcoming, and the attention to detail is incredible.', author: 'J. C.' },
  { quote: 'They understood my idea immediately and made it feel completely personal.', author: 'A. S.' },
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
      <a className="button" href="https://maps.app.goo.gl/Se33eq7GgvCdeLau7" target="_blank" rel="noreferrer">Read Google reviews ↗</a>
    </section>
  )
}
