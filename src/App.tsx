import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Clerk</h1>
      
      <header className="card">
        <SignedOut>
          <div>
            <h2>Welcome! Please sign in to continue.</h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <SignInButton mode="modal">
                <button>Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button>Sign Up</button>
              </SignUpButton>
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <div>
            <h2>You are signed in!</h2>
            <p>Welcome to your protected application.</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </SignedIn>
      </header>
      
      <p className="read-the-docs">
        Authentication powered by Clerk
      </p>
    </>
  )
}

export default App
