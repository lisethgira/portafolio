export type Lang = 'es' | 'en' | 'pt'

export const languages: { code: Lang; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
]

type Text = Record<Lang, string>

export const profile = {
  name: 'Liseth Arelis Giraldo Morales',
  shortName: 'Liseth Giraldo',
  email: 'lisethgiraldo628@gmail.com',
  phone: '+57 320 579 0377',
  whatsapp: 'https://wa.me/573205790377',
  github: 'https://github.com/lisethgira',
  linkedin: 'https://www.linkedin.com/in/liseth-giraldo/',
  cv: '/Liseth_Giraldo_CV_FullStack.pdf',
}

export const ui = {
  nav: {
    about: { es: 'Sobre mí', en: 'About', pt: 'Sobre mim' },
    experience: { es: 'Experiencia', en: 'Experience', pt: 'Experiência' },
    skills: { es: 'Habilidades', en: 'Skills', pt: 'Habilidades' },
    projects: { es: 'Proyectos', en: 'Projects', pt: 'Projetos' },
    teaching: { es: 'Docencia', en: 'Teaching', pt: 'Docência' },
    contact: { es: 'Contacto', en: 'Contact', pt: 'Contato' },
  },
  cv: { es: 'Descargar CV', en: 'Download CV', pt: 'Baixar CV' },
  cvNote: { es: '', en: ' (Spanish)', pt: ' (em espanhol)' },
  toggleTheme: { es: 'Cambiar tema', en: 'Toggle theme', pt: 'Alternar tema' },
  toggleLang: { es: 'Cambiar idioma', en: 'Change language', pt: 'Mudar idioma' },
  openMenu: { es: 'Abrir menú', en: 'Open menu', pt: 'Abrir menu' },
  closeMenu: { es: 'Cerrar menú', en: 'Close menu', pt: 'Fechar menu' },
  available: { es: 'Disponible para nuevos retos · remoto o híbrido', en: 'Open to new roles · remote or hybrid', pt: 'Aberta a novas oportunidades · remoto ou híbrido' },
  hello: { es: 'Hola, soy', en: "Hi, I'm", pt: 'Olá, eu sou' },
  role: { es: 'Desarrolladora Full Stack', en: 'Full Stack Developer', pt: 'Desenvolvedora Full Stack' },
  role2: { es: 'e Instructora de Programación', en: '& Programming Instructor', pt: 'e Instrutora de Programação' },
  heroText: {
    es: 'Construyo aplicaciones web de punta a punta con JavaScript y TypeScript —Angular, React, Node.js— y llevo la IA generativa al ciclo de desarrollo. También formo a nuevas generaciones de desarrolladores en el SENA.',
    en: 'I build end-to-end web applications with JavaScript and TypeScript —Angular, React, Node.js— and bring generative AI into the development cycle. I also train the next generation of developers at SENA.', pt: 'Construo aplicações web de ponta a ponta com JavaScript e TypeScript —Angular, React, Node.js— e levo a IA generativa ao ciclo de desenvolvimento. Também formo a próxima geração de desenvolvedores no SENA.',
  },
  seeProjects: { es: 'Ver proyectos', en: 'See projects', pt: 'Ver projetos' },
  stats: [
    { value: '5+', label: { es: 'años en software (desde 2021)', en: 'years in software (since 2021)', pt: 'anos em software (desde 2021)' } },
    { value: '2', label: { es: 'países: Colombia y Brasil', en: 'countries: Colombia & Brazil', pt: 'países: Colômbia e Brasil' } },
    { value: 'IA', label: { es: 'LLMs, RAG y agentes', en: 'LLMs, RAG & agents', pt: 'LLMs, RAG e agentes' } },
  ],
  sections: {
    about: { es: 'Sobre mí', en: 'About me', pt: 'Sobre mim' },
    experience: { es: 'Experiencia', en: 'Experience', pt: 'Experiência' },
    skills: { es: 'Habilidades', en: 'Skills', pt: 'Habilidades' },
    projects: { es: 'Proyectos', en: 'Projects', pt: 'Projetos' },
    more: { es: 'Más proyectos y pruebas técnicas', en: 'More projects & technical tests', pt: 'Mais projetos e testes técnicos' },
    teaching: { es: 'Docencia y formación', en: 'Teaching & education', pt: 'Docência e formação' },
    education: { es: 'Educación', en: 'Education', pt: 'Formação acadêmica' },
    certs: { es: 'Certificaciones', en: 'Certifications', pt: 'Certificações' },
    contact: { es: 'Hablemos', en: "Let's talk", pt: 'Vamos conversar' },
  },
  sectionIntro: {
    experience: { es: 'Del primer aprendizaje en 2021 a proyectos de tránsito para Brasil y Colombia.', en: 'From my first apprenticeship in 2021 to traffic-management projects for Brazil and Colombia.', pt: 'Do meu primeiro estágio em 2021 a projetos de gestão de trânsito para o Brasil e a Colômbia.' },
    skills: { es: 'Fuerte en JavaScript y TypeScript, cómoda en cualquier capa del stack.', en: 'Strong in JavaScript and TypeScript, comfortable across the whole stack.', pt: 'Forte em JavaScript e TypeScript, à vontade em qualquer camada do stack.' },
    projects: { es: 'Proyectos personales y académicos en los que diseño, programo y despliego todo el producto.', en: 'Personal and academic projects where I design, build and deploy the whole product.', pt: 'Projetos pessoais e acadêmicos em que projeto, desenvolvo e publico o produto inteiro.' },
  },
  demo: { es: 'Demo', en: 'Live demo', pt: 'Demo' },
  code: { es: 'Código', en: 'Code', pt: 'Código' },
  current: { es: 'Actualidad', en: 'Present', pt: 'Atual' },
  contactText: {
    es: '¿Tienes una vacante, un proyecto o una formación en mente? Escríbeme y te respondo pronto.',
    en: 'Have a role, a project or a training program in mind? Drop me a line and I will get back to you soon.', pt: 'Tem uma vaga, um projeto ou uma formação em mente? Escreva para mim e responderei em breve.',
  },
  writeMe: { es: 'Escríbeme', en: 'Email me', pt: 'Enviar e-mail' },
  location: { es: 'Rionegro, Antioquia, Colombia', en: 'Rionegro, Antioquia, Colombia', pt: 'Rionegro, Antioquia, Colômbia' },
  footer: { es: 'Diseñado y desarrollado por Liseth Giraldo con React, TypeScript y Tailwind CSS.', en: 'Designed and built by Liseth Giraldo with React, TypeScript and Tailwind CSS.', pt: 'Projetado e desenvolvido por Liseth Giraldo com React, TypeScript e Tailwind CSS.' },
} satisfies Record<string, unknown>

export const about: {
  paragraphs: Text[]
  highlights: { title: Text; text: Text; icon: 'code' | 'bot' | 'teach' | 'heart' }[]
} = {
  paragraphs: [
    {
      es: 'Soy desarrolladora Full Stack con más de cinco años en la industria del software. Empecé en 2021 como aprendiz en Choucair Testing y desde entonces he trabajado en Rocketfy, en Tecnoparque SENA y en Quipux, donde desarrollé soluciones de tránsito para las células de Brasil y Colombia.',
      en: 'I am a Full Stack Developer with more than five years in the software industry. I started in 2021 as an apprentice at Choucair Testing and have since worked at Rocketfy, SENA Tecnoparque and Quipux, where I built traffic-management solutions for the Brazil and Colombia teams.', pt: 'Sou desenvolvedora Full Stack com mais de cinco anos na indústria de software. Comecei em 2021 como aprendiz na Choucair Testing e desde então trabalhei na Rocketfy, no Tecnoparque SENA e na Quipux, onde desenvolvi soluções de trânsito para as equipes do Brasil e da Colômbia.',
    },
    {
      es: 'Mi énfasis es el frontend (Angular, React, Vue) con TypeScript, pero me desempeño en todo el stack: APIs con Node.js, Express y NestJS, bases de datos SQL y NoSQL, y despliegues en AWS, Vercel y Docker. Java y Python complementan mi caja de herramientas.',
      en: 'My focus is the frontend (Angular, React, Vue) with TypeScript, but I work across the stack: APIs with Node.js, Express and NestJS, SQL and NoSQL databases, and deployments on AWS, Vercel and Docker. Java and Python round out my toolbox.', pt: 'Meu foco é o frontend (Angular, React, Vue) com TypeScript, mas atuo em todo o stack: APIs com Node.js, Express e NestJS, bancos de dados SQL e NoSQL, e deploys na AWS, Vercel e Docker. Java e Python completam minha caixa de ferramentas.',
    },
    {
      es: 'Estudio Ingeniería de Sistemas en UNIMINUTO, soy tecnóloga del SENA y enseño programación en el SENA y en FESNI. Fuera del código soy socorrista de la Defensa Civil Colombiana y scout.',
      en: 'I am studying Systems Engineering at UNIMINUTO, hold a Software Analysis and Development technology degree from SENA, and teach programming at SENA and FESNI. Outside of code I am a Colombian Civil Defense first responder and a scout.', pt: 'Estudo Engenharia de Sistemas na UNIMINUTO, sou tecnóloga em Análise e Desenvolvimento de Software pelo SENA e ensino programação no SENA e na FESNI. Fora do código, sou socorrista da Defesa Civil Colombiana e escoteira.',
    },
  ],
  highlights: [
    { icon: 'code', title: { es: 'Full Stack con énfasis en frontend', en: 'Full stack, frontend-focused', pt: 'Full Stack com ênfase em frontend' }, text: { es: 'Angular, React, micro-frontends y APIs REST en Node.js.', en: 'Angular, React, micro-frontends and REST APIs in Node.js.', pt: 'Angular, React, micro-frontends e APIs REST em Node.js.' } },
    { icon: 'bot', title: { es: 'IA generativa aplicada', en: 'Applied generative AI', pt: 'IA generativa aplicada' }, text: { es: 'Agentes de IA, RAG y revisión de código asistida por IA.', en: 'AI agents, RAG and AI-assisted code review.', pt: 'Agentes de IA, RAG e revisão de código assistida por IA.' } },
    { icon: 'teach', title: { es: 'Docente de programación', en: 'Programming instructor', pt: 'Instrutora de programação' }, text: { es: 'Formación técnica en software, móviles y bases de datos.', en: 'Technical training in software, mobile and databases.', pt: 'Formação técnica em software, mobile e bancos de dados.' } },
    { icon: 'heart', title: { es: 'Servicio y liderazgo', en: 'Service & leadership', pt: 'Serviço e liderança' }, text: { es: 'Socorrista de la Defensa Civil y líder scout.', en: 'Civil Defense first responder and scout leader.', pt: 'Socorrista da Defesa Civil e líder escoteira.' } },
  ],
}

export type Job = {
  role: Text
  company: string
  period: Text
  place: Text
  current?: boolean
  bullets: Text[]
  stack: string[]
}

export const jobs: Job[] = [
  {
    role: { es: 'Instructora SENA TIC – Programación de Software', en: 'SENA TIC Instructor – Software Programming', pt: 'Instrutora SENA TIC – Programação de Software' },
    company: 'SENA · Proyecto SENATIC',
    period: { es: 'Abr 2026 – Actualidad', en: 'Apr 2026 – Present', pt: 'Abr 2026 – Atual' },
    place: { es: 'Rionegro, El Carmen de Viboral y La Unión · Presencial', en: 'Rionegro, El Carmen de Viboral & La Unión · On-site', pt: 'Rionegro, El Carmen de Viboral e La Unión · Presencial' },
    current: true,
    bullets: [
      { es: 'Formo a estudiantes de media técnica en Programación de Software, Aplicaciones Móviles y Mantenimiento de Equipos de Cómputo.', en: 'I teach technical high-school students Software Programming, Mobile Apps and Computer Maintenance.', pt: 'Formo alunos do ensino médio técnico em Programação de Software, Aplicativos Móveis e Manutenção de Computadores.' },
      { es: 'Diseño guías, rúbricas e instrumentos de evaluación alineados a los resultados de aprendizaje del SENA.', en: 'I design learning guides, rubrics and assessments aligned with SENA learning outcomes.', pt: 'Elaboro guias de aprendizagem, rubricas e instrumentos de avaliação alinhados aos resultados de aprendizagem do SENA.' },
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'PWA'],
  },
  {
    role: { es: 'Desarrolladora Frontend (stack Angular + Java)', en: 'Frontend Developer (Angular + Java stack)', pt: 'Desenvolvedora Frontend (stack Angular + Java)' },
    company: 'Quipux S.A.S.',
    period: { es: 'Mar 2025 – Jun 2026', en: 'Mar 2025 – Jun 2026', pt: 'Mar 2025 – Jun 2026' },
    place: { es: 'Medellín · Híbrido', en: 'Medellín · Hybrid', pt: 'Medellín · Híbrido' },
    bullets: [
      { es: 'Desarrollé, mantuve y desplegué soluciones de tránsito para las células de Brasil y Colombia con Angular, micro-frontends (module federation) y PrimeNG.', en: 'Built, maintained and deployed traffic-management solutions for the Brazil and Colombia teams with Angular, micro-frontends (module federation) and PrimeNG.', pt: 'Desenvolvi, mantive e publiquei soluções de gestão de trânsito para as equipes do Brasil e da Colômbia com Angular, micro-frontends (module federation) e PrimeNG.' },
      { es: 'Creé agentes de IA para la arquitectura frontend y apoyé el entrenamiento de Innti, la IA propia de la empresa, con OpenAI.', en: 'Built AI agents for the frontend architecture and helped train Innti, the company’s in-house AI, using OpenAI.', pt: 'Criei agentes de IA para a arquitetura frontend e apoiei o treinamento da Innti, a IA própria da empresa, com OpenAI.' },
      { es: 'Desarrollé órdenes de comparendo, plantillas PDF dinámicas, notificaciones por correo y el módulo de tickets de soporte.', en: 'Delivered traffic-ticket documents, dynamic PDF templates, email notifications and the support-ticket module.', pt: 'Desenvolvi autos de infração, modelos de PDF dinâmicos, notificações por e-mail e o módulo de chamados de suporte.' },
      { es: 'Trabajé con AWS, WordPress, Qontent y Google Tag Manager aplicando SEO y accesibilidad (WCAG); colaboré en portugués bajo Scrum.', en: 'Worked with AWS, WordPress, Qontent and Google Tag Manager applying SEO and accessibility (WCAG); collaborated in Portuguese under Scrum.', pt: 'Trabalhei com AWS, WordPress, Qontent e Google Tag Manager aplicando SEO e acessibilidade (WCAG); colaborei em português com Scrum.' },
    ],
    stack: ['Angular', 'TypeScript', 'PrimeNG', 'Micro-frontends', 'Java', 'AWS', 'OpenAI'],
  },
  {
    role: { es: 'Maestra de cátedra – Programación de Software', en: 'Adjunct Instructor – Software Programming', pt: 'Professora – Programação de Software' },
    company: 'FESNI · Fundación Educativa San Nicolás',
    period: { es: 'Ene 2025 – Actualidad', en: 'Jan 2025 – Present', pt: 'Jan 2025 – Atual' },
    place: { es: 'Rionegro · Presencial', en: 'Rionegro · On-site', pt: 'Rionegro · Presencial' },
    current: true,
    bullets: [
      { es: 'Docente del Técnico en Diseño y Desarrollo de Software: Diseño y Desarrollo de Software, Lenguaje de Programación y Bases de Datos.', en: 'Instructor for the Software Design & Development technical program: software design, programming languages and databases.', pt: 'Professora do curso técnico em Design e Desenvolvimento de Software: design de software, linguagens de programação e bancos de dados.' },
      { es: 'Docente de Bases de Datos para Marketing en el Técnico en Marketing.', en: 'Instructor of Databases for Marketing in the Marketing technical program.', pt: 'Professora de Bancos de Dados para Marketing no curso técnico em Marketing.' },
    ],
    stack: ['JavaScript', 'SQL', 'MySQL', 'UML'],
  },
  {
    role: { es: 'Pasante de Desarrollo de Software', en: 'Software Development Intern', pt: 'Estagiária de Desenvolvimento de Software' },
    company: 'SENA · Tecnoparque Nodo Medellín',
    period: { es: 'May 2024 – Nov 2024', en: 'May 2024 – Nov 2024', pt: 'Mai 2024 – Nov 2024' },
    place: { es: 'Medellín · Remoto', en: 'Medellín · Remote', pt: 'Medellín · Remoto' },
    bullets: [
      { es: 'Prototipo de ConexCampo, una PWA que conecta campesinos con expertos por chat y videollamada en tiempo real.', en: 'Prototyped ConexCampo, a PWA that connects farmers with experts via real-time chat and video calls.', pt: 'Protótipo do ConexCampo, uma PWA que conecta agricultores a especialistas por chat e videochamada em tempo real.' },
      { es: 'Prototipo de una plataforma web de microcréditos para fomentar la cultura financiera.', en: 'Prototyped a micro-credit web platform to promote financial literacy.', pt: 'Protótipo de uma plataforma web de microcrédito para promover a educação financeira.' },
    ],
    stack: ['PWA', 'Prototipado', 'Tiempo real'],
  },
  {
    role: { es: 'Desarrolladora Web', en: 'Web Developer', pt: 'Desenvolvedora Web' },
    company: 'Rocketfy S.A.S.',
    period: { es: 'Nov 2022 – Feb 2024', en: 'Nov 2022 – Feb 2024', pt: 'Nov 2022 – Fev 2024' },
    place: { es: 'Medellín · Remoto', en: 'Medellín · Remote', pt: 'Medellín · Remoto' },
    bullets: [
      { es: 'Desarrollé componentes, funcionalidades y servicios para Rocketfy LATAM, Colombia y México con Angular y Node.js.', en: 'Built components, features and services for Rocketfy LATAM, Colombia and Mexico with Angular and Node.js.', pt: 'Desenvolvi componentes, funcionalidades e serviços para a Rocketfy LATAM, Colômbia e México com Angular e Node.js.' },
      { es: 'Implementé interfaces responsivas y flujos de autenticación seguros con estado global en NgRx.', en: 'Implemented responsive UIs and secure authentication flows with NgRx global state.', pt: 'Implementei interfaces responsivas e fluxos de autenticação seguros com estado global em NgRx.' },
      { es: 'Construí APIs REST con JWT y gestioné bases de datos MongoDB.', en: 'Built REST APIs with JWT and managed MongoDB databases.', pt: 'Construí APIs REST com JWT e gerenciei bancos de dados MongoDB.' },
    ],
    stack: ['Angular', 'NgRx', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    role: { es: 'Auxiliar de TI', en: 'IT Assistant', pt: 'Assistente de TI' },
    company: 'Choucair Testing S.A.',
    period: { es: 'Feb 2022 – Nov 2022', en: 'Feb 2022 – Nov 2022', pt: 'Fev 2022 – Nov 2022' },
    place: { es: 'Medellín · Híbrido', en: 'Medellín · Hybrid', pt: 'Medellín · Híbrido' },
    bullets: [
      { es: 'Mantenimiento de aplicaciones Node.js y documentación de soluciones de TI de punta a punta.', en: 'Maintained Node.js applications and documented IT solutions end to end.', pt: 'Manutenção de aplicações Node.js e documentação de soluções de TI de ponta a ponta.' },
      { es: 'Administré repositorios en Azure DevOps y configuré pipelines de despliegue con Docker.', en: 'Managed Azure DevOps repositories and set up deployment pipelines with Docker.', pt: 'Administrei repositórios no Azure DevOps e configurei pipelines de deploy com Docker.' },
    ],
    stack: ['Node.js', 'Azure DevOps', 'Docker', 'Git'],
  },
  {
    role: { es: 'Aprendiz de Soluciones TI', en: 'IT Solutions Apprentice', pt: 'Aprendiz de Soluções de TI' },
    company: 'Choucair Testing S.A.',
    period: { es: 'Feb 2021 – Feb 2022', en: 'Feb 2021 – Feb 2022', pt: 'Fev 2021 – Fev 2022' },
    place: { es: 'Medellín · Híbrido', en: 'Medellín · Hybrid', pt: 'Medellín · Híbrido' },
    bullets: [
      { es: 'Mi primera experiencia: aplicativos con React y Express bajo metodologías ágiles, con despliegues en desarrollo, pruebas y producción.', en: 'My first role: React and Express applications under agile practices, deployed to dev, QA and production.', pt: 'Minha primeira experiência: aplicações com React e Express em metodologias ágeis, com deploys em desenvolvimento, testes e produção.' },
    ],
    stack: ['React', 'Express', 'Scrum'],
  },
]

export const skillGroups: { title: Text; icon: 'code' | 'layers' | 'server' | 'bot' | 'db' | 'cloud' | 'wrench'; primary: string[]; secondary?: string[] }[] = [
  { icon: 'code', title: { es: 'Lenguajes', en: 'Languages', pt: 'Linguagens' }, primary: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'], secondary: ['Java', 'Python'] },
  { icon: 'layers', title: { es: 'Frontend', en: 'Frontend', pt: 'Frontend' }, primary: ['Angular', 'React', 'Vue 3', 'Tailwind CSS', 'PrimeNG', 'NgRx', 'Redux'], secondary: ['Micro-frontends', 'PWA', 'Material UI'] },
  { icon: 'server', title: { es: 'Backend y APIs', en: 'Backend & APIs', pt: 'Backend e APIs' }, primary: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'JWT'], secondary: ['Spring Boot', 'Socket.io', 'Arquitectura hexagonal'] },
  { icon: 'bot', title: { es: 'Inteligencia artificial', en: 'Artificial intelligence', pt: 'Inteligência artificial' }, primary: ['IA generativa', 'LLMs', 'RAG', 'Agentes de IA', 'OpenAI API'], secondary: ['Revisión de código con IA'] },
  { icon: 'db', title: { es: 'Bases de datos', en: 'Databases', pt: 'Bancos de dados' }, primary: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'], secondary: ['Firebase', 'Supabase'] },
  { icon: 'cloud', title: { es: 'Cloud y DevOps', en: 'Cloud & DevOps', pt: 'Cloud e DevOps' }, primary: ['AWS', 'Docker', 'Vercel', 'CI/CD', 'Azure DevOps'], secondary: ['Nginx', 'Linux', 'Clever Cloud'] },
  { icon: 'wrench', title: { es: 'Herramientas y métodos', en: 'Tools & methods', pt: 'Ferramentas e métodos' }, primary: ['Git', 'GitHub', 'Postman', 'Jira', 'Scrum'], secondary: ['Confluence', 'WCAG', 'SEO', 'Figma'] },
]

/** Translations for skill names that change between languages. */
export const skillLabel: Record<string, Text> = {
  'IA generativa': { es: 'IA generativa', en: 'Generative AI', pt: 'IA generativa' },
  'Agentes de IA': { es: 'Agentes de IA', en: 'AI agents', pt: 'Agentes de IA' },
  'Revisión de código con IA': { es: 'Revisión de código con IA', en: 'AI-assisted code review', pt: 'Revisão de código com IA' },
  'Arquitectura hexagonal': { es: 'Arquitectura hexagonal', en: 'Hexagonal architecture', pt: 'Arquitetura hexagonal' },
  Prototipado: { es: 'Prototipado', en: 'Prototyping', pt: 'Prototipagem' },
  'Tiempo real': { es: 'Tiempo real', en: 'Real-time', pt: 'Tempo real' },
}

export type Project = {
  name: string
  kind: Text
  description: Text
  points: Text[]
  stack: string[]
  repo: string
  demo?: string
  hue: 'teal' | 'violet' | 'amber' | 'rose' | 'sky' | 'lime' | 'orange'
  icon: 'cart' | 'truck' | 'hexagon' | 'coffee' | 'wallet' | 'compass'
}

export const projects: Project[] = [
  {
    name: 'MercaYa',
    kind: { es: 'PWA · Full Stack', en: 'PWA · Full stack', pt: 'PWA · Full Stack' },
    description: {
      es: 'Marketplace de compra y venta con roles de administrador, vendedor y cliente.',
      en: 'Buy-and-sell marketplace with admin, seller and customer roles.', pt: 'Marketplace de compra e venda com perfis de administrador, vendedor e cliente.',
    },
    points: [
      { es: 'Autenticación JWT con cookies, validación con Zod y límite de peticiones', en: 'JWT auth with cookies, Zod validation and rate limiting', pt: 'Autenticação JWT com cookies, validação com Zod e limite de requisições' },
      { es: 'Notificaciones push y por correo, carga de imágenes de productos', en: 'Push and email notifications, product image uploads', pt: 'Notificações push e por e-mail, upload de imagens de produtos' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Web Push'],
    repo: 'https://github.com/lisethgira/merca-ya',
    demo: 'https://merca-ya-iota.vercel.app',
    hue: 'teal',
    icon: 'cart',
  },
  {
    name: 'EcoRuta',
    kind: { es: 'PWA · Full Stack', en: 'PWA · Full stack', pt: 'PWA · Full Stack' },
    description: {
      es: 'Consulta los horarios del camión de la basura en tu barrio, también sin conexión.',
      en: 'Check garbage-truck schedules for your neighborhood, even offline.', pt: 'Consulte os horários do caminhão de lixo no seu bairro, até sem internet.',
    },
    points: [
      { es: 'Instalable y con soporte offline (Workbox)', en: 'Installable with offline support (Workbox)', pt: 'Instalável e com suporte offline (Workbox)' },
      { es: 'Historias de usuario, requerimientos y modelo E-R documentados', en: 'Documented user stories, requirements and E-R model', pt: 'Histórias de usuário, requisitos e modelo E-R documentados' },
    ],
    stack: ['React', 'Tailwind CSS', 'PWA', 'Express', 'MySQL', 'Clever Cloud'],
    repo: 'https://github.com/lisethgira/mi-camion-verde',
    hue: 'lime',
    icon: 'truck',
  },
  {
    name: 'E-Wallet · Hexagonal',
    kind: { es: 'Arquitectura · Full Stack', en: 'Architecture · Full stack', pt: 'Arquitetura · Full Stack' },
    description: {
      es: 'Billetera digital con API de autenticación en arquitectura hexagonal: dominio, casos de uso, puertos y adaptadores.',
      en: 'Digital wallet with an authentication API built on hexagonal architecture: domain, use cases, ports and adapters.', pt: 'Carteira digital com API de autenticação em arquitetura hexagonal: domínio, casos de uso, portas e adaptadores.',
    },
    points: [
      { es: 'Registro, login, recuperación de contraseña y rutas protegidas', en: 'Sign-up, login, password reset and protected routes', pt: 'Cadastro, login, recuperação de senha e rotas protegidas' },
      { es: 'Inyección de dependencias: el dominio no conoce Express ni la base de datos', en: 'Dependency injection: the domain knows nothing about Express or the database', pt: 'Injeção de dependências: o domínio não conhece o Express nem o banco de dados' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT'],
    repo: 'https://github.com/lisethgira/proyecto-base',
    hue: 'violet',
    icon: 'hexagon',
  },
  {
    name: 'Don Henry Café',
    kind: { es: 'Web app · Frontend + API', en: 'Web app · Frontend + API', pt: 'Web app · Frontend + API' },
    description: {
      es: 'Sistema de venta para una cafetería: catálogo, pedidos y panel por roles.',
      en: 'Ordering system for a coffee shop: catalog, orders and role-based dashboard.', pt: 'Sistema de vendas para uma cafeteria: catálogo, pedidos e painel por perfis.',
    },
    points: [
      { es: 'Permisos por rol con CASL y autenticación con Auth0', en: 'Role permissions with CASL and Auth0 authentication', pt: 'Permissões por perfil com CASL e autenticação com Auth0' },
      { es: 'API modular en Express con PostgreSQL, Helmet y JWT', en: 'Modular Express API with PostgreSQL, Helmet and JWT', pt: 'API modular em Express com PostgreSQL, Helmet e JWT' },
    ],
    stack: ['React', 'Tailwind CSS', 'Material UI', 'Express', 'PostgreSQL'],
    repo: 'https://github.com/lisethgira/don-henry-cafe-frontend',
    demo: 'https://don-henry-cafe-frontend.vercel.app',
    hue: 'amber',
    icon: 'coffee',
  },
  {
    name: 'Balancea',
    kind: { es: 'Web app · Full Stack', en: 'Web app · Full stack', pt: 'Web app · Full Stack' },
    description: {
      es: 'Control de ingresos y gastos personales con categorías y gráficas.',
      en: 'Personal income and expense tracker with categories and charts.', pt: 'Controle de receitas e despesas pessoais com categorias e gráficos.',
    },
    points: [
      { es: 'Estado con Zustand y datos con TanStack Query', en: 'State with Zustand and data fetching with TanStack Query', pt: 'Estado com Zustand e dados com TanStack Query' },
      { es: 'Reportes visuales con Chart.js; backend modular en Express', en: 'Visual reports with Chart.js; modular Express backend', pt: 'Relatórios visuais com Chart.js; backend modular em Express' },
    ],
    stack: ['React', 'Zustand', 'TanStack Query', 'Chart.js', 'Supabase', 'Express'],
    repo: 'https://github.com/lisethgira/Balancea-App',
    hue: 'sky',
    icon: 'wallet',
  },
  {
    name: 'Exploradores de Colombia',
    kind: { es: 'PWA · Comunidad', en: 'PWA · Community', pt: 'PWA · Comunidade' },
    description: {
      es: 'Aplicación web para la Corporación Exploradores de Colombia, el movimiento scout en el que soy voluntaria.',
      en: 'Web app for Corporación Exploradores de Colombia, the scout movement where I volunteer.', pt: 'Aplicação web para a Corporación Exploradores de Colombia, o movimento escoteiro em que sou voluntária.',
    },
    points: [
      { es: 'PWA instalable con React Router y contextos', en: 'Installable PWA with React Router and contexts', pt: 'PWA instalável com React Router e contextos' },
    ],
    stack: ['React', 'Vite', 'PWA', 'Express'],
    repo: 'https://github.com/lisethgira/Exploradores-de-Colombia',
    hue: 'orange',
    icon: 'compass',
  },
]

export const moreProjects: { name: Text; text: Text; stack: string; repo: string }[] = [
  { name: { es: 'Chat en tiempo real', en: 'Real-time chat', pt: 'Chat em tempo real' }, text: { es: 'Chat con WebSockets (ngx-socket-io), sesión con JWT e interfaz en PrimeNG.', en: 'WebSocket chat (ngx-socket-io) with JWT sessions and a PrimeNG UI.', pt: 'Chat com WebSockets (ngx-socket-io), sessão com JWT e interface em PrimeNG.' }, stack: 'Angular · Socket.io · PrimeNG', repo: 'https://github.com/lisethgira/chat-frontend' },
  { name: { es: 'Prueba técnica Quipux', en: 'Quipux technical test', pt: 'Teste técnico Quipux' }, text: { es: 'Prueba de diseñador frontend: app en Angular 19 con SSR.', en: 'Frontend designer test: Angular 19 app with SSR.', pt: 'Teste de designer frontend: app em Angular 19 com SSR.' }, stack: 'Angular · SSR · Bootstrap', repo: 'https://github.com/lisethgira/prueba-tecnica-frontend-quipux-app' },
  { name: { es: 'Prueba técnica Lodgerin', en: 'Lodgerin technical test', pt: 'Teste técnico Lodgerin' }, text: { es: 'PWA en React a partir de un diseño en Figma, consumiendo la API de Rick and Morty.', en: 'React PWA built from a Figma design, consuming the Rick and Morty API.', pt: 'PWA em React a partir de um design no Figma, consumindo a API de Rick and Morty.' }, stack: 'React · Tailwind · PWA', repo: 'https://github.com/lisethgira/prueba-tecnica-frontend-lodgerin' },
  { name: { es: 'Amigo Secreto', en: 'Secret Santa', pt: 'Amigo Secreto' }, text: { es: 'Sorteo de amigo secreto con alertas personalizadas (challenge Alura / Oracle ONE).', en: 'Secret Santa draw with custom alerts (Alura / Oracle ONE challenge).', pt: 'Sorteio de amigo secreto com alertas personalizados (desafio Alura / Oracle ONE).' }, stack: 'JavaScript · HTML · CSS', repo: 'https://github.com/lisethgira/challenge-amigo-secreto' },
  { name: { es: 'Calculadora en React', en: 'React calculator', pt: 'Calculadora em React' }, text: { es: 'Ejercicio guiado para mis estudiantes del técnico en desarrollo de software.', en: 'Guided exercise for my software development students.', pt: 'Exercício guiado para meus alunos do curso técnico de desenvolvimento de software.' }, stack: 'React · JavaScript', repo: 'https://github.com/lisethgira/calculadora-liseth' },
  { name: { es: 'Tienda de café', en: 'Coffee shop', pt: 'Cafeteria' }, text: { es: 'Tienda de café en React con Tailwind, instalable como PWA.', en: 'Coffee shop site in React with Tailwind, installable as a PWA.', pt: 'Site de cafeteria em React com Tailwind, instalável como PWA.' }, stack: 'React · Tailwind · PWA', repo: 'https://github.com/lisethgira/starbucks' },
]

export const teaching: { title: Text; org: string; text: Text }[] = [
  { title: { es: 'Instructora SENA TIC', en: 'SENA TIC Instructor', pt: 'Instrutora SENA TIC' }, org: 'SENA · 2026', text: { es: 'Programación de Software, Aplicaciones Móviles y Mantenimiento de Equipos para la media técnica.', en: 'Software Programming, Mobile Apps and Computer Maintenance for technical high schools.', pt: 'Programação de Software, Aplicativos Móveis e Manutenção de Computadores para o ensino médio técnico.' } },
  { title: { es: 'Maestra de cátedra', en: 'Adjunct instructor', pt: 'Professora' }, org: 'FESNI · 2025 –', text: { es: 'Diseño y Desarrollo de Software, Lenguaje de Programación y Bases de Datos.', en: 'Software Design & Development, Programming Languages and Databases.', pt: 'Design e Desenvolvimento de Software, Linguagens de Programação e Bancos de Dados.' } },
  { title: { es: 'Mentora voluntaria', en: 'Volunteer mentor', pt: 'Mentora voluntária' }, org: 'Digital School · 2023 – 2024', text: { es: 'Acompañamiento a nuevos desarrolladores en el Bootcamp Full Stack.', en: 'Mentored new developers in the Full Stack Bootcamp.', pt: 'Acompanhei novos desenvolvedores no Bootcamp Full Stack.' } },
]

export const education: { title: Text; org: string; year: Text }[] = [
  { title: { es: 'Ingeniería de Sistemas', en: 'B.Sc. Systems Engineering', pt: 'Engenharia de Sistemas' }, org: 'UNIMINUTO', year: { es: 'En curso · dic 2026', en: 'In progress · Dec 2026', pt: 'Em andamento · dez 2026' } },
  { title: { es: 'Tecnología en Análisis y Desarrollo de Software', en: 'Software Analysis & Development Technologist', pt: 'Tecnóloga em Análise e Desenvolvimento de Software' }, org: 'SENA – CTGI', year: { es: '2024', en: '2024', pt: '2024' } },
  { title: { es: 'Técnico en Desarrollo de Software', en: 'Software Development Technician', pt: 'Técnica em Desenvolvimento de Software' }, org: 'CESDE', year: { es: '2022', en: '2022', pt: '2022' } },
]

export const certs: { name: Text; org: string; year: string }[] = [
  { name: { es: 'Certificado Profesional en Gestión de Proyectos', en: 'Project Management Professional Certificate', pt: 'Certificado Profissional em Gestão de Projetos' }, org: 'Google', year: '2025' },
  { name: { es: 'Scrum Foundation', en: 'Scrum Foundation', pt: 'Scrum Foundation' }, org: 'Certiprof', year: '2025' },
  { name: { es: 'IA en la educación (60 h)', en: 'AI in Education (60 h)', pt: 'IA na educação (60 h)' }, org: 'Tecnológico Coredi', year: '2025' },
  { name: { es: 'Docencia y gestión curricular por competencias', en: 'Competency-based teaching & curriculum design', pt: 'Docência e gestão curricular por competências' }, org: 'UNIMINUTO', year: '2026' },
  { name: { es: 'Fundamentos de Pruebas de Software', en: 'Software Testing Fundamentals', pt: 'Fundamentos de Testes de Software' }, org: 'Platzi', year: '2024' },
  { name: { es: 'Google IT Support', en: 'Google IT Support', pt: 'Google IT Support' }, org: 'Google · Coursera', year: '2022' },
]
