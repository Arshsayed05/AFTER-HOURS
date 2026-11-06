# AFTER HOURS — Collegiate Esports Club
### NMAM Institute of Technology, Nitte, Karnataka, India
**CREATE. COMPETE. CONQUER.**

---

## Overview
A production-quality website for **AFTER HOURS — Collegiate Esports Club at NMAMIT Nitte**. Built with the visual fidelity of a modern AAA esports franchise and featuring a scroll-driven cinematic walkthrough that smoothly transitions into the collegiate headquarters.

---

## Key Features & Architecture

### 1. Signature Experience — Scroll-Driven Cinematic Walkthrough
- **Scroll Video Scrubbing**: High-quality intra-frame video (`/public/videos/after-hours-scroll.mp4`) encoded with FFmpeg keyframe optimization (`-g 1 -keyint_min 1`) for instantaneous 60fps frame scrubbing.
- **Stage HUD Indicators**: Dynamic subtitles indicating progress through Corridor Walk $\rightarrow$ Threshold Gateway $\rightarrow$ Arena Reveal $\rightarrow$ Headquarters Unlocked.
- **Controls & Accessibility**:
  - **ENTER SITE** skip action to jump directly to the Hero section.
  - **AUTOPLAY** mode toggle.
  - Video scrub progress meter.
  - Graceful fallback image (`/public/images/intro-poster.jpg`).

### 2. Website Sections
- **Hero**: Centerpiece featuring the official **AFTER HOURS crest emblem** seamlessly blended on pure `#000000` pitch black, followed by the official motto **CREATE • COMPETE • CONQUER**.
- **About Us**: "MORE THAN A GAME." — NMAMIT context, 6 pillars, and 10 official charter objectives from the institutional proposal.
- **What We Do**: Visual activity grid covering Mobile, PC, Console, internal tournaments, online qualifiers, casting, and tech operations.
- **Game Divisions**: Focused on 8 core titles across **Mobile Gaming** (BGMI, FREE FIRE, FC MOBILE, CLASH ROYALE, SMASH KARTS) and **PC Gaming** (Valorant, CS2.0, PUBG PC) with interactive modal deep-dives.
- **Tournaments & Events**: The official 5-stage **AFTER HOURS – Event Roadmap**:
  1. 01. LAUNCH EVENT (Mobile + PC Gaming)
  2. 02. FRESHERS CUP (For First-Year Students)
  3. 03. INTRA-COLLEGE TOURNAMENTS (Mobile + PC Gaming)
  4. 04. AFTER HOURS PRO SERIES (NMAMIT Students Only)
  5. 05. INTER-COLLEGE ESPORTS TOURNAMENT (Online Qualifiers & LAN Finals)
- **Our Community**: Student pathways for players, shoutcasters, video editors, graphic designers, developers, and tournament admins with an interactive role explorer.
- **Club Structure**: 6 operational teams with clear responsibilities and faculty-guided governance.
- **Our Roadmap**: 6-phase strategic development timeline with crimson-red glowing progress indicator.
- **Achievements & Highlights**: Verified collegiate milestones and research records.
- **Media Gallery**: Responsive image archive with category filters and interactive full-screen Lightbox.
- **Join After Hours**: Recruitment section and interactive application interest modal with confetti celebration.
- **FAQ**: Interactive accordions answering policy questions and academic balance guidelines.
- **Footer**: Official branding, NMAMIT campus location, links, replay intro trigger, and copyright.

---

## Official Brand Identity & Colors
- **Near-black**: `#050505`
- **Charcoal**: `#111114`
- **Crimson Red**: `#FF1738`
- **Metallic Silver**: `#C7CBD1`
- **White**: `#F5F5F5`
- **Muted Grey**: `#A4A7AE`

---

## Central Configuration
All configurable items are centralized in `src/config/clubData.ts`:
- Official logo and crest paths
- Intro video and scroll video paths
- Official Instagram: `https://www.instagram.com/afterhours.nmamit` (`@afterhours.nmamit`)
- Official Email: `afterhours@nmamit.in`
- Division details and tryout requirements
- Note: There is no Discord server. Student gaming survey and initial recruitment have concluded; future trials are announced on Instagram.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```


---

## How to Run the Website

### Development Mode:
```bash
npm run dev
```
Runs the Vite development server with HMR at `http://localhost:5173`.

### Production Build:
```bash
npm run build
```
Type-checks TypeScript and compiles production-ready bundles to `/dist`.

### Preview Production Build:
```bash
npm run preview
```
Runs the local production server to test performance.
