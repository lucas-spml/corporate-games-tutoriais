import { AnimatePresence, motion } from 'framer-motion'
import { LANGUAGES } from '../content/index.js'
import { useScrolled } from '../hooks.js'
import { Globe, Moon, Sun } from './Icons.jsx'

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Corporate Games">
      <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="" className="logo-icon" />
      <span className="logo-wordmark" aria-hidden />
    </a>
  )
}

export default function Header({ lang, setLang, theme, toggleTheme, t }) {
  const scrolled = useScrolled()

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <div className="header-actions">
          <div className="lang-switch" role="radiogroup" aria-label={t.language}>
            <Globe className="lang-globe" />
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                role="radio"
                aria-checked={lang === l.code}
                title={l.label}
                className={`lang-option ${lang === l.code ? 'is-active' : ''}`}
                onClick={() => setLang(l.code)}
              >
                {lang === l.code && (
                  <motion.span
                    layoutId="lang-pill"
                    className="lang-pill"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
                <span className="lang-label">{l.short}</span>
              </button>
            ))}
          </div>

          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
            title={theme === 'dark' ? t.themeLight : t.themeDark}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'grid' }}
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  )
}
