export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient + grain */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-amber-600/20" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6">
            The Art of Modern Coffee
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Slow craft.<br />
            <span className="italic text-amber-400">Bold</span> flavor.
          </h1>
          <p className="mt-8 text-lg text-cream/70 max-w-md leading-relaxed">
            A guide to brewing exceptional coffee at home — from bean to cup,
            built on technique, not gadgets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#methods"
              className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-ink font-semibold rounded-full transition"
            >
              Explore Methods
            </a>
            <a
              href="#recipes"
              className="px-7 py-3.5 border border-cream/20 hover:border-amber-400 hover:text-amber-400 rounded-full transition"
            >
              View Recipes →
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-square rounded-full bg-gradient-to-br from-amber-500/30 to-transparent blur-3xl absolute inset-0" />
          <div className="relative aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-10 flex items-end">
            <div>
              <div className="text-[12rem] leading-none font-display font-black text-amber-400/90">
                ☕
              </div>
              <p className="mt-4 text-cream/60 text-sm italic font-display">
                "Coffee is a language itself."
              </p>
              <p className="text-cream/40 text-xs mt-1">— Unknown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
