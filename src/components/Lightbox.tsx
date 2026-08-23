import { useEffect } from "react";

type LightboxProps = {
  items: { img: string; label: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + items.length) % items.length);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (index === null) return null;

  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      className="fixed inset-0 z-[100] bg-ink/95 flex flex-col items-center justify-center p-4 lg:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-4 right-4 lg:top-6 lg:right-6 w-11 h-11 flex items-center justify-center text-2xl text-ivory border border-white/30 hover:bg-white/10 transition-colors duration-200"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        aria-label="Imagen anterior"
        className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-2xl text-ivory border border-white/30 hover:bg-white/10 transition-colors duration-200"
      >
        ←
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        aria-label="Imagen siguiente"
        className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-2xl text-ivory border border-white/30 hover:bg-white/10 transition-colors duration-200"
      >
        →
      </button>

      <figure
        className="max-w-[92vw] lg:max-w-4xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={toFullSize(item.img)}
          alt={item.label}
          className="max-h-[75vh] max-w-full object-contain"
        />
        <figcaption className="text-center font-display text-lg text-champagne italic">
          {item.label}
        </figcaption>
      </figure>

      <p className="mt-4 text-taupe text-xs tracking-widest uppercase">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

function toFullSize(url: string): string {
  return url
    .replace("w=800", "w=1600")
    .replace(/&h=\d+/, "")
    .replace("&fit=crop", "");
}
