import React, { useEffect, useState } from 'react'

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length)
  }

  const handleCreateRandomHexColor = () => {
      const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
      let hexColor = '#'

      for(let i = 0; i <= 5; i++) {
        hexColor += hex[randomNumber(hex.length)]
      }
      setColor(hexColor)
      // console.log(hexColor)

  }

  const handleCreateRandomRgbColor = () => {
    const red = randomNumber(256)
    const green = randomNumber(256)
    const blue = randomNumber(256)
    setColor(`rgb(${red},${green}, ${blue})`)
    // console.log(color)
  }

  useEffect(() => {
    if(typeOfColor === 'rgb') handleCreateRandomRgbColor() ;
    else handleCreateRandomHexColor();
  }, [typeOfColor])

  return (
    <div style={{
      background: color,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      </div>
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3rem',
        wordBreak: 'break-word',
        textAlign: 'center',
        color: '#fff',
        marginTop: '50px',
        flexDirection: 'column'
      }}>
        <h3>{typeOfColor ==='hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h1>{color}</h1>

      </div>
    </div>
  )
}

export default RandomColor
