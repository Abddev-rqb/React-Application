function About(){
    const name = "Abdul Raqeeb";
    const prof = "Software Architect";
    return (
        <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, A passionate {prof} I love building web application that solves real
        world user problems.
        </p>
    </section>
    );
}
export default About;