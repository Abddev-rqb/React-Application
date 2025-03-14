import './App.css'

function App() {
  const name = "Alice";
  const buttonLable = "Click me"
  const imgUrl = 'https://placehold.co/50x50';
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button style={{background:"green", color:"white"}} onClick={() => alert(`Button clicked!`)}>{buttonLable}</button>
      <img src={imgUrl}/>
    </div>

  )
}

export default App
