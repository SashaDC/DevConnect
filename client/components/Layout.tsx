import { Outlet } from 'react-router'
<<<<<<< HEAD
import NavBar from './NavBar'
=======
// import NavBar from './NavBar'
// import WeatherWidget from "./WeatherWidget"
// This layout component holds all basic components
// The outlet is for the main content such as posts, feed, etc.
>>>>>>> dev

export default function Layout() {
  return (
    <div className="bg-brand-light flex min-h-screen flex-col text-slate-900">
      <header className="bg-brand-dark shadow">
        <NavBar />
      </header>

<<<<<<< HEAD
      <main className="flex-1 p-4">
=======
      <main className="p-4">
>>>>>>> dev
        <Outlet />
      </main>

      <footer className="p-4 text-center text-xs opacity-60">
        DevConnect © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
