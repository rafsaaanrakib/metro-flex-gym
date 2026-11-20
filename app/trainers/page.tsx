import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/Contact';
import { SESSIONS } from '@/lib/hours';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trainer Schedule — Metro Flex Gym Agrabad',
  description:
    '8 trainers at Metro Flex Gym, Agrabad: 6 male and 2 female, on the floor during every open hour. Ladies-only slot covered by a female trainer.',
  alternates: { canonical: 'https://metroflexgym.com.bd/trainers' },
  openGraph: {
    title: 'Trainer Schedule — Metro Flex Gym Agrabad',
    description:
      '8 trainers at Metro Flex Gym, Agrabad: 6 male and 2 female, on the floor during every open hour. Ladies-only slot covered by a female trainer.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/trainers',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trainer Schedule — Metro Flex Gym Agrabad',
    description:
      '8 trainers at Metro Flex Gym, Agrabad: 6 male and 2 female, on the floor during every open hour. Ladies-only slot covered by a female trainer.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Trainer facts only: 8 trainers — 6 male, 2 female — from the gym,
 * 2026-11-18. No trainer names or photos have been shared yet, so none
 * are shown here. Trainer hours = the gym's open hours: a trainer is on
 * the floor at all times while the gym is open. */

export default function Trainers() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            The Gym <span className="text-muted mx-2">/</span> Trainer Schedule
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Trainer<br />
            <span className="text-gold-gradient">schedule.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            A trainer is on the floor at all times while the gym is open — for
            form, for your routine, and from your very first session.
          </p>
        </Reveal>
      </section>

      {/* The team in numbers */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="The team" title={<>Eight trainers,<br />on the floor.</>} />
        <div className="grid gap-px bg-white/10 sm:grid-cols-3">
          {[
            { n: '8', label: 'Trainers in total', text: 'Trainers on the floor during every open hour.' },
            { n: '6', label: 'Male trainers', text: 'Across all sessions — morning, evening and night.' },
            { n: '2', label: 'Female trainers', text: 'Covering the ladies-only afternoon slot.' },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06} className="bg-ink">
              <article className="flex h-full flex-col p-7 md:p-8">
                <span className="font-display text-6xl font-black text-gold">{c.n}</span>
                <h3 className="mt-4 font-display text-xl font-black uppercase leading-tight">{c.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Trainer names and photos are added as the gym shares them. For now,
            ask on WhatsApp and the gym will confirm the trainer on duty.
          </p>
        </Reveal>
      </section>

      {/* Trainer hours */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="02" label="Trainer hours" title={<>When a trainer<br />is with you.</>} />
          <Reveal>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
              Trainers are on the floor during every open hour — Saturday to
              Thursday, 7:00 AM to 11:00 PM, and Friday 5:00–9:00 PM (optional
              service).
            </p>
          </Reveal>
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
                      {s.who === 'Only Ladies' ? ' · Female trainer' : ''}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                The ladies-only slot, 2:30–5:30 PM, runs with a female trainer.
                One-on-one consultancy and custom training &amp; diet routines
                are available — ask on WhatsApp to arrange them.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                <Link href="/schedule" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                  Full session schedule →
                </Link>{' '}
                ·{' '}
                <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                  Ladies-only hours →
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Train with<br /><span className="text-gold-gradient">a trainer.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Ask on WhatsApp" />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gents Membership</Link>
              {' '}· <Link href="/opening-hours" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Opening hours</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
