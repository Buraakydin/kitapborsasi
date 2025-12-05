# University Book Marketplace

## Overview

A Turkish-language university textbook marketplace platform enabling students to buy, sell, and trade used textbooks. The application provides a mobile-first, marketplace-style interface inspired by Facebook Marketplace and OLX, with a focus on fast browsing, clear filtering, and trust-building features. Students can list books for sale or trade, filter by university, search by title/author, and contact sellers directly.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript using Vite as the build tool
- Single-page application (SPA) with wouter for client-side routing
- Component-based architecture using functional components and React hooks

**UI Component System**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens and CSS variables
- Mobile-first responsive design approach with breakpoint-based layouts
- Design system based on Inter font family from Google Fonts

**State Management**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod for form state and validation
- Local component state using React useState/useEffect hooks

**Key Design Patterns**
- Presentational/container component separation (e.g., BookCard component vs. Home page)
- Custom hooks for shared logic (useToast, useIsMobile)
- Form validation using Zod schemas shared between frontend and backend
- Optimistic updates with mutation callbacks for improved UX

### Backend Architecture

**Runtime & Framework**
- Node.js with Express.js for HTTP server
- TypeScript for type safety across frontend and backend
- ESM (ECMAScript Modules) module system

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Route handlers defined in `server/routes.ts`
- Middleware stack includes JSON parsing, URL encoding, and request logging

**Data Access Layer**
- Repository pattern implemented through `IStorage` interface
- `DatabaseStorage` class provides concrete implementation
- Separation of concerns between route handlers and data access logic

**Development Workflow**
- Hot module replacement (HMR) via Vite in development mode
- Vite dev server runs in middleware mode integrated with Express
- Production build bundles server code with esbuild and client code with Vite

### Data Storage

**Database**
- PostgreSQL as the primary relational database
- Drizzle ORM for type-safe database queries and schema management
- Connection pooling via node-postgres (pg) library

**Schema Design**
- `users` table: User accounts with username/password authentication
- `bookListings` table: Book listings with title, author, university, type (sale/trade), price, condition, notes, and timestamps
- UUID primary keys generated via PostgreSQL's `gen_random_uuid()`
- Timestamps use PostgreSQL's `defaultNow()` for creation tracking

**Query Patterns**
- Filtering by university and search terms using Drizzle's query builder
- Case-insensitive search using `ilike` operator for title and author fields
- Ordering by creation date (descending) for chronological listing display

### External Dependencies

**UI Component Libraries**
- Radix UI: Accessible, unstyled component primitives for dialogs, dropdowns, forms, and navigation
- Lucide React: Icon library for consistent iconography
- embla-carousel-react: Carousel/slider functionality
- cmdk: Command palette interface component

**Styling & Design**
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority: Type-safe variant management for components
- clsx & tailwind-merge: Utility for conditional class name composition

**Form Management**
- react-hook-form: Performant form state management
- @hookform/resolvers: Integration between react-hook-form and validation libraries
- zod: Schema validation library
- drizzle-zod: Generate Zod schemas from Drizzle ORM table definitions

**Data Fetching**
- @tanstack/react-query: Server state management, caching, and synchronization

**Date Handling**
- date-fns: Modern JavaScript date utility library

**Development Tools**
- Vite: Fast frontend build tool and dev server
- tsx: TypeScript execution for Node.js scripts
- Replit-specific plugins for runtime error handling and development banners (cartographer, dev-banner, runtime-error-modal)

**Backend Utilities**
- express: Web application framework
- pg (node-postgres): PostgreSQL client
- drizzle-orm: TypeScript ORM
- drizzle-kit: Database migration and schema management toolkit

**Type Safety**
- TypeScript with strict mode enabled across entire codebase
- Shared types between frontend and backend via `@shared` path alias
- Zod schemas ensure runtime type validation matches compile-time types