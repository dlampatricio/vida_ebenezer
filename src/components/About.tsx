import { BUSINESS } from "@/data/business";

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-36 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-taupe text-xs font-medium tracking-[0.3em] uppercase mb-6">
              Nuestra historia
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-8">
              La belleza está en <br />
              <span className="italic text-taupe">los detalles.</span>
            </h2>
            <p className="text-champagne/70 text-base leading-relaxed mb-6 font-light">
              Vida Ebenezer nació en {BUSINESS.foundedYear} con una convicción:
              los eventos deben sentirse como entrar a otro mundo, uno
              construido por completo alrededor de la persona que lo
              protagoniza.
            </p>
            <p className="text-champagne/70 text-base leading-relaxed mb-10 font-light">
              Hoy nuestro equipo de diseñadores, floristas e iluminadores lleva
              esa misma convicción a cada proyecto, ya sea una boda de 300
              invitados o una cena íntima en casa.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="font-display text-4xl text-taupe mb-2">8</div>
                <div className="text-muted-fg text-xs tracking-widest uppercase">
                  Diseñadores en equipo
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-taupe mb-2">
                  400+
                </div>
                <div className="text-muted-fg text-xs tracking-widest uppercase">
                  Eventos realizados
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden aspect-[4/5] bg-ink-soft img-hover">
              <img
                src="https://images.unsplash.com/photo-1769812343775-85a27e6a076c?w=800&h=1000&fit=crop&auto=format"
                alt="Mesa de recepción elegante con centro de mesa floral"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 max-w-xs hidden lg:block">
              <p className="font-display text-white text-base italic leading-relaxed">
                "No decoramos espacios. Componemos experiencias."
              </p>
              <p className="text-ivory/60 text-xs tracking-widest uppercase mt-3">
                — Equipo {BUSINESS.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
