import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimake - CTO, CIO, CPO as a service | Transformation digitale",
  description: "Expert en transformation digitale combinant Technologie, Client et Culture d'entreprise. CTO/CIO/CPO as a service pour startups, scale-ups et grands groupes. De la stratégie au lancement produit.",
  keywords: ["CTO as a service", "CIO as a service", "CPO as a service", "transformation digitale", "conseil digital", "innovation", "stratégie produit", "conseil CTO", "interim CTO", "fractional CTO"],
  authors: [{ name: "Dimake" }],
  creator: "Dimake",
  publisher: "Dimake",
  metadataBase: new URL('https://dimake.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dimake.io',
    title: 'Dimake - CTO, CIO, CPO as a service',
    description: 'Expert en transformation digitale combinant Technologie, Client et Culture. CTO/CIO/CPO as a service.',
    siteName: 'Dimake',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimake - CTO, CIO, CPO as a service',
    description: 'Expert en transformation digitale. CTO/CIO/CPO as a service pour startups et grands groupes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <GoogleAnalytics gaId="G-CX3SRVX52Q" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
