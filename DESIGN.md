---
name: GIFT — Web3 Security Portfolio
description: Evidence-first portfolio for an independent Web3 security researcher.
colors:
  bg: "#0d120f"
  surface: "#121813"
  surface-2: "#161d18"
  line: "#262e29"
  line-2: "#343e37"
  text: "#edf0ea"
  text-2: "#a8b2aa"
  text-3: "#78837b"
  lime: "#c5f246"
  lime-2: "#d6f867"
  lime-dim: "rgba(197,242,70,.1)"
  lime-ink: "#0e120c"
  paper: "#f4f2ec"
  ink: "#101613"
  ink-2: "#6b6a62"
  finding-line: "#dcd9cf"
  finding-accent: "#77a800"
  finding-label: "#5f6b5f"
  finding-chip: "#d7d3c7"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  sm: "2px"
  pill: "99px"
  scroller: "6px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "56px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.lime-ink}"
    rounded: "{rounded.sm}"
    padding: "16px 22px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.lime-2}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "16px 22px"
    typography: "{typography.label}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  copy-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lime}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  focus-visible:
    backgroundColor: "transparent"
---

# Design System: GIFT — Web3 Security Portfolio

## Overview

**Creative North Star: "The Threat Sweep"**

A security terminal rendered as a portfolio: a dark green-black instrument panel where every element behaves like a diagnostic — scan lines sweep, status rings pulse, a terminal types legitimate commands, and findings are filed as evidence-driven reports. The page earns attention by looking alive with signal, not decoration: lime marks the moments where something is active, safe, or actionable, and the deep dark rest gives those moments room to read as urgent.

Density sits deliberately between cramped and airy. 1px rules are the structure; generous vertical rhythm (96px base section padding) keeps long audit narrative scannable. Sharp, squared micro-geometry (2px radii on buttons and tags) avoids the soft rounded-card aesthetic of generic dashboards. The only inset surface that breaks the dark field is the light paper evidence block (the sample finding), which visually separates "the report artifact" from "the interface around it."

**Key Characteristics:**
- Terminal-first: monospace labels, prompts, and underscored micro-typography carry structure.
- Signal-restricted lime: the accent means active/pending/available, never a flat page fill.
- Sharp 1px rules and 2px corners; no cards-in-cards, no rounded blobs.
- Light paper only inside the finding/report artifact.
- Interaction trust: hover shifts and highlights, nothing bounces.

## Colors

A near-monochrome dark field with a single high-voltage accent. Text hierarchy is luminance-driven (near-white main text, mid-green-gray secondary, dim meter text), staying tonal to the dark so nothing reads as a foreign hue.

### Primary
- **Signal Lime** (#c5f246): the only chroma on the dark field. Used for live status, active states, arrows, key word marks (the GIFT. period), "available" badge, copy-report text, and primary CTAs. Hover lifts it to Lime Bright (#d6f867). Never a page background.
- **Lime Wash** (rgba(197,242,70,.1)): faint tint for ring borders and status seams; presence without shout.

### Neutral
- **Panel Black** (#0d120f): page background — a green-tinted near-black, not a flat `#000`.
- **Inset Surface** (#121813): signal panel, case study frame, hover fills.
- **Raised Surface** (#161d18): secondary tint inside surface blocks.
- **Rule Line** (#262e29): structural 1px dividers and borders.
- **Rule Line Strong** (#343e37): quiet buttons, tags, social icons.
- **Ghost Text** (#edf0ea): headlines and primary copy.
- **Muted Text** (#a8b2aa): paragraphs, lede, tag text.
- **Meter Text** (#78837b): mono labels, meta, footers.
- **Paper** (#f4f2ec): the sample finding block background — light evidence surface.
- **Ink** (#101613): text on Paper; also the copy-report button fill (dark on light).
- **Muted Ink** (#6b6a62): secondary text on Paper.
- **Finding Rule** (#dcd9cf): dividers on Paper; **Finding Accent** (#77a800) for excerpt tags; **Finding Label** (#5f6b5f) for dt labels; **Finding Chip** (#d7d3c7) for severity chip borders.

### Named Rules
**The One Cluster Rule.** Lime appears only as accent on ≤~10% of any viewport — status marks, arrows, and CTAs. Never as a background fill or gradient wash across a section; its rarity is the reason it reads as signal.

**The Evidence-Light Rule.** Light surfaces are reserved for the actual reporting artifact (the paper finding block). Interface chrome stays dark so the report always reads as the object being produced.

## Typography

**Display Font:** Bricolage Grotesque (fallback: Schibsted Grotesk, system sans)
**Body Font:** Schibsted Grotesk (fallback: -apple-system, system sans)
**Label/Mono Font:** JetBrains Mono (fallback: ui-monospace, monospace)

**Character:** A characterful grotesque display paired with an open, quiet body face; the mono voice supplies the technical/diagnostic personality in labels, prompts, and meters. The display carries the craft, the body carries the reading, the mono carries the machine.

### Hierarchy
- **Display** (700/600, clamp(46px→84px) hero item, 1.04): h1 and intro brand; tight tracking (-.02em).
- **Headline** (600, clamp(30px→46px), 1.08): section h2 headings.
- **Title** (600, 19–26px, 1.3): work items, case outputs, records.
- **Body** (400, 16px, 1.6): paragraphs and lede; lede up to 18px; measure kept near 65ch.
- **Label** (700, 11px, 0.14em, uppercase): kickers, section labels, eyebrow, meta, footers — JetBrains Mono.
- **Micro Meter** (500/700, 8–11px, 0.08–0.14em, uppercase): signal panel status, ticker labels, TTY prompt.

### Named Rules
**The Measure Rule.** Paragraphs never exceed ~65ch; long-form stays single-column and readable, matching the audit-report feel.

**The Mono-Means-Machine Rule.** Monospace is reserved for labels, code, data, and meters — interface structure, not body copy. Body text is always the body face.

## Layout

A single centered column: `.shell` maxes at 1120px, auto full-width minus 96px gutters on desktop (40px on mobile). Vertical rhythm is 96px per section (`padding: 96px 0`), tightening to 56px in the tools strip and 48–72px inside list sections. Major blocks sit on 1px top rules as hard section breaks; rows within are separated by 1px rules (work list, capabilities, research, method, ready).

Two-column hero at ≥980px (1.15fr / .85fr); stats become a 3-column strip at ≥720px; record and case outputs split at ≥760px. List rows use a fixed index gutter (34–52px) then flexible content, with arrows right-aligned on wide screens and drawn inline on mobile. Headings cap around 720–820px to keep display type from stretching the full column.

## Elevation & Depth

The system is flat by default: depth comes from tones and rules, not shadows. Surfaces differentiate by fill (panel black vs inset surface vs raised surface), separations come from 1px `rule line` borders, and interactive hover fills the row with `inset surface`. The only allowed shadow is the neutral friction-free focus/scroll treatment (thin scrollbar thumb on rule-line). Colored halos and zero-offset glows are banned (the intro scan line uses a gradient fade, not a drop glow).

**The Flat-By-Default Rule.** No shadows at rest; emphasis arrives as fill, border color, or a 1px rule. A glow only ever appears as a soft key-frame accent (intro scan), never as resting elevation.

## Shapes

Sharp and squared. Buttons, tags, copy controls, and the finding chips share a near-zero corner language: 2px radius on interactive controls, 99px pills reserved for live/status dots, 6px only on the scrollbar thumb. No cards: containers are flushed rectangles drawn by 1px borders on the page background.

**The Hard-Edge Rule.** Interactive and structural geometry is square (≤2px). Pills mean status. No rounded-rectangle blobs, no nested cards.

## Components

### Buttons
- **Shape:** 2px radius; upright type via the mono label voice.
- **Primary:** Signal Lime fill, Ink text (#c5f246 / #0e120c), 16px 22px padding. Hover: Lime Bright (#d6f867) with a 1px lift (`translateY(-1px)`). Signals the single action per screen.
- **Quiet:** transparent fill, 1px Rule Line Strong border, Ghost Text; hover swaps border and text to Signal Lime. Used for secondary links (GitHub, project links).

### Tags / Chips
- **Style:** transparent fill, 1px Rule Line Strong border, Muted Text, 6px 10px padding, 2px radius, mono 11px. Hover (in tool rows) turns border/text lime.

### Cards / Containers
- Nested cards are banned. Surfaces are page background with 1px Rule Line borders and Inset fills (signal panel, case frame, stats strip). The only light container is the paper finding block, which keeps Ink text and Finding Rule dividers.

### Severity Finder (interactive report block)
- Paper background; severity chips are transparent with Finding Chip borders, active state flips to Ink fill with Lime text. Copy button is Ink fill, Lime text, and echoes the "copied" success inline via a mono label rather than a toast.

### Navigation
- Sticky top bar: Panel Black at 0.86 opacity with backdrop blur, 1px Rule Line bottom border, display-face brand mark with a lime period, mono 13px links in Muted Text → Ghost on hover, mobile hides links and keeps the CTA.

### Status Signal (signature component)
- Inset surface panel with three concentric ring borders (Lime Wash, hardening to 50% on the inner ring), a rotating conic sweep 7s, a live ticker (HIGH/CRITICAL/MEDIUM/SCANNING), a typing terminal prompt (`$ forge test --fork latest`), and a mono top/bottom status bar. Pauses when scrolled out of view.

## Do's and Don'ts

### Do:
- **Do** keep lime to signal and CTA accents; a section should stay legible without it.
- **Do** separate sections and list rows with 1px Rule Line borders and 96px rhythm.
- **Do** state interactive affordance as fill, border-color, and arrow micro-shift — never bounce or elastic easing.
- **Do** use JetBrains Mono for labels, prompts, and data, and body faces for paragraphs.
- **Do** reserve light paper for the reporting artifact; keep all chrome dark.
- **Do** respect `prefers-reduced-motion` (disable scan, ticker, typing, and reveals).

### Don't:
- **Don't** use Inter, Space Grotesk, Instrument Sans/Serif, or other detector-flagged monoculture faces.
- **Don't** add colored glow shadows, gradient text, or glass-morphism decoration.
- **Don't** wrap content in nested cards or rounded-blob containers.
- **Don't** animate layout properties (padding/width/height); animate `background`, `transform`, and `opacity` only.
- **Don't** publish or imply client/contest detail that a responsible-disclosure process has not cleared.