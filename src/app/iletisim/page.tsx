'use client';

import Link from 'next/link';

export default function Iletisim() {
  return (
    <div className="min-h-screen bg-surface-muted py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Bize ulaşın</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
            İletişim ve çalışma saatleri
          </h1>
          <p className="mx-auto max-w-xl text-lg text-stone-600">
            Adres, telefon, WhatsApp ve gömülü harita bu sayfada toplu. Yol tarifi veya randevu için doğrudan arayın ya da mesaj atın; çalışma saatlerini aşağıda güncel özet olarak paylaşıyoruz.
          </p>
        </div>

        <div className="card-elevated mb-8 p-6">
          <h2 className="mb-3 text-lg font-semibold text-stone-900">Çalışma saatleri</h2>
          <p className="text-stone-600">
            Pazartesi–Cuma <strong className="text-stone-800">08:00 – 21:00</strong>
            <br />
            Cumartesi <strong className="text-stone-800">08:00 – 21:00</strong>
            <br />
            Pazar <strong className="text-stone-800">kapalı</strong>
          </p>
          <p className="mt-3 text-sm text-stone-500">
            Saatler değişirse lütfen telefon veya WhatsApp ile teyit edin.
          </p>
        </div>

        {/* İletişim Bilgileri */}
        <div className="card-elevated mb-8 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-stone-900">
            İletişim Bilgileri
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <svg className="mt-1 h-6 w-6 shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-stone-900">Adres</h3>
                <p className="text-stone-600">
                  Hürriyet Mahallesi 151. Sokak,<br />
                  Hilaliye Cd. No: 31,<br />
                  45200 Akhisar/Manisa
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="mt-1 h-6 w-6 shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-stone-900">Telefon</h3>
                <p className="text-stone-600">
                  <a href="tel:+905435566620" className="font-medium text-brand hover:text-brand-hover">
                    0(543) 556 66 20
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="mt-1 h-6 w-6 shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-stone-900">WhatsApp Randevu</h3>
                <a
                  href="https://wa.me/905435566620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  WhatsApp ile Randevu Alın
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="card-elevated p-8">
          <h2 className="mb-6 text-2xl font-semibold text-stone-900">
            Konum
          </h2>
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl border border-stone-200/80 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6208.662206762287!2d27.834227!3d38.916409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9d201a6a6df6f%3A0xb82d16194bb443d1!2sAkhisar%20G%C3%B6zde%20Erkek%20Kuaf%C3%B6r%C3%BC%20-%20Akhisar%20Berber%20Hizmeti%20-%20Adil%20%26%20Baki%20Erdo%C4%9Fan!5e0!3m2!1str!2str!4v1746699671562!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          <p className="mt-6 text-center text-sm text-stone-600">
            Ana sayfadaki iletişim bölümüne dönmek için{' '}
            <Link href="/#iletisim" className="font-medium text-brand hover:text-brand-hover">
              buraya
            </Link>{' '}
            tıklayın.
          </p>
        </div>
      </div>
    </div>
  );
} 