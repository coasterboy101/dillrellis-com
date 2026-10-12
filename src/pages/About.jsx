// TODO: placeholder content. Replace the bio, skills and contact links with your own.
const skills = ['.NET', 'C#', 'Visual Basic', 'C++', 'Java', 'HTML5', 'JavaScript', 'React', 'Node.js', 'Microsoft SQL Server', 'MySQL', 'MariaDB', 'Docker', 'Linux', 'Windows', 'Azure DevOps']

const contacts = [
  { label: 'LinkedIn', imgSource: '/assets/shared/linkedin.png', href: 'https://www.linkedin.com/in/rodericklinellis/' },
  { label: 'GitHub', imgSource: '/assets/shared/github.png', href: 'https://github.com/coasterboy101' },
]

export default function About() {
  return (
    <div className="background-wrapper background-wrapper-about">
      <section className="hero frosted-card frosted-card-about">
        <img className="hero-portrait hero-portrait-about" src="/assets/shared/images/portrait_square.webp" alt="A portrait of Roderick Ellis"></img>
        <section className="prose">
          <h1>About Me</h1>
          <p className="lead">I'm a Full Stack Developer with over a decade of experience, currently looking to relocate to the Seattle area.</p>

          <p>
            I started in October 2015 at Datablaze in Eagle, Idaho, where I spent over nine years moving from internal tools to increasingly larger projects.
            I worked with C#, Microsoft SQL Server, and Xamarin, and did much of the front-end work for our web applications.
          </p>
          <p>
            I then joined Total Scale Service in Boise, Idaho, building custom software that integrated customers' weighing devices (most often truck scales)
            with everything from simple cloud-accessible "remote displays" to full ticketing and ERP systems. After Michelli Weighing & Measurement bought the
            company in March 2026, I stayed on to deliver several major projects already in progress.
          </p>
          <p>
            In my spare time, I tinker with electronics, design things to 3D print, and build custom PCs. I also visit amusement parks any chance I get, and
            all of the background images on this site are my own photos. I'm looking to relocate to the Seattle area, with a local or remote job that lets
            me keep doing what I love.
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
            {contacts.map(({ label, imgSource, href }) => (
              <li key={label}>
                <img src={imgSource}></img>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  )
}
