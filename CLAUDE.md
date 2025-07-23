# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality and style
- `npm run typecheck` - Run TypeScript type checking (use `npx tsc --noEmit`)

## Project Architecture

This is a **Korean franchise consulting landing page** built with Next.js 15 and React 19, using the App Router architecture. The application provides consultation services for franchise business registration and legal consulting.

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling with dark mode support
- **Supabase** for backend data storage (contact form submissions)
- **next-themes** for dark/light theme switching

### Application Structure
- **Landing Page**: Single-page application with multiple sections (hero, services, expert intro, contact forms)
- **Admin Dashboard**: `/admin` route for viewing contact submissions and daily statistics
- **Contact System**: Two types of contact forms (full form and quick consultation)
- **API Routes**: Custom API endpoints for handling Supabase data operations

### Database Integration
- Uses Supabase REST API directly (not the JavaScript SDK)
- Contact submissions stored in `kmong_1_contact_submissions` table
- Handles RLS (Row Level Security) policies for data access
- Multiple SQL files for database setup and RLS configuration

### Component Architecture
- **Layout Components**: Header, Footer, ThemeProvider
- **Interactive Components**: Contact forms, theme toggle, one-click consultation
- **Content Sections**: BenefitsSection, ExpertSection, FAQSection, ServiceSection
- **Utility Components**: FadeInSection for scroll animations

### Data Flow
- Contact forms submit via Server Actions (`lib/actions.ts`) or API routes
- Supabase functions handle both client-side and server-side operations (`lib/supabase.ts`)
- Admin dashboard fetches data through dedicated API routes with proper authentication

### Theme System
- Full dark/light mode support using next-themes
- Theme persistence across page reloads
- Custom CSS variables for consistent theming
- Theme toggle component available globally

### Important Files
- `src/app/page.tsx` - Main landing page with all sections
- `src/app/layout.tsx` - Root layout with metadata and theme provider
- `lib/supabase.ts` - Database operations and API calls
- `lib/actions.ts` - Server Actions for form submissions
- `src/app/admin/page.tsx` - Admin dashboard for viewing submissions

### Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (for server operations)

### Content Language
All content is in **Korean** - maintain Korean language for user-facing text, comments, and error messages when making modifications.