/**
 * Types for the Place Story component
 * Derived from Figma node "Place story" (id: 1:52)
 */

export interface PlaceFeature {
  /** Bold label on the left, e.g. "Nature-first locations" */
  name: string;
  /** Regular detail on the right, e.g. "Across Britain" */
  detail: string;
}

export interface PlaceStoryData {
  /** Uppercase eyebrow label, e.g. "Made for being outside" */
  eyebrow: string;
  /** Large serif title, e.g. "Wild at the door. Warmth when you return." */
  title: string;
  /** Body description paragraph */
  description: string;
  /** Key-value feature rows */
  features: PlaceFeature[];
  /** CTA button label, e.g. "Meet our cabins" */
  ctaLabel: string;
  /** CTA button href */
  ctaHref: string;
  /** Hero image src URL */
  imageSrc: string;
  /** Hero image alt text */
  imageAlt: string;
}
