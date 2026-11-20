import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WHATSAPP_URL } from '@/components/Contact';
import { PACKAGES } from '@/lib/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gents Membership — Metro Flex Gym Agrabad',
  description:
    'Gents membership at Metro Flex Gym, Agrabad: 9 packages from ৳4,000 with the Winter Offer (regular ৳4,500), monthly to 10 years, with or without steam bath. No admission fee, 15% VAT applies.',
  alternates: { canonical: 'https://metroflexgym.com.bd/membership' },
  openGraph: {
    title: 'Gents Membership — Metro Flex Gym Agrabad',
    description:
      'Gents membership at Metro Flex Gym, Agrabad: 9 packages from ৳4,000 with the Winter Offer (regular ৳4,500), monthly to 10 years, with or without steam bath. No admission fee, 15% VAT applies.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/membership',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gents Membership — Metro Flex Gym Agrabad',
    description:
      'Gents membership at Metro Flex Gym, Agrabad: 9 packages from ৳4,000 with the Winter Offer (regular ৳4,500), monthly to 10 years, with or without steam bath. No admission fee, 15% VAT applies.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Real membership prices live in lib/pricing.ts (gym's rate card). */
/* Payment details live on the Payment Method page (/payment).         */

export default function Membership() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Membership <span className="text-muted mx-2">/</span> Gents
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Gents<br />
            <span className="text-gold-gradient">membership.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Pick a plan, pay on the Payment Method page, then confirm on WhatsApp.
            No online payment form — you pay the gym directly.
          </p>
        </Reveal>
      </section>

      {/* Membership plans — full rate card */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="Plans" title={<>Membership plans.</>} />
        <Reveal>
          <div className="mb-10 border border-gold/40 bg-gold/5 p-6 md:p-7">
            <p className="font-display text-lg font-black uppercase tracking-wide text-gold">❄ Winter Offer — prices below are discounted</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Every package is on offer right now. The crossed-out price is the regular
              price. See the{' '}
              <Link href="/offers" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Winter Offer page
              </Link>{' '}
              for the full offer, or the{' '}
              <Link href="/regular-price" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Regular Price page
              </Link>{' '}
              for regular prices only.
            </p>
          </div>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Nine packages, from 1 month to 10 years — each with or without steam
            bath. No admission fee. 15% VAT applies.
          </p>
        </Reveal>
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
                    <td className="px-5 py-4"><span className="font-display text-lg font-black text-gold">{p.withoutOffer}</span> <span className="text-sm text-muted line-through">{p.withoutRegular}</span></td>
                    <td className="px-5 py-4">
                      <span className="font-display text-lg font-black text-gold">{p.withSteamOffer}</span> <span className="text-sm text-muted line-through">{p.withSteamRegular}</span>
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
            No admission fee · 15% VAT applies. Questions about plans?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Ask on WhatsApp
            </a>
          </p>
          <div className="mt-8 border border-gold/40 bg-gold/5 p-6 md:p-7">
            <h3 className="font-display text-xl font-black uppercase">Student? There is a student package.</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              HSC-level students with a valid student ID card: admission ৳3,000 and
              ৳3,000 per month. No steam bath included (৳300 per steam).{' '}
              <Link href="/student-membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Student Membership →
              </Link>
            </p>
          </div>
          <p className="mt-6 text-sm text-muted">
            Ladies train in their own afternoon slot — see{' '}
            <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Ladies Membership →
            </Link>
          </p>
        </Reveal>
      </section>

    </>
  );
}
