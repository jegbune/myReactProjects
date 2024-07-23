import React, { useState } from 'react';

const RandomColorGenerator = () => {
  const [color, setColor] = useState({
    rgb: 'rgb(255, 255, 255)',
    hex: '#ffffff',
  });

  const generateRandomColor = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    setColor({ rgb, hex });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          backgroundColor: color.rgb,
          height: '100px',
          width: '100px',
          margin: '0 auto',
          border: '1px solid #000',
        }}
      />
      <p>RGB: {color.rgb}</p>
      <p>HEX: {color.hex}</p>
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
};

export default RandomColorGenerator;

