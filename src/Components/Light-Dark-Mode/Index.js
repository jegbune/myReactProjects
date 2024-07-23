import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'
import Back from '../Back'

function LightDarkMode() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  
  const handleToggleTheme = () => {
    setTheme(theme ==='light' ? 'dark' : 'light')
  }
  
  console.log(theme)

  return (
    <div className='light-dark-mode' data-theme={theme}> 
      <div className='theme-container'>
        <h1> Hello World !</h1>
        <button onClick={handleToggleTheme }>Change Theme</button>
        <Back />
      </div>
    </div>
  )
}

export default LightDarkMode
