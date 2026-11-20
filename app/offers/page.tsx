import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, WHATSAPP_URL } from '@/components/Contact';
import { PACKAGES } from '@/lib/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Available Offers — Winter Offer | Metro Flex Gym Agrabad',
  description:
    'Winter Offer at Metro Flex Gym: every membership discounted — 1 month from ৳4,000 (regular ৳4,500). No admission fee, 15% VAT applies.',
  alternates: { canonical: 'https://metroflexgym.com.bd/offers' },
  openGraph: {
    title: 'Available Offers — Winter Offer | Metro Flex Gym Agrabad',
    description:
      'Winter Offer at Metro Flex Gym: every membership discounted — 1 month from ৳4,000 (regular ৳4,500). No admission fee, 15% VAT applies.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/offers',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/offers-winter.webp', width: 1000, height: 1094, alt: 'Metro Flex Gym Winter Offer poster' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Available Offers — Winter Offer | Metro Flex Gym Agrabad',
    description:
      'Winter Offer at Metro Flex Gym: every membership discounted — 1 month from ৳4,000 (regular ৳4,500). No admission fee, 15% VAT applies.',
    images: ['https://metroflexgym.com.bd/images/offers-winter.webp'],
  },
};

/* Winter Offer prices from the gym's own Winter Offer poster, 2026-11-18
 * (lib/pricing.ts). No end date was printed on the poster — none is
 * shown here. No admission fee. 15% VAT applies. */

export default function Offers() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Offers <span className="text-muted mx-2">/</span> Available Offers
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Winter<br />
            <span className="text-gold-gradient">offer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Every membership package is discounted right now — with or without
            steam bath. No admission fee. 15% VAT applies.
          </p>
        </Reveal>
      </section>

      {/* Offer poster */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <Reveal>
          <figure className="mx-auto max-w-2xl overflow-hidden">
            <Image
              src="/images/offers-winter.webp"
              alt="Metro Flex Gym Winter Offer poster — regular and discount prices"
              width={1000}
              height={1094}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full object-cover"
              priority
            />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
              The Winter Offer poster, as printed by the gym
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Discount table */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="Discount prices" title={<>Every package,<br />on offer.</>} />
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
                    <td className="px-5 py-4">
                      <span className="font-display text-lg font-black text-gold">{p.withoutOffer}</span>
                      <span className="ml-2 text-sm text-muted line-through">{p.withoutRegular}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-display text-lg font-black text-gold">{p.withSteamOffer}</span>
                      <span className="ml-2 text-sm text-muted line-through">{p.withSteamRegular}</span>
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
                    <span className="text-right">
                      <span className="font-display text-lg font-black text-gold">{p.withoutOffer}</span>{' '}
                      <span className="text-sm text-muted line-through">{p.withoutRegular}</span>
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-t border-white/10 pt-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">With steam</span>
                    <span className="text-right">
                      <span className="font-display text-lg font-black text-gold">{p.withSteamOffer}</span>{' '}
                      <span className="text-sm text-muted line-through">{p.withSteamRegular}</span>
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
            The crossed-out price is the regular price — see the{' '}
            <Link href="/regular-price" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Regular Price page
            </Link>{' '}
            for the full list. No admission fee · 15% VAT applies. To join at the
            offer price, message the gym on WhatsApp.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Claim the<br /><span className="text-gold-gradient">winter offer.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Join on WhatsApp" />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gents Membership</Link>
              {' '}· <Link href="/regular-price" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Regular prices</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
