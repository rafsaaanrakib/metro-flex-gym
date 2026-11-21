import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { WhatsAppButton, WHATSAPP_URL } from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Method — Metro Flex Gym Agrabad',
  description:
    'How to pay at Metro Flex Gym, Agrabad: bank transfer (BRAC Bank, City Bank, Eastern Bank), bKash or Nagad. To pay online, contact the gym on WhatsApp.',
  alternates: { canonical: 'https://metroflexgym.com.bd/payment' },
  openGraph: {
    title: 'Payment Method — Metro Flex Gym Agrabad',
    description:
      'How to pay at Metro Flex Gym, Agrabad: bank transfer (BRAC Bank, City Bank, Eastern Bank), bKash or Nagad. To pay online, contact the gym on WhatsApp.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/payment',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Method — Metro Flex Gym Agrabad',
    description:
      'How to pay at Metro Flex Gym, Agrabad: bank transfer (BRAC Bank, City Bank, Eastern Bank), bKash or Nagad. To pay online, contact the gym on WhatsApp.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* ------------------------------------------------------------------ */
/* Payment details copied EXACTLY from the gym's rate card poster.     */
/* Do not edit numbers without the gym's confirmation.                 */
/* ------------------------------------------------------------------ */

const BANKS = [
  {
    bank: 'BRAC Bank',
    accountName: 'Metro Flex Gym',
    accountNo: '2025206206001',
    branch: 'Sheikh Mujib Road',
  },
  {
    bank: 'City Bank',
    accountName: 'Metro Flex Gym',
    accountNo: '1503024300001',
    branch: 'Halishahar',
  },
  {
    bank: 'Eastern Bank Ltd.',
    accountName: 'MD Nasimul Haque Liton',
    accountNo: '0131440134466',
    branch: 'Halishahar',
  },
];

const MOBILE = [
  { service: 'bKash', accountName: 'Metro Flex Gym', number: '01715-266172', type: 'Personal' },
  { service: 'Nagad', accountName: 'Metro Flex Gym', number: '01715-266172', type: 'Personal' },
];

/* The four package pages, worded EXACTLY as the gym wrote them
   (message to Rakib, 2026-11-21). */
const PACKAGES = [
  {
    n: '01',
    title: 'Gents Membership',
    href: '/membership',
    text: 'Explore all membership packages available for male members.',
  },
  {
    n: '02',
    title: 'Ladies Membership',
    href: '/ladies',
    text: 'Explore all membership packages available for female members.',
  },
  {
    n: '03',
    title: 'Student Membership',
    href: '/student-membership',
    text: 'Explore exclusive membership packages designed for students.',
  },
  {
    n: '04',
    title: 'Ongoing Offers',
    href: '/offers',
    text: 'Discover our latest membership offers, special discounts, and limited-time promotions.',
  },
];

const STEPS = [
  { n: '01', title: 'Choose a plan', text: 'Pick a membership plan — or ask on WhatsApp if you are not sure which one fits you.' },
  { n: '02', title: 'Pay by any method', text: 'Bank transfer, bKash or Nagad — use the exact account details on this page.' },
  { n: '03', title: 'Send proof on WhatsApp', text: 'Send your payment screenshot to +880 1715-266172. The gym confirms your membership and your start date.' },
];

export default function Payment() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Membership <span className="text-muted mx-2">/</span> Payment Method
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Pay<br />
            <span className="text-gold-gradient">your way.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            To make an online membership payment, first visit the relevant
            membership page or the{' '}
            <Link href="/offers" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Ongoing Offers
            </Link>{' '}
            page and choose your preferred membership package.
          </p>
        </Reveal>
      </section>

      {/* Choose your package — the gym's own four options */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
          <SectionHeading index="01" label="Choose your package" title={<>Pick a package<br />first.</>} />
          <div className="grid gap-6 md:grid-cols-2">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <Link href={p.href} className="block h-full">
                  <article className="h-full border border-white/10 bg-ink p-7 transition-colors hover:border-gold/60">
                    <span className="font-display text-3xl font-black text-gold">{p.n}</span>
                    <h3 className="mt-4 font-display text-xl font-black uppercase">
                      {p.title} <span className="text-gold">&rarr;</span>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
              Once you have selected your preferred membership package or ongoing
              offer, contact us via WhatsApp at{' '}
              <a href={WHATSAPP_URL} className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                01715-266172
              </a>{' '}
              for payment instructions and further assistance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How to pay */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
          <SectionHeading index="02" label="How to pay" title={<>Three steps<br />and you&apos;re in.</>} />
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <article className="h-full border border-white/10 bg-ink p-7">
                  <span className="font-display text-3xl font-black text-gold">{s.n}</span>
                  <h3 className="mt-4 font-display text-xl font-black uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bank transfer */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <SectionHeading index="03" label="Bank transfer" title={<>Pay by bank.</>} />
        <div className="grid gap-6 lg:grid-cols-3">
          {BANKS.map((b, i) => (
            <Reveal key={b.bank} delay={i * 0.08}>
              <article className="flex h-full flex-col justify-between border border-white/10 bg-surface p-7">
                <div>
                  <h3 className="font-display text-xl font-black uppercase">{b.bank}</h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Account name</dt>
                      <dd className="text-right font-semibold">{b.accountName}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Branch</dt>
                      <dd className="text-right font-semibold">{b.branch}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Account number</p>
                    <p className="mt-2 font-display text-2xl font-black tracking-wide text-gold">{b.accountNo}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <CopyButton text={b.accountNo} label={`${b.bank} account number`} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-muted">
            Always double-check the account number before you send money. If a number
            looks wrong, ask the gym on WhatsApp first.
          </p>
        </Reveal>
      </section>

      {/* Mobile banking */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
          <SectionHeading index="04" label="Mobile banking" title={<>Or pay by<br />bKash &amp; Nagad.</>} />
          <div className="grid gap-6 md:grid-cols-2">
            {MOBILE.map((m, i) => (
              <Reveal key={m.service} delay={i * 0.08}>
                <article className="flex flex-wrap items-center justify-between gap-6 border border-white/10 bg-ink p-7 md:p-8">
                  <div>
                    <h3 className="font-display text-3xl font-black uppercase">
                      {m.service === 'bKash' ? <span className="text-[#E2136E]">bKash</span> : <span className="text-[#F6921E]">Nagad</span>}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {m.accountName} · {m.type} number
                    </p>
                    <p className="mt-3 font-display text-3xl font-black tracking-wide text-gold">{m.number}</p>
                  </div>
                  <CopyButton text="01715266172" label={`${m.service} number`} />
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 border border-gold/40 bg-gold/5 p-7 text-center md:p-10">
              <h3 className="font-display text-2xl font-black uppercase">Paid? Confirm it.</h3>
              <div className="mt-7">
                <WhatsAppButton label="Confirm Payment on WhatsApp" />
              </div>
              <p className="mt-6 text-sm text-muted">
                Prefer to visit?{' '}
                <Link href="/#location" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                  Amin Tower (Lift 7), Agrabad Access Road, Chattogram
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Questions about<br /><span className="text-gold-gradient">payment?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
              Ask on WhatsApp — the gym confirms the account details and your
              start date before you pay.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink transition-colors hover:bg-gold-bright focus:outline-none focus:ring-2 focus:ring-gold-bright focus:ring-offset-2 focus:ring-offset-ink"
              >
                Ask on WhatsApp
              </a>
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
