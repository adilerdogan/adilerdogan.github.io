import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adilerdogan.github.io'),
  title: {
    default: 'Akhisar Berber & Erkek Kuaförü | Gözde — Hürriyet Mah.',
    template: '%s | Akhisar Berber & Gözde Erkek Kuaförü'
  },
  description:
    'Akhisar Hürriyet Mahallesi’nde erkek kuaförü ve berber: saç kesimi, sakal tıraşı ve bakım. Merkeze yakın konum; telefon ve WhatsApp ile randevu. Adil & Baki Erdoğan.',
  keywords: [
    'akhisar berber',
    'Akhisar berber',
    'akhisar erkek kuaförü',
    'Akhisar erkek kuaförü',
    'akhisar en yakın berber',
    'Akhisar en yakın erkek kuaförü',
    'Akhisar yakın erkek kuaförü',
    'Akhisar merkez berber',
    'Akhisar Hürriyet berber',
    'Akhisar Gözde Erkek Kuaförü',
    'Akhisar Merkez Erkek Kuaförü',
    'Adil Erdoğan Berber',
    'Baki Erdoğan Berber',
    'Akhisar Saç Kesimi',
    'Akhisar Sakal Tıraşı',
    'Akhisar berber salonu',
    'Akhisar traş',
    'Manisa Akhisar berber',
    'Akhisar erkek berber',
  ],
  authors: [{ name: 'Adil & Baki Erdoğan' }],
  creator: 'Adil & Baki Erdoğan',
  publisher: 'Gözde Erkek Kuaförü',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://adilerdogan.github.io',
    siteName: 'Akhisar Gözde Erkek Kuaförü',
    title: 'Akhisar Berber & Erkek Kuaförü | Gözde — Hürriyet Mah.',
    description:
      'Akhisar’da erkek kuaförü ve berber arayanlar için Hürriyet Mahallesi’nde salonumuz. Saç, sakal ve bakım — randevu için arayın veya WhatsApp’tan yazın.',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Gözde Erkek Kuaförü — Akhisar salon içi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akhisar Berber & Erkek Kuaförü | Gözde',
    description:
      'Hürriyet Mahallesi, Akhisar: erkek kuaförü ve berber. Saç kesimi, sakal tıraşı; telefon 0543 556 66 20.',
    images: [DEFAULT_OG_IMAGE],
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
    icon: '/sources/logo.png',
    apple: '/sources/logo.png',
  },
  verification: {
    google: 'l0gonNipCKLb6aT8RMADeGPqHzPtlMOX3TWWvbOCkek',
  },
  alternates: {
    canonical: 'https://adilerdogan.github.io',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={plusJakarta.variable} suppressHydrationWarning>
      <body
        className={`${plusJakarta.className} antialiased`}
        suppressHydrationWarning
      >
        <LocalBusinessJsonLd />
        <FaqJsonLd />
        <Header />
        <main
          className="pb-20 pt-0 md:pb-0 [&_.page-shell-inner>*:first-child]:-mt-[calc(max(0.875rem,env(safe-area-inset-top,0px))+4.5rem+0.75rem)] [&_.page-shell-inner>*:first-child]:pt-[calc(max(0.875rem,env(safe-area-inset-top,0px))+4.5rem+0.75rem)] sm:[&_.page-shell-inner>*:first-child]:-mt-[calc(max(0.875rem,env(safe-area-inset-top,0px))+4.75rem+0.75rem)] sm:[&_.page-shell-inner>*:first-child]:pt-[calc(max(0.875rem,env(safe-area-inset-top,0px))+4.75rem+0.75rem)]"
        >
          <PageShell>{children}</PageShell>
        </main>
        <MobileStickyCTA />
        <Footer />
      </body>
    </html>
  );
}
