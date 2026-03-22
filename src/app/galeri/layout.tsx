import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Galeri',
  description:
    'Akhisar Gözde Erkek Kuaförü salon fotoğrafları: iç mekân, çalışma alanı ve modern berber ortamı. Hürriyet Mahallesi.',
  openGraph: {
    title: 'Salon galerisi | Akhisar Gözde Erkek Kuaförü',
    description:
      'Salonumuzdan güncel fotoğraflar — Akhisar merkez erkek kuaförü.',
    url: 'https://adilerdogan.github.io/galeri',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Gözde Erkek Kuaförü salon',
      },
    ],
  },
  alternates: {
    canonical: 'https://adilerdogan.github.io/galeri',
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
