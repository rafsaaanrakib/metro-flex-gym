/* ------------------------------------------------------------------ */
/* Opening hours + session schedule — Metro Flex GYM.                  */
/* Source: the gym's "Our New Schedule" poster, 2026-11-18, confirmed  */
/* by Rakib: open Saturday to Thursday, 7:00 AM – 11:00 PM; Friday is  */
/* optional service, 5:00 PM – 9:00 PM. This REPLACES the old hours   */
/* (8:30 AM open, 7 days) from the 2026-11-12 schedule. Do not use    */
/* the old hours anywhere.                                             */
/* ------------------------------------------------------------------ */

export const HOURS_SAT_THU = 'Saturday to Thursday, 7:00 AM – 11:00 PM';
export const HOURS_FRIDAY = 'Friday (optional service), 5:00 PM – 9:00 PM';

export type Session = {
  name: string;
  time: string;
  who: string;
};

export const SESSIONS: Session[] = [
  { name: 'Morning Session', time: '7:00 AM – 2:30 PM', who: 'Combined Gents & Ladies' },
  { name: 'Afternoon Session', time: '2:30 PM – 5:30 PM', who: 'Only Ladies' },
  { name: 'Evening Session', time: '5:30 PM – 9:30 PM', who: 'Combined Gents & Ladies' },
  { name: 'Night Session', time: '9:30 PM – 11:00 PM', who: 'Only Gents' },
  { name: 'Friday Session (Optional Service)', time: '5:00 PM – 9:00 PM', who: 'Combined Gents & Ladies' },
];
