import './App.css'

function App() {
  // const name = "Alice";
  // const buttonLable = "Click me"
  // const imgUrl = 'https://placehold.co/50x50';
  const isLogged = false;
  const element = <h1>{isLogged ? "Welcome back !" : "Please Login to continue"}</h1>
  const message = [1,"message", "message2"];
  const now = new Date();
  const isMorning = now.getHours() < 12;
  function Welcome(name){
    return (<h1>Hello, {name}</h1>);
  }
  function Greetings(isMorning){
    if (isMorning){
      return <h1>Good morning</h1>
    }
    return <h1>Good evening</h1>

  }
  return (
    // <div>
    //   <h1>Hello, {name}</h1>
    //   <button style={{background:"green", color:"white"}} onClick={() => alert(`Button clicked!`)}>{buttonLable}</button>
    //   <img src={imgUrl}/>
    // </div>
    // <div>
    //   {element}
    //   {message.length > 0 && <h2>You have unread "{message.length}" messages</h2>}
    // </div>
    <div>
      {Welcome("Alice")}
      {Greetings(isMorning)}
    </div>


  )
}

export default App
