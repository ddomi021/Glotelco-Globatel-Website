"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Consulta Globatel — ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\n${message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-sand py-16 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-14 sm:px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Contacto
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Estamos para orientarle.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            Orientación libre de costo. Llámenos, escríbanos o déjenos un
            mensaje — le respondemos desde Puerto Rico.
          </p>

          <div className="mt-8 space-y-6 sm:mt-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                Teléfono
              </p>
              <a
                href={`tel:${company.phoneTel}`}
                className="mt-1 block font-display text-2xl font-semibold text-atlantic transition-colors hover:text-coral"
              >
                {company.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                Correo
              </p>
              <a
                href={`mailto:${company.email}`}
                className="mt-1 block break-all text-lg text-atlantic transition-colors hover:text-coral"
              >
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                Dirección
              </p>
              <p className="mt-1 text-lg text-atlantic">{company.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-foam p-5 sm:p-6 md:p-8">
          {sent ? (
            <div className="flex min-h-[260px] flex-col justify-center">
              <p className="font-display text-3xl font-semibold text-atlantic">
                Gracias — abriendo su correo.
              </p>
              <p className="mt-3 text-base text-ink-muted sm:text-lg">
                Si no se abrió el correo, escríbanos a{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold text-coral underline-offset-2 hover:underline"
                >
                  {company.email}
                </a>{" "}
                o llame al{" "}
                <a
                  href={`tel:${company.phoneTel}`}
                  className="font-semibold text-coral underline-offset-2 hover:underline"
                >
                  {company.phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full border border-atlantic/20 bg-white px-3 py-3 text-base text-ink outline-none transition-colors focus:border-lagoon"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full border border-atlantic/20 bg-white px-3 py-3 text-base text-ink outline-none transition-colors focus:border-lagoon"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="787-000-0000"
                  className="mt-1.5 w-full border border-atlantic/20 bg-white px-3 py-3 text-base text-ink outline-none transition-colors focus:border-lagoon"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  ¿En qué podemos ayudarle?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-y border border-atlantic/20 bg-white px-3 py-3 text-base text-ink outline-none transition-colors focus:border-lagoon"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-atlantic px-5 py-3.5 text-base font-semibold text-foam transition-colors hover:bg-atlantic-soft"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
