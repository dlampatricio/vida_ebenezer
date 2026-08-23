import { useState } from "react";
import { BUSINESS } from "@/data/business";
import { EVENT_TYPES, GUEST_RANGES } from "@/data/content";

type FormStep = 1 | 2 | 3;

const STEP_LABELS: Record<FormStep, string> = {
  1: "Tipo de evento",
  2: "Detalles",
  3: "Tus datos",
};

export function Contact() {
  const [step, setStep] = useState<FormStep>(1);
  const [form, setForm] = useState({
    eventType: "",
    date: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 lg:py-36 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Contáctanos
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-ink mb-6">
              Creemos algo <br />
              <span className="italic">inolvidable</span>
            </h2>
            <p className="text-muted-fg text-base leading-relaxed font-light mb-10 max-w-sm">
              Cuéntanos sobre tu evento y nos pondremos en contacto en menos de
              24 horas para agendar tu consulta sin costo.
            </p>
            <div className="space-y-5">
              {[
                ["Estudio", BUSINESS.address],
                ["Correo", BUSINESS.email],
                ["Teléfono", BUSINESS.phone],
                ["Horario", BUSINESS.hours],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-6">
                  <div className="text-primary text-xs tracking-widest uppercase w-16 pt-0.5 flex-shrink-0">
                    {label}
                  </div>
                  <div className="text-ink-soft text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ivory p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <div className="font-display text-5xl text-primary mb-6">✦</div>
                <h3 className="font-display text-2xl text-ink mb-4">
                  ¡Gracias, {form.name.split(" ")[0] || "amigo(a)"}!
                </h3>
                <p className="text-muted-fg text-sm leading-relaxed max-w-xs mx-auto">
                  Recibimos tu solicitud y te contactaremos en menos de 24 horas
                  para agendar tu consulta sin costo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-4 mb-8">
                  {([1, 2, 3] as FormStep[]).map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
                          step >= s
                            ? "bg-primary text-ivory"
                            : "border border-border text-muted-fg"
                        }`}
                      >
                        {s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`w-12 h-px transition-colors duration-300 ${
                            step > s ? "bg-primary" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                  <div className="ml-2 text-muted-fg text-xs tracking-widest uppercase">
                    {STEP_LABELS[step]}
                  </div>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <p className="font-display text-xl text-ink mb-6">
                      ¿Qué estamos celebrando?
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {EVENT_TYPES.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => update("eventType", type)}
                          className={`py-4 px-4 text-sm font-medium border transition-all duration-200 text-left ${
                            form.eventType === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-ink-soft hover:border-primary"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      disabled={!form.eventType}
                      onClick={() => setStep(2)}
                      className="mt-4 w-full bg-primary text-ivory text-sm font-medium tracking-wider uppercase py-4 hover:bg-primary-dark transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <p className="font-display text-xl text-ink mb-6">
                      Cuéntanos el cuándo y el cuántos
                    </p>
                    <div>
                      <label
                        htmlFor="event-date"
                        className="block text-xs tracking-widest uppercase text-muted-fg mb-2"
                      >
                        Fecha del evento
                      </label>
                      <input
                        id="event-date"
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-xs tracking-widest uppercase text-muted-fg mb-2"
                      >
                        Invitados estimados
                      </label>
                      <select
                        id="guests"
                        value={form.guests}
                        onChange={(e) => update("guests", e.target.value)}
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">Selecciona un rango</option>
                        {GUEST_RANGES.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-xs tracking-widest uppercase text-muted-fg mb-2"
                      >
                        Notas adicionales
                      </label>
                      <textarea
                        id="notes"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        rows={3}
                        placeholder="Lugar, ideas de tema, imágenes de inspiración..."
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder-taupe focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-border text-ink-soft text-sm font-medium tracking-wider uppercase py-4 hover:bg-secondary transition-colors duration-200"
                      >
                        Regresar
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-[2] bg-primary text-ivory text-sm font-medium tracking-wider uppercase py-4 hover:bg-primary-dark transition-colors duration-200"
                      >
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <p className="font-display text-xl text-ink mb-6">
                      ¿Cómo te contactamos?
                    </p>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs tracking-widest uppercase text-muted-fg mb-2"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder-taupe focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-widest uppercase text-muted-fg mb-2"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder-taupe focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs tracking-widest uppercase text-muted-fg mb-2"
                      >
                        Teléfono (opcional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder={BUSINESS.phone}
                        className="w-full border border-border bg-white px-4 py-3 text-sm text-ink placeholder-taupe focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border border-border text-ink-soft text-sm font-medium tracking-wider uppercase py-4 hover:bg-secondary transition-colors duration-200"
                      >
                        Regresar
                      </button>
                      <button
                        type="submit"
                        className="flex-[2] bg-primary text-ivory text-sm font-medium tracking-wider uppercase py-4 hover:bg-primary-dark transition-colors duration-200"
                      >
                        Enviar solicitud
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
