import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, MAPS_URL, ADDRESS } from '@/components/Contact';
import { HOURS_SAT_THU, HOURS_FRIDAY } from '@/lib/hours';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Metro Flex Gym Agrabad',
  description:
    'Metro Flex Gym — a modern, premium fitness center, 4,200 sq ft, at Amin Tower, Lift-7, Agrabad Access Road, Chattogram.',
  alternates: { canonical: 'https://metroflexgym.com.bd/about' },
  openGraph: {
    title: 'About Us | Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym — a modern, premium fitness center, 4,200 sq ft, at Amin Tower, Lift-7, Agrabad Access Road, Chattogram.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/about',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/floor.webp', width: 1080, height: 810, alt: 'Free weights area inside Metro Flex Gym' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Metro Flex Gym Agrabad',
    description:
      'Metro Flex Gym — a modern, premium fitness center, 4,200 sq ft, at Amin Tower, Lift-7, Agrabad Access Road, Chattogram.',
    images: ['https://metroflexgym.com.bd/images/floor.webp'],
  },
};

/* About facts only: the gym's own copy (2026-11-20), hours from the
 * 2026-11-18 schedule poster, owner from the trade licence and the
 * gym's card. No invented biography or history. */

const KEY_FACILITIES = [
  { title: 'Premium Commercial Gym Equipment', text: 'Featuring internationally recognized Impulse and Real Leader gym equipment.' },
  { title: 'Advanced Cardio Zone', text: 'Modern cardiovascular training facilities for improved fitness and endurance.' },
  { title: 'Steam Bath', text: 'Relaxation and post-workout recovery facilities.' },
  { title: 'Expert Trainers', text: 'Professional fitness guidance and personalized training support for men and women.' },
  { title: 'Ladies Fitness Zone', text: 'Dedicated fitness facilities and specialized training programs for women.' },
  { title: 'Yoga, Aerobics & Zumba', text: 'Specialized fitness and wellness programs for women.' },
  { title: 'Fully Air-Conditioned Environment', text: 'A comfortable, refreshing and modern training atmosphere.' },
  { title: 'Food Café', text: 'Added convenience to complement your fitness lifestyle.' },
  { title: 'Personal Lockers', text: 'Secure personal storage facilities for members.' },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            Home <span className="text-muted mx-2">/</span> About Us
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            About<br />
            <span className="text-gold-gradient">us.</span>
          </h1>
        </Reveal>
      </section>

      {/* --------------------------------------------- 01 · THE GYM */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <SectionHeading index="01" label="The Gym" title={<>A place of<br />perfect fitness.</>} />
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-bone/90">
              Metro Flex Gym is a modern and premium fitness center, spanning an
              impressive{' '}
              <span className="font-display font-extrabold text-gold">4,200 square feet</span>, located at Amin Tower, Lift-7, Agrabad Access Road, opposite Golden
              Touch Community Center, Beparipara, Agrabad, Chattogram. Designed for
              both men and women, our facility combines international-standard gym
              equipment, modern training facilities and experienced fitness
              professionals to create an exceptional fitness environment.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden">
              <Image
                src="/images/floor.webp"
                alt="Free weights area inside Metro Flex Gym"
                width={1080}
                height={810}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                priority
              />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                The free weights area — Metro Flex Gym, Agrabad Access Road, Chattogram
              </p>
            </div>
            <div className="relative mt-6 overflow-hidden">
              <Image
                src="/images/gallery-impulse-machine.webp"
                alt="Impulse standing multi-flight machine at Metro Flex Gym"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                The Impulse machine — Metro Flex Gym, Agrabad Access Road, Chattogram
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------- 02 · KEY FACILITIES */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="02" label="Key facilities" title={<>What you get<br />at Metro Flex.</>} />
          <ol className="mt-8 grid gap-x-14 gap-y-8 md:grid-cols-2">
            {KEY_FACILITIES.map((f, i) => (
              <li key={f.title} className="flex gap-4 border-t border-white/10 pt-5">
                <span className="font-display text-lg font-black text-gold">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="font-display text-lg font-black uppercase leading-tight">{f.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------- 03 · MISSION */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading index="03" label="Our mission" title={<>More than<br />a workout.</>} />
          <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-bone/90">
            At Metro Flex Gym, our mission goes beyond fitness. We are committed to
            helping every member achieve a healthier body, a stronger mind and a more
            confident lifestyle.
          </p>
          <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-bone/90">
            We believe that fitness is not just a routine; it is a commitment to a
            better life.
          </p>
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="font-display text-xl font-black uppercase tracking-wide text-gold">Metro Flex Gym</p>
            <p className="mt-1 font-display text-lg font-black uppercase">Your Fitness, Our Commitment.</p>
            <p className="mt-2 text-base text-muted">Experience the Difference.</p>
          </div>
        </Reveal>
      </section>

      {/* --------------------------------------------- 04 · THE OWNER */}
      <section className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="04" label="The Owner" title={<>Meet the<br />owner.</>} />
          <Reveal>
            <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-bone/90">
              MD Nasimul Haque Liton is the Founder &amp; Owner of Metro Flex Gym —
              a gents &amp; ladies gym in Agrabad Access Road, Chattogram. He is also
              a National Sports Judge &amp; Executive Member of the Bangladesh
              Bodybuilding Federation, and Joint Secretary of the Chattogram Gym
              Owners Association.
            </p>
            <p className="mt-6">
              <Link href="/owner" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Meet the owner →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------- 05 · VISIT */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="05" label="Visit" title={<>Find us on<br />Agrabad Access Road.</>} />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-base md:text-lg leading-relaxed text-bone/90">
              {HOURS_SAT_THU}. {HOURS_FRIDAY}.
            </p>
            <address className="mt-6 text-base leading-relaxed not-italic text-bone/90">
              {ADDRESS}
            </address>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              <Link href="/opening-hours" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Opening hours →
              </Link>{' '}
              ·{' '}
              <Link href="/schedule" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Full schedule →
              </Link>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Open Metro Flex Gym in Google Maps">
              <Image
                src="/images/map.webp"
                alt="Map — Metro Flex Gym, Amin Tower, Lift 7, Agrabad Access Road"
                width={800}
                height={520}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </a>
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
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gents Membership</Link>
              {' '}· <Link href="/gallery" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Gallery</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
