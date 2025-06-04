react-clerk-101
--

Demo using Clerk + React / Vite

[![Ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/mitchallen)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/mitchallen)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/virtualmitch)

* * *

# React + Clerk Authentication App

A React + Vite + TypeScript application with Clerk authentication integration.

## 🚀 Quick Start (After Cloning)

```bash
# 1. Install dependencies and setup
make setup

# 2. Configure Clerk (see instructions below)
# Edit .env.local with your Clerk publishable key

# 3. Start development server
make dev
```

## 📋 Available Make Commands

```bash
make help      # Show all available commands
make install   # Install npm dependencies
make setup     # Complete first-time setup
make dev       # Start development server
make build     # Build for production
make preview   # Preview production build
make lint      # Run ESLint
make clean     # Clean and reinstall dependencies
```

## 🔑 Clerk Configuration

1. **Get your Clerk publishable key:**
   - Sign up at [clerk.com](https://clerk.com)
   - Create a new application
   - Go to **API Keys** and copy your **Publishable Key**

2. **Configure environment variables:**
   - Open `.env.local`
   - Replace `YOUR_PUBLISHABLE_KEY` with your actual key:
   ```bash
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-actual-key-here
   ```

3. **Restart the dev server:**
   ```bash
   make dev
   ```

## 🧩 What's Included

- ✅ React 19 + Vite + TypeScript
- ✅ Clerk authentication (`@clerk/clerk-react@latest`)
- ✅ Pre-configured authentication components
- ✅ Environment variable setup
- ✅ Makefile for easy development

## 🔐 Authentication Features

- **Sign In/Sign Up**: Modal-based authentication
- **User Management**: Built-in user profile management
- **Protected Content**: Conditional rendering based on auth state
- **Sign Out**: Automatic redirect after sign out

## 📖 Documentation

- See `CLERK_SETUP.md` for detailed setup instructions
- [Clerk React Quickstart](https://clerk.com/docs/quickstarts/react)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📁 Project Structure

```
├── src/
│   ├── main.tsx          # App entry point with ClerkProvider
│   ├── App.tsx           # Main component with auth UI
│   └── ...
├── .env.local           # Environment variables
├── Makefile            # Development commands
├── CLERK_SETUP.md      # Detailed setup guide
└── README.md           # This file
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
