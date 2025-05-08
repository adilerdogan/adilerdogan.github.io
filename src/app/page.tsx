'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Modern Erkek Kuaförü",
      description: "Profesyonel ekibimizle sizlere en iyi hizmeti sunuyoruz",
      image: "/sources/gallery/kuafor1.jpeg"
    },
    {
      title: "Profesyonel Saç Kesimi",
      description: "Uzman ekibimizle modern ve şık kesimler",
      image: "/sources/gallery/kuafor2.jpeg"
    },
    {
      title: "Sakal Tıraşı ve Bakım",
      description: "Modern sakal tıraşı ve şekillendirme hizmetleri",
      image: "/sources/gallery/kuafor3.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Saç Kesimi",
      description: "Profesyonel saç kesim hizmetleri",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Sakal Tıraşı",
      description: "Modern sakal tıraşı ve şekillendirme",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Bakım Hizmetleri",
      description: "Saç ve sakal bakımı",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Saç Boyama",
      description: "Profesyonel saç boyama ve renk uygulaması",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Masaj",
      description: "Rahatlatıcı baş ve boyun masajı",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Özel Tasarım",
      description: "Kişiye özel saç ve sakal tasarımı",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: "Saç Yıkama",
      description: "Profesyonel saç yıkama ve bakım",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Cilt Bakımı",
      description: "Yüz ve cilt bakım uygulamaları",
      icon: (
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

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
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section id="anasayfa" className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 translate-y-0">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 transform transition-all duration-1000 translate-y-0">
                  {slide.description}
                </p>
                <button
                  onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300"
                >
                  Randevu Al
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Profesyonel hizmet anlayışımız ve uzman ekibimizle fark yaratıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uzman Ekip</h3>
              <p className="text-gray-600">Deneyimli ve profesyonel kuaförlerimizle hizmetinizdeyiz.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Hizmet</h3>
              <p className="text-gray-600">Zamanınızı değerli kılıyor, hızlı ve kaliteli hizmet sunuyoruz.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-900 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Teknikler</h3>
              <p className="text-gray-600">En son trendleri ve modern teknikleri uyguluyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section id="hizmetler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hizmetlerimiz
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Profesyonel ekibimizle sizlere en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section id="hakkimizda" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hakkımızda
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              20 yılı aşkın tecrübemizle müşterilerimize en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 mb-6">
                Akhisar'ın en iyi erkek kuaförü olarak, müşterilerimize en kaliteli hizmeti sunmak ve onların beklentilerini aşmak için çalışıyoruz.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Profesyonel ekibimiz ve modern tekniklerimizle müşterilerimize en iyi hizmeti sunarak, onların güvenini kazanmak ve memnuniyetlerini sağlamak.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Adil Erdoğan</h4>
                <p className="text-gray-600">Uzman Kuaför</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Baki Erdoğan</h4>
                <p className="text-gray-600">Uzman Kuaför</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galeri
            </h2>
            <p className="text-lg text-gray-600">
              Modern ve şık salonumuzdan kareler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
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
      </section>

      {/* İletişim Section */}
      <section id="iletisim" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İletişim
            </h2>
            <p className="text-lg text-gray-600">
              Bizimle iletişime geçin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* İletişim Bilgileri */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Adres</h4>
                    <p className="text-gray-600">
                      Hürriyet Mahallesi 151. Sokak,<br />
                      Hilaliye Cd. No: 31,<br />
                      45200 Akhisar/Manisa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Telefon</h4>
                    <p className="text-gray-600">
                      <a href="tel:+905435566620" className="hover:text-gray-900">
                        0(543) 556 66 20
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">WhatsApp Randevu</h4>
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Konum
              </h3>
              <div className="aspect-w-16 aspect-h-9">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
