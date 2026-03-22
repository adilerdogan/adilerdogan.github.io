import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hakkımızda — Adil & Baki Erdoğan',
  description:
    'Akhisar berber ve erkek kuaförü: Gözde’yi Adil ve Baki Erdoğan işletiyor. Hürriyet Mahallesi’nde hijyen, deneyim ve müşteri odaklı hizmet.',
  openGraph: {
    title: 'Hakkımızda | Akhisar Gözde Erkek Kuaförü',
    description:
      'Ekibimiz, salon felsefemiz ve Akhisar’daki hikayemiz — Adil & Baki Erdoğan.',
    url: 'https://adilerdogan.github.io/hakkimizda',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Gözde Erkek Kuaförü',
      },
    ],
  },
  alternates: {
    canonical: 'https://adilerdogan.github.io/hakkimizda',
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
