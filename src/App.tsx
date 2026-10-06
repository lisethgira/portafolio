import { About } from './components/About'
import { ChatWidget } from './components/ChatWidget'
import { BackToTop, Contact, Footer } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Teaching } from './components/Teaching'
import { usePrefs } from './context/prefs'

export default function App() {
  const { t } = usePrefs()
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        {t({ es: 'Saltar al contenido', en: 'Skip to content', pt: 'Pular para o conteúdo' })}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-x-clip focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Teaching />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  )
}
