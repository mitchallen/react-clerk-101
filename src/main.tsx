import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Temporarily allow the app to load even without a valid key for demo purposes
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Clerk Publishable Key");
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {PUBLISHABLE_KEY && PUBLISHABLE_KEY !== 'YOUR_PUBLISHABLE_KEY' ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    ) : (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '600px',
        margin: '2rem auto',
        border: '2px solid #f59e0b',
        borderRadius: '8px',
        backgroundColor: '#fef3c7'
      }}>
        <h1>🔑 Clerk Setup Required</h1>
        <p>To use this app, you need to configure your Clerk publishable key:</p>
        <ol style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Sign up for free at <a href="https://clerk.com" target="_blank">clerk.com</a></li>
          <li>Create a new application</li>
          <li>Go to <strong>API Keys</strong> in your dashboard</li>
          <li>Copy your <strong>Publishable Key</strong></li>
          <li>Replace <code>YOUR_PUBLISHABLE_KEY</code> in <code>.env.local</code> with your actual key</li>
          <li>Restart the dev server</li>
        </ol>
        <p>📖 See <code>CLERK_SETUP.md</code> for detailed instructions</p>
      </div>
    )}
  </StrictMode>,
)
