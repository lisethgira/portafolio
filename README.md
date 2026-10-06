# Liseth Giraldo Dev · Portafolio

Portafolio personal de **Liseth Arelis Giraldo Morales**, desarrolladora Full Stack e instructora de programación.

🔗 **Sitio:** https://liseth-giraldo-dev.vercel.app · [English](https://liseth-giraldo-dev.vercel.app/en/) · [Português](https://liseth-giraldo-dev.vercel.app/pt/)

## Stack

- React 19 + TypeScript + Vite, Tailwind CSS v4 con la paleta de la marca *Liseth Giraldo Dev*
- Trilingüe (español, inglés y portugués) con una URL por idioma, pre-renderizada para SEO
- Asistente con IA (Gemini o Claude) que responde sobre mi perfil, hace cotizaciones aproximadas y me envía un resumen de cada conversación por correo (Resend)
- Formulario de contacto real, botón para volver arriba, modo claro/oscuro
- Accesibilidad WCAG 2.2 AA verificada con axe-core (0 errores) y Lighthouse 100 en accesibilidad, SEO y buenas prácticas
- Funciones serverless en `api/` desplegadas en Vercel

## Configuración (una sola vez, en Vercel)

Vercel → proyecto **portafolio** → *Settings* → *Environment Variables*. Agrega estas variables y luego haz *Redeploy*:

| Variable | Valor | Para qué |
|----------|-------|----------|
| `GEMINI_API_KEY` | Clave de https://aistudio.google.com/apikey | Chatbot (gratis) |
| `RESEND_API_KEY` | Clave de https://resend.com/api-keys | Enviar resúmenes y mensajes del formulario |
| `CONTACT_TO_EMAIL` | `lisethgiraldo628@gmail.com` | Dónde recibes los correos (debe ser el mismo correo con el que creaste la cuenta de Resend) |
| `AI_PROVIDER` *(opcional)* | `claude` | Solo si quieres usar Claude en vez de Gemini |
| `ANTHROPIC_API_KEY` *(opcional)* | Clave de https://console.anthropic.com | Solo con `AI_PROVIDER=claude` (de pago) |
| `GEMINI_MODEL` / `CLAUDE_MODEL` *(opcional)* | p. ej. `gemini-2.5-flash` | Cambiar el modelo |

Sin estas variables el sitio funciona igual; el chat muestra un mensaje con el enlace a WhatsApp y el formulario avisa que no se pudo enviar.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173 (sin las funciones de /api)
npx vercel dev   # con las funciones de /api, usando un archivo .env.local
npm run build    # compila, pre-renderiza /, /en/, /pt/ y genera sitemap.xml
```

## Dónde editar

| Qué | Archivo |
|-----|---------|
| Textos de la página (ES/EN/PT) | `src/i18n/content.ts` e `src/i18n/interactive.ts` |
| Lo que el asistente sabe de mí | `api/_lib/knowledge.ts` |
| **Tabla de precios para cotizaciones** | `api/_lib/pricing.ts` |
| Colores de la marca | `src/index.css` |
| Logo LG | `src/components/Logo.tsx` y `public/favicon.svg` |
| Hoja de vida descargable | `public/Liseth_Giraldo_CV_FullStack.pdf` |

> Versión 1 (2021, HTML + jQuery) disponible en el historial de git.
