import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <p className="lead">A few things I've built or am working on.</p>

      <ul className="card-grid">
        {projects.map(({ title, description, tags, link }) => (
          <li key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="tags">
              {tags.map((tag, i) => (
                <li key={i} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {link && (
              <a href={link} className="card-link" target="_blank" rel="noreferrer">
                View project <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
