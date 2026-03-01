<!-- TrendBurst Project Instructions -->

# TrendBurst - Production Ready SaaS Platform

## Project Overview
TrendBurst is a fully-featured SaaS application built with modern tech stack including Next.js 15, TypeScript, TanStack Query, Tailwind CSS, shadcn/ui, and Framer Motion.

## ✅ Project Status: COMPLETE

The project has been successfully created with:
- ✓ Full folder structure with feature-based organization
- ✓ All authentication pages (login, signup, password reset, OTP)
- ✓ Public pages (home, features, pricing, FAQ, about, contact)
- ✓ Protected dashboard pages (overview, trending products, wishlist, activity logs, settings)
- ✓ Admin panel (dashboard, users management, content management)
- ✓ Type-safe API layer with Axios
- ✓ TanStack Query for state management
- ✓ Form validation with Zod + React Hook Form
- ✓ Framer Motion animations throughout
- ✓ Error handling and loading states
- ✓ Production build succeeds without errors

## 🚀 Running the Project

### Start Development Server
```bash
npm run dev
```
Server runs on http://localhost:3001

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📁 Key Folders

```
src/
├── app/                          # All pages and layouts
│   ├── (auth)/                   # Auth pages: login, signup, forgot-password, etc.
│   ├── (public)/                 # Public pages: home, features, pricing, etc.
│   ├── (dashboard)/              # Protected user dashboard pages
│   ├── (admin)/                  # Admin-only pages (role-based)
│   └── providers.tsx             # TanStack Query & Sonner setup
├── components/
│   ├── ui/                       # shadcn/ui components (button, input, card, etc.)
│   ├── shared/                   # Navbar, Footer, Sidebar components
│   ├── forms/                    # LoginForm, SignupForm, ForgotPasswordForm
│   └── sections/                 # ProductCard, SkeletonLoader, ErrorFallback
├── hooks/                        # Custom hooks (useAuth, useUser)
├── lib/
│   ├── api.ts                    # Axios instance with interceptors
│   ├── query-client.ts           # TanStack Query configuration
│   └── utils2.ts                 # Helper functions
├── services/                     # API service layer
│   ├── auth.service.ts           # Authentication API calls
│   └── product.service.ts        # Product API calls
└── types/                        # TypeScript types
    ├── auth.types.ts             # Auth-related types
    ├── product.types.ts          # Product-related types
    └── api.types.ts              # API response types
```

## 🔑 Key Files to Know

- **Root Layout**: `src/app/layout.tsx` - Sets up metadata and Providers
- **Providers**: `src/app/providers.tsx` - Wraps app with QueryClientProvider and Toaster
- **API Client**: `src/lib/api.ts` - Axios instance with JWT interceptors
- **Custom Hooks**: `src/hooks/useAuth.ts` - Authentication state management
- **Services**: `src/services/` - All API call functions
- **Types**: `src/types/` - Centralized type definitions

## 🔐 Authentication Flow

1. **Sign Up** (`/signup`):
   - User fills registration form
   - Validation with Zod
   - API call to create account
   - JWT tokens stored in localStorage
   - Redirect to dashboard

2. **Login** (`/login`):
   - Email and password input
   - Form validation
   - API call with credentials
   - JWT token stored
   - Redirect to dashboard

3. **Forgot Password** (`/forgot-password`):
   - Enter email
   - Receive reset link
   - Verify OTP (`/verify-otp`)
   - Reset password (`/reset-password`)

4. **Protected Routes**:
   - Dashboard pages check authentication
   - Redirect to login if not authenticated
   - Admin routes check role === 'admin'

## 📊 Component Architecture

### Shared Components
- **Navbar**: Top navigation with mobile menu
- **Footer**: Footer with links and social media
- **Sidebar**: Dashboard sidebar navigation (mobile and desktop)

### Form Components
- **LoginForm**: With email/password validation
- **SignupForm**: With password confirmation
- **ForgotPasswordForm**: Email-based password reset

### Section Components
- **ProductCard**: Displays product with image, rating, price
- **SkeletonLoader**: Loading skeleton UI
- **ErrorFallback**: Error state UI

## 🎯 API Integration

### Service Pattern
```typescript
// src/services/auth.service.ts
export const authService = {
  login: (data) => axios.post('/auth/login', data),
  signup: (data) => axios.post('/auth/signup', data),
  // ... more endpoints
};
```

### Using in Components
```typescript
const { login } = useAuth();
await login({ email, password });
```

### TanStack Query Setup
```typescript
// Queries: Read data
const { data, isLoading } = useQuery({ queryKey: ['key'], queryFn });

// Mutations: Modify data
const { mutate, mutateAsync } = useMutation({ mutationFn });
```

## 🛡️ Error Handling

- **Request Interceptor**: Adds JWT token automatically
- **Response Interceptor**: Handles errors and logs out on 401
- **Toast Notifications**: Sonner for user feedback
- **Error Boundaries**: Global error handling
- **Fallback UI**: ErrorFallback component for errors

## ✨ Features Implemented

✅ Real-time trend tracking UI  
✅ Secure authentication (JWT)  
✅ Role-based access control  
✅ Smooth page transitions (Framer Motion)  
✅ Responsive design (mobile-first)  
✅ Form validation (Zod)  
✅ Toast notifications (Sonner)  
✅ Loading states (Skeleton)  
✅ Error handling  
✅ Type-safe API calls  
✅ Admin panel with user management  
✅ Dashboard with statistics  
✅ Product display with filters  
✅ Wishlist functionality  
✅ Activity logs  
✅ User settings  

## 📝 Environment Variables

Required in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 🔧 Common Tasks

### Add a New Page
1. Create folder in `app/` (e.g., `app/new-page/`)
2. Create `page.tsx` file
3. Use appropriate layout (auth, public, dashboard, admin)

### Add a New Component
1. Create in `components/` with appropriate subfolder
2. Export from component
3. Use in pages or other components

### Add a New API Endpoint
1. Add function in appropriate service file
2. Create custom hook if needed
3. Use in component with TanStack Query

### Add Form Validation
1. Define Zod schema
2. Create form component with react-hook-form
3. Pass to form with zodResolver

## 🚀 Deployment Checklist

- [ ] Set production API URL in environment variables
- [ ] Run `npm run build` - ensure no errors
- [ ] Test all auth flows
- [ ] Test protected routes
- [ ] Test admin routes
- [ ] Verify form validation
- [ ] Check responsive design
- [ ] Test error scenarios
- [ ] Deploy to hosting platform

## 📚 Documentation

See `README.md` for:
- Feature overview
- Installation steps
- Running the project
- Tech stack details
- File structure
- Component documentation

## 🤝 Code Standards

- TypeScript strict mode enabled
- Consistent naming conventions
- Reusable components
- Proper error handling
- Type-safe API calls
- SEO metadata on pages
- Responsive design
- Accessibility considerations

## 🔗 Important Links

- **Next.js Docs**: https://nextjs.org/docs
- **TanStack Query**: https://tanstack.com/query
- **Tailwind CSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **Framer Motion**: https://www.framer.com/motion

## 💡 Tips

1. Use `useAuth()` for authentication state
2. Use TanStack Query for all data fetching
3. Wrap client components with 'use client'
4. Keep components small and focused
5. Use TypeScript for type safety
6. Create custom hooks for reusable logic
7. Use motion.div for animations
8. Always handle loading and error states
