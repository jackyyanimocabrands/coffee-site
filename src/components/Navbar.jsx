export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight">
          Ember<span className="text-amber-400">&</span>Brew
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-cream/80">
          <li><a href="#methods" className="hover:text-amber-400 transition">Methods</a></li>
          <li><a href="#recipes" className="hover:text-amber-400 transition">Recipes</a></li>
          <li><a href="#tips" className="hover:text-amber-400 transition">Tips</a></li>
          <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
        </ul>
        <a
          href="#recipes"
          className="hidden md:inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-ink font-semibold rounded-full text-sm transition"
        >
          Start Brewing
        </a>
      </nav>
    </header>
  )
}
