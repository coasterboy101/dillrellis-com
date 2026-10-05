import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Me' },
]

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            Dill Rellis
          </Link>
          <nav aria-label="Main">
            <ul className="nav-list">
              {links.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} className="nav-link">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dill Rellis</p>
        </div>
      </footer>
    </>
  )
}
