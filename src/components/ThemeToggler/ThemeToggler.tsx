import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)

  if (theme === 'light') {
    return <FaMoon size={24} onClick={() => toggleTheme()} />
  }
  return <FaSun size={24} onClick={() => toggleTheme()} />
}

export default ThemeToggler
