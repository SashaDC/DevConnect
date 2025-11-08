import { Outlet } from 'react-router'
// This layout component holds all basic components
// The outlet is for the main content such as posts, feed, etc.

// Note:
// Possibly make header/footer a seperate component to keep it tidy in this one?
export default function Layout() {
  return (
    <>
      <header>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* header component here */}
      </header>
      <nav>{/* nav component here */}</nav>
      <main>
        {/* this will change based on nav */}
        <Outlet />
      </main>
      <footer>{/* footer component here */}</footer>
    </>
  )
}
