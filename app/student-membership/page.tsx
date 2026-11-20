import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, WHATSAPP_URL } from '@/components/Contact';
import { STUDENT_MEMBERSHIP } from '@/lib/pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Membership — Metro Flex Gym Agrabad',
  description:
    'Student membership at Metro Flex Gym: ৳3,000 admission + ৳3,000 per month. Limited to HSC-level students only; a valid student ID card is required.',
  alternates: { canonical: 'https://metroflexgym.com.bd/student-membership' },
  openGraph: {
    title: 'Student Membership — Metro Flex Gym Agrabad',
    description:
      'Student membership at Metro Flex Gym: ৳3,000 admission + ৳3,000 per month. Limited to HSC-level students only; a valid student ID card is required.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/student-membership',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/student-poster.webp', width: 900, height: 1125, alt: 'Metro Flex Gym student membership poster' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Membership — Metro Flex Gym Agrabad',
    description:
      'Student membership at Metro Flex Gym: ৳3,000 admission + ৳3,000 per month. Limited to HSC-level students only; a valid student ID card is required.',
    images: ['https://metroflexgym.com.bd/images/student-poster.webp'],
  },
};

/* Student package details from the gym's own student poster, 2026-11-18
 * (lib/pricing.ts). NOTE: unlike regular packages, the student package
 * HAS an admission fee (৳3,000). HSC-level students only; a valid
 * student ID card is required; no steam bath included (৳400 per steam).
 * 15% VAT applies. */

export default function StudentMembership() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Membership <span className="text-muted mx-2">/</span> Student Membership
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Student<br />
            <span className="text-gold-gradient">membership.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            The student package is limited to HSC-level students only. Train on
            the same floor, with the same trainers — at the student price.
          </p>
        </Reveal>
      </section>

      {/* Price */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <SectionHeading index="01" label="The package" title={<>One price,<br />for students.</>} />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <dl className="divide-y divide-white/10 border-y border-white/10">
              <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                <dt className="font-display text-xl font-extrabold uppercase">Admission fee</dt>
                <dd className="font-display text-2xl md:text-3xl font-black text-gold">{STUDENT_MEMBERSHIP.admissionFee}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                <dt className="font-display text-xl font-extrabold uppercase">Monthly fee</dt>
                <dd className="font-display text-2xl md:text-3xl font-black text-gold">{STUDENT_MEMBERSHIP.monthlyFee}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                <dt className="font-display text-xl font-extrabold uppercase">Per steam bath</dt>
                <dd className="font-display text-2xl md:text-3xl font-black text-gold">{STUDENT_MEMBERSHIP.perSteam}</dd>
              </div>
            </dl>
            <div className="mt-8 border border-gold/40 bg-gold/5 p-6 md:p-7">
              <h3 className="font-display text-lg font-black uppercase tracking-wide text-gold">Before you join</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {STUDENT_MEMBERSHIP.requirements.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden="true" className="text-gold">✦</span>
                    <span>{r}</span>
                  </li>
                ))}
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-gold">✦</span>
                  <span>15% VAT applies. Terms &amp; conditions apply.</span>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Unlike regular memberships, the student package has an admission
              fee of ৳3,000. For regular packages, see{' '}
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Gents Membership
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden">
              <Image
                src="/images/student-poster.webp"
                alt="Metro Flex Gym student membership poster"
                width={900}
                height={1125}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                The student membership poster, as printed by the gym
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Student? Join<br /><span className="text-gold-gradient">for ৳3,000 a month.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
              Bring your student ID card. Message the gym on WhatsApp to start.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Join on WhatsApp" />
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
