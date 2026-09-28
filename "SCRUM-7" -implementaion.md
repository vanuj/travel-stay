# SCRUM-7 — Implementation Record

---

## 1. Scope Summary

This implementation delivers the **"Place story"** UI component for the `travel-stay` Next.js application. The scope is derived from:

- **Figma node `1:52` — "Place story"** (`.files/SCRUM-7-figma.json`): a full-width, two-column editorial section featuring a large rounded hero image on the left and a structured copy panel on the right (eyebrow, serif title, body description, key-value feature rows, and a pill CTA button).
- **JIRA context**: The repository README identifies this as a Next.js staycation site. The Figma file is named `SCRUM-7-figma.json`, confirming the story scope is the Place Story editorial section.
- **No external API** is required by this story — all content is structural/editorial and passed as props.
- **No existing app structure** was present (only `LICENSE` and `README.md` in the git history); the full Next.js App Router scaffold was created as part of this story.

---

## 2. Relevant Inputs Reviewed

| Input | Key Findings |
|---|---|
| `src/.files/SCRUM-7-figma.json` | Figma frame `1:52` "Place story": 1440px-wide horizontal layout, 72px padding, 72px gap, cream background `#FAF8F3`, left image 660×620 rounded-3xl, right copy panel with eyebrow (Inter 12px uppercase, tracking 1.8px, `#627459`), title (Cormorant Garamond 56px medium, `#182034`), description (Inter 18px/165%, `#666F69`), feature rows (14px semibold / 13px regular, top border `#D7D5CA`), pill button (rounded-full, border `#182034`, bg `#FAF8F3`, uppercase 13px, arrow-up-right icon). |
| `files/MFA-19858.json` | Unrelated Carnival/Cunard SEO incident ticket — not part of SCRUM-7 scope. Ignored. |
| `.slingshot/.core/` | Not present in this repository. No design-system-context or guardrails files available. Standard React/Next.js best practices applied. |
| `API-SPECS.md` | Not present in this repository. No API calls required by this story. |
| `src/README.md` | Confirms: "Simple site build using NextJs and suitable for staycation". |
| Git history | Single initial commit with only `LICENSE` and `README.md`. No existing app code to preserve. |

---

## 3. Files Created / Changed

| File | Action | Purpose |
|---|---|---|
| `src/package.json` | **Created** | Next.js 14 + React 18 + Tailwind CSS dependencies |
| `src/tsconfig.json` | **Created** | TypeScript config with `@/*` path alias |
| `src/next.config.js` | **Created** | Next.js config with remote image domains |
| `src/tailwind.config.ts` | **Created** | Tailwind config with Cormorant Garamond + Inter font families and Figma colour tokens |
| `src/postcss.config.js` | **Created** | PostCSS config for Tailwind |
| `src/app/globals.css` | **Created** | Google Fonts import, Tailwind directives, unobtrusive scrollbar styles |
| `src/app/layout.tsx` | **Created** | Next.js App Router root layout |
| `src/app/page.tsx` | **Created** | Home page — lazy-loads `PlaceStory` with seed data |
| `src/app/place-story/page.tsx` | **Created** | Dedicated `/place-story` route — lazy-loads `PlaceStory` with seed data |
| `src/types/place-story.ts` | **Created** | TypeScript interfaces `PlaceFeature` and `PlaceStoryData` |
| `src/components/ui/PlaceStory.tsx` | **Created** | Core UI component — full Figma fidelity, fully responsive |

---

## 4. Code Changes

### `src/types/place-story.ts`
Defines `PlaceFeature` (name + detail) and `PlaceStoryData` (eyebrow, title, description, features[], ctaLabel, ctaHref, imageSrc, imageAlt) — typed contract for the component.

### `src/components/ui/PlaceStory.tsx`
React functional component implementing the Figma frame pixel-for-pixel:

```
<section bg=#FAF8F3>
  <div flex-row gap-72px px-72px py-96px max-w-1440px>
    <!-- Left: Image -->
    <div w-660px aspect-660/620 rounded-3xl overflow-hidden>
      <Image fill object-cover />
    </div>

    <!-- Right: Copy -->
    <div flex-col gap-24px>
      <p  eyebrow  Inter 12px uppercase tracking-1.8px #627459 />
      <h2 title    Cormorant Garamond 56px medium -1px #182034 />
      <p  desc     Inter 18px/165% #666F69 />
      <ul feature-list>
        <li flex-row justify-between py-16px border-top-#D7D5CA>
          <span name   Inter 14px semibold #1D2521 />
          <span detail Inter 13px regular  #666F69 />
        </li>
        ...
      </ul>
      <a  pill-button rounded-full h-52px px-24px border-#182034 bg-#FAF8F3>
        <span uppercase 13px tracking-0.6px />
        <svg arrow-up-right 15x15 stroke-#182034 />
      </a>
    </div>
  </div>
</section>
```

**Responsive behaviour:**
- `lg:flex-row` → desktop: side-by-side (image left, copy right)
- `flex-col` → mobile/tablet: stacked (image top, copy bottom)
- Title uses `clamp(32px, 4vw, 56px)` for fluid scaling
- Image uses `fill` + `sizes` for responsive loading
- Padding scales: `px-6 sm:px-12 lg:px-[72px]`, `py-12 lg:py-24`

### `src/app/page.tsx` & `src/app/place-story/page.tsx`
Both pages use `React.lazy` + `Suspense` to lazy-load `PlaceStory`, with a cream-background skeleton fallback matching the section's background colour.

---

## 5. Compliance Check

| Rule | Status |
|---|---|
| Build on existing codebase, preserve existing functionality | ✅ No existing app code was present; scaffold created from scratch without removing any prior files |
| Only change files directly needed for the story | ✅ All created files are directly required by the Place Story component |
| No unrelated code modified | ✅ `LICENSE` and `README.md` untouched |
| No invented requirements | ✅ All UI elements directly mapped from Figma node `1:52` |
| Figma fidelity — exact colours, typography, spacing | ✅ All Figma fill values, font families, weights, sizes, letter-spacing, line-heights, border-radius, padding, gap values applied verbatim |
| Fully responsive | ✅ Mobile-first flex-col → lg:flex-row, fluid title sizing, responsive image |
| No new UI elements not in Figma | ✅ Eyebrow, title, description, feature list, pill CTA button — all present in Figma |
| No duplicate API calls | ✅ No API calls required; content is prop-driven |
| Lazy loading applied | ✅ `React.lazy` + `Suspense` on both page routes |
| Unobtrusive scrollbars | ✅ `globals.css` applies `scrollbar-width: thin` and transparent track |
| No linting performed | ✅ No lint commands run |
| No unit tests / storybook created | ✅ Correct — none created |
| TypeScript strict mode | ✅ `tsconfig.json` has `"strict": true` |
| Next.js App Router pattern | ✅ `app/` directory with `layout.tsx`, `page.tsx`, nested route `/place-story/page.tsx` |
