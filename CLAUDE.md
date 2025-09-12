# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, and TypeScript. It's a modern full-stack application showcasing professional services and projects with smooth animations and 3D elements.

## Development Commands

- **Development server**: `npm run dev` - Starts Next.js development server on http://localhost:3000
- **Build**: `npm run build` - Creates production build
- **Start production**: `npm start` - Runs production build locally
- **Linting**: `npm run lint` - Runs ESLint for code quality checks

## Architecture & Structure

### App Router Structure
- Uses Next.js 15 App Router with TypeScript
- Route groups: `app/(site)/` contains all main pages
- API routes: `app/api/send/route.ts` handles contact form submissions

### Key Components Architecture
- **Layout System**: `app/(site)/layout.tsx` provides global layout with Navbar, Footer, and SmoothScroll wrapper
- **Home Sections**: Modular home page components in `components/HomeSections/`
  - Each section is a separate component (OverlaySection, Credibility, Services, HorizontalCards, AboutDemo, FinalCTA)
- **Header**: `components/header/` contains Navbar and BurgerMenu with animated mobile navigation
- **UI Components**: `components/ui/` contains reusable UI components (shadcn/ui-style)

### Animation & Interaction Libraries
- **Framer Motion**: Used extensively for page transitions and component animations
- **GSAP**: For advanced scroll-triggered animations
- **Lenis**: Smooth scroll implementation via `SmoothScroll.tsx` wrapper
- **React Three Fiber**: 3D elements and backgrounds via `StarsBackground.tsx`

### Styling & Design System
- **Tailwind CSS v4**: Primary styling framework
- **Custom CSS**: Global styles in `app/globals.css`
- **Design Tokens**: Animation variants and constants in `lib/constants/index.ts`
- **Responsive**: Mobile-first design with custom viewport handling via `CustomVH.ts`

### Forms & Communication
- **React Hook Form**: Contact form management with Zod validation
- **Resend API**: Email sending via `app/api/send/route.ts`
- **React Email**: Email template components

### State & Data Management
- No global state management - uses React state and props
- Constants and configuration centralized in `lib/constants/index.ts`
- Services data, navigation links, and project cards defined as exported constants

## Key Technical Considerations

- **Path Aliases**: Uses `@/*` for absolute imports from project root
- **Animation Performance**: Heavy use of motion libraries requires testing on lower-end devices
- **Email Integration**: Contact form sends emails via Resend service
- **Mobile Optimization**: Custom viewport height fixes and mobile-specific navigation
- **SEO**: Proper metadata configuration in layout files

## Code Patterns

- Functional components with TypeScript
- Custom hooks for viewport and scroll management
- Consistent animation patterns using shared variants from constants
- Modular component architecture with clear separation of concerns