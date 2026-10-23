import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { youtubeId } from '../hooks.js'
import { Play } from './Icons.jsx'

// Mostra a miniatura do YouTube e só carrega o player ao clicar:
// a página fica leve mesmo com dezenas de vídeos.
export default function VideoEmbed({ video, title, t }) {
  const id = youtubeId(video)
  const [playing, setPlaying] = useState(false)

  if (!id) {
    return (
      <div className="video video-empty">
        <div className="video-empty-stripes" aria-hidden />
        <div className="video-empty-content">
          <span className="video-empty-icon">
            <Play />
          </span>
          <span>{t.comingSoon}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="video">
      <AnimatePresence initial={false}>
        {playing ? (
          <motion.iframe
            key="player"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <motion.button
            key="poster"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`${t.play}: ${title}`}
            exit={{ opacity: 0 }}
          >
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="video-shade" />
            <span className="video-play">
              <Play />
            </span>
            <span className="video-cta">{t.play}</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
