# Copilot Instructions for AI Agents

## Project Overview

- **Framework:** Next.js 15 (app directory)
- **UI Library:** HeroUI v2
- **Styling:** Tailwind CSS, Tailwind Variants
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Theme:** next-themes

## Architecture & Structure

- **Pages & Routing:**
  - All main routes are in `app/` (e.g., `app/about`, `app/contact`, `app/services`).
  - API routes are in `app/api/` (e.g., `app/api/contact/route.ts`).
  - Each route folder typically contains `layout.tsx` and `page.tsx`.
- **Components:**
  - Shared React components are in `components/` (e.g., `navbar.tsx`, `theme-switch.tsx`).
- **Config:**
  - Project-wide settings in `config/` (e.g., `fonts.ts`, `site.ts`).
- **Data:**
  - Static data (e.g., reviews) in `data/` as JSON files.
- **Types & Validation:**
  - Type definitions in `lib/types.ts` and `types/`.
  - Validation logic in `lib/validators.ts`.

## Developer Workflows

- **Install dependencies:**
  - `npm install` (or `pnpm install` if using pnpm)
- **Run development server:**
  - `npm run dev`
- **Build for production:**
  - `npm run build`
- **Linting:**
  - Uses ESLint config in `eslint.config.mjs`
- **Styling:**
  - Global styles in `styles/globals.css`
  - Tailwind config in `tailwind.config.js`

## Patterns & Conventions

- **File Naming:**
  - Use `layout.tsx` for route-level layout, `page.tsx` for main content.
  - API endpoints use `route.ts`.
- **Type Safety:**
  - Prefer TypeScript types from `lib/types.ts` and `types/`.
- **Data Flow:**
  - Static data imported from `data/`.
  - API routes handle form submissions and reviews.
- **Theme & Icons:**
  - Use `theme-switch.tsx` and `icons.tsx` for UI theming and icons.

## Integration Points

- **External Libraries:**
  - HeroUI, Framer Motion, next-themes, Tailwind Variants.
- **No custom backend; API routes are serverless functions.**

## Examples

- To add a new page: create a folder in `app/`, add `layout.tsx` and `page.tsx`.
- To add a new API endpoint: create a folder in `app/api/`, add `route.ts`.
- To add a new component: add a `.tsx` file in `components/` and import as needed.

---

_If any section is unclear or missing, please provide feedback for improvement._
