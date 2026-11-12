import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, CallButton, LADIES_WHATSAPP_URL, MAPS_URL, ADDRESS } from '@/components/Contact';
import { OpenNow } from '@/components/OpenNow';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ladies Gym in Agrabad — Metro Flex Gym (Ladies-Only Hours)',
  description:
    'Ladies-only gym hours in Agrabad, Chattogram: 2:30–5:30 PM daily with a female trainer facility. 4,100 sq ft gym, open 8:30 AM–11 PM, 7 days.',
  alternates: { canonical: 'https://metroflexgym.com.bd/ladies' },
  openGraph: {
    title: 'Ladies Gym in Agrabad — Metro Flex Gym (Ladies-Only Hours)',
    description:
      'Ladies-only gym hours in Agrabad: 2:30–5:30 PM daily with a female trainer facility. 4,100 sq ft gym in Agrabad, Chattogram.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/ladies',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladies Gym in Agrabad — Metro Flex Gym (Ladies-Only Hours)',
    description:
      'Ladies-only gym hours in Agrabad: 2:30–5:30 PM daily with a female trainer facility. 4,100 sq ft gym in Agrabad, Chattogram.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Verified facts only (content brief 2026-11-12).
 * Ladies-only slot 2:30–5:30 PM daily; female trainer facility.
 * No trainer name, no program claims for the ladies' slot,
 * no privacy/CCTV/changing-room claims — all unverified. */

export default function Ladies() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Ladies <span className="text-muted mx-2">/</span> For Women
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Ladies only,
            <br />
            <span className="text-gold-gradient">every afternoon.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Every afternoon the floor belongs to the ladies. A dedicated ladies-only
            slot, a female trainer facility, and the whole 4,100 sq ft gym to train
            in — in Agrabad, seven days a week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton label="Ask about ladies' hours" href={LADIES_WHATSAPP_URL} />
            <CallButton />
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------ 01 · THE HOURS */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="01" label="The hours" title={<>Your slot,<br />every day.</>} />
          <Reveal>
            <p className="whitespace-nowrap font-display font-black uppercase leading-none tracking-tight text-gold text-[clamp(2.25rem,13vw,8rem)]">
              2:30 – 5:30
              <span className="text-bone text-[clamp(1.5rem,6vw,3.75rem)]"> PM</span>
            </p>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-bone/90">
              Only ladies on the floor, 2:30 PM to 5:30 PM, every single day — with
              a female trainer facility. The gym itself is open 8:30 AM to 11:00 PM,
              seven days a week.
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <OpenNow />
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 02 · LADIES SESSIONS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="02" label="Ladies sessions" title={<>When you<br />train.</>} />
        <div className="max-w-3xl">
          <Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border border-gold/50 bg-gold/10 px-4 py-5">
                <span className="font-display text-xl md:text-2xl font-extrabold text-gold">2:30 PM – 5:30 PM</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Only Ladies ★</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                <span className="font-display text-xl md:text-2xl font-extrabold">5:30 PM – 9:00 PM</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">Combined Gents &amp; Ladies</span>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted">
              The ladies-only slot runs every afternoon. After 5:30 PM the floor is
              combined gents and ladies until 9:00 PM, and the gym stays open until
              11:00 PM. A female trainer facility is available, and a trainer is on
              the floor at all times.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Which programs run inside the ladies-only slot, and whether ladies&apos;
              membership prices differ from gents&apos; — ask on WhatsApp and the gym
              will confirm the current details.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 03 · WHAT TO EXPECT */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="03" label="What to expect" title={<>On the floor<br />with you.</>} />
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: '01', title: 'The whole floor', text: 'A 4,100 sq ft floor — free weights, cardio section, machines and a steam bath, all in one place.' },
              { n: '02', title: 'A female trainer', text: 'A female trainer facility, and a trainer on the floor at all times to guide you.' },
              { n: '03', title: 'Lockers & cafe', text: 'Locker facility, food cafe, AC, lift, parking and Wi-Fi throughout the building.' },
              { n: '04', title: 'What to bring', text: 'Comfortable clothes and training shoes. Anything else — ask on WhatsApp before you come.' },
              { n: '05', title: 'First time here?', text: 'Come and look around first. Message on WhatsApp to arrange your first visit.' },
              { n: '06', title: 'Where to find us', text: 'Amin Tower, Lift 7, Agrabad Access Rd, Bepari Para, Chattogram. Open 8:30 AM – 11:00 PM, 7 days.' },
            ].map((c, i) => (
              <Reveal key={c.n} delay={(i % 3) * 0.06} className="bg-ink">
                <article className="h-full p-7 transition-colors hover:bg-surface md:p-8">
                  <span className="font-display text-sm font-bold text-gold">{c.n}</span>
                  <h3 className="mt-4 font-display text-xl font-black uppercase leading-tight">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Questions about<br /><span className="text-gold-gradient">ladies&apos; hours?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
              Message the gym on WhatsApp — ask about the ladies-only slot, the
              female trainer, or membership, and the gym will confirm the details.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={LADIES_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink transition-colors hover:bg-gold-bright focus:outline-none focus:ring-2 focus:ring-gold-bright focus:ring-offset-2 focus:ring-offset-ink"
              >
                WhatsApp — Ladies&apos; Hours
              </a>
              <CallButton />
            </div>
            <p className="mt-8 text-sm text-muted">
              {ADDRESS} ·{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Open in Google Maps
              </a>{' '}
              · <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">See membership &amp; payment</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
