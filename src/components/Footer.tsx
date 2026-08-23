import { BUSINESS } from "@/data/business";
import { FOOTER_COLUMNS } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-ink text-muted-fg py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="font-display text-2xl text-white mb-4">
              <span className="italic">Vida</span>
              <span className="text-primary ml-1">Ebenezer</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs font-light mb-6">
              Decoración de eventos a medida para bodas, cumpleaños y todos los
              momentos que vale la pena celebrar. Con base en {BUSINESS.city}.
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-taupe transition-colors duration-200 w-fit"
              >
                {BUSINESS.email}
              </a>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="hover:text-taupe transition-colors duration-200 w-fit"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-ivory text-xs tracking-widest uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-taupe transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs italic font-display text-taupe/60">
            Haciendo momentos inolvidables, un evento a la vez.
          </p>
        </div>
      </div>
    </footer>
  );
}
