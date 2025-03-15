function Header(){
  const name = "Abdul Raqeeb";
  const prof = "Software Architect";
  return (
    <header className='header'>
    <h1>{name}</h1>
    <p>{prof}</p>
    <nav>
      <a href='#About'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
    </nav>
  </header>
  );
}
export default Header;