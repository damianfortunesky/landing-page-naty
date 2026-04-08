import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

const siteName = "Naty Boutique";
const siteUrl = "https://naty-boutique.vercel.app";
const title = "Naty Boutique | Moda femenina premium";
const description =
  "Landing comercial estática de Naty Boutique para presentar colección, catálogo destacado y contacto en una experiencia premium.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Naty Boutique - Moda femenina premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"]
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/favicon.svg" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
