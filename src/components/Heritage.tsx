import { company } from "@/lib/content";

export function Heritage() {
  return (
    <section className="bg-foam py-16 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
            Quiénes somos
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Globatel — más de {company.years} años conectando negocios en Puerto
            Rico.
          </h2>
          <p className="mt-6 font-display text-3xl font-semibold text-coral">
            {company.endUsers.toLocaleString("es-PR")}+ usuarios
          </p>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl">
            No somos un centro de llamadas extranjero leyendo un libreto.
            Globatel atiende clínicas, restaurantes, aseguradoras, municipios y
            negocios familiares en toda la Isla — instalando sistemas
            telefónicos empresariales listos para el día a día.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg md:text-xl">
            Hoy más de {company.endUsers.toLocaleString("es-PR")} usuarios
            confían en los sistemas que instalamos. Apostamos a lo práctico:
            cuadros en la nube, teléfonos de escritorio y gente aquí que le
            orienta cuando hace falta.
          </p>
        </div>
      </div>
    </section>
  );
}
