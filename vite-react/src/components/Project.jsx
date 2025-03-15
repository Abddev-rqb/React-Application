function Project(){
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
    );
}
export default Project;