import { MOOD_TAGS, PALETTE } from "@/data/content";

export function MoodBoard() {
  return (
    <section className="py-24 lg:py-36 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Nuestra paleta
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-ink">
            El tablero de inspiración
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-ink-soft text-base leading-relaxed mb-10 font-light">
              Creemos que la decoración es la poesía silenciosa de un espacio.
              Nuestra paleta característica nace de materiales naturales —lino,
              botánicos secos, metales cálidos, cera vertida a mano— combinados
              en composiciones que se sienten recogidas, no fabricadas.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {PALETTE.map((c) => (
                <div key={c.name} className="group flex flex-col gap-2">
                  <div
                    className="w-full aspect-square border border-border/50 transition-transform duration-300 group-hover:scale-95"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="text-muted-fg text-xs tracking-widest uppercase">
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {MOOD_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="border border-taupe text-primary text-xs tracking-widest uppercase px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden aspect-[3/4] bg-border img-hover">
                <img
                  src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=500&h=650&fit=crop&auto=format"
                  alt="Ramo de novia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden aspect-square bg-border img-hover">
                <img
                  src="https://images.unsplash.com/photo-1653821355692-03666613499f?w=400&h=400&fit=crop&auto=format"
                  alt="Mesa iluminada con velas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="overflow-hidden aspect-square bg-border img-hover">
                <img
                  src="https://images.unsplash.com/photo-1534429005880-27f51d95d8ff?w=400&h=400&fit=crop&auto=format"
                  alt="Flores blancas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden aspect-[3/4] bg-border img-hover">
                <img
                  src="https://images.unsplash.com/photo-1738669469820-259d9c7189bb?w=500&h=650&fit=crop&auto=format"
                  alt="Mesa montada para una cena íntima"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
