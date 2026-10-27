import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [displayed, setDisplayed] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (active === displayed) return;
    setFade(false);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setDisplayed(active);
      requestAnimationFrame(() => {
        setFade(true);
      });
    }, 650);
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [active, displayed]);

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
            <div
              className={`transition-opacity duration-700 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-display text-xl lg:text-2xl text-ink leading-relaxed italic mb-8 min-h-[6rem] flex items-center justify-center">
                {TESTIMONIALS[displayed].quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-border">
                  <img
                    src={TESTIMONIALS[displayed].img}
                    alt={TESTIMONIALS[displayed].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-ink text-sm font-medium">
                    {TESTIMONIALS[displayed].name}
                  </div>
                  <div className="text-muted-fg text-xs tracking-wide">
                    {TESTIMONIALS[displayed].event}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-10">
            <div className="flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-700 ease-in-out ${
                    i === active
                      ? "w-10 bg-primary"
                      : "w-4 bg-taupe/40 hover:bg-primary/60"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-soft hover:text-primary hover:border-primary transition-colors duration-500"
              aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
            >
              {isPlaying ? (
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="0" y="0" width="3" height="12" />
                  <rect x="7" y="0" width="3" height="12" />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M0 0L10 6L0 12V0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
