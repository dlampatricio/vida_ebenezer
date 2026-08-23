import { useState } from "react";
import { GALLERY } from "@/data/content";
import { Lightbox } from "@/components/Lightbox";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Nuestro portafolio
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ink">
              Trabajo reciente
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {GALLERY.map((item, i) => (
            <button
              type="button"
              key={item.label}
              onClick={() => setSelected(i)}
              aria-label={`Ampliar: ${item.label}`}
              className={`group relative overflow-hidden bg-border img-hover cursor-pointer text-left ${
                item.size === "tall" ? "row-span-2" : ""
              }`}
              style={{
                aspectRatio:
                  item.size === "tall"
                    ? "3/5"
                    : item.size === "wide"
                      ? "4/3"
                      : "1/1",
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 block bg-ink/0 group-hover:bg-ink/50 transition-all duration-500 flex items-end p-5">
                <span className="block text-white font-display text-lg opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  {item.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={GALLERY}
        index={selected}
        onClose={() => setSelected(null)}
        onNavigate={setSelected}
      />
    </section>
  );
}
