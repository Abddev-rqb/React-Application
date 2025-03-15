import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const colors =['	#b50102', '#8c1d23', '#751433', '#5b1c56', '	#281d46'];
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  }

  return (
    <div style={{backgroundColor}} className='App'>
      <h1>Color Picker</h1>
      <div className='color-palatte'>
        {colors.map((color, index) =>(
          <div
            key={index}
            className='color-box'
            style={{backgroundColor: color}}
            onClick = {() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <div className='custom-color-picker'>
        <input type = 'color'
               value = {backgroundColor}
               onChange = {(e) => handleColorChange(e.target.value)}/>
      </div>
    </div>
  )
}

export default App
