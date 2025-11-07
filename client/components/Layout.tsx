import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <header className="p-4 text-center text-xl font-bold">
        <h1>DevConnect</h1>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="p-4 text-center text-xs opacity-60">
        © DevConnect Team
      </footer>
    </div>
  )
}
