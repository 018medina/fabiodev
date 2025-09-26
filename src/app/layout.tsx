import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fábio Medina Favarin Dev — Landing Pages, Sistemas e Apps",
  description:
    "Soluções rápidas, práticas e inteligentes em tecnologia. Especialista em Landing Pages que convertem, sistemas e aplicações. +3,5 anos de experiência.",
  metadataBase: new URL("https://www.seu-dominio.com"),
  openGraph: {
    title: "Fábio Medina Favarin Dev",
    description:
      "LPs que convertem. Sistemas e apps sob medida. +3,5 anos de experiência entregando soluções rápidas e inteligentes.",
    url: "https://www.seu-dominio.com",
    siteName: "Fábio Medina Favarin Dev",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://www.seu-dominio.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-brand-bg text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
