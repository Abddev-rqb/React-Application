import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => setTime(new Date));
    return () => clearInterval(timeId);
  },[]);
  const formattedTime = time.toLocaleTimeString('en-US',
    {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }
  )

  return (
    <div className='clock-container'>
      <div className='clock'>
        {formattedTime}
      </div>
    </div>
  )
}

export default App
