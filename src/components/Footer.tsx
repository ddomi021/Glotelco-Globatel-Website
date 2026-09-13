import Image from "next/image";
import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-atlantic/10 bg-atlantic-deep text-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-5 md:flex-row md:items-start md:justify-between md:px-8 md:py-14">
        <div>
          <div className="relative h-11 w-[160px] sm:h-12 sm:w-[180px]">
            <Image
              src="/logo.png"
              alt="Globatel"
              fill
              className="object-contain object-left brightness-0 invert"
              sizes="180px"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/70">
            Instalación de sistemas telefónicos para negocios. Servicio a todo
            Puerto Rico — más de {company.years} años.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sand/80 transition-colors hover:text-foam"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-sand/70">
          <a
            href={`tel:${company.phoneTel}`}
            className="block font-semibold text-foam hover:text-coral"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="mt-2 block break-all text-foam/90 hover:text-coral"
          >
            {company.email}
          </a>
          <p className="mt-2">{company.address}</p>
        </div>
      </div>

      <div className="border-t border-foam/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-sand/50 sm:px-5 md:px-8">
          © {new Date().getFullYear()} Globatel. Todos los derechos reservados.
          Marca de Puerto Rico.
        </p>
      </div>
    </footer>
  );
}
