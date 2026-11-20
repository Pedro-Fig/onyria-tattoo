import { useState } from 'react'
import { galleryItems, galleryStyles } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function Gallery() {
  const [openStyle, setOpenStyle] = useState('Estúdio')
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="gallery-section section-shell" id="gallery">
      <SectionHeading title="Styles" />
      <div className="style-accordion" data-reveal>
        {galleryStyles.map((style) => {
          const open = openStyle === style
          const items = galleryItems.filter((item) => item.style === style)
          const slides = [-1, 0, 1].map((offset) => ({
            item: items[(activeSlide + offset + items.length) % items.length],
            offset,
          }))
          return (
            <article className={`style-row ${open ? 'is-open' : ''}`} key={style}>
              <button
                type="button"
                className="style-trigger"
                aria-expanded={open}
                onClick={() => {
                  setOpenStyle(open ? '' : style)
                  setActiveSlide(0)
                }}
              >
                <span className="style-name">{style}</span>
                <span className="style-plus" aria-hidden="true">{open ? '−' : '+'}</span>
              </button>
              <div className="style-content">
                <div className="carousel-stage">
                  <button className="carousel-arrow carousel-arrow--previous" type="button" aria-label={`Previous ${style} image`} onClick={() => setActiveSlide((index) => (index - 1 + items.length) % items.length)}>‹</button>
                  <div className="style-carousel" aria-live="polite">
                    {slides.map(({ item, offset }) => (
                      <figure className={`gallery-item gallery-card gallery-card--${offset < 0 ? 'left' : offset > 0 ? 'right' : 'center'}`} key={item.id}>
                        <img src={item.image} alt={`${style} portfolio`} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                  <button className="carousel-arrow carousel-arrow--next" type="button" aria-label={`Next ${style} image`} onClick={() => setActiveSlide((index) => (index + 1) % items.length)}>›</button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
