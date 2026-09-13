import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
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
    <html lang="es" className={`${sora.variable} ${figtree.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
