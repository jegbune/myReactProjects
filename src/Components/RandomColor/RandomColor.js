import React, { useEffect, useState } from 'react'
import Back from '../Back'

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
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.5rem',
        wordBreak: 'break-word',
        textAlign: 'center',
        color: '#fff',
        height: '100vh',
        flexDirection: 'column'
      }}>
        <h3 style={{padding:'0', margin: '0'}}>{typeOfColor ==='hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h1 style={{padding:'0', margin: '0'}}>{color}</h1>

      </div>
        <div style={{
          display: 'flex',
          flexDirection:'column',
          padding: '4rem 2rem'
        }}>
        <button onClick={() => setTypeOfColor('hex')} style={{
          padding: '0.8rem',margin: '1rem 0.2rem'
        }}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')} style={{
          padding: '0.8rem',margin: '1rem 0.2rem'
        }}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} style={{
          padding: '0.8rem',margin: '1rem 0.2rem'
        }}>Generate Random Color</button>
        <Back />
        </div>
    </div>
  )
}

export default RandomColor
