import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const name = "Abdul Raqeeb";
  const prof = "Software Architect";

  return (
    <div className='App'>
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />

      </div>
  )
}

export default App
