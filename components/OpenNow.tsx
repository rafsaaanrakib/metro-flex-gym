'use client';

import { useEffect, useState } from 'react';

/**
 * Live open-now indicator, computed from the visitor's clock in Asia/Dhaka
 * against the gym's posted hours (new schedule poster, 2026-11-18):
 * Saturday–Thursday 7:00 AM – 11:00 PM; Friday (optional service)
 * 5:00 PM – 9:00 PM. Purely presentational.
 */
export function OpenNow() {
  const [state, setState] = useState<{ open: boolean; note: string } | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dhaka',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).formatToParts(now);
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
      const weekday = get('weekday');
      const mins = Number(get('hour')) * 60 + Number(get('minute'));
      if (weekday === 'Friday') {
        setState(
          mins >= 17 * 60 && mins < 21 * 60
            ? { open: true, note: 'Open now — closes 9:00 PM' }
            : { open: false, note: mins < 17 * 60 ? 'Closed now — opens 5:00 PM' : 'Closed now — opens 7:00 AM' },
        );
      } else {
        setState(
          mins >= 7 * 60 && mins < 23 * 60
            ? { open: true, note: 'Open now — closes 11:00 PM' }
            : { open: false, note: 'Closed now — opens 7:00 AM' },
        );
      }
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (state === null) {
    return (
      <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted">
        <span className="h-2 w-2 rounded-full bg-muted" aria-hidden="true" />
        Open Sat–Thu 7 AM–11 PM · Fri 5–9 PM (optional)
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase">
      <span
        className={`h-2 w-2 rounded-full ${state.open ? 'bg-gold' : 'bg-white/40'}`}
        aria-hidden="true"
      />
      <span className={state.open ? 'text-gold' : 'text-muted'}>{state.note}</span>
    </span>
  );
}
