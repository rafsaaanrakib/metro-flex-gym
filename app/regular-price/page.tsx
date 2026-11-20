import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, WHATSAPP_URL } from '@/components/Contact';
import { PACKAGES } from '@/lib/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regular Price — Metro Flex Gym Agrabad',
  description:
    'Regular membership prices at Metro Flex Gym, Agrabad: 9 packages from ৳4,500, monthly to 10 years, with or without steam bath. No admission fee.',
  alternates: { canonical: 'https://metroflexgym.com.bd/regular-price' },
  openGraph: {
    title: 'Regular Price — Metro Flex Gym Agrabad',
    description:
      'Regular membership prices at Metro Flex Gym: 9 packages from ৳4,500, monthly to 10 years, with or without steam bath. No admission fee.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/regular-price',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regular Price — Metro Flex Gym Agrabad',
    description:
      'Regular membership prices at Metro Flex Gym: 9 packages from ৳4,500, monthly to 10 years, with or without steam bath. No admission fee.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Regular prices from the gym's Winter Offer poster, 2026-11-18
 * (lib/pricing.ts). These are the full prices before any offer. */

export default function RegularPrice() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Membership <span className="text-muted mx-2">/</span> Regular Price
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Regular<br />
            <span className="text-gold-gradient">prices.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            The full price list, before any offer. Nine packages, from 1 month to
            10 years — each with or without steam bath. No admission fee. 15% VAT
            applies.
          </p>
        </Reveal>
      </section>

      {/* Regular price table */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="Price list" title={<>Every package,<br />regular price.</>} />
        <Reveal>
          <div className="hidden border border-white/10 md:block">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-surface font-display text-xs font-extrabold uppercase tracking-[0.2em] text-gold">
                  <th scope="col" className="px-5 py-4">Package</th>
                  <th scope="col" className="px-5 py-4">Duration</th>
                  <th scope="col" className="px-5 py-4">Without steam bath</th>
                  <th scope="col" className="px-5 py-4">With steam bath</th>
                </tr>
              </thead>
              <tbody>
                {PACKAGES.map((p) => (
                  <tr key={p.name} className="border-b border-white/10 last:border-b-0">
                    <td className="px-5 py-4 font-display text-base font-black uppercase">{p.name}</td>
                    <td className="px-5 py-4 text-bone/90">{p.duration}</td>
                    <td className="px-5 py-4 font-display text-lg font-black text-gold">{p.withoutRegular}</td>
                    <td className="px-5 py-4">
                      <span className="font-display text-lg font-black text-gold">{p.withSteamRegular}</span>
                      <span className="block text-xs text-muted">({p.steamBaths} steam baths)</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-px bg-white/10 md:hidden">
            {PACKAGES.map((p) => (
              <article key={p.name} className="bg-ink p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-black uppercase">{p.name}</h3>
                  <span className="text-sm text-muted">{p.duration}</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-baseline justify-between gap-3 border-t border-white/10 pt-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">Without steam</span>
                    <span className="font-display text-lg font-black text-gold">{p.withoutRegular}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-t border-white/10 pt-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">With steam</span>
                    <span className="text-right">
                      <span className="font-display text-lg font-black text-gold">{p.withSteamRegular}</span>
                      <span className="block text-xs text-muted">({p.steamBaths} steam baths)</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted">
            No admission fee · 15% VAT applies. Right now every package is discounted
            under the{' '}
            <Link href="/offers" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Winter Offer
            </Link>
             (ends 31 December 2026). Questions about plans?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Ask on WhatsApp
            </a>
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Ready to<br /><span className="text-gold-gradient">join?</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gents Membership</Link>
              {' '}· <Link href="/offers" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Winter Offer</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
