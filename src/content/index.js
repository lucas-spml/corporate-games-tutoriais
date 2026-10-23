import pt from './pt.js'
import en from './en.js'
import es from './es.js'

// Para adicionar um idioma: crie o arquivo (ex: fr.js), importe aqui,
// adicione em LANGUAGES, em CONTENT e em UI (textos da interface).

export const LANGUAGES = [
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
]

// Módulos e tutoriais com "hidden: true" não aparecem no site
const visible = (modules) =>
  modules
    .filter((m) => !m.hidden)
    .map((m) => ({ ...m, tutorials: m.tutorials.filter((tut) => !tut.hidden) }))

export const CONTENT = { pt: visible(pt), en: visible(en), es: visible(es) }

export const UI = {
  pt: {
    eyebrow: 'Central de tutoriais',
    heroTitle: ['Aprenda tudo sobre o', 'Corporate Games'],
    heroText:
      'Vídeos curtos e diretos, organizados por módulo, para você aproveitar a plataforma do primeiro acesso ao pódio.',
    search: 'Buscar tutorial…',
    modules: 'módulos',
    videos: 'vídeos',
    module: 'Módulo',
    comingSoon: 'Vídeo em breve',
    noResults: 'Nenhum tutorial encontrado para',
    clear: 'Limpar busca',
    language: 'Idioma',
    themeLight: 'Modo claro',
    themeDark: 'Modo escuro',
    backToTop: 'Voltar ao topo',
    footer: 'Todos os direitos reservados.',
    play: 'Assistir',
  },
  en: {
    eyebrow: 'Tutorial hub',
    heroTitle: ['Learn everything about', 'Corporate Games'],
    heroText:
      'Short, to-the-point videos organized by module, so you get the most out of the platform from first login to the podium.',
    search: 'Search tutorials…',
    modules: 'modules',
    videos: 'videos',
    module: 'Module',
    comingSoon: 'Video coming soon',
    noResults: 'No tutorials found for',
    clear: 'Clear search',
    language: 'Language',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    backToTop: 'Back to top',
    footer: 'All rights reserved.',
    play: 'Watch',
  },
  es: {
    eyebrow: 'Centro de tutoriales',
    heroTitle: ['Aprende todo sobre', 'Corporate Games'],
    heroText:
      'Videos cortos y directos, organizados por módulo, para que aproveches la plataforma desde el primer acceso hasta el podio.',
    search: 'Buscar tutorial…',
    modules: 'módulos',
    videos: 'videos',
    module: 'Módulo',
    comingSoon: 'Video próximamente',
    noResults: 'No se encontraron tutoriales para',
    clear: 'Limpiar búsqueda',
    language: 'Idioma',
    themeLight: 'Modo claro',
    themeDark: 'Modo oscuro',
    backToTop: 'Volver arriba',
    footer: 'Todos los derechos reservados.',
    play: 'Ver',
  },
}
