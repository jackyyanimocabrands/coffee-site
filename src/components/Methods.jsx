const methods = [
  {
    name: 'Pour Over',
    time: '3–4 min',
    ratio: '1:16',
    desc: 'Clean, bright, and expressive. Best for light to medium roasts where origin character shines.',
    accent: 'border-amber-400/40',
  },
  {
    name: 'French Press',
    time: '4 min',
    ratio: '1:15',
    desc: 'Full-bodied and rich. Immersion brewing that pulls oils and sediment for a heavy mouthfeel.',
    accent: 'border-cream/20',
  },
  {
    name: 'Espresso',
    time: '25–30 sec',
    ratio: '1:2',
    desc: 'Concentrated, intense pressure extraction. The foundation for every milk-based classic.',
    accent: 'border-amber-500/60',
  },
  {
    name: 'Aeropress',
    time: '1.5 min',
    ratio: '1:15',
    desc: 'Versatile and forgiving. Combines immersion and pressure for a clean, concentrated cup.',
    accent: 'border-cream/30',
  },
]

export default function Methods() {
  return (
    <section id="methods" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Brewing Methods
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Four ways to<br /><span className="italic text-amber-400">master</span> the cup.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {methods.map((m) => (
            <article
              key={m.name}
              className={`group p-8 rounded-2xl border ${m.accent} bg-white/[0.02] hover:bg-white/[0.04] transition`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-3xl font-bold">{m.name}</h3>
                <span className="text-amber-400 text-sm font-mono">{m.ratio}</span>
              </div>
              <p className="text-cream/60 leading-relaxed">{m.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-cream/40 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Brew time: {m.time}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
