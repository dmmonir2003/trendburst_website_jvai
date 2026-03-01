# TrendBurst - Production Ready SaaS Platform

A modern, scalable SaaS application built with Next.js 15, TypeScript, TanStack Query, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🚀 Features

- **Real-time Trend Tracking**: Monitor trending products in real-time
- **Secure Authentication**: JWT-based auth with secure token management
- **Protected Routes**: Role-based access control (User/Admin)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion animations throughout
- **Data Fetching**: TanStack Query for efficient state management
- **Form Validation**: React Hook Form + Zod for type-safe forms
- **Toast Notifications**: Sonner for beautiful notifications
- **Admin Panel**: Complete admin dashboard for system management

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (public)/         # Public pages (home, features, pricing, etc.)
│   ├── (dashboard)/      # User dashboard (protected)
│   ├── (admin)/          # Admin panel (protected)
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── shared/          # Navbar, Footer, Sidebar
│   ├── forms/           # Form components
│   └── sections/        # Page sections
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and API client
├── services/            # API service functions
└── types/               # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **State Management**: TanStack Query
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Notifications**: Sonner

## 📦 Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up environment variables**:

   ```bash
   cp .env.example .env.local
   ```

3. **Update environment variables** with your API endpoint:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Running the Development Server

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
