/* ------------------------------------------------------------------ */
/* REAL membership prices — Metro Flex GYM rate card (verified from    */
/* the gym's own rate card photo, 2026-11-12, IMG-20261112-WA0011.jpg). */
/* Source of truth: content brief, "Real membership prices".           */
/* Do not edit numbers without the gym's confirmation. No admission    */
/* fee. 15% VAT applies. Package names are the card's own words.       */
/* The old demo prices (৳2,000/5,000/9,000/15,000 + ৳500 admission)   */
/* are RETIRED — never show them again.                                */
/* ------------------------------------------------------------------ */

export type GymPackage = {
  duration: string;
  name: string;
  without: string;
  withSteam: string;
  steamBaths: number;
};

export const PACKAGES: GymPackage[] = [
  { duration: '1 Month', name: 'Hasten', without: '৳4,500', withSteam: '৳5,000', steamBaths: 3 },
  { duration: '3 Months', name: 'Constant', without: '৳12,500', withSteam: '৳14,000', steamBaths: 9 },
  { duration: '6 Months', name: 'Resolved On', without: '৳22,500', withSteam: '৳25,000', steamBaths: 18 },
  { duration: '1 Year', name: 'Grail', without: '৳40,000', withSteam: '৳44,000', steamBaths: 36 },
  { duration: '2 Years', name: 'Bronze', without: '৳75,000', withSteam: '৳82,000', steamBaths: 72 },
  { duration: '3 Years', name: 'Silver', without: '৳1,00,000', withSteam: '৳1,20,000', steamBaths: 108 },
  { duration: '5 Years', name: 'Gold', without: '৳1,50,000', withSteam: '৳1,80,000', steamBaths: 180 },
  { duration: '8 Years', name: 'Platinum', without: '৳2,30,000', withSteam: '৳2,70,000', steamBaths: 288 },
  { duration: '10 Years', name: 'Diamond', without: '৳2,80,000', withSteam: '৳3,25,000', steamBaths: 360 },
];

/** The four most popular packages, shown on the home page. */
export const POPULAR_PACKAGES: GymPackage[] = PACKAGES.slice(0, 4);
