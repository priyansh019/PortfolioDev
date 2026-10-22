# Google AI Studio Build Prompt: Priyansh Singh's Liquid Intelligence Portfolio

> Paste everything below the line into Google AI Studio (Build mode). Sections 0 to 2 adapt the brief to AI Studio's constraints, so please keep them.

---

# BUILD A PREMIUM, INTERACTIVE DEVELOPER PORTFOLIO: PRIYANSH SINGH

## 0. ROLE AND OBJECTIVE

Act as a senior frontend engineer, creative developer, motion designer, accessibility specialist, and QA engineer.

Build a complete, polished, responsive, production-quality technical portfolio for **Priyansh Singh** (full name on LinkedIn: Priyansh Kumar Singh), a B.Tech Electronics and Communication Engineering undergraduate at Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, India.

The portfolio will be shown at an **in-person hackathon**. Judges, developers, recruiters, and collaborators may open it, interact with it, inspect the projects, and click through to source code and live deployments. It must communicate technical credibility, originality, attention to detail, and real project experience.

Do not produce a generic student template. Do not stop at a static mockup. Build the working application.

The experience should feel like a carefully crafted digital product. It takes inspiration from the visual quality of excellent Apple product pages, the scientific clarity of Google DeepMind, and a distinctive fluid, liquid-inspired interface. Treat these as inspiration only; create an original identity and copy no interfaces.

## 1. AI STUDIO OPERATING NOTES (READ FIRST)

You are running inside Google AI Studio's build environment, not a local repository. Adapt accordingly:

- **There is no existing repo to inspect.** Start a fresh project. If the environment scaffolds a default React + Vite + TypeScript app, extend it and keep the scaffold's working configuration.
- **Do not claim you inspected GitHub repositories or live deployments** unless your tools actually fetched them. All verified facts are supplied in this prompt. Anything not supplied must be omitted or labelled "details coming soon". Never invent it.
- **Do not claim Lighthouse scores, test passes, or link checks you did not run.** In the final response, separate what you verified (it compiles, it renders, features exercised in the preview) from what you could not verify (live URL uptime, real-device behaviour, Lighthouse).
- **Never put API keys, tokens, or secrets in the code or the output.** The portfolio needs no API keys.
- **Keep dependencies minimal.** Prefer React, TypeScript, Vite, Tailwind CSS (or a clean CSS-variable design system), `motion` (Framer Motion), and `lucide-react`. Use no heavy WebGL libraries unless the benefit is clear.
- Produce a project that builds and runs in the AI Studio preview and can be exported to GitHub and deployed to Vercel, Netlify, or Cloud Run.
- Keep the code organized across multiple files, not one giant component.

## 2. NON-NEGOTIABLE REQUIREMENTS

1. A distinctive "Liquid Intelligence" visual identity.
2. Fully functional light and dark themes (not just inverted colours).
3. Smooth scrolling and purposeful motion.
4. A custom cursor on suitable desktop pointer devices only.
5. Interactive project cards and meaningful project details.
6. Excellent mobile, tablet, and desktop layouts.
7. Real profile links and project URLs, exactly as supplied here.
8. A polished first impression within the first few seconds.
9. Accessible navigation and keyboard interaction.
10. High performance and graceful fallbacks when effects are unsupported.
11. No fake projects, fake certifications, invented statistics, broken links, dead buttons, or misleading project statuses.
12. A self-review pass that finds and fixes errors before you declare completion.

## 3. SOURCE FACTS (SINGLE SOURCE OF TRUTH)

Everything below was supplied by the owner from his LinkedIn export, his GitHub, and his own briefing. Use only this information. Where it is silent, hide the field.

### 3.1 Identity

- Name: Priyansh Singh (LinkedIn legal-style name: Priyansh Kumar Singh)
- LinkedIn headline: "B.Tech undergrad (ECE) at AKGEC | Exploring Web Development & Cybersecurity | Exploring Python, C/C++, & JS | Seeking internships to grow & contribute"
- Location: Ghaziabad, Uttar Pradesh, India
- College: Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad
- Seeking: internships in web development or information security (the owner states he is "a curious and motivated learner eager to take on new challenges").
- Languages: Japanese (Elementary). Include it only as a small "Languages" line, worded exactly as "Japanese (Elementary)".
- LinkedIn "Top Skills": C++, Responsible AI, Multimodal Prompting.
- Self-stated technical skills: C (Basic), Python (Basic), MySQL (Learning), JavaScript (Learning).

### 3.2 Public links (use these exact URLs)

| Platform | URL |
|---|---|
| GitHub | https://github.com/priyansh019 |
| LinkedIn | https://www.linkedin.com/in/priyansh019 |
| Credly | https://www.credly.com/users/priyansh19 |
| LeetCode | https://leetcode.com/u/priyxnsh19/ |
| HackerRank | https://www.hackerrank.com/profile/priyansh_singh01 |
| Instagram (secondary/optional) | https://www.instagram.com/itspriyansh19 |
| Email | priyansh.singh019@gmail.com |

Strip tracking parameters. For example, use `https://www.linkedin.com/in/priyansh019` and never a URL ending in `?isSelfProfile=true`.

**Phone number:** a mobile number exists on his LinkedIn, but it is deliberately **not** included here and must **not** appear anywhere in the public UI. Add a central config flag `SHOW_PHONE = false` and nothing else about it.

### 3.3 Education

- B.Tech, Electronics and Communication Engineering, AKGEC, Ghaziabad: September 2024 to September 2028.
- Lions School, Mirzapur (Intermediate and High School), PCM (Physics, Chemistry, Maths): March 2019 to March 2023.

### 3.4 Experience, leadership, activities

Show only these:

- **Photographer, Photography and Media Club**: May 2025 to July 2025 (3 months), Ghaziabad.
- **Phoenix Technical Society**: ECE-domain coordination.
- **RoboVerse** event organization: more than 200 students involved (per the owner's information).
- **GirlScript Summer of Code 2026**: accepted as contributor/mentee. Use accurate, modest wording such as "Accepted to GirlScript Summer of Code 2026" and do not imply completion or ranking.
- **CyberGeek CTF 2026** (organized by Geekhaven, IIIT Allahabad): a 24-hour event with 300+ participating teams. Describe it as **participation**. Never imply a win, rank, or award.

Do not invent dates, certificate links, awards, or responsibilities beyond this.

### 3.5 Certifications (names only; link only if a verifiable URL exists)

1. Python (Basic)
2. Introduction to Cybersecurity
3. Cybersecurity Fundamentals
4. Google Prompting Essentials Specialization
5. Networking Basics

No individual certificate URLs have been supplied. Do **not** link individual certificates. Instead, provide one honest "Verify on Credly" link to the Credly profile above. Do not invent issuers other than "Google" for the Prompting Essentials Specialization, and omit issuers or dates for the rest.

## 4. PROJECT DATA

Create a single typed data source (`src/data/portfolio.ts`) with strong TypeScript types. All project content comes from it; components never hardcode project details.

### 4.1 Status types (enum, always shown as text plus icon, never colour alone)

- `deployed`: "Live / Deployed"
- `in-progress`: "In Progress"
- `local-prototype`: "Local Prototype"
- `concept`: "Concept / Exploration"
- `practice`: "Ongoing Practice"

Add a `needsVerification` data flag where noted below. Items with that flag must show a quiet, honest label, for example "Details being updated". They must never show invented specifics.

### 4.2 Featured projects (deployed; show first)

**1. SentinelPy: Network Security Scanner**
- Category: Cybersecurity, APIs & Systems
- Repo: https://github.com/priyansh019/network-scanner
- Live frontend: https://network-scanner-2-umx2.onrender.com
- Backend: https://network-scanner-1-p3wn.onrender.com
- API docs: https://network-scanner-1-p3wn.onrender.com/docs
- Overview: a full-stack network-security scanning platform. The documented design is a React + Vite dashboard, a FastAPI backend, and a Python scanning engine. It handles scan requests, port scanning, service fingerprinting, known-vulnerability matching, and risk classification.
- Tech (from documented design): React, Vite, FastAPI, Python.
- Status: Deployed. The backend and frontend are on Render, which may cold-start, so add a small, honest note: "Hosted on Render's free tier; first load may take a moment" (phrase it as a note, not a claim of a tier you have not confirmed. Use "may be slow to wake" wording).
- "NetSecure" was an earlier working name. It is the same project as the `network-scanner` repo unless evidence says otherwise. **Create exactly one card.** Never list NetSecure separately.

**2. ClockWork: AI-Powered Everyday Tasks**
- Category: AI & Automation, Web Applications
- Repo: https://github.com/priyansh019/ClockWork
- Live: https://beclockwork.vercel.app
- Overview: an AI-powered application intended to help with everyday tasks. The repo is a TypeScript application with Gemini API integration.
- Tech: TypeScript, Gemini API.
- Status: Deployed. Do not list detailed features beyond this.

**3. NovaBank: Banking Project**
- Category: Web Applications
- Repo: https://github.com/priyansh019/NovaBank
- Live: https://novabank-nu.vercel.app
- Overview: a banking project presented as a next-generation private-banking experience. The repo contains web-application code and banking-related Python files.
- Tech: web front end and Python (only what is stated above).
- Status: Deployed. Do **not** claim authentication, real transactions, data security, financial services, or production readiness. Add a small line stating it is a demonstration project.

### 4.3 Repositories newly supplied by the owner (not yet inspected, so verify before describing)

The owner supplied these three additional GitHub repos. Their contents are **not known** to this prompt. Do not write feature descriptions for them.

- https://github.com/priyansh019/Placement_Report
- https://github.com/priyansh019/WorkForceIQ
- https://github.com/priyansh019/ImpactLink

Rules:
- If your environment can read these repos, read the README and code first, then describe only what is evidenced and cite specifics from there.
- If it cannot, render each as a modest card with only: the title (derived from the repo name, split into words, e.g. "Placement Report", "WorkForce IQ", "Impact Link"), a source-code link, a status of `in-progress`, `needsVerification: true`, and the one-line placeholder "Description being updated. See the repository for current details." Do not guess technologies.
- The owner previously described an "AI Workforce Management Platform" (a competition project, in progress). **WorkForceIQ is probably that project but this is unconfirmed.** Do not merge them or claim they are the same. If WorkForceIQ's README clearly shows it is, show one card only; otherwise keep WorkForceIQ as its own card and keep the "AI Workforce Management Platform" idea out of the grid (see 4.4).
- Do not assume what Placement_Report or ImpactLink do from the names alone.

### 4.4 Other projects

**4. LeetCode Solutions** (secondary coding repository)
- Category: Experiments & Practice
- Repo: https://github.com/priyansh019/Leetcode-Solutions
- Profile: https://leetcode.com/u/priyxnsh19/
- Overview: C++ coding and algorithm practice.
- Status: Ongoing practice. Present it as practice, not a commercial product.

**5. NovaVoice Calendar Bridge**
- Category: APIs & Systems
- Overview: a local Flask API prototype connecting a frontend to Google Calendar. Known endpoints: `GET /`, `GET /api/health`, `GET /health`, `POST /api/book_meeting`, `POST /api/check_availability`. It included calendar connectivity checks, API health responses, meeting-booking requests, and availability requests.
- Tech: Python, Flask, Google Calendar API.
- Status: Local Prototype / in progress.
- **No public URL and no repo link.** Never show localhost URLs as links. Show the endpoint list as plain code text in the details view.

**6. AI Workforce Management Platform** (see the WorkForceIQ rule above)
- Competition project, in progress, prototype development. No confirmed repo or deployment. Keep it out of the main grid unless merged per rule 4.3.

**7. Local & Intercity Bus Route Explorer**
- Status: Concept / Exploration. An app concept for discovering local and intercity buses, intermediate stops, route choices, and fares. The owner's own Mamura-to-Dasna college commute and Noida Sector 34 to Meerut were discussion examples.
- Do not invent a name, repo, demo, route database, fare feed, or navigation functionality.
- Show it only in a small, clearly labelled "Ideas I'm exploring" strip beneath the grid, not as a flagship card.

**8. SAT-SA / SOC Assessment Analytics**
- Exploration related to a Smart India Hackathon problem statement; no evidence of an active codebase.
- **Keep it out of the public portfolio.** Leave it in the data file as `visibility: "hidden"` with a comment.

### 4.5 IMPORTANT EXCLUSION

A gesture-related project has been **intentionally excluded**. Do not add it, its details, repo, screenshots, or claims anywhere (the UI, data, comments, alt text, metadata, filenames), and do not reintroduce it through repository auto-discovery. Do not use any GitHub auto-listing feature; the project list is exactly what is defined above.

### 4.6 Ordering

SentinelPy, ClockWork, NovaBank, then in-progress work (WorkForceIQ, Placement_Report, ImpactLink, NovaVoice Calendar Bridge), then LeetCode Solutions, then the "Ideas I'm exploring" strip. Prioritize demonstrable work.

### 4.7 Link rules

- Source links go to the correct repo; demo links go to the correct deployment.
- Missing URLs stay absent. Never invent one.
- External links use `target="_blank"` with `rel="noopener noreferrer"`, and have descriptive accessible labels (e.g. "SentinelPy source code on GitHub, opens in a new tab").
- Long URLs must wrap and never overflow on mobile.
- If a deployment cannot be confirmed working, say so honestly rather than asserting it works.

## 5. DESIGN DIRECTION: "LIQUID INTELLIGENCE"

An editorial, immersive, sophisticated interface: flowing surfaces, subtle light refraction, precise typography, soft gradients, spatial depth, interactive motion.

**Principles:** large confident typography; strong hierarchy and generous spacing; precise grid alignment; softly rounded surfaces (not excessive pills); subtle borders and depth rather than heavy shadows; purposeful negative space; fluid motion that reinforces the design; beautiful transitions between sections and themes; high readability in both themes.

**Avoid:** generic templates; excessive glassmorphism; random floating blobs in every section; constant distracting animation; huge decorative headings that push content below the fold; overloaded dashboards; too many gradients; emoji standing in for icons; repeated animated elements that feel like an advertisement.

### Colour system (central design tokens via CSS custom properties)

- **Dark:** deep charcoal or near-black backgrounds; high-contrast off-white type; restrained electric blue, indigo, or cyan accents; subtle layered highlights and refraction.
- **Light:** warm white or very light neutral background; deep charcoal type; matching accent hues; soft precise borders; restrained shadows.

Both themes must look independently designed and equally complete. Colours, surfaces, outlines, and text transition consistently when the theme changes.

Use a refined type pairing (a distinctive display face plus a clean text face, loaded efficiently, e.g. via Google Fonts with `display=swap`) and a monospaced face for technical labels.

## 6. LIQUID-FLOW VISUAL

Build **one** memorable liquid element in the hero, with only subtle motion elsewhere. Choose the most stable and performant option: an SVG displacement filter, a restrained canvas fluid or particle field, a lightweight shader, or a procedural gradient mesh with spring-eased pointer distortion.

Requirements:
- Smooth, organic, visually coherent motion; the pointer may subtly influence the surface.
- It never blocks links, buttons, or text selection (`pointer-events: none` where needed).
- No horizontal overflow from the effect.
- No unbounded or expensive loops. Use `requestAnimationFrame` only where appropriate, clean it up on unmount, and pause when the tab is hidden (Page Visibility API) or the element is off-screen (IntersectionObserver).
- Correct response to resize, and cap device-pixel-ratio on canvas.
- A good static or CSS-only fallback if canvas/WebGL is unavailable.
- Respect `prefers-reduced-motion` (render a static or near-static version).
- The site stays fully usable with the effect disabled. Navigation and content never depend on it.
- It should feel premium, not like a graphics demo.

## 7. CUSTOM CURSOR AND MICRO-INTERACTIONS

Enable only when `(hover: hover) and (pointer: fine)` matches and reduced motion is not requested. Otherwise use native cursors.

- A small primary dot plus a soft spring-following outer ring, with a subtle trail and no noticeable lag.
- Gentle scale on interactive elements; contextual states over projects and buttons; optional short label such as "VIEW" on project cards.
- A subtle magnetic effect on selected primary buttons.
- A restrained spotlight highlight that follows the pointer on project cards.

Engineering rules:
- **No React re-render per mousemove.** Use refs, a single rAF loop, and transform-only updates.
- Clean up all listeners and frames; stop the loop when idle if feasible.
- Never hide the native cursor over inputs, textareas, or text-editing areas.
- The cursor layer uses `pointer-events: none` and never captures page events.
- Every button and link stays easy to click.

## 8. SCROLLING AND PAGE MOTION

- Prefer native scrolling with polished CSS (`scroll-behavior: smooth` guarded by reduced motion, and `scroll-margin-top` for the sticky header). Avoid a smooth-scroll library unless it demonstrably breaks nothing.
- A restrained scroll-progress indicator.
- A sticky navbar that changes subtly on scroll.
- Section reveals with small vertical movement and opacity only; staggered project-card entrances used sparingly.
- A clear active-section indicator (IntersectionObserver).
- A smooth theme transition.
- Do not animate everything. Do not break anchor navigation, keyboard scrolling, focus movement, browser history, or reduced-motion preferences.

## 9. SITE STRUCTURE

### A. Navigation
Wordmark "Priyansh Singh"; links: Home, Projects, About, Experience, Certifications, Contact; a real theme toggle. Clean desktop nav and a working mobile menu that closes after selecting a link, supports Escape, traps and restores focus, and works from the keyboard. Every link leads to a real section (no placeholder `href="#"`). Account for the sticky header offset.

### B. Hero
First impression within seconds, with no long intro animation.

- Headline (refine if needed, keep authentic): **"I turn curious ideas into useful systems."**
- Supporting copy: "ECE undergraduate at AKGEC, exploring full-stack development, AI-powered applications, cybersecurity, and connected systems."
- Optional small line: "Open to internships in web development and information security." (supported by his LinkedIn).
- Primary CTA: **Explore projects**. Secondary CTA: **Let's connect**.
- Compact GitHub and LinkedIn icon links.
- A small scroll cue.
- **CV button:** only render if a config value `RESUME_URL` is set to a real asset. Default it to `null`. No resume has been supplied, so the button must not appear. Mention in the final notes that adding `/public/resume.pdf` and setting the flag enables it.
- No fake job titles, company affiliations, client logos, or achievements.

### C. Featured projects (the centrepiece)
Each card: title; one-sentence description; status (text plus icon); technologies grounded in the data; a designed thumbnail; source link when available; live link when available; an accessible "View details" action. No hover-only essential actions.

Thumbnails: since no real screenshots are supplied, create tasteful original CSS or SVG interface mockups per project. They must not depict features that do not exist, include fake metrics, or mimic third-party brands. Add meaningful `alt` text or mark them decorative (`aria-hidden`) with a text equivalent nearby.

### D. Filtering
Categories derived from the actual dataset only (e.g. All, AI & Automation, Web Applications, Cybersecurity, APIs & Systems, Experiments & Practice). Show only categories that have projects. Handle keyboard use, active state (also conveyed by `aria-pressed` or `aria-current`, not colour alone), narrow screens (wrap or horizontally scroll without page overflow), and an empty-state message. Announce result counts to screen readers (polite live region).

### E. Project details
An accessible modal (or side panel). Show only fields with real data: overview, main functionality, technology choices, status, source repo, live app, API docs. Hide unknown fields. **Do not fabricate** problem statements, architecture, or lessons. If the data file lacks them, the sections do not render.

Modal requirements: `role="dialog"`, `aria-modal`, labelled by its title; Escape closes; visible close button; focus trapped and restored to the trigger; background scroll locked; content scrolls inside on small screens; works in both themes (including when the theme changes while open).

### F. About
A human, first-person-friendly introduction: an ECE undergraduate at AKGEC who enjoys building practical software and exploring the overlap of web technologies, AI, cybersecurity, and connected systems. Convey curiosity, experimentation, teamwork, and continuous learning, and state that he is looking for internships in web development or information security. Avoid "expert", "senior", "award-winning", or any unsupported claim. Include the Japanese (Elementary) line.

### G. Skills
Grouped, not percentage bars. Never invent proficiency numbers. Be honest about level using the owner's own words:

- **Languages:** C++ (his top LinkedIn skill; used in LeetCode practice), Python (Basic), C (Basic), JavaScript (Learning), TypeScript (used in ClockWork).
- **Web & backend:** React, Vite, FastAPI, Flask (as used in the projects above), MySQL (Learning).
- **Security & networking:** Cybersecurity fundamentals, networking basics, network scanning concepts (SentinelPy).
- **AI & data:** Prompt engineering and multimodal prompting, Responsible AI, Gemini API integration (ClockWork).
- **Embedded & electronics:** show this group only as "ECE coursework focus" with no tool claims, since none were supplied.
- **Tools & platforms:** Git/GitHub, Vercel, Render (deployment platforms used by his projects).

Where useful, tie each skill chip to the project that used it. Do not label learning items as advanced merely because a dependency appears.

### H. Experience, activities, leadership
A clean timeline of the verified items in 3.4 only.

### I. Education and certifications
The education entries from 3.3 and certification list from 3.5 with the single "Verify on Credly" link.

### J. Coding profiles
Link cards for GitHub, LeetCode, HackerRank, LinkedIn, Credly (Instagram in a secondary social area). No scraped stats, streaks, or third-party widgets that can break. Plain, reliable links.

### K. Contact
Inviting and simple. A working `mailto:priyansh.singh019@gmail.com`; a **copy-email** button with visible success feedback (and an accessible live-region announcement, with a clipboard-API fallback and failure message); professional profile links; a strong closing CTA; a compact footer. **No fake contact form.** Do not display the phone number.

## 10. THEME SYSTEM

- Respect the OS preference on first visit, persist the choice (wrap `localStorage` in try/catch).
- Apply the theme before first paint with a tiny inline script in `index.html` to prevent a flash.
- All cards, menus, borders, icons, overlays, hover states, and modals correct in both themes.
- Accessible toggle button with `aria-label` and a state indicator (e.g. `aria-pressed`).
- Meet WCAG AA contrast in both themes.
- Switching themes while the modal or mobile menu is open must work.

## 11. RESPONSIVE DESIGN

Deliberately designed (not merely compressed) for 320–375 px, 390–430 px, ~768 px, 1024–1440 px, and ~1920 px. Ensure: no horizontal scroll; no overlapping headings or buttons; no clipped descriptions; no off-screen controls; sticky nav intact; adequate touch targets (about 44 px); long URLs and titles wrap; modals fit small screens; no oversized media.

## 12. ACCESSIBILITY

Semantic HTML; skip-to-content link; logical heading hierarchy; keyboard-accessible everything; visible focus indicators; accessible names on all controls and icon-only buttons; polite live regions for filter results and copy feedback; sufficient contrast; meaningful alt text; `prefers-reduced-motion` honoured; status never communicated by colour alone.

## 13. PERFORMANCE AND STABILITY

Fast first render and a lightweight hero. Lazy-load anything below the fold. Avoid layout shift (reserve space). No per-frame React state. Clean up listeners, timers, rAFs, and observers. Handle failed external images gracefully. Progressive enhancement: attractive even with animation disabled. No autoplay audio. No runtime API calls to third parties are required for the site to function.

## 14. SEO AND METADATA

Meaningful `<title>` (e.g. "Priyansh Singh | Developer Portfolio"), a concise meta description, Open Graph and Twitter card tags, a favicon or an original SVG wordmark, correct heading structure. Add a canonical URL only through a config value that is empty until the real domain is known. Do not invent a domain or claim it is already deployed. Do not reference a resume or an OG image file that does not exist (generate an SVG wordmark favicon inline; skip `og:image` unless you create a real one).

## 15. CODE ARCHITECTURE

```
src/
  components/ navigation/ hero/ effects/ projects/ about/ experience/
             skills/ certifications/ contact/ footer/ ui/
  data/portfolio.ts      # typed profile, links, projects, experience, certs, config flags
  hooks/                 # useTheme, useActiveSection, useMediaQuery, useFocusTrap, useReducedMotion
  styles/                # tokens, globals
  types/
  utils/
```

Strong types for profile and project data; reusable UI components; centralized theme tokens and external links; clear separation of content from presentation; consistent error handling. Central config object: `SHOW_PHONE=false`, `RESUME_URL=null`, `CANONICAL_URL=""`.

## 16. SELF-QA (DO THIS BEFORE FINISHING)

Review and fix, then re-check what you changed:

- Every nav link, logo link, and mobile-menu action works; the menu closes on selection.
- Theme toggle works and persists; no flash; both themes complete.
- Filters work, including the empty state and keyboard use.
- Modal: opens, closes (button and Escape), traps and restores focus, locks scroll.
- Every project link points to the right URL from section 4 and nothing extra.
- The gesture project does not appear anywhere.
- No phone number, resume button (unless configured), or fake form.
- Copy-email works with feedback.
- Cursor only on fine-pointer devices; no listener leaks; native cursor in inputs.
- Fluid effect pauses when hidden, cleans up, respects reduced motion, has a fallback.
- No horizontal overflow at 320 px.
- Correct React keys; no console errors; no bad imports; no missing assets.
- Build compiles.

Do not say anything passed unless you actually ran or observed it.

## 17. DEFINITION OF DONE

Polished and distinctive; liquid effect smooth and non-blocking; cursor reliable; both themes finished; responsive from mobile to large desktop; all content accurate and honestly labelled; every shown link legitimate; the excluded project absent; no known broken interactions; accessible alternatives for motion and hover; the build succeeds; remaining issues documented.

## 18. FINAL RESPONSE FORMAT

After building, reply with a factual summary:

1. Features implemented.
2. Key files created.
3. Actual tech stack used.
4. How to run and export/deploy.
5. What you verified versus what you could not verify (live deployments, Lighthouse, real-device testing).
6. Which project cards are marked `needsVerification` (Placement_Report, WorkForceIQ, ImpactLink unless you were able to read them) and what the owner should fill in.
7. Config flags the owner can set (`RESUME_URL`, `CANONICAL_URL`, `SHOW_PHONE`).
8. Any remaining issues.

Do not return only a plan or snippets. Build the working application.
