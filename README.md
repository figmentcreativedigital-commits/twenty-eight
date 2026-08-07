# 28 — Tribeca

A production website for **28**, a luxury wellness & aesthetics collective in Tribeca, New York. 28 is the master brand uniting three independent providers under one address:

- **Yulia Gerchik Studio** — beauty, skin, body, and aesthetic treatments
- **New York City Dental Smiles** — cosmetic dentistry
- **Dr. Evia Nano** — medical aesthetics and wellness medicine

Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # optional for local dev — see below
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

Node 18.17+ is required (Next.js 14). No external services are needed to run locally — the consultation form logs submissions to the server console until you wire a delivery destination (below).

---

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Home
  about/                About 28
  collective/           The Collective (overview + 3 provider pages)
  signature-experiences/
  membership/
  the-space/
  consultation/         Multi-step consultation form (+ ConsultationForm.tsx)
  api/consultation/     Form handler (POST)
  privacy/  accessibility/  not-found.tsx
  sitemap.ts  robots.ts  layout.tsx  globals.css
components/             ui / layout / sections / cards
content/                All copy + data (typed) — edit here, not in pages
lib/                    utils, validation, analytics
public/fonts/           Self-hosted variable fonts (Cormorant Garamond, Inter)
```

**All copy and structured data live in `content/`.** Pages import from there, so client-facing text edits happen in one place (e.g. `content/providers.ts`, `content/membership.ts`, `content/site.ts`).

---

## Environment variables

Everything is optional for local development. See `.env.example` for the full list.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, Open Graph, sitemap, robots |
| `RESEND_API_KEY` / `CONSULTATION_TO_EMAIL` / `CONSULTATION_FROM_EMAIL` | Deliver leads by email (Option A) |
| `CONSULTATION_WEBHOOK_URL` | Deliver leads to a CRM/webhook — HubSpot, Zoho, Salesforce, Zapier (Option B) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (e.g. `G-XXXXXXXXXX`) — analytics load only when set |

### Consultation form delivery

The handler in `app/api/consultation/route.ts` validates server-side, then delivers via the first configured option:

1. **Webhook** — if `CONSULTATION_WEBHOOK_URL` is set, the payload is POSTed there as JSON. Simplest path to a CRM.
2. **Resend email** — if `RESEND_API_KEY`, `CONSULTATION_TO_EMAIL`, and `CONSULTATION_FROM_EMAIL` are set, the lead is emailed. The `from` domain must be verified in Resend.
3. **Neither set** — the submission is logged to the server console (fine for local dev; not for production).

No credentials are hard-coded. A honeypot field silently accepts and drops bot submissions.

---

## Deployment (Vercel + GitHub)

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo. Framework preset auto-detects Next.js; no build settings to change.
3. Add environment variables (at minimum `NEXT_PUBLIC_SITE_URL`, plus form delivery + GA when ready) under **Settings → Environment Variables**.
4. Deploy. Then add the production domain under **Settings → Domains** and point DNS.

Fonts are self-hosted in `public/fonts/`, so builds don't depend on Google Fonts network access.

---

## Analytics

Set `NEXT_PUBLIC_GA_ID` to enable GA4 (the script is not loaded otherwise). Tracked events include CTA clicks, provider-card clicks, experience clicks, membership interest, and the consultation funnel (`consultation_start`, `consultation_step_complete`, `consultation_submit`). Event definitions live in `lib/analytics.ts`.

---

## ⚠️ Client-confirmation checklist (before launch)

The site was built to be launch-ready in structure, but the following contain **placeholders or provisional content** that must be confirmed with the client. Search the codebase for `NEEDS CLIENT CONFIRMATION` to find them in context.

**Contact & location** (`content/site.ts`, `content/space.ts`)
- [ ] Exact street address, suite, and ZIP (currently "Tribeca, New York, NY")
- [ ] Concierge phone number (currently blank / "Available upon request")
- [ ] Concierge email (currently `concierge@28tribeca.com` placeholder)
- [ ] Hours of operation
- [ ] Nearest transit / parking / accessibility details for The Space
- [ ] Instagram / social handles (currently blank — links render only when set)

**Membership** (`content/membership.ts`)
- [ ] Tier structure is **provisional** — Silver $2,000 / 10%, Gold $5,000 / 20%, Platinum $10,000 / 30% + facial. Derived from an early concept note. Confirm balances, savings %, benefits, and terms before publishing. Provisional notes are visible on-page and should be removed once finalized.

**Providers** (`content/providers.ts`)
- [ ] Booking URLs for each provider (blank — buttons route to the consultation form until real URLs are added)
- [ ] Any external reference/portfolio URLs

**Media**
- [ ] Photography — all imagery currently renders as art-directed placeholder frames with direction captions. Supply real photography (or approve the placeholder aesthetic for a soft launch).
- [ ] Testimonials — provider pages have a marked placeholder slot; none are invented.

**Legal**
- [ ] `app/privacy/page.tsx` — lightweight starter copy. **Have counsel review** before launch.
- [ ] `app/accessibility/page.tsx` — confirm the accessibility statement reflects actual practices.

**Medical positioning**
- [ ] Dr. Evia Nano is positioned as **medical aesthetics / wellness medicine**, deliberately not dermatology and not general medical care (client-confirmed 2026-07-20). Final wording is **owned by Dr. Nano** — she must approve her own copy before publication. Weight loss, peptides, and IV infusions require compliance review.

---

## QA summary

- ✅ `npm run build` passes clean — 18 routes, types check, static generation succeeds
- ✅ All pages statically prerendered; consultation API is the only dynamic route
- ✅ Fully responsive; fixed transparent-over-hero header solidifies on scroll
- ✅ Accessible: skip-to-content link, keyboard-navigable mobile drawer (focus trap, Escape, scroll-lock), accessible accordions, focus-visible outlines, reduced-motion support
- ✅ SEO: per-page metadata, Open Graph/Twitter, JSON-LD (distinct entity per provider — HealthAndBeautyBusiness / Dentist / MedicalBusiness), FAQPage schema, sitemap, robots
- ✅ No dead links; blank booking/social URLs render conditionally
- ✅ No hard-coded secrets; form validated client- and server-side with honeypot
- ✅ Scroll-reveal animations degrade gracefully without JS (noscript unhide)

---

_Built for Figment Creative._
