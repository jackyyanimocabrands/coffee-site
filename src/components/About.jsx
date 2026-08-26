export default function About() {
  return (
    <section id="about" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Our Philosophy
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Coffee is a<br /><span className="italic text-amber-400">daily ritual.</span>
          </h2>
          <p className="mt-8 text-cream/70 leading-relaxed text-lg">
            We believe great coffee shouldn't require a barista certificate or a
            four-thousand-dollar machine. Just fresh beans, hot water, and a few
            minutes of attention.
          </p>
          <p className="mt-4 text-cream/60 leading-relaxed">
            Ember & Brew is a learning hub for home brewers — built on the idea
            that the best cup is the one you make yourself, on a Tuesday morning,
            in your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { stat: '94°C', label: 'Ideal brew temp' },
            { stat: '30s', label: 'Bloom time' },
            { stat: '1:16', label: 'Golden ratio' },
            { stat: '0', label: 'Burnt tongues' },
          ].map((s) => (
            <div
              key={s.label}
              className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 flex flex-col justify-between"
            >
              <span className="font-display text-5xl md:text-6xl font-black text-amber-400">
                {s.stat}
              </span>
              <span className="text-cream/60 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
