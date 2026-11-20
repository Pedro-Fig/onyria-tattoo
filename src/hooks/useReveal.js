import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const observeElements = () => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((element) => {
        observer.observe(element)
      })
    }

    observeElements()

    const mutationObserver = new MutationObserver(observeElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
