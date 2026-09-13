import Image from "next/image";
import { phoneModels } from "@/lib/content";

export function Models() {
  return (
    <section id="modelos" className="bg-foam py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lagoon">
            Equipo
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-atlantic text-balance sm:text-4xl md:text-5xl">
            Modelos disponibles
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            Teléfonos de escritorio que instalamos como parte del sistema de su
            negocio. Pase el mouse o toque la imagen para ver el modelo.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {phoneModels.map((phone) => (
            <li key={phone.src} className="group relative">
              <div className="relative flex aspect-[4/3] items-center justify-center p-4 sm:p-6">
                <Image
                  src={phone.src}
                  alt={phone.name}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03] sm:p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-sm bg-atlantic/90 px-3 py-2 text-center opacity-100 transition-opacity sm:inset-x-4 sm:bottom-4 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                  <p className="text-sm font-semibold text-foam">{phone.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
