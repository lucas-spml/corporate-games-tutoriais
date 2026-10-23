import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useActiveSection } from '../hooks.js'

export default function ModuleNav({ modules }) {
  const active = useActiveSection(modules.map((m) => m.id))
  const listRef = useRef(null)

  // Mantém o item ativo visível na barra horizontal (mobile).
  // Rola só a lista: scrollIntoView também rolaria a página inteira e brigava com a rolagem do usuário.
  useEffect(() => {
    const list = listRef.current
    const el = list?.querySelector(`[data-id="${active}"]`)
    if (!list || !el) return
    const offset = el.getBoundingClientRect().left - list.getBoundingClientRect().left
    list.scrollTo({
      left: list.scrollLeft + offset - list.clientWidth / 2 + el.clientWidth / 2,
      behavior: 'smooth',
    })
  }, [active])

  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="module-nav" aria-label="Módulos">
      <div className="container">
        <ul className="module-nav-list" ref={listRef}>
          {modules.map((m, i) => (
            <li key={m.id}>
              <a
                href={`#${m.id}`}
                data-id={m.id}
                className={`module-nav-link ${active === m.id ? 'is-active' : ''}`}
                onClick={(e) => go(e, m.id)}
              >
                <span className="module-nav-num">{String(i + 1).padStart(2, '0')}</span>
                {m.title}
                {active === m.id && (
                  <motion.span
                    layoutId="module-nav-bar"
                    className="module-nav-bar"
                    transition={{ type: 'spring', stiffness: 450, damping: 36 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
