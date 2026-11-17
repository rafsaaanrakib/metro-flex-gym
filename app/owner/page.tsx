import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, WHATSAPP_URL, MAPS_URL, ADDRESS } from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Owner — MD Nasimul Haque Liton | Metro Flex Gym Agrabad',
  description:
    'MD Nasimul Haque Liton, Founder & Owner of Metro Flex Gym in Agrabad, Chattogram.',
  alternates: { canonical: 'https://metroflexgym.com.bd/owner' },
  openGraph: {
    title: 'Owner — MD Nasimul Haque Liton | Metro Flex Gym Agrabad',
    description:
      'MD Nasimul Haque Liton, Founder & Owner of Metro Flex Gym in Agrabad, Chattogram.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/owner',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/owner.webp', width: 800, height: 999, alt: 'MD Nasimul Haque Liton, Founder & Owner of Metro Flex Gym' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owner — MD Nasimul Haque Liton | Metro Flex Gym Agrabad',
    description:
      'MD Nasimul Haque Liton, Founder & Owner of Metro Flex Gym in Agrabad, Chattogram.',
    images: ['https://metroflexgym.com.bd/images/owner.webp'],
  },
};

/* Owner facts only: name from the gym's trade licence and receipt
 * (2026-11-12); title Founder & Owner per the gym. No invented biography. */

export default function Owner() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            The Gym <span className="text-muted mx-2">/</span> Owner
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Meet the<br />
            <span className="text-gold-gradient">owner.</span>
          </h1>
        </Reveal>
      </section>

      {/* Owner */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <figure className="overflow-hidden">
              <Image
                src="/images/owner.webp"
                alt="MD Nasimul Haque Liton, Founder & Owner of Metro Flex Gym"
                width={800}
                height={999}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading index="01" label="Founder & Owner" title={<>MD Nasimul<br />Haque Liton.</>} />
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-bone/90">
              MD Nasimul Haque Liton is the Founder &amp; Owner of Metro Flex Gym —
              a gents &amp; ladies gym in Agrabad, Chattogram.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              The gym runs on commercial equipment (Impulse &amp; Real Leader), with
              a strong cardio section, steam bath, ladies-only hours every
              afternoon, and trainers on the floor at all times.
            </p>
            <address className="mt-8 text-base leading-relaxed not-italic text-bone/90">
              {ADDRESS}
            </address>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Questions for the owner? Message the gym on WhatsApp —{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                +880 1715-266172
              </a>
              {' '}·{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Open in Google Maps →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Train at<br /><span className="text-gold-gradient">Metro Flex.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="Join on WhatsApp" />
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Membership &amp; payment</Link>
              {' '}· <Link href="/gallery" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gallery</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
