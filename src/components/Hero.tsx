import Image from "next/image";
import { company } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-atlantic-deep text-foam"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-drift bg-[radial-gradient(ellipse_at_20%_20%,rgba(42,143,138,0.28),transparent_45%),radial-gradient(ellipse_at_80%_10%,rgba(196,92,74,0.18),transparent_40%),linear-gradient(165deg,#062636_0%,#0a3a52_48%,#0d4a5c_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-5 md:justify-center md:px-8 md:pb-24 md:pt-24">
        <div
          className="relative mb-6 h-12 w-[190px] animate-rise sm:mb-8 sm:h-14 sm:w-[220px] md:h-16 md:w-[260px]"
          style={{ animationDelay: "0.05s" }}
        >
          <Image
            src="/logo.png"
            alt="Globatel"
            fill
            priority
            className="object-contain object-left brightness-0 invert"
            sizes="260px"
          />
        </div>

        <p
          className="mb-4 animate-rise font-sans text-xs font-semibold uppercase tracking-[0.2em] text-lagoon-soft sm:mb-5 sm:text-sm sm:tracking-[0.22em]"
          style={{ animationDelay: "0.12s" }}
        >
          Servicio a todo Puerto Rico
        </p>

        <h1
          className="animate-rise max-w-3xl font-display text-[2.15rem] leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.2s" }}
        >
          Instalación de sistemas telefónicos para negocios.
        </h1>

        <p
          className="mt-5 max-w-xl animate-rise text-base leading-relaxed text-sand/90 sm:mt-6 sm:text-lg md:text-xl"
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

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-10 wave-divider sm:h-12 md:h-16"
      />
    </section>
  );
}
