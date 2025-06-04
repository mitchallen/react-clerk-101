# Clerk Setup Guide

This React + Vite project has been configured with Clerk authentication following the official guidelines.

## 🔗 Official Documentation
- [Clerk React Quickstart](https://clerk.com/docs/quickstarts/react)

## ⚙️ Setup Instructions

### 1. Get Your Clerk Publishable Key

1. Sign up for a free account at [clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard
3. Go to **API Keys** in your Clerk dashboard
4. Copy your **Publishable Key**

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root directory
2. Replace `YOUR_PUBLISHABLE_KEY` with your actual Clerk publishable key:

```bash
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-actual-key-here
```

> **Important:** The `VITE_` prefix is required for Vite to expose this environment variable to the client-side code.

### 3. Run the Application

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## 🧩 What's Included

This setup includes:

- ✅ `@clerk/clerk-react@latest` installed
- ✅ `ClerkProvider` configured in `main.tsx`
- ✅ Authentication components in `App.tsx`:
  - `SignedIn` / `SignedOut` conditional rendering
  - `SignInButton` / `SignUpButton` for authentication
  - `UserButton` for user profile management
- ✅ Proper environment variable configuration

## 🔐 Features

- **Sign In/Sign Up**: Modal-based authentication flow
- **User Management**: Built-in user button with profile options
- **Protected Content**: Content only visible to authenticated users
- **Sign Out**: Automatic redirect to home page after sign out

## 🚀 Next Steps

1. Customize the authentication UI to match your brand
2. Add protected routes using Clerk's routing components
3. Implement role-based access control if needed
4. Configure additional sign-in methods (OAuth, passwordless, etc.)

For more advanced features, refer to the [Clerk documentation](https://clerk.com/docs). 