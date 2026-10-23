import { useEffect, useState } from 'react'

function read(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {}
}

// Estado salvo no navegador (idioma e tema ficam lembrados entre visitas)
export function useStoredState(key, fallback) {
  const [value, setValue] = useState(() => read(key, fallback))
  useEffect(() => write(key, value), [key, value])
  return [value, setValue]
}

export function useTheme() {
  const [theme, setTheme] = useStoredState('cg-theme', document.documentElement.dataset.theme || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

// Destaca no menu o módulo que está visível na tela
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids.join('|')])
  return active
}

export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

// Aceita link completo do YouTube ou só o ID
export function youtubeId(input) {
  if (!input) return null
  const s = input.trim()
  if (/^[\w-]{11}$/.test(s)) return s
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/)
  return m ? m[1] : null
}
