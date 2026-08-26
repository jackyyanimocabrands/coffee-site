export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-bold">
          Ember<span className="text-amber-400">&</span>Brew
        </div>
        <p className="text-cream/40 text-sm">
          © {new Date().getFullYear()} Ember & Brew. Brewed with care.
        </p>
        <div className="flex gap-6 text-cream/50 text-sm">
          <a href="#" className="hover:text-amber-400 transition">Instagram</a>
          <a href="#" className="hover:text-amber-400 transition">YouTube</a>
          <a href="#" className="hover:text-amber-400 transition">Newsletter</a>
        </div>
      </div>
    </footer>
  )
}
