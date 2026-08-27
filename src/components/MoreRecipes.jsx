const sections = [
  {
    title: 'Specialty Espresso',
    blurb: 'Small drinks, big technique.',
    recipes: [
      {
        title: 'Cortado',
        method: 'Espresso',
        servings: '1 drink',
        ingredients: [
          '18g coffee',
          '36g espresso shot',
          '36g steamed milk',
        ],
        steps: [
          'Pull a 36g shot in 27 seconds.',
          'Steam milk to 55°C — minimal foam, glossy.',
          'Pour milk straight into the center of the shot.',
          'Aim for a 1:1 espresso-to-milk ratio.',
        ],
      },
      {
        title: 'Cappuccino',
        method: 'Espresso',
        servings: '1 drink',
        ingredients: [
          '18g coffee',
          '36g espresso shot',
          '60g steamed milk (60% foam)',
        ],
        steps: [
          'Pull a 36g shot, looking for tiger striping.',
          'Steam milk to 60°C with stiff microfoam.',
          'Pour from height to integrate, then lower for art.',
          'Finish with a dusting of cocoa if desired.',
        ],
      },
      {
        title: 'Macchiato',
        method: 'Espresso',
        servings: '1 drink',
        ingredients: [
          '18g coffee',
          '36g espresso shot',
          '1–2 spoonfuls of milk foam',
        ],
        steps: [
          'Pull a ristretto-style shot (30g in 25s).',
          'Spoon a single dollop of dense foam on top.',
          'Drink immediately — this is a shot, not a sip.',
        ],
      },
      {
        title: 'Affogato',
        method: 'Espresso + Ice Cream',
        servings: '1 dessert',
        ingredients: [
          '1 scoop vanilla gelato',
          '36g fresh espresso shot',
          'Optional: amaretto, crumbled biscotti',
        ],
        steps: [
          'Scoop gelato into a chilled glass or cup.',
          'Pull a fresh shot directly over the gelato.',
          'Serve immediately — the contrast is the point.',
        ],
      },
    ],
  },
  {
    title: 'Iced & Cold',
    blurb: 'Hot weather, cold caffeine.',
    recipes: [
      {
        title: 'Iced Latte',
        method: 'Espresso + Milk',
        servings: '1 drink',
        ingredients: [
          '18g coffee',
          '36g espresso shot',
          '150g cold milk',
          'Ice cubes',
        ],
        steps: [
          'Fill a tall glass with ice.',
          'Add cold milk.',
          'Pull shot directly over the milk — pour slowly.',
          'Stir once. Drink immediately.',
        ],
      },
      {
        title: 'Nitro Cold Brew',
        method: 'Cold Brew + N2',
        servings: '2 drinks',
        ingredients: [
          '400g cold brew concentrate',
          'Nitro charger + keg (or whipped cream dispenser)',
        ],
        steps: [
          'Brew concentrate 1:4 ratio (see Slow Cold Brew).',
          'Dilute to 1:1 with filtered water.',
          'Charge with one N2 cartridge, shake gently.',
          'Pour from height for the cascading foam effect.',
        ],
      },
      {
        title: 'Espresso Tonic',
        method: 'Espresso + Tonic',
        servings: '1 drink',
        ingredients: [
          '18g coffee',
          '36g espresso shot, chilled',
          '150g premium tonic water',
          'Orange peel or slice',
        ],
        steps: [
          'Chill the shot in the freezer for 2 minutes.',
          'Fill glass with ice and tonic water.',
          'Slowly pour the chilled shot down a spoon to layer.',
          'Garnish with orange peel. Stir before sipping.',
        ],
      },
      {
        title: 'Frappé-Style',
        method: 'Blended',
        servings: '1 drink',
        ingredients: [
          '60g cold brew concentrate',
          '120g milk',
          '2 tsp sugar or syrup',
          '1 cup ice',
          'Optional: whipped cream',
        ],
        steps: [
          'Add all ingredients to a blender.',
          'Blend on high for 20–30 seconds.',
          'Pour into a tall glass.',
          'Top with whipped cream if you must.',
        ],
      },
    ],
  },
  {
    title: 'Pour-Over Variations',
    blurb: 'Same principle, different tools.',
    recipes: [
      {
        title: 'Chemex Classic',
        method: 'Chemex',
        servings: '3 cups',
        ingredients: [
          '45g medium-coarse coffee',
          '750g water at 94°C',
        ],
        steps: [
          'Rinse the thick filter thoroughly, discard water.',
          'Add coffee, level the bed.',
          'Bloom with 90g water for 45s.',
          'Pour in two pulses: 375g, then to 750g by 4:30.',
          'Serve when fully drawn down (~5:30).',
        ],
      },
      {
        title: 'Kalita Wave',
        method: 'Kalita Wave',
        servings: '1 cup',
        ingredients: [
          '15g medium coffee',
          '240g water at 94°C',
        ],
        steps: [
          'Rinse the flat filter, drain well.',
          'Add coffee, give the dripper a gentle shake.',
          'Bloom with 40g water for 30s.',
          'Pour in five small pulses to 240g by 3:00.',
          'Let draw down. Flat bed = even extraction.',
        ],
      },
      {
        title: 'Single-Origin Flight',
        method: 'Pour Over Tasting',
        servings: '3 small cups',
        ingredients: [
          '15g × 3 different single-origin coffees',
          '240g water per cup, 94°C',
        ],
        steps: [
          'Choose origins with distinct profiles (e.g. Ethiopia, Colombia, Sumatra).',
          'Brew each in identical conditions.',
          'Taste side by side from light to heavy.',
          'Note acidity, body, sweetness, finish in a notebook.',
        ],
      },
    ],
  },
  {
    title: 'Matcha & Beyond',
    blurb: 'Caffeine without the coffee.',
    recipes: [
      {
        title: 'Matcha Latte',
        method: 'Matcha',
        servings: '1 drink',
        ingredients: [
          '2g ceremonial-grade matcha',
          '60g hot water at 80°C',
          '180g steamed milk',
          'Optional: 1 tsp honey',
        ],
        steps: [
          'Sift matcha into a small bowl to remove clumps.',
          'Add hot (not boiling) water and whisk in a "M" motion until frothy.',
          'Pour into a mug, add honey if using.',
          'Top with steamed milk. Dust with extra matcha.',
        ],
      },
      {
        title: 'Chai Latte',
        method: 'Spiced Tea',
        servings: '1 drink',
        ingredients: [
          '1 black tea bag (or 1 tsp loose)',
          '1 cinnamon stick + 2 cardamom pods + 2 cloves',
          '200g milk',
          '1 tsp honey or sugar',
        ],
        steps: [
          'Simmer spices in 100g water for 3 minutes.',
          'Add tea, steep for 3 more minutes.',
          'Strain into a mug.',
          'Steam milk with sweetener and pour.',
        ],
      },
      {
        title: 'Golden Milk',
        method: 'Turmeric Latte',
        servings: '1 drink',
        ingredients: [
          '200g milk',
          '1 tsp turmeric',
          '½ tsp cinnamon',
          'Pinch black pepper',
          '1 tsp honey or maple syrup',
        ],
        steps: [
          'Warm milk gently in a saucepan.',
          'Whisk in turmeric, cinnamon, and pepper.',
          'Simmer 2 minutes — don\'t boil.',
          'Sweeten to taste and pour.',
        ],
      },
      {
        title: 'Hot Chocolate',
        method: 'Cocoa',
        servings: '1 drink',
        ingredients: [
          '200g milk',
          '20g dark chocolate (70%+), chopped',
          '1 tsp cocoa powder',
          'Pinch of salt',
        ],
        steps: [
          'Warm milk in a saucepan over medium heat.',
          'Whisk in chocolate, cocoa, and salt.',
          'Heat until chocolate melts — don\'t boil.',
          'Froth with a wand or whisk. Serve immediately.',
        ],
      },
    ],
  },
]

export default function MoreRecipes() {
  return (
    <section id="more-recipes" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Extended Library
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            More ways to<br /><span className="italic text-amber-400">pour, blend, steep.</span>
          </h2>
          <p className="mt-6 text-cream/60 text-lg leading-relaxed">
            Fifteen additional recipes across espresso classics, cold drinks, pour-over variations, and caffeine alternatives.
          </p>
        </div>

        <div className="space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-8 flex items-baseline justify-between border-b border-white/10 pb-4">
                <h3 className="font-display text-3xl font-bold">{section.title}</h3>
                <span className="text-cream/50 italic text-sm hidden sm:block">{section.blurb}</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {section.recipes.map((r) => (
                  <article
                    key={r.title}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition flex flex-col"
                  >
                    <span className="text-amber-400 text-[10px] uppercase tracking-widest font-semibold">
                      {r.method} · {r.servings}
                    </span>
                    <h4 className="font-display text-2xl font-bold mt-2 leading-tight">
                      {r.title}
                    </h4>

                    <div className="mt-5">
                      <h5 className="text-[10px] uppercase tracking-widest text-cream/40 mb-2">You need</h5>
                      <ul className="space-y-1 text-xs text-cream/80">
                        {r.ingredients.map((i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-amber-400">·</span>
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex-1">
                      <h5 className="text-[10px] uppercase tracking-widest text-cream/40 mb-2">Method</h5>
                      <ol className="space-y-1.5 text-xs text-cream/70">
                        {r.steps.map((s, idx) => (
                          <li key={s} className="flex gap-2">
                            <span className="text-amber-400 font-mono text-[10px] mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
