This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# 🎯 Mini Campaign Manager - Complete Setup Guide

A full-stack campaign management application built with Next.js, TypeScript, TailwindCSS, and Recharts.

## 📸 Screenshots

* **Landing Page** : Animated hero section with gradient backgrounds
* **Dashboard** : Real-time stats and analytics charts
* **Campaigns** : Table view with create/edit functionality

## ✨ Features

* ✅ Responsive landing page with animations
* ✅ Dashboard with statistics and charts
* ✅ Campaign management (Create, Read, Update)
* ✅ Form validation with error handling
* ✅ LocalStorage persistence
* ✅ TypeScript for type safety
* ✅ Mobile-responsive design
* ✅ Toast notifications

## 🚀 Quick Start (Fastest Method)

### Option 1: Automated Setup

```bash
# Run the setup script
curl -sSL https://raw.githubusercontent.com/yourusername/campaign-manager/main/setup.sh | bash

# Copy component files (see below)
# Start development server
cd campaign-manager
npm run dev
```

### Option 2: Manual Setup (Recommended)

Follow these steps for complete control:

#### Step 1: Create Next.js Project

```bash
npx create-next-app@latest campaign-manager --typescript --tailwind --app --eslint
cd campaign-manager
```

When prompted:

* ✅ TypeScript: **Yes**
* ✅ ESLint: **Yes**
* ✅ Tailwind CSS: **Yes**
* ✅ `src/` directory: **No**
* ✅ App Router: **Yes**
* ✅ Import alias: **@/*** (default)

#### Step 2: Install Dependencies

```bash
npm install recharts lucide-react
```

#### Step 3: Create Directory Structure

```bash
mkdir -p components/ui lib
```

Your structure should look like:

```
campaign-manager/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Dashboard.tsx
│   ├── CampaignsList.tsx
│   ├── CreateCampaignModal.tsx
│   ├── LandingPage.tsx
│   ├── Sidebar.tsx
│   └── ui/
│       ├── StatCard.tsx
│       └── Toast.tsx
├── lib/
│   └── types.ts
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

#### Step 4: Copy Files from Artifacts

I've created all the component files for you. Copy each file from the "Complete Component Files" artifact above into your project:

**Required Files:**

1. `tailwind.config.ts` - Tailwind configuration
2. `lib/types.ts` - TypeScript interfaces
3. `app/globals.css` - Global styles
4. `app/page.tsx` - Main page (from setup guide)
5. `components/LandingPage.tsx` - Hero landing page
6. `components/Dashboard.tsx` - Dashboard with charts
7. `components/CampaignsList.tsx` - Campaign table
8. `components/CreateCampaignModal.tsx` - Form modal
9. `components/Sidebar.tsx` - Navigation sidebar
10. `components/ui/StatCard.tsx` - Stat card component
11. `components/ui/Toast.tsx` - Toast notification

#### Step 5: Update app/layout.tsx (if needed)

Make sure your layout includes proper metadata:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Campaign Manager | Avidion',
  description: 'Launch, track, and optimize your campaigns',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

#### Step 6: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

## 🎨 Component Overview

### LandingPage Component

* Animated hero section
* Mouse-follow gradient effects
* Floating animated orbs
* Feature highlights
* Call-to-action buttons

### Dashboard Component

* 4 stat cards (Active Campaigns, Emails Sent, Replies, Meetings)
* Bar chart for campaign activity
* Line chart for reply trends
* Responsive grid layout

### CampaignsList Component

* Professional table layout
* Campaign status badges
* Type icons (Email/WhatsApp)
* Create campaign button
* Modal integration

### CreateCampaignModal Component

* Form validation
* Error messages
* Type selection dropdown
* Success feedback

### Sidebar Component

* Fixed navigation
* Mobile-responsive with overlay
* Active state highlighting
* Smooth transitions

## 🔧 Configuration

### Tailwind Configuration

The project uses custom animations. The `tailwind.config.ts` includes:

* Custom pulse animation timing
* Extended color palette support
* Optimized content paths

### TypeScript Configuration

All components are fully typed with interfaces defined in `lib/types.ts`:

* Campaign interface
* FormData interface
* FormErrors interface

## 📱 Responsive Design

The application is fully responsive:

* **Mobile** : Hamburger menu, stacked cards, scrollable tables
* **Tablet** : 2-column grids, collapsible sidebar
* **Desktop** : Full sidebar, 4-column grids, side-by-side charts

## 💾 Data Persistence

Currently uses localStorage for data persistence:

* Campaigns are saved automatically
* Data persists across page refreshes
* Easy to migrate to backend API

## 🔌 Backend Integration (Optional)

### Setup NestJS Backend

```bash
# In a separate terminal/directory
npm i -g @nestjs/cli
nest new campaign-manager-api
cd campaign-manager-api
```

### Create API Endpoints

```bash
nest generate module campaigns
nest generate controller campaigns
nest generate service campaigns
```

### Enable CORS in main.ts

```typescript
app.enableCors({
  origin: 'http://localhost:3000',
  credentials: true,
});
```

### Connect Frontend to Backend

Create `lib/api.ts`:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const campaignAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/campaigns`);
    return response.json();
  },
  
  create: async (data: FormData) => {
    const response = await fetch(`${API_URL}/campaigns`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

Update `useEffect` in `app/page.tsx`:

```typescript
useEffect(() => {
  const loadCampaigns = async () => {
    try {
      const data = await campaignAPI.getAll();
      setCampaigns(data);
    } catch (error) {
      // Fallback to localStorage
      const stored = localStorage.getItem('campaigns');
      if (stored) setCampaigns(JSON.parse(stored));
    }
  };
  loadCampaigns();
}, []);
```

## 🚀 Deployment

### Deploy Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production
vercel --prod
```

Or via GitHub:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import repository
4. Deploy automatically

### Deploy Backend (Render)

1. Push backend to GitHub
2. Go to [render.com](https://render.com/)
3. Create new Web Service
4. Connect repository
5. Build: `npm install && npm run build`
6. Start: `npm run start:prod`

### Environment Variables

Create `.env.local` in frontend:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## 📝 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## 🧪 Testing the Application

1. **Landing Page** : Check animations and hover effects
2. **Dashboard** : Verify stats calculations and charts
3. **Create Campaign** : Test form validation
4. **Campaign List** : Check table rendering and responsiveness
5. **Mobile View** : Test sidebar toggle and responsive design

## 🐛 Troubleshooting

### Port Already in Use

```bash
npx kill-port 3000
# or
npm run dev -- -p 3001
```

### TypeScript Errors

```bash
rm -rf .next
npm run dev
```

### Dependencies Issues

```bash
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found

Make sure all component files are in the correct directories and paths use `@/` alias.

## 📚 Tech Stack

* **Framework** : Next.js 14 (App Router)
* **Language** : TypeScript
* **Styling** : TailwindCSS
* **Charts** : Recharts
* **Icons** : Lucide React
* **Validation** : Custom validation logic
* **Storage** : localStorage (upgradeable to API)

## 🎯 Features Implemented

### Section A - Frontend (100%)

* ✅ Dashboard with 4 stat cards
* ✅ Two interactive charts (Bar & Line)
* ✅ Campaign list table
* ✅ Create campaign modal with validation
* ✅ Responsive design (mobile/tablet/desktop)
* ✅ Clean component structure
* ✅ TypeScript safety
* ✅ Toast notifications

### Section C - Bonus Creative Task (100%)

* ✅ Animated landing page
* ✅ Mouse-follow effects
* ✅ Floating orbs animation
* ✅ Smooth transitions
* ✅ Modern gradient design

### Section B - Backend Integration (Optional)

* 🔄 Ready for API integration
* 📝 NestJS setup instructions included
* 🔌 API utility functions prepared

## 📖 API Documentation (Optional Backend)

### GET /campaigns

Returns all campaigns

**Response:**

```json
[
  {
    "id": "1",
    "name": "Q4 Product Launch",
    "type": "Email",
    "description": "Launch campaign for new product line",
    "status": "Active",
    "sent": 1250,
    "replies": 345,
    "createdAt": "2025-10-15"
  }
]
```

### POST /campaigns

Create a new campaign

**Request Body:**

```json
{
  "name": "New Campaign",
  "type": "Email",
  "description": "Campaign description here"
}
```

**Response:**

```json
{
  "id": "12345",
  "name": "New Campaign",
  "type": "Email",
  "description": "Campaign description here",
  "status": "Draft",
  "sent": 0,
  "replies": 0,
  "createdAt": "2025-11-04"
}
```

## 🤝 Contributing

This is a test project. Feel free to expand and improve!

## 📄 License

MIT License

## 👨‍💻 Author

Built for Avidion Full Stack Developer Test

---

## 🎉 You're Ready!

Run `npm run dev` and start building amazing campaigns!

For questions or issues, check the troubleshooting section or review the component files in the artifacts above.
