const tips = [
  {
    category: 'Beans',
    icon: '☕',
    title: 'Buy fresh, whole bean',
    body: 'Coffee peaks 5–30 days after roast. Buy whole bean, check the roast date, and skip anything pre-ground.',
    stat: '7 days',
    statLabel: 'ideal rest after roast',
  },
  {
    category: 'Water',
    icon: '💧',
    title: 'Water is 98% of your cup',
    body: 'Filtered water with balanced minerals (50–150 ppm total hardness) extracts more evenly than tap or distilled.',
    stat: '94°C',
    statLabel: 'brewing temperature',
  },
  {
    category: 'Grind',
    icon: '⚙️',
    title: 'Grind right before brewing',
    body: 'Pre-ground coffee loses aromatics in minutes. A burr grinder (not blade) gives the consistent particle size that matters most.',
    stat: '15 sec',
    statLabel: 'fines → over-extraction',
  },
  {
    category: 'Ratio',
    icon: '⚖️',
    title: 'Measure by weight, not spoons',
    body: 'A kitchen scale removes guesswork. The golden ratio is 1:16 (coffee:water) — adjust to taste, but always weigh.',
    stat: '1:16',
    statLabel: 'golden ratio',
  },
  {
    category: 'Bloom',
    icon: '🌸',
    title: 'Always bloom the grounds',
    body: 'A 30-second pre-pour with 2x the coffee weight in water releases trapped CO₂ and prevents uneven extraction.',
    stat: '30s',
    statLabel: 'bloom time',
  },
  {
    category: 'Storage',
    icon: '📦',
    title: 'Store beans like spices',
    body: 'Airtight, opaque, room-temperature. Skip the fridge — moisture and odors degrade beans fast. Use within 2 weeks.',
    stat: '14 days',
    statLabel: 'freshness window',
  },
]

export default function Tips() {
  return (
    <section id="tips" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Craft Notes
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Six things that<br /><span className="italic text-amber-400">actually matter.</span>
          </h2>
          <p className="mt-6 text-cream/60 text-lg leading-relaxed">
            Forget gadgets. These are the levers that move flavor — and they all cost less than a latte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((t, idx) => (
            <article
              key={t.title}
              className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-7xl opacity-[0.06] group-hover:opacity-[0.12] transition select-none">
                {t.icon}
              </div>

              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
                    {t.category}
                  </span>
                  <span className="font-mono text-xs text-cream/30">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold mt-3 leading-tight">
                  {t.title}
                </h3>
                <p className="mt-3 text-cream/65 leading-relaxed text-sm">
                  {t.body}
                </p>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-baseline justify-between">
                  <span className="font-display text-3xl font-black text-amber-400">
                    {t.stat}
                  </span>
                  <span className="text-cream/40 text-xs text-right">
                    {t.statLabel}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quick reference card */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-400/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                The 30-second brew check
              </h3>
              <p className="mt-3 text-cream/65 leading-relaxed">
                Before every brew, run through this checklist. Miss three or more and the cup will be off — fix the lever, not the bean.
              </p>
            </div>
            <ul className="space-y-3 text-cream/80">
              {[
                'Fresh beans (roasted within 30 days)',
                'Burr grinder, ground just now',
                'Filtered water at 94°C',
                'Weighed ratio (start at 1:16)',
                'Bloom for 30 seconds before main pour',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
