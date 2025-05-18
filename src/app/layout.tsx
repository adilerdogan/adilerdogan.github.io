import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://adilerdogan.github.io'),
  title: {
    default: 'Akhisar\'ın En İyi Erkek Kuaförü | Gözde Erkek Kuaförü',
    template: '%s | Akhisar Gözde Erkek Kuaförü'
  },
  description: 'Akhisar\'ın merkezinde, profesyonel saç kesimi ve sakal tıraşı hizmetleri. Adil Erdoğan ve Baki Erdoğan tarafından işletilen, Akhisar\'ın en kaliteli erkek kuaför salonu. Modern ve şık ortamda uzman ekibiyle hizmetinizdeyiz.',
  keywords: [
    'Akhisar Berber',
    'Akhisar Gözde Erkek Kuaförü',
    'Akhisar Erkek Kuaförü',
    'Akhisar Merkez Berber',
    'Akhisar Merkez Erkek Kuaförü',
    'Akhisar En İyi Berber',
    'Akhisar En İyi Erkek Kuaförü',
    'Akhisar Profesyonel Berber',
    'Akhisar Profesyonel Erkek Kuaförü',
    'Adil Erdoğan Berber',
    'Baki Erdoğan Berber',
    'Akhisar Saç Kesimi',
    'Akhisar Sakal Tıraşı',
    'Akhisar Erkek Bakım',
    'Akhisar Berber Salonu',
    'Akhisar Erkek Kuaför Salonu'
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
    title: 'Akhisar\'ın En İyi Erkek Kuaförü | Gözde Erkek Kuaförü',
    description: 'Akhisar\'ın merkezinde, profesyonel saç kesimi ve sakal tıraşı hizmetleri. Adil Erdoğan ve Baki Erdoğan tarafından işletilen, Akhisar\'ın en kaliteli erkek kuaför salonu.',
    images: [
      {
        url: '/sources/logo.png',
        width: 800,
        height: 600,
        alt: 'Akhisar Gözde Erkek Kuaförü Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akhisar\'ın En İyi Erkek Kuaförü | Gözde Erkek Kuaförü',
    description: 'Akhisar\'ın merkezinde, profesyonel saç kesimi ve sakal tıraşı hizmetleri. Modern ve şık ortamda uzman ekibiyle hizmetinizdeyiz.',
    images: ['/sources/logo.png'],
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
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
