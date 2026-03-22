'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { WHATSAPP_APPOINTMENT_URL } from '@/lib/site';

const ROUTE_BY_ID: Record<string, string> = {
  anasayfa: '/',
  hizmetler: '/hizmetler',
  hakkimizda: '/hakkimizda',
  galeri: '/galeri',
  iletisim: '/iletisim',
};

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const softerGlass =
    isHome && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > 24);
  }, [pathname]);

  const navItems = [
    { id: 'anasayfa', label: 'Ana Sayfa' },
    { id: 'hakkimizda', label: 'Hakkımızda' },
    { id: 'hizmetler', label: 'Hizmetler' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'iletisim', label: 'İletişim' },
  ] as const;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isNavActive = (id: string) => {
    if (id === 'anasayfa') return pathname === '/';
    return pathname === ROUTE_BY_ID[id];
  };

  const shellGlass = softerGlass
    ? 'border-white/15 bg-stone-950/40'
    : 'border-white/12 bg-stone-950/78';

  const navInactive =
    'text-white/70 hover:bg-white/10 hover:text-white';
  const navActive =
    'bg-white/14 text-white shadow-sm shadow-black/20';

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[9999] isolate px-4 sm:px-6 lg:px-8"
      style={{
        paddingTop: 'max(0.875rem, env(safe-area-inset-top, 0px))',
      }}
    >
      <motion.header
        className={`pointer-events-auto mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border-b backdrop-blur-2xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${shellGlass} shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-12px_rgba(0,0,0,0.35)]`}
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/90 to-transparent"
          aria-hidden
        />

        <div className="flex h-[4.5rem] w-full items-center justify-between gap-4 px-4 sm:h-[4.75rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 shrink items-center gap-3 rounded-2xl py-1 pr-2 transition-colors hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/80"
            onClick={() => {
              if (pathname === '/') scrollToSection('anasayfa');
            }}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/12 to-white/[0.04] ring-1 ring-white/20 transition group-hover:ring-white/30">
              <Image
                src="/sources/logo.png"
                alt="Gözde Erkek Kuaförü Logo"
                width={36}
                height={36}
                className="rounded-xl"
              />
            </span>
            <span className="min-w-0 text-left">
              <span className="block truncate text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-200/85">
                Akhisar
              </span>
              <span className="block truncate text-base font-semibold tracking-tight text-white sm:text-lg">
                Gözde Erkek Kuaförü
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 shadow-inner shadow-black/20 md:flex"
            aria-label="Ana menü"
          >
            {navItems.map((item) => {
              const active = isNavActive(item.id);
              const className = `rounded-full px-3.5 py-2 text-sm font-medium transition duration-200 lg:px-4 ${
                active ? navActive : navInactive
              }`;

              if (pathname === '/') {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={className}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={ROUTE_BY_ID[item.id]}
                  className={className}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand to-amber-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-950/40 transition duration-200 hover:brightness-110 hover:shadow-xl hover:shadow-amber-950/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300/70 md:inline-flex"
            >
              <svg
                className="h-4 w-4 opacity-95"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Randevu Al
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/12 md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-stone-950/90 transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? 'max-h-[min(70vh,28rem)] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 px-4 pb-5 pt-3">
            {navItems.map((item) => {
              const active = isNavActive(item.id);
              const rowClass = `flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                active
                  ? 'bg-white/12 text-white'
                  : 'text-white/88 hover:bg-white/10'
              }`;

              if (pathname === '/') {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={rowClass}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={ROUTE_BY_ID[item.id]}
                  className={rowClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-amber-700 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-950/35 transition hover:brightness-110"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Randevu Al
            </a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
