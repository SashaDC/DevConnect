import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import Layout from './Layout.tsx'

// This is our App component it should either show a login/sign up page
// or the layout that contains everything to do with the site.

export default function App() {
  const { isAuthenticated, loginWithRedirect, isLoading, logout } = useAuth0()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect])

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center">
        Redirecting to login...
      </div>
    )
  }

  return (
    <>
      <Layout />
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Log Out
      </button>
    </>
  )
}
