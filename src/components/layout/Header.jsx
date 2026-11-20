import { useEffect, useState } from 'react'

const links = [
  ['O Estúdio', '#about'],
  ['Artistas', '#artists'],
  ['Galeria', '#gallery'],
  ['Reviews', '#reviews'],
  ['Localização', '#location'],
  ['Contatos', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => {
      const hasScrolled = window.scrollY > 160
      setScrolled(hasScrolled)
      document.body.classList.toggle('has-scrolled', hasScrolled)
    }
    const closeMenu = () => setOpen(false)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', closeMenu)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', closeMenu)
      document.body.classList.remove('has-scrolled')
    }
  }, [])

  return (
    <>
      <a className={`corner-logo ${scrolled ? 'is-visible' : ''}`} href="#top" aria-label="Onyria Tattoo home">
        <img src="/images/Logo Onyria.svg" alt="Onyria Tattoo" />
      </a>

      <button
        className={`menu-button ${open ? 'is-open' : ''}`}
        type="button"
        aria-expanded={open}
        aria-controls="section-menu"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>

      <nav id="section-menu" className={`section-menu ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <div className="menu-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <a className="menu-book" href="https://www.instagram.com/onyria.tattoo/" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Book now ↗</a>
      </nav>
      <div className={`menu-backdrop ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
    </>
  )
}
