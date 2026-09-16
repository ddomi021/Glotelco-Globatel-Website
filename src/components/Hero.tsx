import Image from "next/image";
import { company } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90svh] overflow-hidden bg-atlantic-deep text-foam"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-drift bg-[radial-gradient(ellipse_at_15%_20%,rgba(42,143,138,0.3),transparent_42%),radial-gradient(ellipse_at_85%_30%,rgba(196,92,74,0.16),transparent_45%),linear-gradient(165deg,#062636_0%,#0a3a52_48%,#0d4a5c_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-20 mx-auto grid min-h-[90svh] max-w-7xl items-center gap-10 px-4 pb-20 pt-36 sm:px-5 md:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-36">
        <div className="lg:col-span-6">
          <p
            className="mb-4 animate-rise font-sans text-xs font-semibold uppercase tracking-[0.2em] text-lagoon-soft sm:mb-5 sm:text-sm sm:tracking-[0.22em]"
            style={{ animationDelay: "0.05s" }}
          >
            Servicio a todo Puerto Rico
          </p>

          <h1
            className="animate-rise max-w-xl font-display text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            Instalación de sistemas telefónicos para negocios.
          </h1>

          <p
            className="mt-5 max-w-lg animate-rise text-base leading-relaxed text-sand/90 sm:mt-6 sm:text-lg md:text-xl"
            style={{ animationDelay: "0.32s" }}
          >
            Más de {company.years} años instalando cuadros telefónicos
            empresariales en la Isla — con soporte local y más de{" "}
            {company.endUsers.toLocaleString("es-PR")} usuarios.
          </p>

          <div
            className="mt-8 flex animate-rise flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.44s" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-sm bg-coral px-6 py-3.5 text-base font-semibold text-foam transition-colors hover:bg-coral-deep"
            >
              Solicite una orientación gratuita
            </a>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center justify-center rounded-sm border border-foam/35 px-6 py-3.5 text-base font-semibold text-foam transition-colors hover:border-foam hover:bg-foam/5"
            >
              Llame al {company.phoneDisplay}
            </a>
          </div>
        </div>

        <aside
          className="flex animate-rise flex-col justify-center lg:col-span-6"
          style={{ animationDelay: "0.28s" }}
          aria-label="Algunos de nuestros modelos de teléfonos"
        >
          <div className="grid grid-cols-2 items-center gap-2 sm:gap-6">
            <figure className="relative h-[280px] sm:h-[380px] lg:h-[460px]">
              <Image
                src="/phones/phone-2.png"
                alt="Teléfono Polycom VVX 500"
                fill
                priority
                className="object-contain drop-shadow-[0_22px_24px_rgba(0,0,0,0.3)]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </figure>

            <figure className="relative h-[240px] sm:h-[320px] lg:h-[390px]">
              <Image
                src="/phones/phone-6.png"
                alt="Teléfono Panasonic KX-HDV230"
                fill
                className="object-contain drop-shadow-[0_22px_24px_rgba(0,0,0,0.3)]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </figure>
          </div>

          <div className="mx-auto mt-2 max-w-md text-center sm:mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">
              Modelos disponibles
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sand/75">
              Equipos para recepciones, oficinas y operaciones con múltiples extensiones.
            </p>
          </div>
        </aside>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-20 h-10 wave-divider sm:h-12 md:h-16"
      />
    </section>
  );
}
