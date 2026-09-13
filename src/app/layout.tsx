import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Globatel | Instalación de sistemas telefónicos en Puerto Rico",
  description:
    "Globatel instala cuadros telefónicos empresariales y sistemas en la nube para negocios en todo Puerto Rico. Más de 30 años y más de 3,500 usuarios.",
  openGraph: {
    title: "Globatel | Instalación de sistemas telefónicos en Puerto Rico",
    description:
      "Instalación de cuadros telefónicos para negocios. Servicio a todo Puerto Rico.",
    locale: "es_PR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${figtree.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
