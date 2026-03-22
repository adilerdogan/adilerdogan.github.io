'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { WHATSAPP_APPOINTMENT_URL } from '@/lib/site';

const quickLinks = [
  { href: '/', label: 'Ana sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-700/80 bg-stone-900 pb-20 text-stone-100 md:pb-0">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-14"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-32px' }}
          variants={stagger}
        >
          <motion.div className="space-y-5" variants={fadeUp}>
            <Link href="/" className="inline-flex items-center gap-3 rounded-xl outline-offset-4 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500/80">
              <Image
                src="/sources/logo.png"
                alt="Gözde Erkek Kuaförü"
                width={44}
                height={44}
                className="rounded-xl ring-1 ring-white/10"
              />
              <span className="text-lg font-bold tracking-tight text-white">Gözde Erkek Kuaförü</span>
            </Link>
            <p className="text-base leading-relaxed text-stone-300">
              Akhisar Hürriyet Mahallesi’nde erkek kuaförü ve berber. Adil & Baki Erdoğan — saç,
              sakal ve bakım; merkeze kolay ulaşım.
            </p>
          </motion.div>

          <motion.div className="flex flex-col" variants={fadeUp}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:mb-5 sm:text-sm">
              İletişim
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-stone-200">
                  Hürriyet Mahallesi 151. Sokak,
                  <br />
                  Hilaliye Cd. No: 31,
                  <br />
                  45200 Akhisar/Manisa
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a
                  href="tel:+905435566620"
                  className="text-base font-semibold text-white underline-offset-2 transition hover:text-amber-100 hover:underline"
                >
                  0 (543) 556 66 20
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <a
                  href={WHATSAPP_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-stone-200 underline-offset-2 transition hover:text-white hover:underline"
                >
                  WhatsApp ile randevu
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex flex-col" variants={fadeUp}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:mb-5 sm:text-sm">
              Hızlı bağlantılar
            </h3>
            <nav aria-label="Alt bilgi menüsü">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:max-w-xs">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-base text-stone-200 transition hover:text-white focus-visible:rounded-md focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/80"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-stone-700/80 pt-8"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
            <p className="text-center text-sm text-stone-400 sm:text-left sm:text-base">
              © {new Date().getFullYear()} Gözde Erkek Kuaförü. Tüm hakları saklıdır.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-stone-100 transition hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/80"
            >
              <span>Yukarı çık</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
