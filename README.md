# Priyansh Singh | Developer Portfolio

A modern, cyberpunk-inspired personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site showcases projects, skills, credentials, and experience in a polished single-page experience with animated sections, modal-based details, and immersive visual effects.

## Overview

This portfolio is designed to present a developer brand with:

- a cinematic hero section and motion-rich layout
- project highlights and technical skill cards
- experience/timeline and credentials sections
- contact and navigation across page sections
- interactive detail modals for richer content browsing
- responsive, dark-themed design with modern UI accents

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js / React Spline integration
- Google GenAI (for AI-related capabilities in the app ecosystem)

## Features

- Smooth scrolling navigation between sections
- Animated scroll reveals and motion components
- 3D/visual scene support with Spline and Three.js
- Responsive design for desktop and mobile screens
- Modular component architecture for easy updates
- AI-ready project metadata and app configuration

## Project Structure

```bash
.
├── .aistudio/
├── .env.example
├── .gitignore
├── .npmrc
├── components/
├── lib/
├── public/
├── src/
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── bun.lock
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
npm install
```

or with Bun:

```bash
bun install
```

### Environment Variables

Copy the example environment file and configure your values:

```bash
cp .env.example .env
```

The project expects variables such as:

```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
APP_URL="YOUR_APP_URL"
```

### Run Development Server

```bash
npm run dev
```

The app runs on:

```bash
http://localhost:3000
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Scripts

```bash
npm run dev      # start Vite dev server
npm run build    # production build
npm run preview  # preview built app
npm run clean    # remove dist and generated server files
npm run lint     # TypeScript validation
```

## Notes

This repository is a personal portfolio. You can adapt the content, projects, and metadata in the source files and `metadata.json` to match your own resume, skills, and experience.

This project does not appear to include a license file yet. If you plan to publish it publicly, consider adding one.

## Author

Priyansh Singh

## Contact

You can reach out through the contact section of the portfolio or update the relevant section within the app source to point to your preferred social links and email.
