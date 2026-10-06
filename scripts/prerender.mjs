// Pre-renders one static HTML page per language (/, /en/, /pt/) after `vite build`,
// with per-language <title>, description, canonical, hreflang, Open Graph and JSON-LD.
// Also writes sitemap.xml. Run via `npm run build`.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')
const { render, seo, langPath, SITE_URL, profile } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const langs = ['es', 'en', 'pt']
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const url = (l) => SITE_URL + langPath[l]
const today = new Date().toISOString().slice(0, 10)

for (const lang of langs) {
  const s = seo[lang]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: profile.name,
        alternateName: 'Liseth Giraldo Dev',
        jobTitle: s.jobTitle,
        url: url(lang),
        image: `${SITE_URL}/og-image.png`,
        email: `mailto:${profile.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Rionegro', addressRegion: 'Antioquia', addressCountry: 'CO' },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Corporación Universitaria Minuto de Dios – UNIMINUTO' },
          { '@type': 'EducationalOrganization', name: 'Servicio Nacional de Aprendizaje – SENA' },
        ],
        knowsAbout: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'NestJS', 'Generative AI', 'LLMs', 'RAG', 'AWS', 'Teaching'],
        knowsLanguage: ['es', 'en', 'pt'],
        sameAs: [profile.github, profile.linkedin],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL + '/',
        name: 'Liseth Giraldo Dev',
        inLanguage: ['es', 'en', 'pt'],
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        url: url(lang),
        name: s.title,
        inLanguage: lang,
        mainEntity: { '@id': `${SITE_URL}/#person` },
        dateModified: today,
      },
    ],
  }

  const head = [
    `<title>${esc(s.title)}</title>`,
    `<meta name="description" content="${esc(s.description)}" />`,
    `<link rel="canonical" href="${url(lang)}" />`,
    ...langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${url(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${url('es')}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Liseth Giraldo Dev" />`,
    `<meta property="og:title" content="${esc(s.title)}" />`,
    `<meta property="og:description" content="${esc(s.description)}" />`,
    `<meta property="og:url" content="${url(lang)}" />`,
    `<meta property="og:image" content="${SITE_URL}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Liseth Giraldo Dev" />`,
    `<meta property="og:locale" content="${s.locale}" />`,
    ...langs.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${seo[l].locale}" />`),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(s.title)}" />`,
    `<meta name="twitter:description" content="${esc(s.description)}" />`,
    `<meta name="twitter:image" content="${SITE_URL}/og-image.png" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')

  const html = template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<!--app-head:start-->[\s\S]*?<!--app-head:end-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${render(lang)}</div>`)

  const out = lang === 'es' ? join(dist, 'index.html') : join(dist, lang, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log(`prerendered ${langPath[lang]} (${(html.length / 1024).toFixed(1)} kB)`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${langs
  .map(
    (lang) => `  <url>
    <loc>${url(lang)}</loc>
    <lastmod>${today}</lastmod>
${langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url('es')}"/>
  </url>`,
  )
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
rmSync(ssrDir, { recursive: true, force: true })
console.log('sitemap.xml written')
