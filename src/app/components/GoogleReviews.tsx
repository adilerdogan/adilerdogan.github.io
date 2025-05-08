'use client';

// Temporarily disabled due to static export issues
export default function GoogleReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-gray-600">
            Müşterilerimizin deneyimleri ve görüşleri
          </p>
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-gray-600">
              Müşteri yorumları özelliği şu anda bakımda. Çok yakında tekrar hizmetinizde olacağız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 