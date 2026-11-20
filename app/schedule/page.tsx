import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/Contact';
import { SESSIONS } from '@/lib/hours';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule — Metro Flex Gym Agrabad',
  description:
    'Metro Flex Gym session schedule: morning, afternoon ladies-only, evening and night sessions, plus Friday optional service. Agrabad, Chattogram.',
  alternates: { canonical: 'https://metroflexgym.com.bd/schedule' },
  openGraph: {
    title: 'Schedule — Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym session schedule: morning, afternoon ladies-only, evening and night sessions, plus Friday optional service. Agrabad, Chattogram.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/schedule',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule — Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym session schedule: morning, afternoon ladies-only, evening and night sessions, plus Friday optional service. Agrabad, Chattogram.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Session times from the gym's "Our New Schedule" poster, 2026-11-18
 * (lib/hours.ts). */

export default function Schedule() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Visit <span className="text-muted mx-2">/</span> Schedule
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Session<br />
            <span className="text-gold-gradient">schedule.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Sessions are organised for gents and ladies — including a dedicated
            ladies-only slot every afternoon, 2:30–5:30 PM.
          </p>
        </Reveal>
      </section>

      {/* Sessions */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="Sessions" title={<>Your session,<br />your time.</>} />
        <div className="max-w-3xl">
          <Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {SESSIONS.map((s) => (
                <div key={s.name} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <div>
                    <span className="font-display text-xl md:text-2xl font-extrabold">{s.time}</span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted">{s.name}</span>
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.2em] ${
                      s.who === 'Only Ladies' ? 'text-gold' : 'text-muted'
                    }`}
                  >
                    {s.who}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Morning and evening sessions are combined gents and ladies. The
              afternoon session is ladies only. Night is gents only. Friday runs
              one optional combined session, 5:00–9:00 PM.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <Link href="/opening-hours" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Opening hours →
              </Link>{' '}
              ·{' '}
              <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Ladies-only hours →
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
              Pick your<br /><span className="text-gold-gradient">session.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Ask on WhatsApp" />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/opening-hours" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Opening hours</Link>
              {' '}· <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gents Membership</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
