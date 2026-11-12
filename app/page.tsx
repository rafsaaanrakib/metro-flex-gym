import Image from 'next/image';
import Link from 'next/link';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { WhatsAppButton, CallButton, MAPS_URL, ADDRESS } from '@/components/Contact';
import { OpenNow } from '@/components/OpenNow';
import { POPULAR_PACKAGES } from '@/lib/pricing';

/* ------------------------------------------------------------------ */
/* Verified content — Metro Flex GYM (content brief 2026-11-12).       */
/* Real membership prices from the gym's rate card (lib/pricing.ts).   */
/* ------------------------------------------------------------------ */

const FACILITIES = [
  'World Class Equipments',
  'Big Space — 4,100 sq ft',
  'Strong Cardio Section',
  'Steam Bath',
  'Food Cafe',
  'Locker Facility',
  'All Time Trainer Facility',
  'Female Trainer Facility',
  '7 Days Open',
  'Custom Training & Diet Routine',
  'All Types of Authentic Supplements',
  'One-on-One Consultancy',
];

const PROGRAMS = [
  { name: 'Fitness Training', desc: 'Train on the gym floor with a trainer beside you.' },
  { name: 'Body Transformation', desc: 'Training and diet for fat loss or muscle gain.' },
  { name: 'Yoga', desc: 'Yoga sessions on the gym floor.' },
  { name: 'Aerobics', desc: 'Group aerobics sessions.' },
  { name: 'Zumba', desc: 'Dance-based fitness sessions.' },
  { name: 'Contest Preparation', desc: 'Preparation support for bodybuilding contests.' },
  { name: 'Custom Training & Diet', desc: 'A personal training and diet routine, made for you.' },
];

/* Real membership prices live in lib/pricing.ts (gym's rate card). */

const GALLERY = [
  { src: '/images/gallery-group.webp', alt: 'Members of Metro Flex Gym together on the gym floor', caption: 'The Metro Flex community', w: 1200, h: 675 },
  { src: '/images/gallery-team.webp', alt: 'Members posing together inside Metro Flex Gym', caption: 'Members on the floor', w: 1200, h: 900 },
  { src: '/images/gallery-dumbbells.webp', alt: 'Dumbbell rack at Metro Flex Gym with Ironbull dumbbells', caption: 'Dumbbell rack', w: 960, h: 960 },
  { src: '/images/gallery-cardio.webp', alt: 'Cardio zone at Metro Flex Gym — treadmills and spin bikes', caption: 'Cardio zone', w: 1200, h: 900 },
  { src: '/images/gallery-weights.webp', alt: 'Free weights area at Metro Flex Gym', caption: 'Free weights area', w: 1080, h: 810 },
];

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------ 01 · HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero.webp"
            alt="Cardio area inside Metro Flex Gym, Agrabad"
            fill
            priority
            sizes="100vw"
            className="animate-hero-zoom object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
          <div className="absolute inset-0 bg-ink/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-32 md:px-8 md:pb-20">
          <p className="font-body text-[11px] md:text-xs tracking-[0.35em] uppercase text-gold">
            Metro Flex Gym — Agrabad, Chattogram
          </p>
          <h1 className="mt-5 font-display font-black uppercase leading-[0.88] tracking-tight text-[clamp(3.5rem,19vw,7.5rem)]">
            Train
            <br />
            <span className="text-gold-gradient">Here.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-bone/90">
            The fitness center providing tremendous gymnasium facilities in the city for
            handsome men &amp; women.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <CallButton />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm text-muted">
            <OpenNow />
            <span aria-hidden="true" className="hidden text-gold sm:inline">✦</span>
            <span>8:30 AM – 11:00 PM · 7 days</span>
            <span aria-hidden="true" className="hidden text-gold sm:inline">✦</span>
            <span>Gents &amp; Ladies</span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 01 · ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="01" label="The Gym" title={<>A place of<br />perfect fitness.</>} />
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="text-lg md:text-xl leading-relaxed text-bone/90">
              Metro Flex Gym is a 4,100 sq ft fitness floor in Amin Tower, Agrabad —
              built for both men and women, open seven days a week, with a trainer on
              the floor at all times.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              World-class equipment, a strong cardio section, steam bath, food cafe and
              lockers — everything in one place, so you can train, recover and get on
              with your day. Ladies train in a dedicated afternoon slot with a female
              trainer available.
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
                loading="lazy"
              />
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                The free weights area — Metro Flex Gym, Agrabad
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 02 · FACILITIES */}
      <section id="facilities" className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="02" label="Facilities" title={<>Everything<br />under one roof.</>} />
          <div className="grid gap-x-12 sm:grid-cols-2">
            {FACILITIES.map((item, i) => (
              <Reveal key={item} delay={Math.min(i % 4, 3) * 0.05}>
                <div className="flex items-baseline gap-4 border-b border-white/10 py-4">
                  <span className="font-display text-sm font-bold text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg md:text-xl font-bold uppercase tracking-wide">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Plus AC, lift, parking, CCTV, Wi-Fi and sound throughout the floor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 03 · PROGRAMS */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="03" label="Programs" title={<>Train your<br />way.</>} />
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.06} className="bg-ink">
              <article className="flex h-full flex-col justify-between p-7 transition-colors hover:bg-surface md:p-8">
                <div>
                  <span className="font-display text-sm font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-2xl font-black uppercase leading-tight">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.12} className="bg-ink">
            <article className="flex h-full flex-col justify-between border border-gold/40 bg-gold/5 p-7 md:p-8">
              <div>
                <span className="font-display text-sm font-bold text-gold">08</span>
                <h3 className="mt-4 font-display text-2xl font-black uppercase leading-tight">
                  Not sure where to start?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Message the gym on WhatsApp. A trainer will help you pick the right
                  program for your goal — no pressure, no obligation.
                </p>
              </div>
              <div className="mt-8">
                <WhatsAppButton label="Ask a Trainer" className="w-full" />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 04 · SCHEDULE */}
      <section id="schedule" className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="04" label="Schedule" title={<>Hours that<br />fit your day.</>} />
          <Reveal>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
              Open 8:30 AM to 11:00 PM, seven days a week. Sessions are organised for
              gents and ladies — including a dedicated ladies-only slot every afternoon.
            </p>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h3 className="font-display text-xl font-black uppercase tracking-wide">
                Male <span className="text-gold">—</span> <span className="text-muted text-base font-bold">Gents sessions</span>
              </h3>
              <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                {[
                  { time: '8:30 AM – 2:30 PM', note: 'Combined Gents & Ladies' },
                  { time: '5:30 PM – 9:30 PM', note: 'Combined Gents & Ladies' },
                  { time: '9:30 PM – 11:00 PM', note: 'Only Gents' },
                ].map((row) => (
                  <div key={row.time} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                    <span className="font-display text-xl md:text-2xl font-extrabold">{row.time}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">{row.note}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-xl font-black uppercase tracking-wide">
                Female <span className="text-gold">—</span> <span className="text-muted text-base font-bold">Ladies sessions</span>
              </h3>
              <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border border-gold/50 bg-gold/10 px-4 py-4">
                  <span className="font-display text-xl md:text-2xl font-extrabold text-gold">2:30 PM – 5:30 PM</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Only Ladies ★</span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                  <span className="font-display text-xl md:text-2xl font-extrabold">5:30 PM – 9:00 PM</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">Combined Gents &amp; Ladies</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Ladies-only hours every afternoon, with a female trainer facility — train
                comfortably, on your own terms.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 05 · PRICING */}
      <section id="pricing" className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="05" label="Pricing" title={<>Simple plans.<br />No surprises.</>} />
          <Reveal>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
              From 1 month to 10 years — each package with or without steam bath.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POPULAR_PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <article className={`flex h-full flex-col border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-black/40 ${p.name === 'Grail' ? 'border-gold bg-gold/5' : 'border-white/10 bg-ink'}`}>
                  <h3 className="font-display text-lg font-black uppercase">{p.duration}</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-gold">{p.name}</p>
                  <dl className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-muted">Without steam</dt>
                      <dd className="font-display text-xl font-black text-gold">{p.without}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-muted">With steam</dt>
                      <dd className="text-right font-display text-xl font-black leading-tight text-gold">
                        {p.withSteam}
                        <span className="block text-xs font-bold text-muted">({p.steamBaths} steam baths)</span>
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-muted">
              No admission fee · 15% VAT applies.{' '}
              <Link href="/membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                See all 9 packages →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 06 · FAQ TEASER */}
      <section id="faq-teaser" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="06" label="FAQ" title={<>Questions,<br />answered.</>} />
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {[
            { q: 'What are the ladies-only hours?', a: '2:30–5:30 PM daily, with a female trainer facility.' },
            { q: 'What does membership cost?', a: 'Starts at ৳4,500 for 1 month, no admission fee, 15% VAT applies.' },
            { q: 'Where exactly are you?', a: 'Amin Tower, Lift 7, Agrabad Access Rd, Chattogram.' },
          ].map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06} className="bg-ink">
              <article className="flex h-full flex-col justify-between p-7 md:p-8">
                <div>
                  <h3 className="font-display text-lg font-extrabold uppercase leading-tight">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8">
            <Link href="/faq" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
              See all 10 questions →
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------ 07 · GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading index="07" label="Gallery" title={<>Inside<br />the gym.</>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.06} className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
              <figure className="group relative overflow-hidden">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-10 text-xs font-bold uppercase tracking-[0.2em] text-bone">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ 08 · LOCATION */}
      <section id="location" className="border-t border-white/10 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <SectionHeading index="08" label="Location" title={<>Find us in<br />Agrabad.</>} />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="Open Metro Flex Gym in Google Maps"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10">
                  <Image
                    src="/images/map.webp"
                    alt="Map showing Metro Flex Gym on Agrabad Access Road, Chattogram"
                    width={800}
                    height={520}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2">
              <address className="text-lg leading-relaxed not-italic text-bone/90">{ADDRESS}</address>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Amin Tower, Lift 7 — on Agrabad Access Road, Bepari Para.
              </p>
              <dl className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Open</dt>
                  <dd className="font-semibold">8:30 AM – 11:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Days</dt>
                  <dd className="font-semibold">7 days a week</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Ladies only</dt>
                  <dd className="font-semibold text-gold">2:30 – 5:30 PM daily</dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-white/25 px-5 py-3 text-xs font-bold uppercase tracking-widest text-bone transition-colors hover:border-gold hover:text-gold"
              >
                Get directions →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FINAL CTA */}
      <section className="border-t border-gold/30 bg-gold/5">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Your first session<br />starts with <span className="text-gold-gradient">a message.</span>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <WhatsAppButton />
              <CallButton />
            </div>
            <p className="mt-8 text-sm">
              <Link href="/faq" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-bright">
                Questions? Read the FAQ →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
