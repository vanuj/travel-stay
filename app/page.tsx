import { Suspense, lazy } from 'react';
import type { PlaceStoryData } from '@/types/place-story';

// Lazy-load the PlaceStory component for improved initial load performance
const PlaceStory = lazy(() => import('@/components/ui/PlaceStory'));

/**
 * Static seed data matching the Figma "Place story" frame.
 * In a real integration this would be fetched server-side.
 */
const placeStoryData: PlaceStoryData = {
  eyebrow: 'Made for being outside',
  title: 'Wild at the door. Warmth when you return.',
  description:
    "Every Fieldnote stay begins with its landscape. We seek out cabins with trails from the threshold, water close by and room to watch the weather move through. Inside, the details are simple and deeply comfortable — linen, wood, a good stove and nothing you don't need.",
  features: [
    { name: 'Nature-first locations', detail: 'Across Britain' },
    { name: 'Independently owned', detail: 'Personally visited' },
  ],
  ctaLabel: 'Meet our cabins',
  ctaHref: '/cabins',
  imageSrc:
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1320&q=80',
  imageAlt: 'Forest walk — nature-first cabin landscape',
};

export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <div
            className="w-full"
            style={{ backgroundColor: '#FAF8F3', minHeight: '820px' }}
            aria-busy="true"
            aria-label="Loading place story"
          />
        }
      >
        <PlaceStory data={placeStoryData} />
      </Suspense>
    </main>
  );
}
