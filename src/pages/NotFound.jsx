import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="hero not-found-container">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">There's nothing at this address.</p>
      <div className="actions">
        <Link to="/" className="button button-primary">
          Back to home
        </Link>
      </div>
    </section>
  )
}
