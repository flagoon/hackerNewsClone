import React from 'react'
import { NavContainer, NavItem, Moon, Sun } from './NavBar.sc'
import ThemeContext from '../../context/ThemeContext'

const NavBar: React.FC = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext)
  return (
    <NavContainer>
      <div>
        <NavItem to="/">Top</NavItem>
        <NavItem to="/recent">Recent</NavItem>
      </div>
      {theme === 'light' ? (
        <Moon size={24} onClick={() => changeTheme('dark')} />
      ) : (
        <Sun size={24} onClick={() => changeTheme('light')} />
      )}
    </NavContainer>
  )
}

export default NavBar
