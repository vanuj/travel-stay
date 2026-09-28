'use client';

import React from 'react';
import Image from 'next/image';
import type { PlaceStoryData } from '@/types/place-story';

interface PlaceStoryProps {
  data: PlaceStoryData;
}

/**
 * PlaceStory component
 *
 * Implements the Figma "Place story" frame (node 1:52).
 *
 * Layout (desktop, ≥1024px):
 *   Two-column horizontal layout:
 *     Left  – full-bleed image (660 × 620 in design, rounded-3xl)
 *     Right – story copy: eyebrow → title → description → feature list → CTA button
 *
 * Layout (mobile, <1024px):
 *   Single-column stacked: image on top, copy below.
 *
 * Colours are extracted directly from Figma fill values:
 *   Background  : #FAF8F3  (rgb 251,250,243 ≈ cream)
 *   Eyebrow     : #627459  (rgb 98,116,89)
 *   Title       : #182034  (rgb 24,52,43)
 *   Description : #666F69  (rgb 102,112,105)
 *   Feature name: #1D2521  (rgb 29,37,33)
 *   Feature detail: #666F69
 *   Border      : #D7D5CA  (rgb 215,213,202)
 *   Button bg   : #FAF8F3
 *   Button border: #182034
 *   Button text : #182034
 */
export default function PlaceStory({ data }: PlaceStoryProps) {
  const {
    eyebrow,
    title,
    description,
    features,
    ctaLabel,
    ctaHref,
    imageSrc,
    imageAlt,
  } = data;

  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#FAF8F3' }}
      aria-label="Place story"
    >
      {/* Outer container — mirrors Figma padding: px-18 py-24 gap-18 on desktop */}
      <div
        className="
          flex flex-col lg:flex-row
          items-center
          gap-8 lg:gap-[72px]
          px-6 sm:px-12 lg:px-[72px]
          py-12 lg:py-24
          max-w-[1440px] mx-auto
        "
      >
        {/* ── Left: Image ── */}
        <div
          className="
            relative
            w-full lg:w-[660px]
            flex-shrink-0
            rounded-3xl overflow-hidden
          "
          style={{ aspectRatio: '660 / 620' }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 660px"
            priority
          />
        </div>

        {/* ── Right: Story copy ── */}
        <div
          className="
            flex flex-col
            gap-6
            w-full
            lg:flex-1
          "
        >
          {/* Eyebrow */}
          <p
            className="uppercase text-xs tracking-[1.8px] font-normal"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#627459',
              letterSpacing: '1.8px',
            }}
          >
            {eyebrow}
          </p>

          {/* Title */}
          <h2
            className="font-medium leading-[102%]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(32px, 4vw, 56px)',
              letterSpacing: '-1px',
              color: '#182034',
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="font-normal"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              lineHeight: '165%',
              color: '#666F69',
            }}
          >
            {description}
          </p>

          {/* Feature list */}
          <ul className="flex flex-col" role="list">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="
                  flex flex-row items-center justify-between
                  py-4
                "
                style={{
                  borderTop: '1px solid #D7D5CA',
                }}
              >
                {/* Feature name — semi-bold 14px */}
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1',
                    color: '#1D2521',
                  }}
                >
                  {feature.name}
                </span>

                {/* Feature detail — regular 13px */}
                <span
                  className="font-normal"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    lineHeight: '1',
                    color: '#666F69',
                  }}
                >
                  {feature.detail}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={ctaHref}
            className="
              inline-flex items-center justify-center
              gap-3
              px-6
              h-[52px]
              rounded-full
              self-start
              transition-opacity hover:opacity-80
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            "
            style={{
              backgroundColor: '#FAF8F3',
              border: '1px solid #182034',
              color: '#182034',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
            aria-label={ctaLabel}
          >
            <span>{ctaLabel}</span>
            {/* Arrow icon — matches Figma "arrow-up-right" vector */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5"
                stroke="#182034"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
