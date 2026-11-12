import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, WHATSAPP_URL, MAPS_URL } from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Metro Flex Gym Agrabad',
  description:
    'Metro Flex Gym FAQ: opening hours, ladies-only hours, membership prices, how to pay, parking and location in Agrabad, Chattogram.',
  alternates: { canonical: 'https://metroflexgym.com.bd/faq' },
  openGraph: {
    title: 'FAQ — Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym FAQ: opening hours, ladies-only hours, membership prices, how to pay, parking and location in Agrabad, Chattogram.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/faq',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym FAQ: opening hours, ladies-only hours, membership prices, how to pay, parking and location in Agrabad, Chattogram.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* Verified facts only (content brief 2026-11-12).
 * Real membership prices from the gym's rate card (lib/pricing.ts).
 * No free-trial promise, no trainer names, no class times. */

export default function Faq() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            FAQ <span className="text-muted mx-2">/</span> Questions, answered
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Asked,
            <br />
            <span className="text-gold-gradient">answered.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            The questions that stop people joining, answered plainly. Anything
            else — ask on WhatsApp and the gym will confirm it.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------ QUESTIONS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
        <div className="max-w-4xl">
          <Reveal>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <details className="group py-6" open>
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  What are the gym&apos;s opening hours?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Open 8:30 AM to 11:00 PM, seven days a week.
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  What are the ladies-only hours?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Every afternoon, 2:30 PM to 5:30 PM, the floor is ladies only,
                  with a female trainer facility. After 5:30 PM the sessions are
                  combined gents and ladies until 9:00 PM. See the{' '}
                  <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                    Ladies page
                  </Link>{' '}
                  for the full detail.
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  How much does membership cost?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 max-w-2xl">
                  <p className="text-base leading-relaxed text-muted">
                    Membership starts at <span className="font-display font-extrabold text-gold">৳4,500</span> for
                    1 month without a steam bath. There are 9 packages, from 1 month
                    to 10 years, each with or without steam bath. No admission fee.
                    15% VAT applies. See{' '}
                    <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                      Membership &amp; Payment
                    </Link>{' '}
                    for the full rate card.
                  </p>
                </div>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  How do I pay?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  By bank transfer (BRAC Bank, City Bank or Eastern Bank), or by
                  bKash or Nagad — then confirm your payment on WhatsApp. All
                  account details are on the{' '}
                  <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                    Membership &amp; Payment page
                  </Link>
                  .
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  What should I bring?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Comfortable clothes and training shoes. Anything else you are
                  unsure about — ask on WhatsApp before you come.
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  Where exactly is the gym?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Rafiq Ullah Bari, Bepari Para, Amin Tower (Lift 7), Agrabad
                  Access Rd, Chattogram 4100 — on Agrabad Access Road, Bepari
                  Para. Take the lift to the 7th floor.{' '}
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                    Open in Google Maps →
                  </a>
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  Is there parking?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Yes — the building has a parking facility, and a lift straight
                  to the 7th floor.
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  Can I come and look around first?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Yes — message the gym on WhatsApp to arrange your first visit.
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  Is there a female trainer?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Yes — the gym has a female trainer facility, and the ladies-only
                  slot runs every afternoon, 2:30 PM to 5:30 PM. The gym has not
                  shared the trainer&apos;s name yet; ask on WhatsApp and they
                  will confirm it.
                </p>
              </details>

              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-display text-xl md:text-2xl font-extrabold uppercase leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                  Do I need experience to join?
                  <span aria-hidden="true" className="shrink-0 font-body text-2xl font-light text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  A trainer is on the floor at all times to guide you — for form,
                  for your routine, and from your very first session. So you are
                  looked after even if you have never trained before.
                </p>
              </details>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Still have<br /><span className="text-gold-gradient">a question?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
              Ask on WhatsApp — the gym will confirm anything not covered here.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Ask on WhatsApp" />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/ladies" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Ladies-only hours</Link>
              {' '}· <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Membership &amp; payment</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
