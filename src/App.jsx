import { Nav, Hero, Features, HowItWorks, Stories, Faq, Cta, Footer } from './sections.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#features">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stories />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
