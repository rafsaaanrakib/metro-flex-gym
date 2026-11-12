import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { WhatsAppButton, WHATSAPP_URL } from '@/components/Contact';
import { PACKAGES } from '@/lib/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership & Prices — Metro Flex Gym Agrabad',
  description:
    '9 packages from ৳4,500, monthly to 10 years, with or without steam bath. No admission fee, 15% VAT applies. Pay by bank, bKash or Nagad.',
  alternates: { canonical: 'https://metroflexgym.com.bd/membership' },
  openGraph: {
    title: 'Membership & Prices — Metro Flex Gym Agrabad',
    description:
      '9 packages from ৳4,500, monthly to 10 years, with or without steam bath. No admission fee, 15% VAT applies.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/membership',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/hero.webp', width: 1200, height: 900, alt: 'Metro Flex Gym cardio area' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Membership & Prices — Metro Flex Gym Agrabad',
    description:
      '9 packages from ৳4,500, monthly to 10 years, with or without steam bath. No admission fee, 15% VAT applies.',
    images: ['https://metroflexgym.com.bd/images/hero.webp'],
  },
};

/* ------------------------------------------------------------------ */
/* Payment details copied EXACTLY from the gym's rate card poster.     */
/* Do not edit numbers without the gym's confirmation.                 */
/* Real membership prices live in lib/pricing.ts (gym's rate card).    */
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

const STEPS = [
  { n: '01', title: 'Choose a plan', text: 'Pick a membership plan above — or ask on WhatsApp if you are not sure which one fits you.' },
  { n: '02', title: 'Pay by any method', text: 'Bank transfer, bKash or Nagad — use the exact account details on this page.' },
  { n: '03', title: 'Send proof on WhatsApp', text: 'Send your payment screenshot to +880 1715-266172. The gym confirms your membership and your start date.' },
];

export default function Membership() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Membership <span className="text-muted mx-2">/</span> Payment
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Join the gym.<br />
            <span className="text-gold-gradient">Pay your way.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Pick a plan, pay by bank transfer, bKash or Nagad, and confirm on WhatsApp.
            No online payment form — you pay the gym directly.
          </p>
        </Reveal>
      </section>

      {/* Membership plans — full rate card */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="Plans" title={<>Membership plans.</>} />
        <Reveal>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Nine packages, from 1 month to 10 years — each with or without steam
            bath. No admission fee. 15% VAT applies.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-3 text-xs text-muted sm:hidden">Swipe sideways to see all prices →</p>
          <div className="overflow-x-auto border border-white/10">
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
                    <td className="px-5 py-4 font-display text-lg font-black text-gold">{p.without}</td>
                    <td className="px-5 py-4">
                      <span className="font-display text-lg font-black text-gold">{p.withSteam}</span>
                      <span className="block text-xs text-muted">({p.steamBaths} steam baths)</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted">
            No admission fee · 15% VAT applies. Questions about plans?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              Ask on WhatsApp
            </a>
          </p>
        </Reveal>
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
                  Amin Tower (Lift 7), Agrabad Access Rd, Chattogram
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
