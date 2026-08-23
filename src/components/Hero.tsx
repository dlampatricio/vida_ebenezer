import { BUSINESS, STATS } from "@/data/business";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/hero-image.jpg"
          alt="Ceremonia de boda en un jardín con arco floral blanco y rosa"
          className="w-full h-full object-cover opacity-60"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-32 pt-40">
        <div className="max-w-3xl">
          <p className="text-taupe text-xs font-medium tracking-[0.3em] uppercase mb-6">
            Desde {BUSINESS.foundedYear} · {BUSINESS.city}
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-white mb-8">
            Cada momento <br />
            <span className="italic text-taupe">merece</span>
            <br /> ser hermoso
          </h1>
          <p className="text-champagne/80 text-lg lg:text-xl font-light leading-relaxed max-w-xl mb-10">
            Diseñamos e instalamos experiencias de decoración, flores e
            iluminación hechas a medida para bodas, cumpleaños y reuniones que
            merecen ser recordadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-ivory text-sm font-medium tracking-wider uppercase px-8 py-4 hover:bg-primary-dark transition-colors duration-200"
            >
              Comenzar a planear
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-medium tracking-wider uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-200"
            >
              Ver nuestro trabajo
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-3 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl lg:text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-taupe text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
