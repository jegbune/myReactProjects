import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Back from '../Back'
function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  const handleGenerateQrcode = (e) => {
    e.preventDefault()
    setQrCode(input)
  }


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }}>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleGenerateQrcode}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type='text' name='qr-code' placeholder='Enter your value here' style={{fontSize: '1rem', padding: '0.2rem', background: '#eee', border: 'none'}} />
        <button type='submit' disabled={input && input.trim() !== '' ? false : true} style={{fontSize: '1rem', padding: '0.2rem', marginLeft: '.5rem',border: '1px solid'}}>Generate</button>
      </form>
      <div>
        <QRCode
          id='qr-code-value'
          value={qrCode}
          size={300}
          bgColor='#fff'
        />
      </div>
      <Back />
    </div>
  )
}

export default QRCodeGenerator
