import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Methods from './components/Methods.jsx'
import Recipes from './components/Recipes.jsx'
import Tips from './components/Tips.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navbar />
      <main>
        <Hero />
        <Methods />
        <Recipes />
        <Tips />
        <About />
      </main>
      <Footer />
    </div>
  )
}
