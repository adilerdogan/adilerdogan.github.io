import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'İletişim ve konum',
  description:
    'Akhisar berber / erkek kuaförü konum: Hürriyet Mah. 151. Sokak, Hilaliye Cd. No: 31. En yakın berber araması için haritadan mesafeyi kontrol edin. Tel. 0543 556 66 20, WhatsApp.',
  keywords: [
    'akhisar berber adres',
    'akhisar en yakın berber',
    'Akhisar erkek kuaförü harita',
    'Gözde erkek kuaförü telefon',
  ],
  openGraph: {
    title: 'İletişim | Akhisar Gözde Erkek Kuaförü',
    description:
      'Adres, telefon, WhatsApp ve Google Haritalar konumu — Hürriyet Mahallesi, Akhisar.',
    url: 'https://adilerdogan.github.io/iletisim',
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
    canonical: 'https://adilerdogan.github.io/iletisim',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
