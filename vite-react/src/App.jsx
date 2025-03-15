import { useState, useRef, useEffect} from 'react'
import './App.css'

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect(()=>{
    console.log('component Re-Rendered')
  });
  const increStateCount = () =>{
    setStateCount(stateCount +1);
  };
  const increRefCount = ()=>{
    refCount.current += 1;
    console.log(`Ref count: ${refCount.current}`);
  };

  return (
    <div>
      <p>State count: {stateCount}</p>
      <button onClick={increStateCount}>Increment State Count</button>
      <p>State count: {refCount.current}</p>
      <button onClick={increRefCount}>Increment Ref Count</button>
    </div>
  )
}

export default App
