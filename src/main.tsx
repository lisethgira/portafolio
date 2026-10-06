import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/sora/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import './index.css'
import App from './App'
import { langFromPath, PrefsProvider } from './context/prefs'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <PrefsProvider initialLang={langFromPath(window.location.pathname)}>
      <App />
    </PrefsProvider>
  </StrictMode>
)

// Pages are pre-rendered at build time (see scripts/prerender.mjs); hydrate them when present.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
