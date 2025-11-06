# Real Estate CRM - Design Guidelines

## Design Approach
**Design System:** Material Design adaptation with Linear-inspired refinement for CRM efficiency
**Rationale:** This is a utility-focused, data-intensive business application requiring clarity, efficiency, and mobile-first responsiveness. Material Design provides robust patterns for forms, data display, and mobile optimization while maintaining professional polish.

## Typography
- **Primary Font:** Inter via Google Fonts CDN
- **Hierarchy:**
  - Page Headers: text-2xl md:text-3xl font-bold
  - Section Headers: text-lg md:text-xl font-semibold
  - Card Titles: text-base font-medium
  - Body Text: text-sm font-normal
  - Labels/Meta: text-xs font-medium uppercase tracking-wide
  - Numerical Data: font-mono for consistency in reports/stats

## Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, and 8 primarily
- Component padding: p-4 or p-6
- Section spacing: space-y-6 or space-y-8
- Card gaps: gap-4
- Form field spacing: space-y-4
- Page padding: px-4 md:px-6 lg:px-8

**Grid Strategy:**
- Dashboard cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Property listings: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Forms: Single column max-w-2xl for optimal readability
- Reports: Flexible grid based on data visualization needs

## Component Library

### Navigation
- **Bottom Tab Bar (Mobile Primary):** Fixed bottom navigation with 5 tabs (Dashboard, Properties, Enquiries, Reminders, Reports)
- **Top App Bar:** Minimal header with page title and action icons (search, notifications, profile)
- **Desktop Sidebar:** Left-aligned vertical navigation that collapses on smaller screens

### Dashboard Components
- **Stat Cards:** Elevated cards with icon, label, value, and optional trend indicator
- **Quick Action Buttons:** Large tap targets (min-h-16) with icons and labels
- **Notification Badge:** Red dot indicator for missed follow-ups
- **Layout:** 3-column grid on desktop, 2-column on tablet, single column on mobile

### Property Module
- **Property Cards:** 
  - Image at top with 16:9 aspect ratio
  - Property type badge overlay (Buy/Sell)
  - Title, location, price
  - Quick view/contact buttons
- **Filters:** Collapsible filter panel with location, budget range, property type
- **Search:** Prominent search bar with autocomplete suggestions

### Forms (Enquiries & Add Property)
- **Input Fields:** 
  - Floating labels (Material Design pattern)
  - Clear validation states (border colors for error/success)
  - Helper text below fields
  - Date pickers with calendar icon
- **Phone Input:** Country code selector + number input
- **Contact Picker:** Button to open contact selection modal
- **Form Actions:** Sticky bottom bar with Cancel and Submit buttons on mobile

### Calendar/Reminders
- **Monthly Calendar View:** Grid layout with event dots
- **Day View:** List of reminders with time slots
- **Reminder Cards:** Date/time, description, client name, action buttons (edit/delete/complete)
- **Add Reminder FAB:** Floating action button (bottom-right) for quick access

### Reports/Productivity
- **Stat Overview:** Large numerical displays in grid layout
- **Chart Components:** Use Chart.js for line/bar charts
- **Date Range Selector:** Dropdown or date range picker
- **Export Button:** Secondary action for PDF/CSV export

### UI Patterns
- **Modals:** Full-screen on mobile, centered card on desktop (max-w-2xl)
- **Drawers:** Bottom sheet on mobile, right-side panel on desktop
- **Toasts:** Top-right notifications for actions (success/error)
- **Loading States:** Skeleton screens for data loading, spinners for actions
- **Empty States:** Illustration + message + CTA for empty lists

## Images
**Property Images:**
- Hero images for property detail pages (16:9 aspect ratio, full-width)
- Thumbnail grids in property cards (4:3 aspect ratio)
- Image gallery carousel in property details
- Placeholder images for properties without photos (simple geometric pattern or icon)

**Empty States:**
- Simple illustrations for "No enquiries yet", "No reminders", etc.
- Use Heroicons or similar for consistency

**Profile/Authentication:**
- User avatar placeholders (initials in circle)
- Login screen can have subtle background pattern or solid treatment

## Accessibility
- Touch targets minimum 44px for mobile
- Clear focus states on all interactive elements (ring-2 ring-offset-2)
- ARIA labels for icon-only buttons
- Form error announcements for screen readers
- Keyboard navigation support throughout

## Interaction Patterns
- **Pull-to-refresh** on mobile list views
- **Swipe actions** on reminder/enquiry cards (complete/delete)
- **Long-press** for additional options on mobile
- **Double-tap prevention** on form submissions
- **Optimistic UI updates** for better perceived performance
- Keep animations minimal and purposeful (200-300ms transitions)

## Mobile-First Priorities
- Thumb-friendly navigation (bottom tabs)
- Single-column layouts on mobile
- Larger input fields for touch
- Simplified tables (card view instead of data tables on mobile)
- Persistent action buttons (sticky footers for forms)

This design creates a professional, efficient CRM experience optimized for real estate agents who need quick access to property data, client management, and follow-up tracking across devices.