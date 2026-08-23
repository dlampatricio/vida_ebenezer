import { useState } from "react";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-36 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Palabras que nos honran
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-ink">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-taupe font-display text-6xl mb-6 leading-none">
              "
            </div>
            <p className="font-display text-xl lg:text-2xl text-ink leading-relaxed italic mb-8">
              {TESTIMONIALS[active].quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-border">
                <img
                  src={TESTIMONIALS[active].img}
                  alt={TESTIMONIALS[active].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-ink text-sm font-medium">
                  {TESTIMONIALS[active].name}
                </div>
                <div className="text-muted-fg text-xs tracking-wide">
                  {TESTIMONIALS[active].event}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-8 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-taupe hover:bg-primary"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
