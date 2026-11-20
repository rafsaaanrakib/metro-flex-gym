import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trainer Schedule — Metro Flex Gym Agrabad',
  description:
    '8 trainers at Metro Flex Gym, Agrabad: 6 male and 2 female. Male trainers 8:30 AM–2:30 PM and 5:30–11:00 PM; female trainers 2:30–9:00 PM. Ladies-only slot covered by a female trainer.',
  alternates: { canonical: 'https://metroflexgym.com.bd/trainers' },
  openGraph: {
    title: 'Trainer Schedule — Metro Flex Gym Agrabad',
    description:
      '8 trainers at Metro Flex Gym, Agrabad: 6 male and 2 female. Male trainers 8:30 AM–2:30 PM and 5:30–11:00 PM; female trainers 2:30–9:00 PM. Ladies-only slot covered by a female trainer.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/trainers',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trainer Schedule — Metro Flex Gym Agrabad',
    description:
      '8 trainers at Metro Flex Gym, Agrabad: 6 male and 2 female. Male trainers 8:30 AM–2:30 PM and 5:30–11:00 PM; female trainers 2:30–9:00 PM. Ladies-only slot covered by a female trainer.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Trainer facts from the gym's "Trainers Scheduled" poster (2026-11-20).
 * Male trainers: 8:30 AM–2:30 PM, 5:30–9:30 PM, 9:30–11:00 PM.
 * Female trainers: 2:30–5:30 PM (ladies only), 5:30–9:00 PM.
 * No trainer names or photos have been shared yet, so none are shown here.
 * The poster lists no Friday trainer hours — the page says so, plainly. */

const MALE_SLOTS = [
  { time: '8:30 AM – 2:30 PM', who: 'Combined Gents & Ladies' },
  { time: '5:30 PM – 9:30 PM', who: 'Combined Gents & Ladies' },
  { time: '9:30 PM – 11:00 PM', who: 'Only Gents' },
];

const FEMALE_SLOTS = [
  { time: '2:30 PM – 5:30 PM', who: 'Only Ladies' },
  { time: '5:30 PM – 9:00 PM', who: 'Combined Gents & Ladies' },
];

export default function Trainers() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            About Us <span className="text-muted mx-2">/</span> Trainer Schedule
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Trainer<br />
            <span className="text-gold-gradient">schedule.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Six male trainers and two female trainers, on the floor at the hours
            below — for form, for your routine, and from your very first session.
          </p>
        </Reveal>
      </section>

      {/* The team in numbers */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="The team" title={<>Eight trainers,<br />on the floor.</>} />
        <div className="grid gap-px bg-white/10 sm:grid-cols-3">
          {[
            { n: '8', label: 'Trainers in total', text: 'Six male and two female trainers, on the floor at set hours.' },
            { n: '6', label: 'Male trainers', text: '8:30 AM–2:30 PM, 5:30–9:30 PM and 9:30–11:00 PM.' },
            { n: '2', label: 'Female trainers', text: '2:30–5:30 PM ladies only, and 5:30–9:00 PM combined.' },
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
              Male trainers are on the floor 8:30 AM–2:30 PM, 5:30–9:30 PM and
              9:30–11:00 PM. Female trainers are on the floor 2:30–5:30 PM and
              5:30–9:00 PM. The gym opens at 7:00 AM — male trainers start at
              8:30 AM.
            </p>
          </Reveal>
          <div className="grid max-w-4xl gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl font-black uppercase text-gold">Male trainers</h3>
              <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                {MALE_SLOTS.map((s) => (
                  <div key={s.time} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                    <span className="font-display text-xl md:text-2xl font-extrabold">{s.time}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{s.who}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl font-black uppercase text-gold">Female trainers</h3>
              <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                {FEMALE_SLOTS.map((s) => (
                  <div key={s.time} className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                    <span className="font-display text-xl md:text-2xl font-extrabold">{s.time}</span>
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
            </Reveal>
          </div>
          <Reveal>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
              The ladies-only slot, 2:30–5:30 PM, runs with a female trainer.
              One-on-one consultancy and custom training &amp; diet routines
              are available — ask on WhatsApp to arrange them.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              Friday 5:00–9:00 PM is optional service — ask on WhatsApp whether
              a trainer is on the floor that day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              <Link href="/schedule" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Full session schedule →
              </Link>{' '}
              ·{' '}
              <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Ladies Membership →
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
