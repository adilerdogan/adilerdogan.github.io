'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP_APPOINTMENT_URL } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === '/';
  /** Ana sayfa en üstte: biraz daha saydam; asla beyaz zemin yok */
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
    { id: 'hizmetler', label: 'Hizmetler' },
    { id: 'hakkimizda', label: 'Hakkımızda' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'iletisim', label: 'İletişim' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const shellGlass = softerGlass
    ? 'border-white/25 bg-stone-950/45 ring-1 ring-white/15'
    : 'border-white/20 bg-stone-950/72 ring-1 ring-white/10';

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[9999] isolate flex justify-center px-4 pb-1 sm:px-6"
      style={{
        paddingTop: 'max(0.875rem, env(safe-area-inset-top, 0px))',
      }}
    >
      <header
        className={`pointer-events-auto w-full max-w-7xl overflow-hidden rounded-3xl border shadow-[0_22px_50px_-12px_rgba(0,0,0,0.45),0_12px_24px_-8px_rgba(0,0,0,0.2)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ease-out ${shellGlass}`}
      >
        <div className="flex h-[4.5rem] items-center justify-between gap-3 px-4 sm:h-[4.75rem] sm:px-6">
          <Link href="/" className="flex min-w-0 shrink items-center">
            <Image
              src="/sources/logo.png"
              alt="Gözde Erkek Kuaförü Logo"
              width={40}
              height={40}
              className="rounded-xl ring-1 ring-white/25"
            />
            <span className="ml-2 truncate text-lg font-bold text-white drop-shadow-md sm:text-xl">
              Gözde Erkek Kuaförü
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex md:gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/88 transition-colors duration-300 hover:bg-white/12 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/35 transition-all duration-300 hover:bg-brand-hover"
            >
              Randevu Al
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl p-2.5 text-white hover:bg-white/12 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            <svg
              className="h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-stone-950/55 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? 'max-h-[min(70vh,28rem)] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 px-3 pb-4 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-white/92 transition-colors hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-md shadow-black/30 transition-colors hover:bg-brand-hover"
            >
              Randevu Al
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
