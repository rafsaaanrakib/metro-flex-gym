'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WHATSAPP_URL } from './Contact';

/** Hamburger menu for small screens. Desktop nav stays in layout.tsx. */
export function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/20 transition-colors hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <span className={`block h-0.5 w-5 bg-bone transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} aria-hidden="true" />
        <span className={`block h-0.5 w-5 bg-bone transition-opacity ${open ? 'opacity-0' : ''}`} aria-hidden="true" />
        <span className={`block h-0.5 w-5 bg-bone transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full h-[calc(100vh-4rem)] overflow-y-auto border-b border-white/10 bg-ink shadow-lg shadow-black/50 md:h-[calc(100vh-4.5rem)]">
          <nav className="mx-auto max-w-7xl px-4 py-4 md:px-8" aria-label="Mobile navigation">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3.5 font-display text-base font-extrabold uppercase tracking-wider text-bone transition-colors last:border-b-0 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block bg-gold px-5 py-3.5 text-center font-display text-sm font-extrabold uppercase tracking-wider text-ink transition-colors hover:bg-gold-bright"
            >
              Join on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
