import Link from 'next/link';

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-surface-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="section-eyebrow">Hakkımızda</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
            Adil & Baki Erdoğan ile Gözde Erkek Kuaförü
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-stone-600">
            İki kardeşin ortak işletmesi; Akhisar merkezde yıllara dayanan ustalık ve güler yüz
          </p>
        </div>

        <div className="card-elevated mb-12 p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-bold text-stone-900">
            Kısa tarihçe ve yaklaşımımız
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-stone-600">
            <p>
              Gözde Erkek Kuaförü, Adil ve Baki Erdoğan kardeşlerin birlikte yürüttüğü bir
              aile işletmesidir. Akhisar&apos;ın Hürriyet Mahallesi&apos;nde, merkeze yakın
              konumumuz sayesinde hem yürüyüş mesafesindeki müşterilerimize hem de çevre
              mahallelerden gelen misafirlerimize hizmet veriyoruz.
            </p>
            <p>
              İşletme felsefamızda üç şey ön planda: <strong className="text-stone-800">hijyen</strong>,{' '}
              <strong className="text-stone-800">zamanınıza saygı</strong> ve{' '}
              <strong className="text-stone-800">çıkışta kendinizi iyi hissetmeniz</strong>.
              Randevu şartı olmadan uğrayabileceğiniz düzeni korurken, kalabalık dönemlerde
              beklemenizi minimumda tutmak için akışı önemsiyoruz.
            </p>
            <p>
              Ana sayfamızda özetlediğimiz vizyon ve misyon paragraflarının ötesinde, bu
              sayfada özellikle <em>kim olduğumuzu</em> ve <em>nasıl çalıştığımızı</em> anlatmak
              istedik — böylece hem Google hem de salonumuza ilk kez gelecek misafirler için
              tekrarlamayan, net bir metin oluşsun.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-stone-900">
            Neden tercih ediliyoruz?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-elevated p-6">
              <div className="mb-4 text-brand">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-900">İki usta, tek standart</h3>
              <p className="text-stone-600">
                Adil ve Baki Erdoğan aynı kalite çizgisinde çalışır; farklı kişiler olsa da
                sonuç tutarlılığı hedeflenir.
              </p>
            </div>

            <div className="card-elevated p-6">
              <div className="mb-4 text-brand">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-900">Salon düzeni</h3>
              <p className="text-stone-600">
                Aydınlık, ferah ve düzenli çalışma alanı; aletlerin sterilizasyon ve
                hijyen kurallarına uygun kullanımı.
              </p>
            </div>

            <div className="card-elevated p-6">
              <div className="mb-4 text-brand">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-900">Şeffaf fiyat anlayışı</h3>
              <p className="text-stone-600">
                Hizmet öncesi net bilgi; sürpriz ücret politikasına karşı açık iletişim.
              </p>
            </div>

            <div className="card-elevated p-6">
              <div className="mb-4 text-brand">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-900">Sadık müşteri kitlesi</h3>
              <p className="text-stone-600">
                Yönlendirme ve tekrar ziyaret oranı yüksek; memnuniyet sözlü tavsiyeyle büyür.
              </p>
            </div>

            <div className="card-elevated p-6">
              <div className="mb-4 text-brand">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-900">Merkezi konum</h3>
              <p className="text-stone-600">
                Hürriyet Mahallesi, Hilaliye Caddesi üzerinde; harita ve otopark için{' '}
                <Link href="/iletisim" className="font-medium text-brand hover:text-brand-hover">
                  iletişim
                </Link>{' '}
                sayfamıza bakabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="card-elevated p-8 md:p-10">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-stone-900">
            Randevu ve beklenti
          </h2>
          <p className="text-lg leading-relaxed text-stone-600">
            Çoğu zaman randevusuz kabul ediyoruz; yoğun saatlerde kısa bekleme olabilir.
            Kesin saat isteyen misafirlerimizin WhatsApp veya telefon ile haberleşmesi,
            planlamayı kolaylaştırır. Gözde Erkek Kuaförü olarak Akhisar&apos;da erkek
            kuaförlüğünü hem geleneksel ustalık hem güncel trendlerle birleştirmeyi
            sürdürüyoruz.
          </p>
        </div>
      </div>
    </div>
  );
}
