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

/* Real gym photos only — the 5 new photos from the gym (2026-11-18)
 * plus the 5 photos already on the site. No stock photos. */

const PHOTOS = [
  { src: '/images/gallery-group-new.webp', alt: 'Members of Metro Flex Gym together on the gym floor', caption: 'The Metro Flex community', w: 1200, h: 900 },
  { src: '/images/gallery-ladies-yoga.webp', alt: 'Ladies yoga session at Metro Flex Gym', caption: 'Ladies yoga session', w: 864, h: 1536 },
  { src: '/images/gallery-ladies-yoga-2.webp', alt: 'Ladies yoga stretch session at Metro Flex Gym', caption: 'Ladies yoga — stretch session', w: 900, h: 1600 },
  { src: '/images/gallery-ladies-group.webp', alt: 'Ladies batch at Metro Flex Gym', caption: 'Ladies batch', w: 900, h: 1600 },
  { src: '/images/gallery-signing.webp', alt: 'Signing ceremony at Metro Flex Gym', caption: 'Signing ceremony', w: 651, h: 488 },
  { src: '/images/gallery-group.webp', alt: 'Members of Metro Flex Gym together on the gym floor', caption: 'Members together', w: 1200, h: 675 },
  { src: '/images/gallery-team.webp', alt: 'Members posing together inside Metro Flex Gym', caption: 'Members on the floor', w: 1200, h: 900 },
  { src: '/images/gallery-dumbbells.webp', alt: 'Dumbbell rack at Metro Flex Gym', caption: 'Dumbbell rack', w: 960, h: 960 },
  { src: '/images/gallery-cardio.webp', alt: 'Cardio zone at Metro Flex Gym — treadmills and spin bikes', caption: 'Cardio zone', w: 1200, h: 900 },
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
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Membership &amp; payment</Link>
              {' '}· <Link href="/opening-hours" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">Opening hours</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
