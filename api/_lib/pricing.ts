/**
 * TABLA DE PRECIOS DE REFERENCIA — edítala libremente.
 *
 * El asistente usa estos rangos para dar cotizaciones APROXIMADAS y siempre aclara que
 * la cotización final la envía Liseth. Valores en pesos colombianos (COP).
 * Después de editar: git commit + git push y Vercel publica el cambio solo.
 */

export type PriceItem = {
  service: string
  includes: string
  min: number
  max: number | null // null = "desde"
  unit?: string
  timeline: string
}

export const pricing: PriceItem[] = [
  {
    service: 'Landing page (una sola página)',
    includes: 'Diseño responsive, hasta 5 secciones, formulario o botón de WhatsApp, SEO básico, publicación',
    min: 800_000,
    max: 1_800_000,
    timeline: '1 a 2 semanas',
  },
  {
    service: 'Sitio web informativo o portafolio con marca',
    includes: 'Hasta 6 páginas o secciones, responsive, SEO y accesibilidad, formulario de contacto, publicación',
    min: 1_800_000,
    max: 3_500_000,
    timeline: '2 a 4 semanas',
  },
  {
    service: 'Aplicación web a medida / PWA',
    includes: 'Login y roles, base de datos, panel administrativo, API, despliegue. El valor depende de la cantidad de módulos',
    min: 6_000_000,
    max: 20_000_000,
    timeline: '6 a 14 semanas',
  },
  {
    service: 'Tienda en línea o marketplace básico',
    includes: 'Catálogo, carrito, pedidos, panel de administración; pasarela de pago según el caso',
    min: 5_000_000,
    max: 12_000_000,
    timeline: '5 a 10 semanas',
  },
  {
    service: 'Chatbot con IA para un sitio web',
    includes: 'Asistente que responde sobre el negocio, recoge datos de clientes y envía resúmenes por correo',
    min: 1_500_000,
    max: 4_000_000,
    timeline: '1 a 3 semanas',
  },
  {
    service: 'Integración de IA generativa / RAG / automatizaciones',
    includes: 'Asistentes sobre documentos propios (RAG), agentes, automatización de procesos con LLMs',
    min: 3_000_000,
    max: 10_000_000,
    timeline: '3 a 8 semanas',
  },
  {
    service: 'Mantenimiento y soporte mensual',
    includes: 'Actualizaciones, ajustes menores, copias de seguridad y monitoreo',
    min: 250_000,
    max: 600_000,
    unit: 'por mes',
    timeline: 'Continuo',
  },
  {
    service: 'Mentoría personalizada de programación',
    includes: 'Sesiones virtuales (Google Meet) de 2 horas, plan según el nivel del estudiante: HTML/CSS/JS, React, Angular, Node.js, bases de datos, Java, proyectos SENA o universitarios',
    min: 15_000,
    max: 15_000,
    unit: 'por hora',
    timeline: 'Sesiones semanales',
  },
  {
    service: 'Talleres o cursos para instituciones y empresas',
    includes: 'Programación, desarrollo web, IA aplicada; diseño de guías y evaluación por competencias',
    min: 0,
    max: null,
    unit: 'a convenir según horas y número de participantes',
    timeline: 'Según calendario',
  },
]

export const pricingNotes = [
  'Los valores no incluyen dominio, hosting de pago, licencias ni consumo de APIs de terceros (por ejemplo IA o pasarelas de pago).',
  'Forma de pago habitual: 50 % al iniciar y 50 % al entregar (en proyectos grandes, por hitos).',
  'Incluye una ronda de ajustes y 30 días de soporte después de la entrega.',
]

const cop = (n: number) => '$' + n.toLocaleString('es-CO') + ' COP'

export function pricingAsText(): string {
  const rows = pricing.map((p) => {
    const price =
      p.max === null ? `${p.unit ?? 'a convenir'}` : p.min === p.max ? `${cop(p.min)} ${p.unit ?? ''}` : `${cop(p.min)} – ${cop(p.max)} ${p.unit ?? ''}`
    return `- ${p.service}: ${price.trim()}. Incluye: ${p.includes}. Tiempo estimado: ${p.timeline}.`
  })
  return [...rows, '', 'Notas:', ...pricingNotes.map((n) => `- ${n}`)].join('\n')
}
