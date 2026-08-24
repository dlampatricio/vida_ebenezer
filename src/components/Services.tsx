import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Qué hacemos
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ink">
              Nuestros servicios
            </h2>
          </div>
          <p className="text-muted-fg text-base lg:text-lg font-light max-w-sm leading-relaxed">
            Del primer boceto al último detalle: nos encargamos de todo para que
            usted solo disfrute el momento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              id={s.slug}
              className="group relative overflow-hidden bg-card img-hover cursor-pointer scroll-mt-28"
            >
              <div className="relative overflow-hidden aspect-3/4">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
              </div>
              <div className="p-7">
                <p className="text-primary text-xs tracking-widest uppercase mb-2">
                  {s.subtitle}
                </p>
                <h3 className="font-display text-2xl text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-fg text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium tracking-wide group-hover:gap-4 transition-all duration-300">
                  <span>Consultar este servicio</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
