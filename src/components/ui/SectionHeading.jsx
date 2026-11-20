export default function SectionHeading({ title, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`} data-reveal>
      <h2>{title}</h2>
    </header>
  )
}
