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
            I've worked as a Full Stack developer for over a decade, starting with my position in October 2015 at a company in Eagle, Idaho called Datablaze.
            I worked there for over nine years, initially working on writing and maintaining internal tools, and eventually moving up to working on bigger and 
            bigger projects. In that time, I worked with C#, Microsoft SQL Server, and Xamarin, as well as doing a large chunk of the front-end work for our 
            various web applications.
          </p>
          <p>
            After leaving Datablaze, I worked for a scale company based out of Boise, Idaho called Total Scale Service. We provided custom software solutions 
            that integrated customer's weighing devices (most often truck scales) with everything from simple cloud-accessible "remote displays" to full 
            ticket and ERP system integrations. After being bought out by Michelli Weighing & Measurement in March of 2026, I continued to provide them my 
            experience in full stack development and worked on delivering several major projects that were already in progress when the buyout happened.
          </p>
          <p>
            In my spare time, I enjoy tinkering with electronics, designing things to 3D print, and building custom PCs. I also enjoy going to amusement parks 
            any chance I get, and I always make sure to grab some pictures (all of the background images on this site were taken by me). I am currently 
            looking to relocate to the Seattle area, preferably with a local or remote job that will allow me to keep doing what I love. I've always heard 
            that if you love your job, you'll never work a day in your life, and my experience bears that out!
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
