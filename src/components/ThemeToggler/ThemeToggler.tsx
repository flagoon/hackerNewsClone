import React from 'react'
import ThemeContext from '../../context/ThemeContext'
import { Toggler } from './ThemeToggler.sc'

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)

  if (theme === 'light') {
    return <Toggler onClick={toggleTheme}>Dark</Toggler>
  }
  return <Toggler onClick={toggleTheme}>Light</Toggler>
}

export default ThemeToggler
