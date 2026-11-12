'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/** One motion idea per section: a simple fade-and-rise on scroll into view.
 *  Respects prefers-reduced-motion (renders instantly, no animation). */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Numbered editorial section heading: "01 / FACILITIES" + big display title. */
export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: ReactNode;
}) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14">
        <p className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold">
          {index} <span className="text-muted mx-2">/</span> {label}
        </p>
        <h2 className="mt-4 font-display font-black uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl">
          {title}
        </h2>
        <div className="mt-6 h-px w-full bg-white/10" aria-hidden="true" />
      </div>
    </Reveal>
  );
}
