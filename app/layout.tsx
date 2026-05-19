import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lauden.com.br"),
  title: "Lauden Experts — Perícias de Incêndio, Explosão e Acidentes",
  description:
    "Perícia de engenharia independente especializada em incêndio, explosão, acidentes industriais e perícia ambiental. Atuação nacional para seguradoras, escritórios jurídicos e grandes corporações.",
  authors: [{ name: "Lauden Experts" }],
  keywords: [
    "perícia de incêndio",
    "perícia de explosão",
    "investigação de incêndio",
    "engenharia forense",
    "perícia ambiental",
    "investigação de acidentes",
    "laudo técnico",
    "perícia de engenharia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lauden Experts — Perícias Forenses de Engenharia",
    description:
      "Investigação de incêndio, explosão, acidentes e perícia ambiental. Laudos técnicos com rigor e validação internacional.",
    url: "/",
    siteName: "Lauden Experts",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/lauden-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Lauden Experts — Engenharia Forense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauden Experts — Perícias Forenses de Engenharia",
    description:
      "Laudos técnicos com fundamentação rigorosa e validação internacional. Atendimento confidencial em todo o Brasil.",
    images: ["/lauden-og-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lauden Experts",
  description:
    "Perícia de engenharia especializada em incêndio, explosão, acidentes e perícia ambiental.",
  areaServed: "BR",
  serviceType: [
    "Perícia de incêndio e explosão",
    "Investigação de acidentes e incidentes",
    "Perícia ambiental",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
