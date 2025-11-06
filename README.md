# Real Estate CRM

A comprehensive CRM solution for real estate professionals to manage property listings, track leads, schedule reminders, and analyze productivity reports.

## Features

- **Phone/OTP Authentication** - Secure login with phone number verification
- **Dashboard** - Overview of enquiries, follow-ups, pending reminders, and key metrics
- **Property Management** - Browse and manage Buy/Sell property listings with advanced filters
- **Lead Management** - Track enquiries with manual entry and contact integration
- **Reminders** - Calendar-based reminder system with notifications
- **Productivity Reports** - Visual analytics with charts and performance metrics
- **Profile Settings** - Manage account details and notification preferences
- **Mobile-First Design** - Responsive interface optimized for mobile and desktop

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **Charts**: Recharts
- **Routing**: Wouter
- **Forms**: React Hook Form
- **State Management**: TanStack Query

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - DATABASE_URL
   - SESSION_SECRET

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the application

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Application pages
│   │   └── lib/         # Utilities and configurations
├── server/              # Backend Express server
│   ├── routes.ts        # API routes
│   └── storage.ts       # Data storage layer
└── shared/              # Shared types and schemas
```

## License

MIT
