import type { Lang } from './content'

type Text = Record<Lang, string>

export const SITE_URL = 'https://liseth-giraldo-dev.vercel.app'

export const langPath: Record<Lang, string> = { es: '/', en: '/en/', pt: '/pt/' }

export const seo: Record<Lang, { title: string; description: string; locale: string; jobTitle: string }> = {
  es: {
    title: 'Liseth Giraldo · Desarrolladora Full Stack e Instructora de Programación',
    description:
      'Portafolio de Liseth Giraldo (Liseth Giraldo Dev): desarrolladora Full Stack con más de 5 años de experiencia en JavaScript, TypeScript, Angular, React, Node.js e IA generativa. Instructora de programación en Rionegro, Antioquia, Colombia.',
    locale: 'es_CO',
    jobTitle: 'Desarrolladora Full Stack',
  },
  en: {
    title: 'Liseth Giraldo · Full Stack Developer & Programming Instructor',
    description:
      'Portfolio of Liseth Giraldo (Liseth Giraldo Dev): Full Stack Developer with 5+ years of experience in JavaScript, TypeScript, Angular, React, Node.js and generative AI. Programming instructor based in Colombia, open to remote roles.',
    locale: 'en_US',
    jobTitle: 'Full Stack Developer',
  },
  pt: {
    title: 'Liseth Giraldo · Desenvolvedora Full Stack e Instrutora de Programação',
    description:
      'Portfólio de Liseth Giraldo (Liseth Giraldo Dev): desenvolvedora Full Stack com mais de 5 anos de experiência em JavaScript, TypeScript, Angular, React, Node.js e IA generativa. Instrutora de programação na Colômbia, aberta a vagas remotas.',
    locale: 'pt_BR',
    jobTitle: 'Desenvolvedora Full Stack',
  },
}

export const chatText = {
  open: { es: 'Abrir chat con el asistente de Liseth', en: "Open chat with Liseth's assistant", pt: 'Abrir chat com a assistente de Liseth' },
  teaser: { es: '¿Preguntas? Escríbeme', en: 'Questions? Ask me', pt: 'Dúvidas? Pergunte' },
  title: { es: 'Asistente de Liseth', en: "Liseth's assistant", pt: 'Assistente de Liseth' },
  subtitle: { es: 'IA · responde al instante', en: 'AI · instant answers', pt: 'IA · responde na hora' },
  close: { es: 'Cerrar chat', en: 'Close chat', pt: 'Fechar chat' },
  greeting: {
    es: '¡Hola! 👋 Soy el asistente virtual de Liseth. Puedo contarte sobre su experiencia, sus proyectos y su disponibilidad, o darte una cotización aproximada para tu proyecto. ¿En qué te ayudo?',
    en: "Hi! 👋 I'm Liseth's virtual assistant. I can tell you about her experience, projects and availability, or give you a rough quote for your project. How can I help?",
    pt: 'Olá! 👋 Sou a assistente virtual de Liseth. Posso contar sobre a experiência, os projetos e a disponibilidade dela, ou dar um orçamento aproximado para o seu projeto. Como posso ajudar?',
  },
  suggestions: [
    { es: '¿Qué experiencia tiene Liseth?', en: 'What experience does Liseth have?', pt: 'Qual é a experiência de Liseth?' },
    { es: 'Quiero cotizar un proyecto', en: 'I want a quote for a project', pt: 'Quero um orçamento' },
    { es: 'Busco una desarrolladora para mi equipo', en: "I'm hiring a developer", pt: 'Estou contratando uma desenvolvedora' },
    { es: 'Información sobre mentorías', en: 'Tell me about mentoring', pt: 'Quero saber sobre mentorias' },
  ],
  placeholder: { es: 'Escribe tu pregunta…', en: 'Type your question…', pt: 'Escreva sua pergunta…' },
  inputLabel: { es: 'Mensaje para el asistente', en: 'Message to the assistant', pt: 'Mensagem para a assistente' },
  send: { es: 'Enviar', en: 'Send', pt: 'Enviar' },
  typing: { es: 'El asistente está escribiendo…', en: 'The assistant is typing…', pt: 'A assistente está digitando…' },
  you: { es: 'Tú', en: 'You', pt: 'Você' },
  bot: { es: 'Asistente', en: 'Assistant', pt: 'Assistente' },
  privacy: {
    es: 'Al chatear aceptas que Liseth reciba un resumen de la conversación para darte respuesta.',
    en: 'By chatting you agree that Liseth receives a summary of the conversation to follow up.',
    pt: 'Ao conversar, você concorda que Liseth receba um resumo da conversa para responder.',
  },
  privacyLink: { es: 'Aviso de privacidad', en: 'Privacy notice', pt: 'Aviso de privacidade' },
  unavailable: {
    es: 'El asistente no está disponible en este momento. Puedes escribirle a Liseth por WhatsApp o con el formulario de contacto.',
    en: 'The assistant is not available right now. You can reach Liseth on WhatsApp or through the contact form.',
    pt: 'A assistente não está disponível no momento. Você pode falar com Liseth pelo WhatsApp ou pelo formulário de contato.',
  },
  error: {
    es: 'No pude responder. Inténtalo de nuevo en un momento.',
    en: "I couldn't answer. Please try again in a moment.",
    pt: 'Não consegui responder. Tente novamente em instantes.',
  },
  limit: {
    es: 'Llegaste al límite de mensajes de esta conversación. Para seguir, escríbele a Liseth directamente.',
    en: 'You reached the message limit for this chat. To continue, contact Liseth directly.',
    pt: 'Você atingiu o limite de mensagens desta conversa. Para continuar, fale com Liseth diretamente.',
  },
  restart: { es: 'Nueva conversación', en: 'New conversation', pt: 'Nova conversa' },
  sent: {
    es: 'Liseth recibirá un resumen de esta conversación ✓',
    en: 'Liseth will receive a summary of this conversation ✓',
    pt: 'Liseth receberá um resumo desta conversa ✓',
  },
} satisfies Record<string, Text | Text[]>

export const contactText = {
  formTitle: { es: 'Envíame un mensaje', en: 'Send me a message', pt: 'Envie uma mensagem' },
  name: { es: 'Nombre', en: 'Name', pt: 'Nome' },
  email: { es: 'Correo electrónico', en: 'Email', pt: 'E-mail' },
  topic: { es: 'Motivo', en: 'Reason', pt: 'Motivo' },
  topics: {
    job: { es: 'Vacante o proceso de selección', en: 'Job opening', pt: 'Vaga ou processo seletivo' },
    project: { es: 'Proyecto o cotización', en: 'Project or quote', pt: 'Projeto ou orçamento' },
    mentoring: { es: 'Mentoría o formación', en: 'Mentoring or training', pt: 'Mentoria ou formação' },
    other: { es: 'Otro', en: 'Other', pt: 'Outro' },
  },
  message: { es: 'Mensaje', en: 'Message', pt: 'Mensagem' },
  consent: {
    es: 'Acepto que Liseth use estos datos solo para responder mi mensaje.',
    en: 'I agree that Liseth uses this data only to reply to my message.',
    pt: 'Concordo que Liseth use estes dados apenas para responder à minha mensagem.',
  },
  submit: { es: 'Enviar mensaje', en: 'Send message', pt: 'Enviar mensagem' },
  sending: { es: 'Enviando…', en: 'Sending…', pt: 'Enviando…' },
  success: {
    es: '¡Gracias! Tu mensaje llegó. Liseth te responderá pronto a tu correo.',
    en: 'Thank you! Your message was sent. Liseth will reply to your email soon.',
    pt: 'Obrigada! Sua mensagem foi enviada. Liseth responderá em breve no seu e-mail.',
  },
  error: {
    es: 'No se pudo enviar. Revisa tu conexión o escríbeme por WhatsApp.',
    en: "It couldn't be sent. Check your connection or reach me on WhatsApp.",
    pt: 'Não foi possível enviar. Verifique sua conexão ou fale comigo pelo WhatsApp.',
  },
  invalid: {
    es: 'Revisa los campos: nombre, un correo válido y un mensaje de al menos 10 caracteres.',
    en: 'Please check: name, a valid email and a message of at least 10 characters.',
    pt: 'Verifique: nome, um e-mail válido e uma mensagem de pelo menos 10 caracteres.',
  },
  required: { es: 'obligatorio', en: 'required', pt: 'obrigatório' },
  copy: { es: 'Copiar correo', en: 'Copy email', pt: 'Copiar e-mail' },
  copied: { es: '¡Correo copiado!', en: 'Email copied!', pt: 'E-mail copiado!' },
  chatCta: { es: 'Hablar con mi asistente', en: 'Chat with my assistant', pt: 'Falar com a assistente' },
  backToTop: { es: 'Volver al inicio', en: 'Back to top', pt: 'Voltar ao início' },
  privacyTitle: { es: 'Aviso de privacidad', en: 'Privacy notice', pt: 'Aviso de privacidade' },
  privacyBody: {
    es: 'Los datos que envías por el formulario o el chat (nombre, correo, teléfono y el contenido de la conversación) los recibe únicamente Liseth Arelis Giraldo Morales para responderte y darte seguimiento, conforme a la Ley 1581 de 2012 de Colombia. No se venden ni se comparten con terceros, salvo los proveedores técnicos necesarios para procesarlos (servicio de IA y de envío de correo). Puedes pedir que se consulten, corrijan o eliminen escribiendo a lisethgiraldo628@gmail.com.',
    en: 'The data you send through the form or the chat (name, email, phone and the conversation) is received only by Liseth Arelis Giraldo Morales to reply and follow up, in accordance with Colombian Law 1581 of 2012. It is not sold or shared with third parties, except the technical providers needed to process it (AI and email services). You can ask to access, correct or delete it by writing to lisethgiraldo628@gmail.com.',
    pt: 'Os dados enviados pelo formulário ou pelo chat (nome, e-mail, telefone e o conteúdo da conversa) são recebidos apenas por Liseth Arelis Giraldo Morales para responder e dar seguimento, de acordo com a Lei 1581 de 2012 da Colômbia. Não são vendidos nem compartilhados com terceiros, exceto os provedores técnicos necessários para processá-los (serviços de IA e de e-mail). Você pode solicitar consulta, correção ou exclusão escrevendo para lisethgiraldo628@gmail.com.',
  },
} as const
