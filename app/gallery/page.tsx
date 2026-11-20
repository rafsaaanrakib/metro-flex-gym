import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery — Metro Flex Gym Agrabad',
  description:
    'Inside Metro Flex Gym, Agrabad: members, ladies yoga sessions, the gym floor and equipment — real photos from the gym.',
  alternates: { canonical: 'https://metroflexgym.com.bd/gallery' },
  openGraph: {
    title: 'Gallery — Metro Flex Gym Agrabad',
    description:
      'Inside Metro Flex Gym, Agrabad: members, ladies yoga sessions, the gym floor and equipment — real photos from the gym.',
    type: 'website',
    url: 'https://metroflexgym.com.bd/gallery',
    siteName: 'Metro Flex Gym',
    images: [{ url: 'https://metroflexgym.com.bd/images/gallery-group-new.webp', width: 1200, height: 900, alt: 'Members of Metro Flex Gym together on the gym floor' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery — Metro Flex Gym Agrabad',
    description:
      'Inside Metro Flex Gym, Agrabad: members, ladies yoga sessions, the gym floor and equipment — real photos from the gym.',
    images: ['https://metroflexgym.com.bd/images/gallery-group-new.webp'],
  },
};

/* Real gym photos only — 25 photos. 12 new photos added 2026-11-20
 * (gym floor + building at night). The Dumbbell Rack and Cardio Zone
 * photos were removed the same day. No stock photos. */

const PHOTOS = [
  { src: '/images/gallery-spin-bikes.webp', alt: 'Members training on spin bikes at Metro Flex Gym', caption: 'Spin bikes', w: 1200, h: 899 },
  { src: '/images/gallery-strength-machines.webp', alt: 'Strength machines on the gym floor at Metro Flex Gym', caption: 'Strength machines', w: 1200, h: 899 },
  { src: '/images/gallery-treadmills.webp', alt: 'Members on treadmills and the stair climber at Metro Flex Gym', caption: 'Treadmills and cardio', w: 1200, h: 899 },
  { src: '/images/gallery-impulse-machine.webp', alt: 'Impulse standing multi-flight machine at Metro Flex Gym', caption: 'Impulse machine', w: 1200, h: 900 },
  { src: '/images/gallery-squat-rack.webp', alt: 'Squat rack and strength machines at Metro Flex Gym', caption: 'Squat rack', w: 1200, h: 900 },
  { src: '/images/gallery-free-weights-machines.webp', alt: 'Free weights and strength machines at Metro Flex Gym', caption: 'Free weights and machines', w: 1200, h: 899 },
  { src: '/images/gallery-gym-floor.webp', alt: 'The gym floor at Metro Flex Gym', caption: 'The gym floor', w: 1200, h: 899 },
  { src: '/images/gallery-building-night.webp', alt: 'Metro Flex Gym building at night on Agrabad Access Road', caption: 'Metro Flex Gym at night', w: 1200, h: 899 },
  { src: '/images/gallery-building-night-2.webp', alt: 'Metro Flex Gym sign lit up at night', caption: 'The gym, lit up', w: 1200, h: 899 },
  { src: '/images/gallery-building-night-3.webp', alt: 'Metro Flex Gym at night in Agrabad, Chattogram', caption: 'Metro Flex Gym, Agrabad', w: 1200, h: 900 },
  { src: '/images/gallery-building-night-4.webp', alt: 'Amin Tower at night, home of Metro Flex Gym', caption: 'Amin Tower at night', w: 1200, h: 900 },
  { src: '/images/gallery-building-night-5.webp', alt: 'The Metro Flex Gym neon sign at night', caption: 'The gym sign at night', w: 1200, h: 899 },
  { src: '/images/gallery-group-men-2.webp', alt: 'Members of Metro Flex Gym posing together on the gym floor', caption: 'Members on the gym floor', w: 1200, h: 900 },
  { src: '/images/gallery-prayer.webp', alt: 'Members praying inside Metro Flex Gym', caption: 'Prayer inside the gym', w: 900, h: 1200 },
  { src: '/images/gallery-ladies-cakes.webp', alt: 'Ladies members of Metro Flex Gym together with cakes', caption: 'Ladies members together', w: 1200, h: 900 },
  { src: '/images/gallery-ladies-cafe.webp', alt: 'Ladies members relaxing at the gym food cafe', caption: 'At the food cafe', w: 1200, h: 900 },
  { src: '/images/gallery-building.webp', alt: 'Metro Flex Gym in Amin Tower on Agrabad Access Road', caption: 'Amin Tower, Agrabad', w: 900, h: 1200 },
  { src: '/images/gallery-group-new.webp', alt: 'Members of Metro Flex Gym together on the gym floor', caption: 'The Metro Flex community', w: 1200, h: 900 },
  { src: '/images/gallery-ladies-yoga.webp', alt: 'Ladies yoga session at Metro Flex Gym', caption: 'Ladies yoga session', w: 864, h: 1536 },
  { src: '/images/gallery-ladies-yoga-2.webp', alt: 'Ladies yoga stretch session at Metro Flex Gym', caption: 'Ladies yoga — stretch session', w: 900, h: 1600 },
  { src: '/images/gallery-ladies-group.webp', alt: 'Ladies batch at Metro Flex Gym', caption: 'Ladies batch', w: 900, h: 1600 },
  { src: '/images/gallery-signing.webp', alt: 'Signing ceremony at Metro Flex Gym', caption: 'Signing ceremony', w: 651, h: 488 },
  { src: '/images/gallery-group.webp', alt: 'Members of Metro Flex Gym together on the gym floor', caption: 'Members together', w: 1200, h: 675 },
  { src: '/images/gallery-team.webp', alt: 'Members posing together inside Metro Flex Gym', caption: 'Members on the floor', w: 1200, h: 900 },
  { src: '/images/gallery-weights.webp', alt: 'Free weights area at Metro Flex Gym', caption: 'Free weights area', w: 1080, h: 810 },
];

export default function Gallery() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-32 md:px-8 md:pt-40">
        <Reveal>
          <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
            The Gym <span className="text-muted mx-2">/</span> Gallery
          </p>
          <h1 className="mt-4 font-display font-black uppercase leading-[0.92] tracking-tight text-5xl md:text-7xl">
            Inside<br />
            <span className="text-gold-gradient">the gym.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Real photos from the floor — members, ladies yoga sessions, and the
            equipment. No stock photos.
          </p>
        </Reveal>
      </section>

      {/* Photos */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.06} className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
              <figure className="group relative overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-10 text-xs font-bold uppercase tracking-[0.2em] text-bone">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              See it in<br /><span className="text-gold-gradient">person.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
              Come and look around first — message the gym on WhatsApp to arrange
              your visit.
            </p>
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
