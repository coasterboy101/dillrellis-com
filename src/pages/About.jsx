// TODO: placeholder content. Replace the bio, skills and contact links with your own.
const skills = ['JavaScript', 'React', 'Node.js', 'Docker', 'Linux']

const contacts = [
  { label: 'GitHub', href: 'https://github.com/coasterboy101' },
  { label: 'Email', href: 'mailto:you@example.com' },
]

export default function About() {
  return (
    <div className="background-wrapper background-wrapper-about">
      <section className="hero frosted-card frosted-card-about">
        <img className="hero-portrait hero-portrait-about" src="/assets/shared/images/portrait_square.png" alt="A portrait of Roderick Ellis"></img>
        <section className="prose">
          <h1>About Me</h1>
          <p className="lead">A short introduction: who you are and what you do.</p>

          <p>
            Write a paragraph or two here about your background, what you enjoy working on, and what
            you're up to at the moment.
          </p>

          <h2>Skills</h2>
          <ul className="tags">
            {skills.map((skill) => (
              <li key={skill} className="tag">
                {skill}
              </li>
            ))}
          </ul>

          <h2>Get in touch</h2>
          <ul className="contact-list">
            {contacts.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  )
}
