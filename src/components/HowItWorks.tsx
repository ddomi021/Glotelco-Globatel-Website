export function HowItWorks() {
  const steps = [
    {
      title: "Primero escuchamos",
      body: "Cuéntenos cómo atiende su oficina hoy — recepción, varias líneas o más de un local. Armamos la instalación según esa realidad.",
    },
    {
      title: "Instalamos y configuramos",
      body: "Montamos el cuadro, los teléfonos de escritorio, el auto operador, los buzones y lo que su operación necesite — listo para trabajar.",
    },
    {
      title: "Seguimos disponibles",
      body: "Soporte local en Puerto Rico cuando haga falta ajustar rutas, extensiones o equipo. Orientación clara, sin rodeos.",
    },
  ];

  return (
    <section
      id="como-trabajamos"
      className="relative overflow-hidden bg-atlantic py-16 text-foam sm:py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-lagoon/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-coral/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon-soft">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl md:text-5xl">
            De la visita a la instalación, sin complicaciones.
          </h2>
        </div>

        <ol className="mt-12 grid gap-10 sm:mt-14 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="font-display text-5xl font-semibold text-coral/80">
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-sand/85">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
