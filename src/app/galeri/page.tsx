'use client';
import Image from 'next/image';

export default function Galeri() {
  const images = [
    {
      src: '/sources/gallery/kuafor1.jpeg',
      alt: 'Kuaför Salonu Görünümü 1',
    },
    {
      src: '/sources/gallery/kuafor2.jpeg',
      alt: 'Kuaför Salonu Görünümü 2',
    },
    {
      src: '/sources/gallery/kuafor3.jpeg',
      alt: 'Kuaför Salonu Görünümü 3',
    },
    {
      src: '/sources/gallery/kuafor4.jpeg',
      alt: 'Kuaför Salonu Görünümü 4',
    },
    {
      src: '/sources/gallery/kuafor5.jpeg',
      alt: 'Kuaför Salonu Görünümü 5',
    },
    {
      src: '/sources/gallery/kuafor6.jpeg',
      alt: 'Kuaför Salonu Görünümü 6',
    },
    {
      src: '/sources/gallery/kuafor7.jpeg',
      alt: 'Kuaför Salonu Görünümü 7',
    },
    {
      src: '/sources/gallery/kuafor8.jpeg',
      alt: 'Kuaför Salonu Görünümü 8',
    },
    {
      src: '/sources/gallery/kuafor9.jpeg',
      alt: 'Kuaför Salonu Görünümü 9',
    },
    {
      src: '/sources/gallery/kuafor10.jpeg',
      alt: 'Kuaför Salonu Görünümü 10',
    },
  ];

  return (
    <div className="min-h-screen bg-surface-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Salon</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
            Galeri
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600">
            Salon içi ve dışından fotoğraflar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-stone-200/80 shadow-sm shadow-stone-900/5 transition-all duration-300 hover:border-stone-300 hover:shadow-md"
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 