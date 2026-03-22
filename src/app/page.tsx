'use client';
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_APPOINTMENT_URL } from "@/lib/site";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      title: "Modern Erkek Kuaförü",
      description: "Profesyonel ekibimizle sizlere en iyi hizmeti sunuyoruz",
      image: "/sources/gallery/5.png"
    },
    {
      title: "Profesyonel Saç Kesimi",
      description: "Uzman ekibimizle modern ve şık kesimler",
      image: "/sources/gallery/6.png"
    },
    {
      title: "Sakal Tıraşı ve Bakım",
      description: "Modern sakal tıraşı ve şekillendirme hizmetleri",
      image: "/sources/gallery/7.png"
    }
  ];

  const images = useMemo(() => [
    {
      src: '/sources/gallery/2.png',
      alt: 'Gözde Erkek Kuaförü - Dış Görünümü 1'
    },
    {
      src: '/sources/gallery/3.png',
      alt: 'Gözde Erkek Kuaförü - Dış Görünümü 2'
    },
    {
      src: '/sources/gallery/4.png',
      alt: 'Gözde Erkek Kuaförü - Dış Görünümü 3'
    },
    {
      src: '/sources/gallery/5.png',
      alt: 'Gözde Erkek Kuaförü - Dış Görünümü 4'
    },
    {
      src: '/sources/gallery/6.png',
      alt: 'Gözde Erkek Kuaförü - Salon Görünümü 5'
    },
    {
      src: '/sources/gallery/7.png',
      alt: 'Gözde Erkek Kuaförü - Salon Görünümü 6'
    },
    {
      src: '/sources/gallery/8.png',
      alt: 'Gözde Erkek Kuaförü - Salon Görünümü 7'
    }
  ], []);

  const galleryPreview = useMemo(() => images.slice(0, 6), [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setSelectedImage(images[(currentImageIndex + 1) % images.length].src);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        setSelectedImage(images[(currentImageIndex - 1 + images.length) % images.length].src);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, images]);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section with Slider */}
        <section id="anasayfa" className="relative h-screen min-h-[32rem]">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0`}
            >
              <Image
                src={slide.image}
                alt={`Gözde Erkek Kuaförü Akhisar berber — ${slide.title}`}
                fill
                className="z-0 object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-950/92 via-stone-900/55 to-stone-900/15" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-900/25" />
              <div className="relative z-20 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.p
                      className="section-eyebrow mb-4 text-amber-100/90"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      Akhisar berber · erkek kuaförü · Gözde
                    </motion.p>
                    <motion.h1
                      className="mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.08]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="mb-10 max-w-xl text-lg leading-relaxed text-stone-200 md:text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <a
                        href={WHATSAPP_APPOINTMENT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Randevu Al
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          document
                            .getElementById('hizmetler')
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="btn-hero-secondary"
                      >
                        Hizmetlerimiz
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Slider Navigation Dots */}
          <motion.div 
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-24 left-12 z-20 hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="flex flex-col items-center space-y-3">
              <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                Aşağı Kaydır
              </span>
              <motion.svg 
                className="w-8 h-8 text-white bg-black/50 p-2 rounded-full backdrop-blur-sm shadow-lg" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </motion.svg>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="scroll-mt-32 bg-surface-muted py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-eyebrow">Güven & kalite</p>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
                Profesyonel hizmet anlayışımız ve uzman ekibimizle fark yaratıyoruz
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Feature cards with animations */}
              {[
                {
                  title: "Uzman Ekip",
                  description: "Deneyimli ve profesyonel kuaförlerimizle hizmetinizdeyiz.",
                  icon: "shield"
                },
                {
                  title: "Hızlı Hizmet",
                  description: "Zamanınızı değerli kılıyor, hızlı ve kaliteli hizmet sunuyoruz.",
                  icon: "clock"
                },
                {
                  title: "Modern Teknikler",
                  description: "En son trendleri ve modern teknikleri uyguluyoruz.",
                  icon: "star"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-elevated-hover p-8"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-5 text-brand">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {feature.icon === "shield" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      )}
                      {feature.icon === "clock" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                      {feature.icon === "star" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-stone-900">{feature.title}</h3>
                  <p className="leading-relaxed text-stone-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hizmetler Section */}
        <section id="hizmetler" className="scroll-mt-32 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-eyebrow">Salon hizmetleri</p>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Hizmetlerimiz
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
                Saç kesimi, sakal, bakım ve daha fazlası — hepsi tek çatı altında.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {services.slice(0, 6).map((service, index) => (
                <motion.div
                  key={index}
                  className="card-elevated-hover p-8"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="mb-5 text-brand"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="mb-4 border-b border-stone-200 pb-2 text-xl font-bold text-stone-900">
                    {service.title}
                  </h3>
                  <p className="font-medium text-stone-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="hakkimizda" className="scroll-mt-32 bg-surface-muted py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="section-eyebrow">Hakkımızda</p>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Gözde Erkek Kuaförü
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
                Adil ve Baki Erdoğan — Akhisar’da berber ve erkek kuaförü, Hürriyet Mahallesi
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="card-elevated p-8">
                <p className="leading-relaxed text-stone-600">
                  Akhisar’da berber veya erkek kuaförü arayan misafirlerimize yılların tecrübesiyle
                  saç kesimi, sakal tıraşı ve bakım sunuyoruz. Hijyenik ortam, güler yüz ve mümkün
                  olduğunda uğrayabileceğiniz düzen bizim için önemli.
                </p>
              </div>
              <div className="card-elevated p-8">
                <ul className="space-y-3 text-stone-600">
                  <li className="flex gap-2">
                    <span className="text-brand">✓</span>
                    Deneyimli ekip
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand">✓</span>
                    Modern ve temiz salon
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand">✓</span>
                    Uygun fiyat
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand">✓</span>
                    Merkezi konum
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Galeri Section */}
        <section id="galeri" className="scroll-mt-32 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-eyebrow">Salon</p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Galeri
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-stone-600">
                Salonumuzdan birkaç fotoğraf.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {galleryPreview.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200/80 shadow-sm shadow-stone-900/5 transition-all duration-300 hover:border-stone-300 hover:shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  onClick={() => handleImageClick(image.src, images.findIndex((i) => i.src === image.src))}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority={index < 3}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center p-4">
                        <h3 className="text-white text-lg font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {image.alt}
                        </h3>
                        <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                          Gözde Erkek Kuaförü
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" className="scroll-mt-32 bg-surface-muted py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="section-eyebrow">Bize ulaşın</p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Akhisar Erkek Kuaförü İletişim
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-stone-600">
                Hürriyet Mahallesi — telefon, WhatsApp ve harita aşağıda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* İletişim Bilgileri */}
              <div className="card-elevated p-8">
                <h3 className="mb-8 border-b border-stone-200 pb-4 text-2xl font-bold text-stone-900">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-8">
                  <div className="group flex items-start space-x-4">
                    <div className="icon-box">
                      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-stone-900">Adres</h4>
                      <p className="leading-relaxed text-stone-600">
                        Hürriyet Mahallesi 151. Sokak,<br />
                        Hilaliye Cd. No: 31,<br />
                        45200 Akhisar/Manisa
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4">
                    <div className="icon-box">
                      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-stone-900">Telefon</h4>
                      <a 
                        href="tel:+905435566620" 
                        className="font-medium text-brand transition-colors hover:text-brand-hover"
                      >
                        0(543) 556 66 20
          </a>
        </div>
                  </div>

                  <div className="group flex items-start space-x-4">
                    <div className="icon-box">
                      <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-stone-900">WhatsApp Randevu</h4>
                      <a
                        href="https://wa.me/905435566620"
          target="_blank"
          rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 shadow-sm hover:shadow-md"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp ile Randevu Alın
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="card-elevated p-8">
                <h3 className="mb-8 border-b border-stone-200 pb-4 text-2xl font-bold text-stone-900">
                  Konum
                </h3>
                <div className="space-y-6">
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
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <a
                      href="https://maps.google.com/?q=38.916409,27.834227"
          target="_blank"
          rel="noopener noreferrer"
                      className="btn-primary-sm"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Google Maps&apos;te Aç
        </a>
        <a
                      href="https://www.google.com/maps/dir/?api=1&destination=38.916409,27.834227"
          target="_blank"
          rel="noopener noreferrer"
                      className="inline-flex items-center rounded-xl border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-700 shadow-sm transition hover:border-stone-400 hover:bg-stone-50"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Yol Tarifi Al
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
