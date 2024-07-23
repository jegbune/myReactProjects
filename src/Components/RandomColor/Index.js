import React, { useState } from 'react'

function Index() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')
 

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length)
  }

  const handleCreateRandomHexColor = () => {
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'
    

    for(let i = 0; i<=5; i++) {
      hexColor += hex[randomColorUtility(16)]
    }
    setColor(hexColor)
    console.log(hex.length);
  }

  const handleCreateRandomRgbColor = () => {
    const red = randomColorUtility(256)
    const green = randomColorUtility(256)
    const blue = randomColorUtility(256)
    let rgbColor = `rgb(${red},${green},${blue})`
    setColor(rgbColor)
    
    
  }

  
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div className='container'><h1>{color}</h1></div>

    </div>
  )
}

export default Index
