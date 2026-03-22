import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hizmetler ve fiyat bilgisi',
  description:
    'Akhisar berber ve erkek kuaförü hizmetleri: klasik ve modern saç kesimi, sıcak havlu sakal tıraşı, saç boyama, masaj, cilt bakımı ve kişiye özel stil. Gözde Erkek Kuaförü.',
  keywords: [
    'akhisar berber',
    'akhisar erkek kuaförü',
    'Akhisar saç kesimi',
    'Akhisar sakal tıraşı',
    'berber Akhisar merkez',
  ],
  openGraph: {
    title: 'Hizmetlerimiz | Akhisar Gözde Erkek Kuaförü',
    description:
      'Saç, sakal, bakım ve cilt uygulamaları — salonumuzda sunduğumuz tüm hizmetler.',
    url: 'https://adilerdogan.github.io/hizmetler',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Gözde Erkek Kuaförü hizmetleri',
      },
    ],
  },
  alternates: {
    canonical: 'https://adilerdogan.github.io/hizmetler',
  },
};

export default function Hizmetler() {
  const services = [
    {
      title: "Saç Kesimi",
      description:
        "Yüz hatlarına ve saç dokunuza uygun klasik veya modern kesim. Makas ve makine tekniğiyle düzgün geçişler, düzenli kontur ve günlük kullanıma uygun şekillendirme.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Sakal Tıraşı",
      description:
        "Hijyenik ekipman ve sıcak havlu ile rahatlatıcı tıraş deneyimi. Çene hattı, yanak ve boyun çizgilerinde net hatlar; isteğe göre kısa sakal veya düzgün contalı görünüm.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Bakım Hizmetleri",
      description:
        "Saç ve sakal için nemlendirme, şekillendirici uygulama ve form koruma. Yoğun şehir hayatında saç tellerinin daha yumuşak ve yönetilebilir kalması için pratik bakım önerileri.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Saç Boyama",
      description:
        "Gri kapatma, doğal ton veya istenen renk yoğunluğunda uygulama. Saç derisi ve teller için uygun ürün seçimi; homojen sonuç ve düzenli solma için profesyonel teknik.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Masaj",
      description:
        "Kesim veya tıraş sonrası kısa baş–boyun masajı ile gevşeme. Gerginliği azaltır; özellikle uzun oturuşlardan sonra ferahlık hissi sağlar.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Özel Tasarım",
      description:
        "Yüz şeklinize, saç yoğunluğunuza ve tarzınıza göre fade, undercut, pompadour veya sakal çizgisi gibi kişisel kombinasyonlar. Trend ve bakım kolaylığını birlikte değerlendiriyoruz.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: "Saç Yıkama",
      description:
        "Kesim öncesi/sonrası derinlemesine temizlik ve hafif masaj. Saç tipine uygun şampuan ile deri ve tellerin ferahlaması.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Cilt Bakımı",
      description:
        "Yüz bölgesi temizliği ve ferahlatıcı uygulamalar. Tıraş sonrası tahriş riskini azaltmaya yardımcı, sade ve etkili bir bakım rutini.",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-surface-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="section-eyebrow">Salon</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-stone-900">
            Hizmetlerimiz
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-stone-600">
            Her hizmet hakkında kısaca ne yaptığımızı yazdık. Sorunuz olursa telefon veya WhatsApp&apos;tan yazabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated-hover p-8"
            >
              <div className="mb-4 text-brand">{service.icon}</div>
              <h3 className="mb-4 text-xl font-semibold text-stone-900">{service.title}</h3>
              <p className="text-stone-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 