import { motion } from 'framer-motion'
import { Close, Search } from './Icons.jsx'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero({ t, query, setQuery, moduleCount, videoCount }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-stripes" />
      </div>

      <div className="container hero-inner">
        <motion.p className="eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
          <span className="eyebrow-dot" />
          {t.eyebrow}
        </motion.p>

        <motion.h1 className="hero-title" variants={rise} initial="hidden" animate="show" custom={1}>
          <span className="hero-line">{t.heroTitle[0]}</span>
          <span className="hero-line accent">{t.heroTitle[1]}</span>
        </motion.h1>

        <motion.p className="hero-text" variants={rise} initial="hidden" animate="show" custom={2}>
          {t.heroText}
        </motion.p>

        <motion.div className="hero-tools" variants={rise} initial="hidden" animate="show" custom={3}>
          <label className="search">
            <Search className="search-icon" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              aria-label={t.search}
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')} aria-label={t.clear}>
                <Close width={16} height={16} />
              </button>
            )}
          </label>

          <div className="stats">
            <div className="stat">
              <strong>{String(moduleCount).padStart(2, '0')}</strong>
              <span>{t.modules}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>{String(videoCount).padStart(2, '0')}</strong>
              <span>{t.videos}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
