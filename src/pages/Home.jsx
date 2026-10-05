import { Link } from 'react-router'

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Hello, I'm</p>
      <h1>Dill Rellis</h1>
      {/* TODO: replace with your own intro */}
      <p className="lead">
        I build things for the web and tinker with my home server. This is where I keep my projects
        and a little about me.
      </p>
      <div className="actions">
        <Link to="/projects" className="button button-primary">
          View projects
        </Link>
        <Link to="/about" className="button button-secondary">
          About me
        </Link>
      </div>
    </section>
  )
}
