import { motion } from 'framer-motion'
import { Clock } from './Icons.jsx'
import VideoEmbed from './VideoEmbed.jsx'

const ease = [0.22, 1, 0.36, 1]

function TutorialCard({ tutorial, index, t }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease }}
    >
      <div className="card-head">
        <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
        {tutorial.duration && (
          <span className="card-duration">
            <Clock /> {tutorial.duration}
          </span>
        )}
      </div>
      <h3 className="card-title">{tutorial.title}</h3>
      <p className="card-text">{tutorial.description}</p>
      <VideoEmbed video={tutorial.video} title={tutorial.title} t={t} />
    </motion.article>
  )
}

export default function ModuleSection({ module, index, t }) {
  return (
    <section className="module" id={module.id}>
      <motion.header
        className="module-head"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease }}
      >
        <span className="module-num" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <p className="module-label">
            {t.module} {String(index + 1).padStart(2, '0')}
            <span className="module-count">
              · {module.tutorials.length} {t.videos}
            </span>
          </p>
          <h2 className="module-title">{module.title}</h2>
          <p className="module-text">{module.description}</p>
        </div>
      </motion.header>

      <div className="card-grid">
        {module.tutorials.map((tut, i) => (
          <TutorialCard key={tut.title + i} tutorial={tut} index={i} t={t} />
        ))}
      </div>
    </section>
  )
}
