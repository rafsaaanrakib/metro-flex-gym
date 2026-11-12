import type { Metadata, Viewport } from 'next';
// Self-hosted fonts (Fontsource) — the build must not fetch from Google
// Fonts at build time: Cloudflare's build container returns a response
// the next/font/google loader cannot parse, so `next build` crashes.
// These local woff2 files bundle into the build instead.
import '@fontsource/archivo/latin-400.css';
import '@fontsource/archivo/latin-500.css';
import '@fontsource/archivo/latin-600.css';
import '@fontsource/archivo/latin-700.css';
import '@fontsource/archivo/latin-800.css';
import '@fontsource/archivo/latin-900.css';
import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { WhatsAppFloat, WHATSAPP_URL, WHATSAPP_DISPLAY, CALL_DISPLAY, FACEBOOK_URL, MAPS_URL, ADDRESS } from '@/components/Contact';
import { MobileMenu } from '@/components/MobileMenu';
import { OpenNow } from '@/components/OpenNow';
import { ScrollProgress } from '@/components/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://metroflexgym.com.bd'),
  title: 'Metro Flex Gym — Gents & Ladies Gym in Agrabad, Chattogram',
  description:
    '4,100 sq ft gym in Agrabad, Chattogram. Ladies-only 2:30–5:30 PM daily. Membership from ৳4,500. Join on WhatsApp.',
  keywords: ['gym Chattogram', 'gym Agrabad', 'fitness center Chattogram', 'Metro Flex Gym', 'ladies gym Chattogram', 'gym Bangladesh'],
  alternates: { canonical: 'https://metroflexgym.com.bd' },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Metro Flex Gym — Gents & Ladies Gym in Agrabad, Chattogram',
    description:
      '4,100 sq ft gym in Agrabad, Chattogram. Ladies-only 2:30–5:30 PM daily. Membership from ৳4,500. Join on WhatsApp.',
    type: 'website',
    locale: 'en_BD',
    url: 'https://metroflexgym.com.bd',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metro Flex Gym — Gents & Ladies Gym in Agrabad, Chattogram',
    description:
      '4,100 sq ft gym in Agrabad, Chattogram. Ladies-only 2:30–5:30 PM daily. Membership from ৳4,500. Join on WhatsApp.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
};

const NAV = [
  { href: '/#about', label: 'The Gym' },
  { href: '/ladies', label: 'Ladies' },
  { href: '/#schedule', label: 'Schedule' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/membership', label: 'Membership' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: 'Metro Flex Gym',
  slogan: 'A Place of Perfect Fitness',
  description:
    'The fitness center providing tremendous gymnasium facilities in the city for handsome men & women.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rafiq Ullah Bari, Bepari Para, Amin Tower (Lift 7), Agrabad Access Rd',
    addressLocality: 'Chattogram',
    postalCode: '4100',
    addressCountry: 'BD',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 22.3293846, longitude: 91.8012698 },
  telephone: '+8801715266172',
  url: 'https://metroflexgym.com.bd',
  image: 'https://metroflexgym.com.bd/images/hero.webp',
  priceRange: 'BDT 4,500 - BDT 325,000',
  openingHours: 'Mo-Su 08:30-23:00',
  sameAs: ['https://www.facebook.com/M.flexgym'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:30',
      closes: '23:00',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink font-body text-bone">
        <ScrollProgress />
        <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
            <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Metro Flex Gym — home">
              <Image src="/images/logo.webp" alt="Metro Flex Gym logo" width={34} height={48} className="h-11 w-auto md:h-12" priority />
              <span className="hidden leading-none whitespace-nowrap sm:block">
                <span className="block font-display text-base md:text-lg font-black uppercase tracking-wide">
                  Metro Flex <span className="text-gold-gradient">Gym</span>
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.3em] uppercase text-muted">
                  Gents &amp; Ladies — Agrabad
                </span>
              </span>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-semibold uppercase tracking-wider text-bone/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex shrink-0 items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden bg-gold px-4 py-3 font-display text-xs md:text-sm font-extrabold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-bright focus:outline-none focus:ring-2 focus:ring-gold-bright md:inline-block"
              >
                Join on WhatsApp
              </a>
              <MobileMenu items={NAV} />
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 bg-surface">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-8">
            <div>
              <Image src="/images/logo.webp" alt="Metro Flex Gym logo" width={96} height={135} className="h-32 w-auto" loading="lazy" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
                A Place of Perfect Fitness. Gents &amp; ladies gym in Agrabad, Chattogram.
              </p>
              <p className="mt-4">
                <OpenNow />
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.25em] text-gold">Pages</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-bone/85">
                <li><Link href="/" className="inline-block py-1 hover:text-gold">Home</Link></li>
                <li><Link href="/ladies" className="inline-block py-1 hover:text-gold">Ladies / For Women</Link></li>
                <li><Link href="/faq" className="inline-block py-1 hover:text-gold">FAQ</Link></li>
                <li><Link href="/membership" className="inline-block py-1 hover:text-gold">Membership &amp; Payment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.25em] text-gold">Visit</h3>
              <address className="mt-4 text-sm leading-relaxed text-bone/85 not-italic">
                {ADDRESS}
              </address>
              <p className="mt-4 text-sm text-muted">
                Open 8:30 AM – 11:00 PM
                <br />
                7 days a week
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-bone transition-colors hover:border-gold hover:text-gold"
              >
                Open in Google Maps
              </a>
            </div>
            <div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.25em] text-gold">Contact</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/85">
                WhatsApp:{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:text-gold-bright">
                  {WHATSAPP_DISPLAY}
                </a>
                <br />
                Call: <a href="tel:+8801819630154" className="hover:text-gold">{CALL_DISPLAY}</a>
                <br />
                Facebook:{' '}
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  facebook.com/M.flexgym
                </a>
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block bg-gold px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wider text-ink transition-colors hover:bg-gold-bright"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 py-5">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-xs text-muted md:px-8">
              <p>© {new Date().getFullYear()} Metro Flex Gym — Agrabad, Chattogram. All rights reserved.</p>
              <p>
                Website by{' '}
                <a href="https://rakibwebstudio.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:text-gold-bright">
                  Rakib Web Studio
                </a>
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
