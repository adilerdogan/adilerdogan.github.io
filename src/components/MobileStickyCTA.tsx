'use client';

import { motion, useReducedMotion } from 'framer-motion';

const PHONE_E164 = '905435566620';
const MAPS_DIR =
  'https://www.google.com/maps/dir/?api=1&destination=38.916409,27.834227';

const itemBase =
  'group relative flex flex-1 flex-col items-center justify-center gap-1 px-1.5 py-2.5 min-h-[3.5rem] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand active:bg-stone-100/90';

export default function MobileStickyCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))',
      }}
      aria-label="Hızlı iletişim"
      initial={reduceMotion ? false : { y: 56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 420, damping: 32, mass: 0.85 }
      }
    >
      <div className="mx-3 mb-3 overflow-hidden rounded-2xl border border-stone-200/90 bg-white/92 shadow-[0_-10px_40px_-12px_rgba(28,25,23,0.12),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-1 ring-stone-900/5 backdrop-blur-xl backdrop-saturate-150">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/55 to-transparent"
          aria-hidden
        />
        <div className="flex items-stretch divide-x divide-stone-200/80">
          <a
            href={`tel:+${PHONE_E164}`}
            className={`${itemBase} hover:bg-stone-50/95`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft ring-1 ring-brand/15 transition duration-200 group-active:scale-[0.96] group-hover:bg-brand-soft-hover group-hover:ring-brand/25">
              <svg
                className="h-[1.125rem] w-[1.125rem] text-brand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-600">
              Ara
            </span>
          </a>

          <a
            href={`https://wa.me/${PHONE_E164}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemBase} hover:bg-emerald-50/50`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-200/60 transition duration-200 group-active:scale-[0.96] group-hover:bg-emerald-100/80 group-hover:ring-emerald-300/70">
              <svg
                className="h-[1.125rem] w-[1.125rem] text-emerald-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-600">
              WhatsApp
            </span>
          </a>

          <a
            href={MAPS_DIR}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemBase} hover:bg-amber-50/60`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-200/55 transition duration-200 group-active:scale-[0.96] group-hover:bg-amber-100/70 group-hover:ring-amber-300/65">
              <svg
                className="h-[1.125rem] w-[1.125rem] text-amber-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-600">
              Yol tarifi
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
