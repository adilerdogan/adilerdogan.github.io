/** Tek kaynak: SEO şeması, OG görselleri ve iletişim tutarlılığı */
export const SITE_URL = 'https://adilerdogan.github.io' as const;

/** Sosyal paylaşım / varsayılan OG görseli (salon – hero ile uyumlu) */
export const DEFAULT_OG_IMAGE = '/sources/gallery/5.png';

const ogImageAbsolute = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

export const business = {
  name: 'Gözde Erkek Kuaförü',
  legalName: 'Akhisar Gözde Erkek Kuaförü',
  phoneE164: '+905435566620',
  address: {
    street: 'Hürriyet Mahallesi 151. Sokak, Hilaliye Cd. No: 31',
    locality: 'Akhisar',
    region: 'Manisa',
    postalCode: '45200',
    country: 'TR',
  },
  geo: { latitude: 38.916409, longitude: 27.834227 },
  /** İşletme saatlerini değiştirirseniz burayı güncelleyin (SEO + şema) */
  openingHours: {
    weekdays: { opens: '08:00', closes: '21:00' },
    saturday: { opens: '08:00', closes: '21:00' },
    sundayClosed: true,
  },
} as const;

const whatsappWaMeId = business.phoneE164.replace(/^\+/, '');

/** Randevu CTA’ları — wa.me, hazır mesajlı */
export const WHATSAPP_APPOINTMENT_URL = `https://wa.me/${whatsappWaMeId}?text=${encodeURIComponent(
  "Merhaba, Gözde Erkek Kuaförü'nden randevu almak istiyorum."
)}`;

/** Sadece sohbet (mesajsız) */
export const WHATSAPP_URL = `https://wa.me/${whatsappWaMeId}`;

/** Google Yerel İşletme / HairSalon yapılandırılmış veri */
export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HairSalon', 'Barbershop'],
  '@id': `${SITE_URL}/#business`,
  name: business.name,
  alternateName: business.legalName,
  description:
    'Akhisar Hürriyet Mahallesi’nde erkek kuaförü ve berber salonu. Merkeze ve çevre mahallelere kolay ulaşım. Saç kesimi, sakal tıraşı, bakım ve cilt uygulamaları. Adil ve Baki Erdoğan.',
  slogan: 'Akhisar berber ve erkek kuaförü — Hürriyet Mahallesi',
  url: SITE_URL,
  telephone: business.phoneE164,
  image: [ogImageAbsolute, `${SITE_URL}/sources/gallery/6.png`, `${SITE_URL}/sources/logo.png`],
  logo: `${SITE_URL}/sources/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  areaServed: {
    '@type': 'City',
    name: 'Akhisar',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Manisa' },
  },
  knowsAbout: [
    'Akhisar berber',
    'Akhisar erkek kuaförü',
    'Saç kesimi',
    'Sakal tıraşı',
    'Erkek kuaförü',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: business.openingHours.weekdays.opens,
      closes: business.openingHours.weekdays.closes,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: business.openingHours.saturday.opens,
      closes: business.openingHours.saturday.closes,
    },
  ],
  hasMap:
    'https://www.google.com/maps/search/?api=1&query=38.916409%2C27.834227',
  sameAs: [
    'https://www.google.com/maps/search/?api=1&query=Akhisar+G%C3%B6zde+Erkek+Kuaf%C3%B6r%C3%BC',
  ],
};

/** Yerel arama niyeti (berber / erkek kuaförü / konum) için FAQ — içerik gerçek bilgilere dayanır */
export const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Akhisar’da berber veya erkek kuaförü arıyorum; Gözde nerede?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hürriyet Mahallesi 151. Sokak, Hilaliye Caddesi No: 31, 45200 Akhisar/Manisa. Google Haritalar’da «Gözde Erkek Kuaförü Akhisar» veya koordinatlarımızla yol tarifi alabilirsiniz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Akhisar en yakın berber veya erkek kuaförü nasıl seçilir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bulunduğunuz noktaya göre en yakın salonu Google Haritalar mesafe ve yol tarifiyle karşılaştırabilirsiniz. Gözde Erkek Kuaförü, Hürriyet Mahallesi’nde; merkez ve çevre semtlere ulaşımı kolay bir konumdadır. Randevu ve bilgi: 0543 556 66 20 veya WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Akhisar erkek kuaförü / berber hangi saatlerde açık?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hafta içi ve cumartesi 08:00–21:00 arası hizmet veriyoruz. Pazar günü kapalıyız; özel günlerde saat değişebileceği için gelmeden aramanızı öneririz.',
      },
    },
  ],
} as const;
