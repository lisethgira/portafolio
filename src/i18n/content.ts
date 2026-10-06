export type Lang = 'es' | 'en'

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
    about: { es: 'Sobre mí', en: 'About' },
    experience: { es: 'Experiencia', en: 'Experience' },
    skills: { es: 'Habilidades', en: 'Skills' },
    projects: { es: 'Proyectos', en: 'Projects' },
    teaching: { es: 'Docencia', en: 'Teaching' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  cv: { es: 'Descargar CV', en: 'Download CV' },
  cvNote: { es: '', en: ' (Spanish)' },
  toggleTheme: { es: 'Cambiar tema', en: 'Toggle theme' },
  toggleLang: { es: 'Switch to English', en: 'Cambiar a español' },
  openMenu: { es: 'Abrir menú', en: 'Open menu' },
  closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
  available: { es: 'Disponible para nuevos retos · remoto o híbrido', en: 'Open to new roles · remote or hybrid' },
  hello: { es: 'Hola, soy', en: "Hi, I'm" },
  role: { es: 'Desarrolladora Full Stack', en: 'Full Stack Developer' },
  role2: { es: 'e Instructora de Programación', en: '& Programming Instructor' },
  heroText: {
    es: 'Construyo aplicaciones web de punta a punta con JavaScript y TypeScript —Angular, React, Node.js— y llevo la IA generativa al ciclo de desarrollo. También formo a nuevas generaciones de desarrolladores en el SENA.',
    en: 'I build end-to-end web applications with JavaScript and TypeScript —Angular, React, Node.js— and bring generative AI into the development cycle. I also train the next generation of developers at SENA.',
  },
  seeProjects: { es: 'Ver proyectos', en: 'See projects' },
  stats: [
    { value: '5+', label: { es: 'años en software (desde 2021)', en: 'years in software (since 2021)' } },
    { value: '2', label: { es: 'países: Colombia y Brasil', en: 'countries: Colombia & Brazil' } },
    { value: 'IA', label: { es: 'LLMs, RAG y agentes', en: 'LLMs, RAG & agents' } },
  ],
  sections: {
    about: { es: 'Sobre mí', en: 'About me' },
    experience: { es: 'Experiencia', en: 'Experience' },
    skills: { es: 'Habilidades', en: 'Skills' },
    projects: { es: 'Proyectos', en: 'Projects' },
    more: { es: 'Más proyectos y pruebas técnicas', en: 'More projects & technical tests' },
    teaching: { es: 'Docencia y formación', en: 'Teaching & education' },
    education: { es: 'Educación', en: 'Education' },
    certs: { es: 'Certificaciones', en: 'Certifications' },
    contact: { es: 'Hablemos', en: "Let's talk" },
  },
  sectionIntro: {
    experience: { es: 'Del primer aprendizaje en 2021 a proyectos de tránsito para Brasil y Colombia.', en: 'From my first apprenticeship in 2021 to traffic-management projects for Brazil and Colombia.' },
    skills: { es: 'Fuerte en JavaScript y TypeScript, cómoda en cualquier capa del stack.', en: 'Strong in JavaScript and TypeScript, comfortable across the whole stack.' },
    projects: { es: 'Proyectos personales y académicos en los que diseño, programo y despliego todo el producto.', en: 'Personal and academic projects where I design, build and deploy the whole product.' },
  },
  demo: { es: 'Demo', en: 'Live demo' },
  code: { es: 'Código', en: 'Code' },
  current: { es: 'Actualidad', en: 'Present' },
  contactText: {
    es: '¿Tienes una vacante, un proyecto o una formación en mente? Escríbeme y te respondo pronto.',
    en: 'Have a role, a project or a training program in mind? Drop me a line and I will get back to you soon.',
  },
  writeMe: { es: 'Escríbeme', en: 'Email me' },
  location: { es: 'Rionegro, Antioquia, Colombia', en: 'Rionegro, Antioquia, Colombia' },
  footer: { es: 'Diseñado y desarrollado por Liseth Giraldo con React, TypeScript y Tailwind CSS.', en: 'Designed and built by Liseth Giraldo with React, TypeScript and Tailwind CSS.' },
} satisfies Record<string, unknown>

export const about: {
  paragraphs: Text[]
  highlights: { title: Text; text: Text; icon: 'code' | 'bot' | 'teach' | 'heart' }[]
} = {
  paragraphs: [
    {
      es: 'Soy desarrolladora Full Stack con más de cinco años en la industria del software. Empecé en 2021 como aprendiz en Choucair Testing y desde entonces he trabajado en Rocketfy, en Tecnoparque SENA y en Quipux, donde desarrollé soluciones de tránsito para las células de Brasil y Colombia.',
      en: 'I am a Full Stack Developer with more than five years in the software industry. I started in 2021 as an apprentice at Choucair Testing and have since worked at Rocketfy, SENA Tecnoparque and Quipux, where I built traffic-management solutions for the Brazil and Colombia teams.',
    },
    {
      es: 'Mi énfasis es el frontend (Angular, React, Vue) con TypeScript, pero me desempeño en todo el stack: APIs con Node.js, Express y NestJS, bases de datos SQL y NoSQL, y despliegues en AWS, Vercel y Docker. Java y Python complementan mi caja de herramientas.',
      en: 'My focus is the frontend (Angular, React, Vue) with TypeScript, but I work across the stack: APIs with Node.js, Express and NestJS, SQL and NoSQL databases, and deployments on AWS, Vercel and Docker. Java and Python round out my toolbox.',
    },
    {
      es: 'Estudio Ingeniería de Sistemas en UNIMINUTO, soy tecnóloga del SENA y enseño programación en el SENA y en FESNI. Fuera del código soy socorrista de la Defensa Civil Colombiana y scout.',
      en: 'I am studying Systems Engineering at UNIMINUTO, hold a Software Analysis and Development technology degree from SENA, and teach programming at SENA and FESNI. Outside of code I am a Colombian Civil Defense first responder and a scout.',
    },
  ],
  highlights: [
    { icon: 'code', title: { es: 'Full Stack con énfasis en frontend', en: 'Full stack, frontend-focused' }, text: { es: 'Angular, React, micro-frontends y APIs REST en Node.js.', en: 'Angular, React, micro-frontends and REST APIs in Node.js.' } },
    { icon: 'bot', title: { es: 'IA generativa aplicada', en: 'Applied generative AI' }, text: { es: 'Agentes de IA, RAG y revisión de código asistida por IA.', en: 'AI agents, RAG and AI-assisted code review.' } },
    { icon: 'teach', title: { es: 'Docente de programación', en: 'Programming instructor' }, text: { es: 'Formación técnica en software, móviles y bases de datos.', en: 'Technical training in software, mobile and databases.' } },
    { icon: 'heart', title: { es: 'Servicio y liderazgo', en: 'Service & leadership' }, text: { es: 'Socorrista de la Defensa Civil y líder scout.', en: 'Civil Defense first responder and scout leader.' } },
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
    role: { es: 'Instructora SENA TIC – Programación de Software', en: 'SENA TIC Instructor – Software Programming' },
    company: 'SENA · Proyecto SENATIC',
    period: { es: 'Abr 2026 – Actualidad', en: 'Apr 2026 – Present' },
    place: { es: 'Rionegro, El Carmen de Viboral y La Unión · Presencial', en: 'Rionegro, El Carmen de Viboral & La Unión · On-site' },
    current: true,
    bullets: [
      { es: 'Formo a estudiantes de media técnica en Programación de Software, Aplicaciones Móviles y Mantenimiento de Equipos de Cómputo.', en: 'I teach technical high-school students Software Programming, Mobile Apps and Computer Maintenance.' },
      { es: 'Diseño guías, rúbricas e instrumentos de evaluación alineados a los resultados de aprendizaje del SENA.', en: 'I design learning guides, rubrics and assessments aligned with SENA learning outcomes.' },
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'PWA'],
  },
  {
    role: { es: 'Desarrolladora Frontend (stack Angular + Java)', en: 'Frontend Developer (Angular + Java stack)' },
    company: 'Quipux S.A.S.',
    period: { es: 'Mar 2025 – Jun 2026', en: 'Mar 2025 – Jun 2026' },
    place: { es: 'Medellín · Híbrido', en: 'Medellín · Hybrid' },
    bullets: [
      { es: 'Desarrollé, mantuve y desplegué soluciones de tránsito para las células de Brasil y Colombia con Angular, micro-frontends (module federation) y PrimeNG.', en: 'Built, maintained and deployed traffic-management solutions for the Brazil and Colombia teams with Angular, micro-frontends (module federation) and PrimeNG.' },
      { es: 'Creé agentes de IA para la arquitectura frontend y apoyé el entrenamiento de Innti, la IA propia de la empresa, con OpenAI.', en: 'Built AI agents for the frontend architecture and helped train Innti, the company’s in-house AI, using OpenAI.' },
      { es: 'Desarrollé órdenes de comparendo, plantillas PDF dinámicas, notificaciones por correo y el módulo de tickets de soporte.', en: 'Delivered traffic-ticket documents, dynamic PDF templates, email notifications and the support-ticket module.' },
      { es: 'Trabajé con AWS, WordPress, Qontent y Google Tag Manager aplicando SEO y accesibilidad (WCAG); colaboré en portugués bajo Scrum.', en: 'Worked with AWS, WordPress, Qontent and Google Tag Manager applying SEO and accessibility (WCAG); collaborated in Portuguese under Scrum.' },
    ],
    stack: ['Angular', 'TypeScript', 'PrimeNG', 'Micro-frontends', 'Java', 'AWS', 'OpenAI'],
  },
  {
    role: { es: 'Maestra de cátedra – Programación de Software', en: 'Adjunct Instructor – Software Programming' },
    company: 'FESNI · Fundación Educativa San Nicolás',
    period: { es: 'Ene 2025 – Actualidad', en: 'Jan 2025 – Present' },
    place: { es: 'Rionegro · Presencial', en: 'Rionegro · On-site' },
    current: true,
    bullets: [
      { es: 'Docente del Técnico en Diseño y Desarrollo de Software: Diseño y Desarrollo de Software, Lenguaje de Programación y Bases de Datos.', en: 'Instructor for the Software Design & Development technical program: software design, programming languages and databases.' },
      { es: 'Docente de Bases de Datos para Marketing en el Técnico en Marketing.', en: 'Instructor of Databases for Marketing in the Marketing technical program.' },
    ],
    stack: ['JavaScript', 'SQL', 'MySQL', 'UML'],
  },
  {
    role: { es: 'Pasante de Desarrollo de Software', en: 'Software Development Intern' },
    company: 'SENA · Tecnoparque Nodo Medellín',
    period: { es: 'May 2024 – Nov 2024', en: 'May 2024 – Nov 2024' },
    place: { es: 'Medellín · Remoto', en: 'Medellín · Remote' },
    bullets: [
      { es: 'Prototipo de ConexCampo, una PWA que conecta campesinos con expertos por chat y videollamada en tiempo real.', en: 'Prototyped ConexCampo, a PWA that connects farmers with experts via real-time chat and video calls.' },
      { es: 'Prototipo de una plataforma web de microcréditos para fomentar la cultura financiera.', en: 'Prototyped a micro-credit web platform to promote financial literacy.' },
    ],
    stack: ['PWA', 'Prototipado', 'Tiempo real'],
  },
  {
    role: { es: 'Desarrolladora Web', en: 'Web Developer' },
    company: 'Rocketfy S.A.S.',
    period: { es: 'Nov 2022 – Feb 2024', en: 'Nov 2022 – Feb 2024' },
    place: { es: 'Medellín · Remoto', en: 'Medellín · Remote' },
    bullets: [
      { es: 'Desarrollé componentes, funcionalidades y servicios para Rocketfy LATAM, Colombia y México con Angular y Node.js.', en: 'Built components, features and services for Rocketfy LATAM, Colombia and Mexico with Angular and Node.js.' },
      { es: 'Implementé interfaces responsivas y flujos de autenticación seguros con estado global en NgRx.', en: 'Implemented responsive UIs and secure authentication flows with NgRx global state.' },
      { es: 'Construí APIs REST con JWT y gestioné bases de datos MongoDB.', en: 'Built REST APIs with JWT and managed MongoDB databases.' },
    ],
    stack: ['Angular', 'NgRx', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    role: { es: 'Auxiliar de TI', en: 'IT Assistant' },
    company: 'Choucair Testing S.A.',
    period: { es: 'Feb 2022 – Nov 2022', en: 'Feb 2022 – Nov 2022' },
    place: { es: 'Medellín · Híbrido', en: 'Medellín · Hybrid' },
    bullets: [
      { es: 'Mantenimiento de aplicaciones Node.js y documentación de soluciones de TI de punta a punta.', en: 'Maintained Node.js applications and documented IT solutions end to end.' },
      { es: 'Administré repositorios en Azure DevOps y configuré pipelines de despliegue con Docker.', en: 'Managed Azure DevOps repositories and set up deployment pipelines with Docker.' },
    ],
    stack: ['Node.js', 'Azure DevOps', 'Docker', 'Git'],
  },
  {
    role: { es: 'Aprendiz de Soluciones TI', en: 'IT Solutions Apprentice' },
    company: 'Choucair Testing S.A.',
    period: { es: 'Feb 2021 – Feb 2022', en: 'Feb 2021 – Feb 2022' },
    place: { es: 'Medellín · Híbrido', en: 'Medellín · Hybrid' },
    bullets: [
      { es: 'Mi primera experiencia: aplicativos con React y Express bajo metodologías ágiles, con despliegues en desarrollo, pruebas y producción.', en: 'My first role: React and Express applications under agile practices, deployed to dev, QA and production.' },
    ],
    stack: ['React', 'Express', 'Scrum'],
  },
]

export const skillGroups: { title: Text; icon: 'code' | 'layers' | 'server' | 'bot' | 'db' | 'cloud' | 'wrench'; primary: string[]; secondary?: string[] }[] = [
  { icon: 'code', title: { es: 'Lenguajes', en: 'Languages' }, primary: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'], secondary: ['Java', 'Python'] },
  { icon: 'layers', title: { es: 'Frontend', en: 'Frontend' }, primary: ['Angular', 'React', 'Vue 3', 'Tailwind CSS', 'PrimeNG', 'NgRx', 'Redux'], secondary: ['Micro-frontends', 'PWA', 'Material UI'] },
  { icon: 'server', title: { es: 'Backend y APIs', en: 'Backend & APIs' }, primary: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'JWT'], secondary: ['Spring Boot', 'Socket.io', 'Arquitectura hexagonal'] },
  { icon: 'bot', title: { es: 'Inteligencia artificial', en: 'Artificial intelligence' }, primary: ['IA generativa', 'LLMs', 'RAG', 'Agentes de IA', 'OpenAI API'], secondary: ['Revisión de código con IA'] },
  { icon: 'db', title: { es: 'Bases de datos', en: 'Databases' }, primary: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'], secondary: ['Firebase', 'Supabase'] },
  { icon: 'cloud', title: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' }, primary: ['AWS', 'Docker', 'Vercel', 'CI/CD', 'Azure DevOps'], secondary: ['Nginx', 'Linux', 'Clever Cloud'] },
  { icon: 'wrench', title: { es: 'Herramientas y métodos', en: 'Tools & methods' }, primary: ['Git', 'GitHub', 'Postman', 'Jira', 'Scrum'], secondary: ['Confluence', 'WCAG', 'SEO', 'Figma'] },
]

/** Translations for skill names that change between languages. */
export const skillLabel: Record<string, Text> = {
  'IA generativa': { es: 'IA generativa', en: 'Generative AI' },
  'Agentes de IA': { es: 'Agentes de IA', en: 'AI agents' },
  'Revisión de código con IA': { es: 'Revisión de código con IA', en: 'AI-assisted code review' },
  'Arquitectura hexagonal': { es: 'Arquitectura hexagonal', en: 'Hexagonal architecture' },
  Prototipado: { es: 'Prototipado', en: 'Prototyping' },
  'Tiempo real': { es: 'Tiempo real', en: 'Real-time' },
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
    kind: { es: 'PWA · Full Stack', en: 'PWA · Full stack' },
    description: {
      es: 'Marketplace de compra y venta con roles de administrador, vendedor y cliente.',
      en: 'Buy-and-sell marketplace with admin, seller and customer roles.',
    },
    points: [
      { es: 'Autenticación JWT con cookies, validación con Zod y límite de peticiones', en: 'JWT auth with cookies, Zod validation and rate limiting' },
      { es: 'Notificaciones push y por correo, carga de imágenes de productos', en: 'Push and email notifications, product image uploads' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express', 'MySQL', 'Web Push'],
    repo: 'https://github.com/lisethgira/merca-ya',
    demo: 'https://merca-ya-iota.vercel.app',
    hue: 'teal',
    icon: 'cart',
  },
  {
    name: 'EcoRuta',
    kind: { es: 'PWA · Full Stack', en: 'PWA · Full stack' },
    description: {
      es: 'Consulta los horarios del camión de la basura en tu barrio, también sin conexión.',
      en: 'Check garbage-truck schedules for your neighborhood, even offline.',
    },
    points: [
      { es: 'Instalable y con soporte offline (Workbox)', en: 'Installable with offline support (Workbox)' },
      { es: 'Historias de usuario, requerimientos y modelo E-R documentados', en: 'Documented user stories, requirements and E-R model' },
    ],
    stack: ['React', 'Tailwind CSS', 'PWA', 'Express', 'MySQL', 'Clever Cloud'],
    repo: 'https://github.com/lisethgira/mi-camion-verde',
    hue: 'lime',
    icon: 'truck',
  },
  {
    name: 'E-Wallet · Hexagonal',
    kind: { es: 'Arquitectura · Full Stack', en: 'Architecture · Full stack' },
    description: {
      es: 'Billetera digital con API de autenticación en arquitectura hexagonal: dominio, casos de uso, puertos y adaptadores.',
      en: 'Digital wallet with an authentication API built on hexagonal architecture: domain, use cases, ports and adapters.',
    },
    points: [
      { es: 'Registro, login, recuperación de contraseña y rutas protegidas', en: 'Sign-up, login, password reset and protected routes' },
      { es: 'Inyección de dependencias: el dominio no conoce Express ni la base de datos', en: 'Dependency injection: the domain knows nothing about Express or the database' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT'],
    repo: 'https://github.com/lisethgira/proyecto-base',
    hue: 'violet',
    icon: 'hexagon',
  },
  {
    name: 'Don Henry Café',
    kind: { es: 'Web app · Frontend + API', en: 'Web app · Frontend + API' },
    description: {
      es: 'Sistema de venta para una cafetería: catálogo, pedidos y panel por roles.',
      en: 'Ordering system for a coffee shop: catalog, orders and role-based dashboard.',
    },
    points: [
      { es: 'Permisos por rol con CASL y autenticación con Auth0', en: 'Role permissions with CASL and Auth0 authentication' },
      { es: 'API modular en Express con PostgreSQL, Helmet y JWT', en: 'Modular Express API with PostgreSQL, Helmet and JWT' },
    ],
    stack: ['React', 'Tailwind CSS', 'Material UI', 'Express', 'PostgreSQL'],
    repo: 'https://github.com/lisethgira/don-henry-cafe-frontend',
    demo: 'https://don-henry-cafe-frontend.vercel.app',
    hue: 'amber',
    icon: 'coffee',
  },
  {
    name: 'Balancea',
    kind: { es: 'Web app · Full Stack', en: 'Web app · Full stack' },
    description: {
      es: 'Control de ingresos y gastos personales con categorías y gráficas.',
      en: 'Personal income and expense tracker with categories and charts.',
    },
    points: [
      { es: 'Estado con Zustand y datos con TanStack Query', en: 'State with Zustand and data fetching with TanStack Query' },
      { es: 'Reportes visuales con Chart.js; backend modular en Express', en: 'Visual reports with Chart.js; modular Express backend' },
    ],
    stack: ['React', 'Zustand', 'TanStack Query', 'Chart.js', 'Supabase', 'Express'],
    repo: 'https://github.com/lisethgira/Balancea-App',
    hue: 'sky',
    icon: 'wallet',
  },
  {
    name: 'Exploradores de Colombia',
    kind: { es: 'PWA · Comunidad', en: 'PWA · Community' },
    description: {
      es: 'Aplicación web para la Corporación Exploradores de Colombia, el movimiento scout en el que soy voluntaria.',
      en: 'Web app for Corporación Exploradores de Colombia, the scout movement where I volunteer.',
    },
    points: [
      { es: 'PWA instalable con React Router y contextos', en: 'Installable PWA with React Router and contexts' },
    ],
    stack: ['React', 'Vite', 'PWA', 'Express'],
    repo: 'https://github.com/lisethgira/Exploradores-de-Colombia',
    hue: 'orange',
    icon: 'compass',
  },
]

export const moreProjects: { name: Text; text: Text; stack: string; repo: string }[] = [
  { name: { es: 'Chat en tiempo real', en: 'Real-time chat' }, text: { es: 'Chat con WebSockets (ngx-socket-io), sesión con JWT e interfaz en PrimeNG.', en: 'WebSocket chat (ngx-socket-io) with JWT sessions and a PrimeNG UI.' }, stack: 'Angular · Socket.io · PrimeNG', repo: 'https://github.com/lisethgira/chat-frontend' },
  { name: { es: 'Prueba técnica Quipux', en: 'Quipux technical test' }, text: { es: 'Prueba de diseñador frontend: app en Angular 19 con SSR.', en: 'Frontend designer test: Angular 19 app with SSR.' }, stack: 'Angular · SSR · Bootstrap', repo: 'https://github.com/lisethgira/prueba-tecnica-frontend-quipux-app' },
  { name: { es: 'Prueba técnica Lodgerin', en: 'Lodgerin technical test' }, text: { es: 'PWA en React a partir de un diseño en Figma, consumiendo la API de Rick and Morty.', en: 'React PWA built from a Figma design, consuming the Rick and Morty API.' }, stack: 'React · Tailwind · PWA', repo: 'https://github.com/lisethgira/prueba-tecnica-frontend-lodgerin' },
  { name: { es: 'Amigo Secreto', en: 'Secret Santa' }, text: { es: 'Sorteo de amigo secreto con alertas personalizadas (challenge Alura / Oracle ONE).', en: 'Secret Santa draw with custom alerts (Alura / Oracle ONE challenge).' }, stack: 'JavaScript · HTML · CSS', repo: 'https://github.com/lisethgira/challenge-amigo-secreto' },
  { name: { es: 'Calculadora en React', en: 'React calculator' }, text: { es: 'Ejercicio guiado para mis estudiantes del técnico en desarrollo de software.', en: 'Guided exercise for my software development students.' }, stack: 'React · JavaScript', repo: 'https://github.com/lisethgira/calculadora-liseth' },
  { name: { es: 'Tienda de café', en: 'Coffee shop' }, text: { es: 'Tienda de café en React con Tailwind, instalable como PWA.', en: 'Coffee shop site in React with Tailwind, installable as a PWA.' }, stack: 'React · Tailwind · PWA', repo: 'https://github.com/lisethgira/starbucks' },
]

export const teaching: { title: Text; org: string; text: Text }[] = [
  { title: { es: 'Instructora SENA TIC', en: 'SENA TIC Instructor' }, org: 'SENA · 2026', text: { es: 'Programación de Software, Aplicaciones Móviles y Mantenimiento de Equipos para la media técnica.', en: 'Software Programming, Mobile Apps and Computer Maintenance for technical high schools.' } },
  { title: { es: 'Maestra de cátedra', en: 'Adjunct instructor' }, org: 'FESNI · 2025 –', text: { es: 'Diseño y Desarrollo de Software, Lenguaje de Programación y Bases de Datos.', en: 'Software Design & Development, Programming Languages and Databases.' } },
  { title: { es: 'Mentora voluntaria', en: 'Volunteer mentor' }, org: 'Digital School · 2023 – 2024', text: { es: 'Acompañamiento a nuevos desarrolladores en el Bootcamp Full Stack.', en: 'Mentored new developers in the Full Stack Bootcamp.' } },
]

export const education: { title: Text; org: string; year: Text }[] = [
  { title: { es: 'Ingeniería de Sistemas', en: 'B.Sc. Systems Engineering' }, org: 'UNIMINUTO', year: { es: 'En curso · dic 2026', en: 'In progress · Dec 2026' } },
  { title: { es: 'Tecnología en Análisis y Desarrollo de Software', en: 'Software Analysis & Development Technologist' }, org: 'SENA – CTGI', year: { es: '2024', en: '2024' } },
  { title: { es: 'Técnico en Desarrollo de Software', en: 'Software Development Technician' }, org: 'CESDE', year: { es: '2022', en: '2022' } },
]

export const certs: { name: Text; org: string; year: string }[] = [
  { name: { es: 'Certificado Profesional en Gestión de Proyectos', en: 'Project Management Professional Certificate' }, org: 'Google', year: '2025' },
  { name: { es: 'Scrum Foundation', en: 'Scrum Foundation' }, org: 'Certiprof', year: '2025' },
  { name: { es: 'IA en la educación (60 h)', en: 'AI in Education (60 h)' }, org: 'Tecnológico Coredi', year: '2025' },
  { name: { es: 'Docencia y gestión curricular por competencias', en: 'Competency-based teaching & curriculum design' }, org: 'UNIMINUTO', year: '2026' },
  { name: { es: 'Fundamentos de Pruebas de Software', en: 'Software Testing Fundamentals' }, org: 'Platzi', year: '2024' },
  { name: { es: 'Google IT Support', en: 'Google IT Support' }, org: 'Google · Coursera', year: '2022' },
]
