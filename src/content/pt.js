// ─────────────────────────────────────────────────────────────
//  TUTORIAIS EM PORTUGUÊS
//
//  Cada módulo tem: id, título, descrição e uma lista de tutoriais.
//  Em "video" cole o link do YouTube (qualquer formato) ou só o ID:
//    'https://www.youtube.com/watch?v=XXXXXXXXXXX'
//    'https://youtu.be/XXXXXXXXXXX'
//    'XXXXXXXXXXX'
//  Deixe '' para mostrar o espaço "Vídeo em breve".
//  Adicione hidden: true para ocultar um tutorial (ou um módulo inteiro) do site.
// ─────────────────────────────────────────────────────────────

export default [
  {
    id: 'primeiros-passos',
    title: 'Primeiros passos',
    description: 'Tudo o que você precisa para começar na plataforma Corporate Games.',
    tutorials: [
      {
        title: 'Bem-vindo ao Corporate Games',
        description: 'Uma visão geral da plataforma, do evento e de como tudo funciona.',
        duration: '',
        video: '',
      },
      {
        title: 'Montando equipes',
        description: 'Crie equipes, defina capitães e organize os participantes.',
        duration: '',
        video: 'B9RG4V2ZkEY',
      },
      {
        title: 'Escolhendo modalidades',
        description: 'Como selecionar as modalidades e inscrever atletas em cada uma.',
        duration: '',
        video: '',
      },
      {
        title: 'Criando sua conta',
        description: 'Passo a passo para se cadastrar e acessar pela primeira vez.',
        duration: '',
        video: '',
        hidden: true,
      },
      {
        title: 'Navegando pelo painel',
        description: 'Conheça os menus, atalhos e onde encontrar cada informação.',
        duration: '',
        video: '',
        hidden: true,
      },
    ],
  },
  {
    id: 'inscricoes-equipes',
    hidden: true,
    title: 'Inscrições e equipes',
    description: 'Como montar sua equipe, convidar colegas e gerenciar inscrições.',
    tutorials: [
      {
        title: 'Inscrevendo sua empresa',
        description: 'Como registrar a empresa e definir os responsáveis.',
        duration: '',
        video: '',
      },
      {
        title: 'Convidando participantes',
        description: 'Envie convites e acompanhe quem já confirmou presença.',
        duration: '',
        video: '',
      },
    ],
  },
  {
    id: 'modalidades',
    hidden: true,
    title: 'Modalidades',
    description: 'Regras, formatos e dicas de cada modalidade disputada.',
    tutorials: [
      {
        title: 'Regulamento geral',
        description: 'As principais regras que valem para todas as competições.',
        duration: '',
        video: '',
      },
    ],
  },
  {
    id: 'aplicativo',
    title: 'Aplicativo',
    description: 'Use o app para acompanhar jogos, resultados e notificações.',
    tutorials: [
      {
        title: 'Instalando o app',
        description: 'Download, login e configurações iniciais no celular.',
        duration: '',
        video: '',
      },
      {
        title: 'Funcionalidades do aplicativo',
        description: 'Acompanhe horários dos jogos e receba alertas em tempo real.',
        duration: '',
        video: '',
      },
      {
        title: 'Check-in no evento',
        description: 'Como fazer o check-in usando o QR Code no dia da competição.',
        duration: '',
        video: '',
      },
    ],
  },
  {
    id: 'desafios',
    title: 'Desafios',
    description: 'Conheça o módulo de desafios do app e como participar.',
    tutorials: [
      {
        title: 'Tipos de desafios',
        description: 'Os diferentes desafios disponíveis no app e como cada um funciona.',
        duration: '',
        video: '',
      },
      {
        title: 'Área para patrocinadores',
        description: 'O espaço dedicado aos patrocinadores dentro dos desafios.',
        duration: '',
        video: '',
      },
    ],
  },
  {
    id: 'gestores',
    hidden: true,
    title: 'Para gestores',
    description: 'Ferramentas para RH e organizadores administrarem o evento.',
    tutorials: [
      {
        title: 'Painel do gestor',
        description: 'Visão geral dos indicadores de engajamento da sua empresa.',
        duration: '',
        video: '',
      },
      {
        title: 'Exportando relatórios',
        description: 'Gere relatórios de participação e resultados em poucos cliques.',
        duration: '',
        video: '',
      },
    ],
  },
]
