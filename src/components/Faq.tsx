import { useState } from "react";
import { FAQS } from "@/data/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="preguntas" className="py-24 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Dudas
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-ink mb-6">
              Preguntas <br />
              frecuentes
            </h2>
            <p className="text-muted-fg text-sm leading-relaxed font-light">
              Todo lo que necesitas saber antes de empezar. ¿Sigues con dudas?
              Escríbenos y te respondemos en menos de 24 horas.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide hover:gap-4 transition-all duration-300"
            >
              <span>Pregúntanos directamente</span>
              <span>→</span>
            </a>
          </div>

          <div className="divide-y divide-border">
            {FAQS.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-center justify-between text-left gap-6 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg text-ink group-hover:text-primary transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center text-primary transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-48 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-fg text-sm leading-relaxed font-light pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
