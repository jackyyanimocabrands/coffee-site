const recipes = [
  {
    title: 'The Morning V60',
    method: 'Pour Over',
    servings: '1 cup',
    ingredients: [
      '15g medium-ground coffee',
      '250g water at 94°C',
      'Optional: pinch of salt',
    ],
    steps: [
      'Rinse the filter with hot water, discard.',
      'Add coffee, level the bed.',
      'Bloom with 50g water for 30s.',
      'Pour in slow circles to 250g by 3:00.',
      'Let draw down. Sip at 3:30.',
    ],
  },
  {
    title: 'Velvet Flat White',
    method: 'Espresso',
    servings: '1 cup',
    ingredients: [
      '18g coffee, fine grind',
      '36g espresso shot',
      '120g steamed milk',
    ],
    steps: [
      'Pull a 36g shot in 28 seconds.',
      'Steam milk to 60°C with glossy microfoam.',
      'Pour from low height to build base.',
      'Finish with a quick wiggle for latte art.',
    ],
  },
  {
    title: 'Iced Flash Brew',
    method: 'Pour Over',
    servings: '2 cups',
    ingredients: [
      '30g coarse-ground coffee',
      '200g hot water (95°C)',
      '200g ice',
    ],
    steps: [
      'Add ice to carafe.',
      'Bloom coffee with 60g hot water, 30s.',
      'Pour remaining 140g in steady stream.',
      'Swirl gently. Serve immediately over fresh ice.',
    ],
  },
  {
    title: 'French Press Heavy',
    method: 'French Press',
    servings: '2 cups',
    ingredients: [
      '30g coarse-ground coffee',
      '480g water at 95°C',
    ],
    steps: [
      'Add coffee, then water. Stir to wet all grounds.',
      'Wait 4 minutes — no plunging yet.',
      'Skim the floating crust with a spoon.',
      'Press slowly. Wait 1 more minute before pouring.',
    ],
  },
  {
    title: 'Aeropress Concentrate',
    method: 'Aeropress',
    servings: '1 strong cup',
    ingredients: [
      '17g fine-medium coffee',
      '220g water at 90°C',
    ],
    steps: [
      'Insert filter, rinse, add coffee.',
      'Pour 220g water, stir once.',
      'Wait 1:30. Insert plunger, press for 30s.',
      'Dilute 1:1 with hot water for americano strength.',
    ],
  },
  {
    title: 'Slow Cold Brew',
    method: 'Cold Brew',
    servings: '4 cups',
    ingredients: [
      '100g coarse-ground coffee',
      '700g room-temp filtered water',
    ],
    steps: [
      'Combine in jar, stir gently.',
      'Steep 14–18 hours at room temp or fridge.',
      'Strain through paper filter.',
      'Dilute concentrate 1:1 with water or milk.',
    ],
  },
]

export default function Recipes() {
  return (
    <section id="recipes" className="py-32 border-t border-white/5 bg-gradient-to-b from-ink via-white/[0.01] to-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Featured Recipes
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Drinks worth<br /><span className="italic text-amber-400">waking up</span> for.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <article
              key={r.title}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition flex flex-col"
            >
              <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
                {r.method} · {r.servings}
              </span>
              <h3 className="font-display text-3xl font-bold mt-3">{r.title}</h3>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-3">You need</h4>
                <ul className="space-y-1.5 text-sm text-cream/80">
                  {r.ingredients.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-400">·</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex-1">
                <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-3">Method</h4>
                <ol className="space-y-2 text-sm text-cream/70">
                  {r.steps.map((s, idx) => (
                    <li key={s} className="flex gap-3">
                      <span className="text-amber-400 font-mono text-xs mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
