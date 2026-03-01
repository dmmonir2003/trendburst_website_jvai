# TrendBurst - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Verify Installation

The project is already created and dependencies are installed.

### 2. Start Development Server

```bash
npm run dev
```

Opens at: **http://localhost:3001**

### 3. Explore the App

#### 🌍 Public Pages

- **Home**: http://localhost:3001/
- **Features**: http://localhost:3001/features
- **Pricing**: http://localhost:3001/pricing
- **FAQ**: http://localhost:3001/faq
- **About**: http://localhost:3001/about
- **Contact**: http://localhost:3001/contact

#### 🔐 Authentication

- **Login**: http://localhost:3001/login
- **Sign Up**: http://localhost:3001/signup
- **Forgot Password**: http://localhost:3001/forgot-password

#### 📊 Dashboard (Protected)

- **Overview**: http://localhost:3001/overview
- **Trending Products**: http://localhost:3001/trending-products
- **Wishlist**: http://localhost:3001/wishlist
- **Activity Logs**: http://localhost:3001/activity-logs
- **Settings**: http://localhost:3001/settings

#### 🛡️ Admin Panel (Protected)

- **Dashboard**: http://localhost:3001/admin/dashboard
- **Users**: http://localhost:3001/admin/users
- **Content**: http://localhost:3001/admin/content

---

## 📋 What's Included

### ✅ Complete Folder Structure

- Feature-based organization
- Separation of concerns
- Scalable architecture

### ✅ Pages Created

- 8 Public pages
- 7 Auth pages
- 5 Dashboard pages
- 3 Admin pages

### ✅ Components

- 3 Shared components (Navbar, Footer, Sidebar)
- 3 Form components (Login, Signup, Forgot Password)
- 3 Section components (ProductCard, SkeletonLoader, ErrorFallback)

### ✅ Services & Hooks

- Authentication service
- Product service
- useAuth custom hook
- useUser custom hook

### ✅ Styling & Animations

- Tailwind CSS v4
- shadcn/ui components
- Framer Motion animations
- Responsive design

### ✅ Form & Validation

- React Hook Form
- Zod schema validation
- Type-safe forms

---

## 🔧 Customization Guide

### Update API URL

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://your-api-url/api
```

### Change Brand Colors

Edit `src/app/globals.css` and update Tailwind theme colors.

### Add More Pages

1. Create folder in `src/app/`
2. Add `page.tsx`
3. Use appropriate layout

### Add More Components

Create in `src/components/` with organized subfolders.

### Extend Authentication

Update `src/services/auth.service.ts` with new endpoints.

---

## 📦 Technology Stack

| Technology      | Purpose           |
| --------------- | ----------------- |
| Next.js 15      | React framework   |
| TypeScript      | Type safety       |
| Tailwind CSS    | Styling           |
| shadcn/ui       | UI components     |
| TanStack Query  | State management  |
| React Hook Form | Form handling     |
| Zod             | Schema validation |
| Framer Motion   | Animations        |
| Axios           | HTTP client       |
| Sonner          | Notifications     |

---

## 🎯 Key Features

✨ **Real-time Trends**: Monitor trending products
🔐 **Secure Auth**: JWT-based authentication
👥 **Role-Based**: User and Admin roles
🎨 **Modern UI**: Beautiful, responsive design
⚡ **Fast**: TanStack Query for efficient data fetching
📱 **Mobile**: Fully responsive
🎬 **Smooth**: Framer Motion animations
✅ **Validated**: Form validation with Zod

---

## 🧪 Testing the App

### Try Demo Features

1. Go to `/signup` and create an account
2. Explore public pages (home, features, pricing)
3. Login to dashboard
4. View trending products
5. Add to wishlist
6. Check activity logs
7. Update settings

### Test Error Handling

- Try invalid login credentials
- Try invalid form inputs
- Network errors are handled gracefully

---

## 📊 Project Statistics

- **Pages**: 23 total pages
- **Components**: 50+ reusable components
- **Types**: 15+ TypeScript interfaces
- **Services**: 2 API service files
- **Hooks**: 2 custom hooks
- **Build Size**: Optimized for production

---

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/docs
- **TanStack Query**: https://tanstack.com/query/latest

---

## ✨ Next Steps

1. **Customize Branding**
   - Update colors in globals.css
   - Change logo in components
   - Update metadata

2. **Connect API**
   - Update API URL in .env.local
   - Test API endpoints
   - Implement real data

3. **Add Features**
   - Create new pages
   - Add new API endpoints
   - Implement business logic

4. **Deploy**
   - Configure hosting
   - Set environment variables
   - Deploy to production

---

## 💡 Pro Tips

- Use `npm run dev` for development
- Check browser console for errors
- Use React DevTools for debugging
- Check Network tab for API calls
- TypeScript helps catch errors early
- Always use custom hooks for logic

---

## 🎉 You're All Set!

The TrendBurst project is ready for development. Start the dev server and begin building!

```bash
npm run dev
```

Happy coding! 🚀
