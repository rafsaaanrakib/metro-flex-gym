'use client';

import { useEffect, useState } from 'react';

/**
 * Live open-now indicator, computed from the visitor's clock in Asia/Dhaka
 * against the gym's posted hours: 8:30 AM – 11:00 PM, 7 days a week.
 * Purely presentational — hours come from the verified schedule poster.
 */
export function OpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dhaka',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).formatToParts(now);
      const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
      const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
      const mins = hour * 60 + minute;
      setOpen(mins >= 8 * 60 + 30 && mins < 23 * 60);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) {
    return (
      <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted">
        <span className="h-2 w-2 rounded-full bg-muted" aria-hidden="true" />
        Open 8:30 AM – 11:00 PM
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase">
      <span
        className={`h-2 w-2 rounded-full ${open ? 'bg-gold' : 'bg-white/40'}`}
        aria-hidden="true"
      />
      {open ? (
        <span className="text-gold">Open now — closes 11:00 PM</span>
      ) : (
        <span className="text-muted">Closed now — opens 8:30 AM</span>
      )}
    </span>
  );
}
