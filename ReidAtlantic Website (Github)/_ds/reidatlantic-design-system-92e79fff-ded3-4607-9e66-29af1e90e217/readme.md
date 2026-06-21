# ReidAtlantic Design System

A design system for **ReidAtlantic**, an enterprise AI platform. The brand reads
as a sober, editorial *AI command center*: monumental typographic declarations on
white canvases, interrupted by deep-green and navy product bands and bursts of
tactile media. The interface shell stays austere black-and-white; color arrives
through photography, dark agent-console mockups, coral editorial chips, and blue
research links.

## Sources

This system was built from a written brand specification (no codebase or Figma
file was attached). The spec described the brand's colors, typography, layout,
elevation, shapes, components, do's/don'ts, and responsive behavior. If you have
the original product codebase or Figma library, attach it via the Import menu so
the components and UI kit can be cross-checked against source.

> **Font & logo note:** the spec references three proprietary families —
> *CohereText* (display), *Unica77* (body/UI), and *CohereMono* (technical
> labels) — none of which were provided. They are substituted with their
> documented Google Font fallbacks (**Space Grotesk**, **Inter**, **Space Mono**).
> The ReidAtlantic wordmark and mark in `assets/` are original placeholders.
> **Please provide licensed font binaries and the official logo to finalize.**

---

## Content fundamentals

**Voice — confident, plain, enterprise-credible.** Copy is declarative and short.
Headlines state a capability or claim ("The AI platform for the enterprise",
"A secure AI workspace for every team") rather than selling with adjectives.
Sentences are complete and measured; no exclamation marks, no hype words like
"revolutionary" or "magical".

- **Person:** second person for the reader ("turn *your* organization's knowledge
  into work"), first person plural for the company ("How *we* serve long-context
  models"). Never "I".
- **Casing:** Sentence case for headlines and buttons ("Request a demo", not
  "Request A Demo"). UPPERCASE only for mono technical labels (`RESEARCH`,
  `COMMAND R+`, `AI MOVES FAST`).
- **Buttons:** verb-first and specific — "Request a demo", "Try the Playground",
  "Talk to sales", "Subscribe". Secondary actions are quiet text links.
- **Emoji:** none. The brand never uses emoji. Status is shown with mono labels,
  small dots, and coral markers instead.
- **Numbers & proof:** concrete and restrained — "128K context window",
  "100+ languages", "SOC 2 Type II". No invented dashboard metrics or fake stats.
- **Vibe:** research lab meets enterprise infrastructure. Trustworthy, controlled,
  slightly austere. Let whitespace and a single big claim do the talking.

---

## Visual foundations

**Color.** White (`#ffffff`) is the default canvas. The UI shell is black-and-white;
the near-black `#17171c` carries primary CTAs, dark cards, and the footer. Brand
color appears in *full-width bands* — deep enterprise green `#003c33` (Command/North
product fields) and dark navy `#071829` (security/financial bands) — and in
*editorial accents*: coral `#ff7759` for blog taxonomy and warm markers, action
blue `#1863dc` for editorial links and pagination. Warm stone `#eeece7` is the
product-card surface; pale green/blue washes back media sections. **Coral and blue
are never broad surface fills.**

**Typography.** A display/body split. Display (Space Grotesk) is carved and almost
monospaced in spirit — used *once* per page at monumental scale (up to 96px) with
very tight line-height (1.0) and negative tracking (down to −1.92px). Everything
else settles into a neutral grotesque (Inter) at restrained 16–32px. Weights stay
light — 400/500; size, spacing, and surface contrast do the hierarchy work, not
bold. Mono (Space Mono) appears only as uppercase technical labels with +0.28px
tracking.

**Spacing & layout.** 8px base with many one-off alignment values. Whitespace is a
trust signal — large vertical intervals (80px+) separate brand claim, customer
proof, product proof, and CTA. Dense content appears only where IA needs it
(research lists, blog grids, contact forms). Nav is three-zone (logo left, menu
center, sign-in/CTA right). Card grids are 3-up on desktop, collapsing to 2 then 1.

**Backgrounds & media.** Flat color fields, never decorative gradients in the UI.
Gradients are *media-led only*: abstract 3D hero renders, deep-blue particle
fields, dark green-to-black product environments. Images sit as **rounded cards
with visible corners** (dominant radii 8px and 22px) — product videos, enterprise
photography, agent-console mockups — not as full-bleed backdrops (except CTA bands).

**Elevation.** Mostly flat. Depth comes from surface alternation, media contrast,
rounded corners, and thin 1px borders (`#d9d9dd` / `#e5e7eb`). The only real shadow
is a soft "media lift" under rounded media cards. **No heavy drop shadows on cards.**

**Corner radii.** xs 4px (thumbnails, search), sm 8px (chips, cards), md 16px,
lg 22px (signature media cards), xl 30px (filter pills), pill 32px (CTAs), full.
Never round major media below 8px.

**Cards.** Rounded but not cute. Light cards are bordered with a hairline or barely
boxed at all (often just a top rule). Warm stone product cards use 8px radius, a
divider line, checkmark bullets, and a small pill button. Dark cards use translucent
white surfaces and pale borders on the green/navy bands.

**Motion & states.** Restrained. Transitions are short opacity/color fades
(~150–180ms), no bounces or springs. Hover dims filled CTAs (opacity ~0.82);
text links keep their underline. Inputs shift their border to violet `#9b60aa` on
focus; keyboard focus uses blue `#4c6ee6`. No looping decorative animation.

**Transparency & blur.** Used sparingly — translucent white surfaces and borders on
dark bands (`rgba(255,255,255,0.08–0.16)`). No glassmorphism / heavy backdrop blur.

---

## Iconography

The brand uses **thin-line geometric illustrations** for capability and research
icons — single-weight (~1.25px) strokes, geometric, monochrome, occasionally with a
single coral accent stroke. Three originals ship in `assets/`
(`illustration-agents.svg`, `illustration-retrieval.svg`, `illustration-security.svg`).

- **No emoji**, ever. **No unicode glyphs** used as iconography (the arrow `→` and
  checkmark `✓` appear only as inline typographic marks, not icons).
- For a broader UI icon set, use a **thin-line CDN icon library** that matches this
  stroke weight — **Lucide** (`https://unpkg.com/lucide-static`) is the closest
  match and is the recommended substitute. *(Flagged: no proprietary icon font was
  provided; confirm or supply the brand's real icon set.)*
- Keep icons monochrome (ink on light, white on dark); reserve coral for a single
  accent stroke at most.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`radius.css`, `elevation.css`. ~122 CSS custom properties (base + semantic aliases).

**`assets/`** — `logo-wordmark.svg`, `logo-wordmark-white.svg`, `mark.svg`,
`illustration-agents.svg`, `illustration-retrieval.svg`, `illustration-security.svg`.

**`components/`** (namespace `window.ReidAtlanticDesignSystem_92e79f`)
- `buttons/` — **Button** (primary/inverse/secondary), **PillOutline** (filter pills)
- `content/` — **Card**, **Badge**, **Chip** (coral taxonomy), **MonoLabel**
- `forms/` — **Input** (light + onDark)
- `marketing/` — **AnnouncementBar**, **TrustLogoStrip**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown
in the Design System tab.

**`ui_kits/website/`** — interactive marketing-site recreation (Home + Blog).

## Do / Don't (quick)
- **Do** keep white canvas default; use dark green/navy as full-width product bands.
- **Do** keep CTAs pill-shaped near-black; use coral for editorial taxonomy only.
- **Don't** use coral/blue as broad surface fills, add heavy shadows, box every
  section, or use saturated gradients as normal UI backgrounds.
