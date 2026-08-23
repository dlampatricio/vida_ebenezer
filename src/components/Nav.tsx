import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-ivory shadow-[0_1px_0_#d9d2c8]"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          className={`font-display text-xl lg:text-2xl tracking-wide text-ink transition-all duration-300 ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <span className="italic">Vida</span>
          <span className="ml-1 text-primary">Ebenezer</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-ink-soft hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          className={`hidden lg:inline-flex items-center gap-2 bg-primary text-ivory text-sm font-medium tracking-wider uppercase px-6 py-2.5 hover:bg-primary-dark transition-all duration-300 ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          Agendar consulta
        </a>

        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-ivory border-t border-border px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase text-ink-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-block bg-primary text-ivory text-sm font-medium tracking-wider uppercase px-6 py-2.5 text-center"
          >
            Agendar consulta
          </a>
        </div>
      )}
    </nav>
  );
}
