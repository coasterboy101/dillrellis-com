import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Me' }
]

const pageTitles = {
  '/': 'Home',
  '/projects': 'Projects',
  '/about': 'About Me'
}

export default function Layout() {
  const { pathname } = useLocation()

  const currentPageName = pageTitles[pathname] || 'Home';

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <Link to="/" className="brand">
              DillRellis.com
            </Link>
            <span className="brand page-title-pipe">
              |
            </span>
            <span className="brand">
              {currentPageName}
            </span>
          </div>
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
          <p>&copy; {new Date().getFullYear()} Roderick Ellis</p>
        </div>
      </footer>
    </>
  )
}
