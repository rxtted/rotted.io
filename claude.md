# Claude Context: Rotted.io Project

> **CRITICAL**: At the start of EVERY session, you MUST read `/home/noah/Projects/rotted.io/docs/design.md` - the complete design philosophy document. This file contains the core aesthetic principles, color palette, typography guidelines, and anti-patterns. ALL design decisions must align with this philosophy.

> **IMPORTANT**: This file should be read at the start of new sessions and updated whenever significant changes are made to the project structure, tooling, or best practices.

## Design Philosophy

**Location**: `/home/noah/Projects/rotted.io/docs/design.md`

**Core Aesthetic**: Anti-corporate, cyber-decay hybrid
- Dark void foundations (#0C0D0C, #171616)
- Terminal/CLI aesthetics with monospace fonts
- ASCII art, pixel art, glitch effects
- Harsh shadows, sharp edges, NO rounded corners
- Rot-red accents (#DE3D17) used sparingly
- Weathered textures, visible grain, intentional imperfection
- NO smooth animations - only stepped, linear transitions
- Asymmetric layouts that break grids
- Terminal green (#00FF00) for cyber elements

**Forbidden Aesthetics**:
- ❌ Purple/cyan gradients
- ❌ Smooth ease-in-out transitions
- ❌ Rounded corners
- ❌ System fonts (Inter, Roboto, Arial)
- ❌ Venture-capital "friendly" design
- ❌ Pastel colors
- ❌ Centered, symmetrical layouts

## Project Overview

**Project Name**: Rotted.io
**Purpose**: Self-hosted digital sovereignty platform - landing page is the gateway
**Future Plans**: Multi-page site showcasing self-hosted services
**Design Style**: Cyber-decay hybrid - exposing digital infrastructure while showing its rot under corporate control

### Project Ideology & Philosophy

**IMPORTANT**: Understanding the ideology behind rotted.io is crucial for making design and implementation decisions that align with the project's core values.

#### The Problem: Digital Erosion
The ideology behind rotted.io stems from a growing concern about the pervasive influence of the internet and the corporate giants that dominate it. In today's digital world, our personal data, online interactions, and digital identities are increasingly commodified, controlled, and monetized. These corporations, through their platforms and services, often dictate the boundaries of our digital lives, slowly "rotting" the very essence of personal freedom and autonomy online.

#### The Solution: Digital Sovereignty
Rotted.io represents a conscious effort to push back against this erosion of control. The primary objective of this project is to **reclaim ownership of digital life** by self-hosting services in a home lab environment, creating a space where privacy, customization, and independence are prioritized.

#### The Vision
By building and branding personal services under rotted.io, the goal is not only to regain control over digital footprints but also to embody the philosophy of digital sovereignty in a tangible, functional way.

**Ultimately, this project is as much a statement about freedom and autonomy in the digital age as it is a practical framework for living them.**

#### Design Implications
This philosophy should influence all aspects of the project:
- **Privacy-first**: No unnecessary tracking, analytics should be self-hosted if used
- **Independence**: Minimize reliance on third-party services and CDNs where possible
- **Transparency**: Open about what data is collected and how it's used
- **Ownership**: Full control over content, design, and infrastructure
- **Experimental**: Push boundaries, challenge conventions, explore unconventional designs
- **Meaningful**: Every feature should serve the user, not corporate interests

## Tech Stack

### Core Technologies
- **Vite 6.0.5** - Build tool and dev server
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized production builds
- **React 18.3.1** - UI library
  - Using functional components with hooks
  - StrictMode enabled
- **TypeScript 5.6.2** - Type safety
  - Strict mode enabled
  - All source files use .tsx/.ts extensions
- **Tailwind CSS v4.1.18** - Utility-first CSS framework
  - ⚠️ **CRITICAL**: Uses `@tailwindcss/postcss` plugin (NOT `tailwindcss` directly)
  - Imported via `@import "tailwindcss"` in index.css
  - ⚠️ **NOTE**: Mostly unused in favor of custom CSS following design philosophy
- **Framer Motion** - Animation library (installed but NOT actively used)
  - ⚠️ Smooth animations are FORBIDDEN per design philosophy
  - All transitions disabled via CSS (`transition: none !important`)

### Dev Dependencies
- ESLint 9.17.0 with React hooks plugin
- TypeScript ESLint
- PostCSS with Autoprefixer
- @vitejs/plugin-react 4.3.4

## Project Structure

```
rotted.io/
├── src/
│   ├── App.tsx          # Main landing page component
│   ├── App.css          # Component-specific styles (cyber-decay aesthetics)
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles + CSS variables + Tailwind import
│   └── vite-env.d.ts    # Vite type declarations
├── public/              # Static assets
│   ├── bannerlogo.svg   # Full rotted.io logo (used in header)
│   ├── skullvector2.svg # Skull icon (used in content)
│   ├── textonly.svg     # Text-only logo variant
│   └── bannerlogo.png   # PNG version of banner logo
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
├── .gitignore          # Git ignore patterns
├── README.md           # User-facing documentation
└── claude.md           # This file - Claude context (UPDATE THIS!)
```

**Logo Source**: Custom logos are sourced from `~/web/rotted.io/` and copied to `public/`

## Key Configuration Files

### postcss.config.js
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ⚠️ MUST use @tailwindcss/postcss, NOT tailwindcss
    autoprefixer: {},
  },
}
```

### tsconfig.json
- Target: ES2020
- Module: ESNext with bundler resolution
- Strict mode enabled
- No unused locals/parameters enforcement

### vite.config.ts
- Uses @vitejs/plugin-react
- Default configuration (can be extended as needed)

## Development Workflow

### Available Scripts
```bash
npm run dev      # Start dev server (usually http://localhost:5173)
npm run build    # Build for production (outputs to ./dist)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Development Server
- Runs on port 5173 by default (may auto-increment if port is busy)
- Hot Module Replacement enabled
- Fast refresh for React components

## Current Features

### Landing Page Design (App.tsx)
1. **Animated Background**
   - Two floating gradient orbs (purple and cyan)
   - Continuous looping animations with different timings
   - Blur effects for depth

2. **Main Content**
   - Large "Rotted.io" heading with interactive hover effect
   - Fade-in animations on page load
   - Responsive typography (8xl on desktop, 9xl on larger screens)

3. **Loading Indicator**
   - Three animated dots (purple, cyan, pink)
   - Pulsing scale and opacity effects
   - Staggered animation delays

4. **Cursor Element**
   - Placeholder for future cursor-following effect
   - Currently static, can be enhanced with mouse tracking

### Color Palette
- Background: Black (#000000)
- Primary: Purple (#a855f7)
- Secondary: Cyan (#06b6d4)
- Accent: Pink (#ec4899)
- Text: White with gray-400 for secondary text

## Best Practices & Conventions

### Code Style
1. **Components**: Use functional components with TypeScript
2. **Naming**: PascalCase for components, camelCase for variables/functions
3. **Imports**: Group by type (libraries, then local files)
4. **Styling**: Prefer Tailwind utility classes over custom CSS
5. **Animations**: Use framer-motion for all animations

### File Organization
- Keep components in src/ (create src/components/ when needed)
- Use .tsx for files with JSX, .ts for pure TypeScript
- Co-locate styles with components (ComponentName.tsx + ComponentName.css)

### TypeScript
- Always define prop types with interfaces
- Use strict typing, avoid `any`
- Leverage type inference where appropriate

### Performance
- Lazy load components when adding routing
- Optimize images before adding to public/
- Keep bundle size minimal (check with `npm run build`)

### Third-Party Services & Dependencies
**CRITICAL**: Align with the digital sovereignty philosophy

**Avoid when possible**:
- Google Analytics, Facebook Pixel, or other corporate tracking
- CDNs for critical resources (bundle them locally instead)
- External fonts from Google Fonts (self-host fonts)
- Social media widgets that track users
- Third-party authentication providers (build your own or use self-hosted solutions)

**Acceptable with consideration**:
- Open-source libraries from npm (vetted and bundled)
- Self-hosted alternatives (Plausible for analytics, etc.)
- Privacy-respecting services with clear data policies

**When adding ANY third-party service**:
1. Question if it's truly necessary
2. Consider self-hosted alternatives first
3. Evaluate privacy implications
4. Document the decision and reasoning in claude.md

## Common Issues & Solutions

### Issue: PostCSS Plugin Error
**Error**: "It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin"

**Root Cause**: Having both `tailwindcss` and `@tailwindcss/postcss` packages installed, or trying to use the old `tailwindcss` package directly in PostCSS config.

**Complete Solution**:
1. Remove old package: `npm uninstall tailwindcss`
2. Install correct package: `npm install -D @tailwindcss/postcss`
3. Update postcss.config.js to use `'@tailwindcss/postcss': {}` instead of `tailwindcss: {}`
4. Clear Vite cache: `rm -rf node_modules/.vite dist`
5. Kill any running Vite processes: `pkill -f vite`
6. Restart dev server: `npm run dev`

### Issue: Port Already in Use
**Behavior**: Vite auto-increments port (5173 → 5174 → etc.)

**Solution**: Kill existing processes or specify a different port in vite.config.ts

## The Broader rotted.io Ecosystem

This website is the public-facing frontend of a larger self-hosted infrastructure. The rotted.io domain will serve as:

1. **The Gateway**: This landing page introduces visitors to the philosophy and services
2. **Service Hub**: Links and access points to self-hosted services (Nextcloud, Bitwarden, etc.)
3. **Portfolio**: Showcase of projects, experiments, and digital sovereignty in action
4. **Statement**: A living example of what's possible outside corporate platforms

### Self-Hosted Services (Planned)
The website will eventually provide access to:
- File storage and synchronization
- Password management
- Media streaming
- Personal cloud services
- Custom applications and tools
- Documentation and knowledge base

**Design Principle**: The frontend should reflect the independence and ownership of the backend infrastructure.

## Future Expansion Plans

### Short-term (Landing Page Enhancement)
- [ ] Add more interactive elements
- [ ] Enhance cursor follower effect with mouse tracking
- [ ] Add subtle scroll effects
- [ ] Create additional visual elements
- [ ] Add messaging about digital sovereignty
- [ ] Include subtle hints about self-hosting philosophy

### Medium-term (Multi-page Website)
- [ ] Add routing (react-router-dom)
- [ ] Create About page explaining the philosophy in depth
- [ ] Services page listing self-hosted offerings
- [ ] Projects/Portfolio page
- [ ] Contact page (self-hosted form backend)
- [ ] **Self-hosted analytics** (e.g., Plausible, Umami, Matomo)
- [ ] Blog/documentation section

### Long-term (Full Digital Sovereignty Platform)
- [ ] 3D graphics with react-three-fiber for immersive experience
- [ ] Complex scroll-based animations
- [ ] Self-hosted CMS integration (e.g., Strapi, Ghost)
- [ ] Integration with self-hosted backend services
- [ ] User authentication for private services
- [ ] Dashboard for managing self-hosted services
- [ ] Community features for others interested in digital sovereignty

## Dependencies to Add When Needed

### Routing
```bash
npm install react-router-dom
npm install -D @types/react-router-dom
```

### 3D Graphics
```bash
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

### Form Handling
```bash
npm install react-hook-form zod @hookform/resolvers
```

### State Management (if needed)
```bash
npm install zustand  # or jotai, or @tanstack/react-query
```

## Git Workflow

### Current Status
- Repository initialized
- Main branch: `main`
- Clean working directory (as of initial setup)

### Commit Guidelines
- Use conventional commits format
- Keep commits atomic and focused
- Write descriptive commit messages

## Important Notes for Future Sessions

1. **CRITICAL: Read `/home/noah/Projects/rotted.io/docs/design.md` FIRST** - Complete design philosophy
2. **Always read this file** to understand the project context
3. **Update this file** when making significant changes to:
   - Dependencies or tooling
   - Project structure
   - Best practices or conventions
   - Known issues or solutions
4. **Preserve the rotted.io aesthetic** - NO corporate design patterns, NO smooth animations, NO rounded corners
5. **Test the dev server** after making configuration changes
6. **Design choices are political** - every pixel is a statement against corporate web hegemony

## Session History

### Session 1 - Initial Setup (2025-12-16)
- Initialized Vite + React + TypeScript project
- Set up Tailwind CSS v4 with @tailwindcss/postcss
- Installed Framer Motion
- ~~Created animated placeholder landing page~~ (SCRAPPED - violated design philosophy)
- Fixed PostCSS configuration issue (removed old `tailwindcss` package, kept only `@tailwindcss/postcss`)
- Created project documentation (this file)
- **Added project ideology and philosophy** to documentation
  - Digital sovereignty and self-hosting vision
  - Privacy-first design principles
  - Guidelines for third-party service decisions
  - Context about broader rotted.io ecosystem
- **COMPLETE REDESIGN - Aligned with design philosophy**
  - Read `/home/noah/Projects/rotted.io/docs/design.md` (complete design philosophy)
  - Removed ALL corporate aesthetics (purple gradients, smooth animations, rounded corners)
  - Implemented CSS design system with correct color variables (void, weathered, rot, terminal)
  - Added terminal/cyber elements: monospace fonts (VT323, IBM Plex Mono, Press Start 2P)
  - Created terminal-style interface with ASCII skull art
  - Implemented glitch effects, harsh shadows, scanlines
  - Asymmetric layout, sharp edges, stepped animations
  - Pixel-perfect rendering, no anti-aliasing
  - Rot-red accents used sparingly (#DE3D17)
  - Terminal green for system status (#00FF00)
  - Updated claude.md with critical design philosophy reference
  - **Integrated custom logo vectors**
    - Copied logos from ~/web/rotted.io to public/ (bannerlogo.svg, skullvector2.svg, textonly.svg)
    - Using only bannerlogo.svg as primary logo
    - **Terminal-themed logo styling:**
      - Terminal green border with phosphor glow effect
      - CRT screen curvature overlay (vignette effect)
      - Scanlines animation over logo
      - Desaturated colors (70% saturation) for authentic terminal look
      - Terminal green drop-shadow for screen glow
      - Constant flicker animation (CRT authenticity)
      - Occasional glitch with chromatic aberration
      - High contrast, lowered brightness
      - Crisp-edge rendering (no anti-aliasing)

**Key Lesson**: Initial design completely violated rotted.io philosophy. Must ALWAYS read design.md first.

---

**Last Updated**: 2025-12-16
**Last Updated By**: Claude (Session 1 - Initial Setup + Complete Redesign to Match Philosophy)
