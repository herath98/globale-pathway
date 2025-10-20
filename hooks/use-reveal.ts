"use client"

import { useEffect } from "react"

type Options = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

/**
 * Simple hook: finds elements with the `[data-reveal]` attribute and toggles
 * the `reveal--visible` class when they enter the viewport.
 *
 * Usage: add `data-reveal` to elements and optional inline style `--reveal-delay: 0.2s`.
 */
export default function useReveal(options: Options = {}) {
  useEffect(() => {
    const selector = "[data-reveal]"
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!nodes.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.add("reveal--visible")
            // if you want the animation only once, unobserve after visible
            obs.unobserve(el)
          }
        })
      },
      { root: options.root ?? null, rootMargin: options.rootMargin ?? "0px 0px -10% 0px", threshold: options.threshold ?? 0.15 }
    )

    nodes.forEach((n) => {
      // ensure base class present
      n.classList.add("reveal")
      obs.observe(n)
    })

    return () => obs.disconnect()
  }, [options.root, options.rootMargin, options.threshold])
}
