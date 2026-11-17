import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/Contact';
import { OpenNow } from '@/components/OpenNow';
import { HOURS_SAT_THU, HOURS_FRIDAY } from '@/lib/hours';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opening Hours — Metro Flex Gym Agrabad',
  description:
    'Metro Flex Gym opening hours: Saturday to Thursday 7:00 AM–11:00 PM. Friday 5:00–9:00 PM (optional service). Agrabad, Chattogram.',
  alternates: { canonical: 'https://metroflexgym.com.bd/opening-hours' },
  openGraph: {
    title: 'Opening Hours — Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym opening hours: Saturday to Thursday 7:00 AM–11:00 PM. Friday 5:00–9:00 PM (optional service). Agrabad, Chattogram.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/opening-hours',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opening Hours — Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym opening hours: Saturday to Thursday 7:00 AM–11:00 PM. Friday 5:00–9:00 PM (optional service). Agrabad, Chattogram.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Hours from the gym's "Our New Schedule" poster, 2026-11-18 (lib/hours.ts).
 * Friday is optional service only — not a full day. */

export default function OpeningHours() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Visit <span className="text-muted mx-2">/</span> Opening Hours
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            When we&apos;re<br />
            <span className="text-gold-gradient">open.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            <OpenNow />
          </p>
        </Reveal>
      </section>

      {/* Hours */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="Hours" title={<>Open six days,<br />plus Friday evening.</>} />
        <div className="max-w-3xl">
          <Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 py-6">
                <span className="font-display text-xl md:text-2xl font-extrabold uppercase">Saturday – Thursday</span>
                <span className="font-display text-xl md:text-2xl font-extrabold text-gold">7:00 AM – 11:00 PM</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 py-6">
                <span className="font-display text-xl md:text-2xl font-extrabold uppercase">Friday</span>
                <span className="font-display text-xl md:text-2xl font-extrabold text-gold">5:00 PM – 9:00 PM</span>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {HOURS_SAT_THU}. {HOURS_FRIDAY} — Friday runs one optional
              combined session for gents and ladies. The ladies-only slot runs
              every afternoon, 2:30–5:30 PM, on open days.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <Link href="/schedule" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                See the full session schedule →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Come and<br /><span className="text-gold-gradient">train.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Ask on WhatsApp" />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/schedule" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Session schedule</Link>
              {' '}· <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Ladies-only hours</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
