# University Book Marketplace - Design Guidelines

## Design Approach
**Hybrid Reference**: Modern marketplace functionality (Facebook Marketplace, OLX) + Material Design system for clean, student-friendly interface. Focus on scannable listings, quick filtering, and effortless posting.

## Core Design Principles
1. **Efficiency First**: Students need to find books fast - prioritize browsing speed and clear information hierarchy
2. **Trust & Transparency**: Clear pricing, condition labels, and seller info build marketplace confidence
3. **Mobile-Optimized**: Students browse on phones between classes - mobile-first approach mandatory

---

## Typography

**Font Family**: Inter (via Google Fonts CDN)
- **Headings**: Inter, 700 weight
  - H1: 2rem (mobile) / 2.5rem (desktop)
  - H2: 1.5rem (mobile) / 2rem (desktop)
  - Card Titles: 1.125rem, 600 weight
- **Body**: Inter, 400 weight
  - Base: 0.875rem (14px)
  - Large: 1rem (16px)
- **Labels/Metadata**: Inter, 500 weight, 0.75rem-0.875rem
- **Price Display**: Inter, 700 weight, 1.75rem

---

## Layout System

**Spacing Units**: Tailwind units of **2, 4, 6, 8, 12, 16** (p-2, m-4, gap-6, etc.)
- Card padding: p-5 (20px)
- Section spacing: py-8 (mobile) / py-12 (desktop)
- Grid gaps: gap-4 (mobile) / gap-6 (desktop)

**Container Constraints**:
- Max width: max-w-7xl
- Horizontal padding: px-4 (mobile) / px-6 (tablet) / px-8 (desktop)

**Grid System**:
- Book listings: grid-cols-1 (mobile) / grid-cols-2 (md) / grid-cols-3 (lg)
- Form layout: Single column max-w-2xl

---

## Component Library

### Navigation Header
- **Sticky top bar** with shadow (shadow-md)
- Left: Logo icon (BookOpen) + "Üniversite Kitap Borsası" title
- Right: "İlan Ver" primary button + User profile icon
- Height: py-4 (64px total)
- All navigation items use rounded-full buttons

### Book Listing Cards
**Card Structure**:
- White background with rounded-xl and shadow-lg (hover: shadow-xl transition)
- Border: border border-gray-100
- **Top Section**: Title (line-clamp-2) + Type badge (rounded-full pill)
- **Middle Section**: Author name, University with MapPin icon, Condition label
- **Notes Section**: Italic quote-style with line-clamp-3
- **Footer**: Large price display (left) + "İletişime Geç" button (right)

**Type Badges**: Small rounded-full pills
- "Satılık": green-100 background, green-800 text
- "Takaslık": yellow-100 background, yellow-800 text

### Filter Bar
- University dropdown with MapPin icon
- Sticky below header or inline above listings
- Full-width on mobile, inline on desktop

### Add Listing Form
**Container**: max-w-2xl centered card with shadow-2xl
- Form fields: All inputs use consistent border-gray-300, rounded-lg, focus:ring-indigo-500
- Field spacing: space-y-4
- Labels: text-sm, font-medium, text-gray-700, mb-1
- Two-column layout for Condition + Type fields (flex space-x-4)
- Textarea for notes: min-h-24, resize-vertical
- Submit button: Full-width on mobile, inline on desktop

### Buttons
**Primary (CTA)**: 
- bg-indigo-600 text-white rounded-full px-6 py-2.5
- hover:bg-indigo-700 with shadow-md

**Secondary**:
- border-indigo-600 text-indigo-600 rounded-full
- hover:bg-indigo-50

**Card Action**:
- bg-indigo-500 rounded-lg px-4 py-2 (smaller, contained)

### Loading States
- Center-aligned Loader2 icon with spin animation
- "Yükleniyor..." text below

### Empty States
- Large BookOpen icon (gray-300)
- Helpful message: "Henüz ilan yok. İlk ilanı sen ver!"

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single column listings
- Stacked form fields
- Hamburger menu for filters (if expanded)
- Full-width buttons

**Tablet (768px - 1024px)**:
- 2-column listing grid
- Inline filters

**Desktop (> 1024px)**:
- 3-column listing grid
- Persistent filter sidebar option
- Wider card footers with spacious layout

---

## Images

**No hero image** - This is a functional marketplace, not a marketing page. Launch directly into filtered listings.

**Optional Book Cover Placeholders**: 
- If implementing book covers, use 4:5 aspect ratio placeholders (160x200px)
- Position: Top of card, above title
- Fallback: BookOpen icon on gray-100 background

---

## Interaction Patterns

**Card Hover**: Subtle shadow lift (shadow-lg → shadow-xl)
**Button Interactions**: Built-in hover states (bg color darkening)
**Form Validation**: Red border + error text below invalid fields
**Success Messages**: Green background banner with checkmark
**Real-time Updates**: Smooth fade-in animation for new listings (animate-fadeIn)

---

## Accessibility
- All interactive elements minimum 44x44px touch targets
- Form labels properly associated with inputs
- Focus rings visible (ring-2 ring-indigo-500)
- Alt text for all icons conveying meaning
- Semantic HTML (header, main, article for cards, form)