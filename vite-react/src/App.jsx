import './App.css'

function App() {
  const name = "Abdul Raqeeb";
  const prof = "Software Architect";
  const projects = [
  {
    title: "Project One",
    description: "A project with PHP at the backEnd",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A project with JAVA spring boot FullStack",
    link: "#"
  },
  {
    title: "Project Three",
    description: "A project with REACT at frontEnd",
    link: "#"
  }
  ];
  return (
    <div className='App'>
      {/* {Header Section} */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{prof}</p>
        <nav>
          <a href='#About'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      {/* {About Section} */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, A passionate {prof} I love building web application that solves real
          world user problems.
        </p>
      </section>
      {/* {Project Section} */}
      <section id='project' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index) =>(
            <div key={index} className='project-items'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel="nooponer noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
      {/* {Contact Section} */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>If like to get in touch, feel free to email at <a href='#'> abdulsameer.rq61@gmail.com</a></p>
      </section>

      {/* {Footer Section} */}
      <section className='footer'>
        <p>2025. All Rights Reserved</p>
      </section>
    </div>
  )
}

export default App
