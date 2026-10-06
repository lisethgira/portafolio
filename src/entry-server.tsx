import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { PrefsProvider } from './context/prefs'
import type { Lang } from './i18n/content'

export { seo, langPath, SITE_URL } from './i18n/interactive'
export { profile } from './i18n/content'

export function render(lang: Lang): string {
  return renderToString(
    <StrictMode>
      <PrefsProvider initialLang={lang}>
        <App />
      </PrefsProvider>
    </StrictMode>,
  )
}
