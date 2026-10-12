// TODO: placeholder entries. Replace with your real projects.
// `link` is optional; omit it to render a card without a link.
export const projects = [
  {
    title: 'dillrellis.com',
    description: 'My personal website, built with Vite and React and served by Nginx on a Debian 13 DigitalOcean droplet.',
    tags: ['React', 'Vite', 'Nginx', 'Linux', 'VSCode', 'Git'],
    link: 'https://github.com/coasterboy101/dillrellis-com',
  },
  {
    title: 'Custom Smart Home Macro Pad',
    description: 'A 3D printed button box that controls the smart lights in my apartment. An ESP32 running ESPHome sits on a custom circuit board with \
hot-swappable Cherry MX style switches and talks to my self-hosted Home Assistant server.',
    tags: ['ESP32', 'ESPHome', 'Home Assistant', 'Self-Hosted', '3D Printing', 'Solidworks'],
  },
  {
    title: 'Warships',
    description: 'A WebGL warship combat game in early development. It is my way of learning graphics programming and evaluating how Claude fits into my \
workflow. A link will be added once an alpha version is up and running.',
    tags: ['PixiJS', 'Vite', 'React', 'Linux', 'VSCode', 'Git', 'Claude'],
    // link: 'https://github.com/coasterboy101/warships',
  },
  {
    title: 'Space Engineers Scripts',
    description: 'C# scripts for the Programmable Blocks in Space Engineers: an airlock controller for doors and oxygen vents, an in-progress oxygen and \
hydrogen tank manager, and RellisAPI (RAPI), a shared library that prints debug text to the in-game screens on the blocks.',
    tags: ['.NET', 'C#', 'Visual Studio', 'Git'],
    link: 'https://github.com/coasterboy101/spengies-scripts',
  },
  {
    title: 'Timesheet',
    description: 'My college capstone project: an employee time tracking program built with another student. It manages employee records, projects, clients, \
and time spent on each project, using WinForms for the UI and MySql for the database. The original database schema was lost, so the one in the repository was \
re-created from the surviving code.',
    tags: ['.NET', 'C#', 'WinForms', 'MySql', 'Visual Studio', 'Git'],
    link: 'https://github.com/coasterboy101/Timesheet',
  },
  {
    title: 'Performance Monitor',
    description: 'One of my first serious programming projects: a background app showing real-time PC performance metrics on custom gauge controls I wrote \
myself. It started in C# WinForms, then moved to WPF for GPU-accelerated rendering. It reached what I would call "Revision 1", but the source code has since \
been lost.',
    tags: ['.NET', 'C#', 'WinForms', 'WPF', 'Windows Performance Counter API', 'Visual Studio'],
  },
]
