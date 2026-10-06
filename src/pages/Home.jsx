import { Link } from 'react-router'

export default function Home() {

  return (
    <div className="background-wrapper background-wrapper-home">
      <section className="hero frosted-card frosted-card-home">
        <img className="hero-portrait" src="/assets/shared/images/portrait_square.webp" alt="A portrait of Roderick Ellis"></img>
        <p className="eyebrow">Hi! I'm</p>
        <h1>Roderick Ellis</h1>
        <p className="lead">
          I'm a full stack developer with over a decade of experience. I've mainly worked in the .NET ecosystem, 
          but I'm always willing to change things up and learn new skills. I love to tinker with all things tech, 
          from building custom PCs to making custom ESP32-based electronics projects.
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
    </div>
  )
}
