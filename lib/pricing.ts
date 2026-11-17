/* ------------------------------------------------------------------ */
/* REAL membership prices — Metro Flex GYM. Two sources, both the      */
/* gym's own printed material:                                         */
/*  (1) Rate card photo, 2026-11-12 (IMG-20261112-WA0011.jpg) — the    */
/*      original prices.                                               */
/*  (2) Winter Offer poster, 2026-11-18 — NEW regular prices plus      */
/*      discount prices. The poster is the newest source, so it wins   */
/*      where the two disagree.                                        */
/* Package names are the card's own words. No admission fee on regular */
/* packages. 15% VAT applies. The old demo prices (৳2,000/5,000/       */
/* 9,000/15,000 + ৳500 admission) are RETIRED — never show them.       */
/*                                                                     */
/* FLAG 2026-11-18 — 5-year steam count: the rate card says 180 steam */
/* baths for Gold 5yr; the Winter Offer poster says 188. Using 188    */
/* (newest material). Confirm with the gym if it matters.              */
/* ------------------------------------------------------------------ */

export type GymPackage = {
  duration: string;
  name: string;
  /** Regular price, no steam bath. */
  withoutRegular: string;
  /** Winter Offer price, no steam bath. */
  withoutOffer: string;
  /** Regular price, with steam bath. */
  withSteamRegular: string;
  /** Winter Offer price, with steam bath. */
  withSteamOffer: string;
  steamBaths: number;
};

export const PACKAGES: GymPackage[] = [
  { duration: '1 Month', name: 'Hasten', withoutRegular: '৳4,500', withoutOffer: '৳4,000', withSteamRegular: '৳5,200', withSteamOffer: '৳5,000', steamBaths: 3 },
  { duration: '3 Months', name: 'Constant', withoutRegular: '৳12,500', withoutOffer: '৳10,500', withSteamRegular: '৳14,800', withSteamOffer: '৳14,000', steamBaths: 9 },
  { duration: '6 Months', name: 'Resolved On', withoutRegular: '৳22,500', withoutOffer: '৳19,000', withSteamRegular: '৳27,000', withSteamOffer: '৳25,000', steamBaths: 18 },
  { duration: '1 Year', name: 'Grail', withoutRegular: '৳40,000', withoutOffer: '৳35,000', withSteamRegular: '৳48,000', withSteamOffer: '৳44,000', steamBaths: 36 },
  { duration: '2 Years', name: 'Bronze', withoutRegular: '৳75,000', withoutOffer: '৳65,000', withSteamRegular: '৳85,000', withSteamOffer: '৳75,000', steamBaths: 72 },
  { duration: '3 Years', name: 'Silver', withoutRegular: '৳1,00,000', withoutOffer: '৳90,000', withSteamRegular: '৳1,25,000', withSteamOffer: '৳1,10,000', steamBaths: 108 },
  { duration: '5 Years', name: 'Gold', withoutRegular: '৳1,50,000', withoutOffer: '৳1,30,000', withSteamRegular: '৳1,90,000', withSteamOffer: '৳1,65,000', steamBaths: 188 },
  { duration: '8 Years', name: 'Platinum', withoutRegular: '৳2,30,000', withoutOffer: '৳2,00,000', withSteamRegular: '৳2,80,000', withSteamOffer: '৳2,15,000', steamBaths: 288 },
  { duration: '10 Years', name: 'Diamond', withoutRegular: '৳2,80,000', withoutOffer: '৳2,50,000', withSteamRegular: '৳3,40,000', withSteamOffer: '৳3,00,000', steamBaths: 360 },
];

/** The four most popular packages, shown on the home page. */
export const POPULAR_PACKAGES: GymPackage[] = PACKAGES.slice(0, 4);

/* ------------------------------------------------------------------ */
/* Student membership — gym's own poster, 2026-11-18.                  */
/* NOTE: unlike regular packages, the student package HAS an admission */
/* fee (৳3,000). HSC-level students only; a valid student ID card is   */
/* required; no steam bath included (৳300 per steam). 15% VAT applies. */
/* ------------------------------------------------------------------ */

export const STUDENT_MEMBERSHIP = {
  admissionFee: '৳3,000',
  monthlyFee: '৳3,000',
  perSteam: '৳300',
  requirements: [
    'A valid student ID card is required.',
    'Limited to HSC-level students only.',
    'No steam bath included — ৳300 per steam bath.',
  ],
};
