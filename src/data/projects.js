// TODO: placeholder entries. Replace with your real projects.
// `link` is optional; omit it to render a card without a link.
export const projects = [
  {
    title: 'dillrellis.com',
    description: 'My personal web site. Built with Vite and React, served by Nginx running on a Debian 13 DigitalOcean droplet.',
    tags: ['React', 'Vite', 'Nginx', 'Linux', 'VSCode', 'Git'],
    link: 'https://github.com/coasterboy101/dillrellis-com',
  },
  {
    title: 'Custom Smart Home Macro Pad',
    description: 'This is a 3D printed button box designed to control the smart lights in my apartment. Based on an ESP32 microcontroller running ESPHome \
soldered to a custom-designed circuit board, with hot-swappable Cherry MX style switches for the buttons, communicating with a self-hosted Home Assistant \
server.',
    tags: ['ESP32', 'ESPHome', 'Home Assistant', 'Self-Hosted', '3D Printing', 'Solidworks'],
  },
  {
    title: 'Warships',
    description: 'My WebGL-based warship combat game, currently in early development. I am using it to learn some graphics programming, but the main reason \
for starting the project is to evaluate Claude and determine how it can integrate into my workflow, as I have not gotten many opportunities to utilize Claude \
for my day job. A link will be added to this page when I have an alpha version up and running.',
    tags: ['Pixi.js', 'Linux', 'VSCode', 'Git', 'Claude'],
    // link: 'https://github.com/coasterboy101/warships',
  },
  {
    title: 'Space Engineers Scripts',
    description: 'A collection of C# scripts meant to be used in the Programmable Blocks in the game Space Engineers. It currently consists of an airlock \
controller for controlling doors and oxygen vents as part of an airlock system, and an in-progress oxygen and hydrogen tank management script. The RellisAPI \
(RAPI) is a shared library for common functions, currently providing methods to print debug text to the in-game screens located on the Programmable Blocks \
themselves.',
    tags: ['.NET', 'C#', 'Visual Studio', 'Git'],
    link: 'https://github.com/coasterboy101/spengies-scripts',
  },
  {
    title: 'Timesheet',
    description: 'My college capstone project. An employee time tracking program, written as a team project with another student. It provides an interface \
for managing employee records, project details, client details, and time spent on each project. The project was used to show what I had learned about both \
front-end UI work as well as back-end code and database work, using WinForms for the UI and MySql as the database backend. The original database schema has \
been lost, what exists in the repository now has be re-created from the code I do still have.',
    tags: ['.NET', 'C#', 'WinForms', 'MySql', 'Visual Studio', 'Git'],
    link: 'https://github.com/coasterboy101/Timesheet',
  },
  {
    title: 'Performance Monitor',
    description: 'This was one of the first serious progamming projects I worked on. It was initially a C# WinForms application with custom gauge-style \
controls (also written by me) that was meant to run in the background and provide various real-time PC performance metrics. After running into some issues \
with the WinForms controls not being able to utilize GPU accelerated rendering, I switched over to a WPF-based project, also with custom-written gauge \
controls. I eventually got the project to what I would consider "Revision 1", but have unfortunately lost the source code since then.',
    tags: ['.NET', 'C#', 'WinForms', 'WPF', 'Windows Performance Counter API', 'Visual Studio'],
  },
]
