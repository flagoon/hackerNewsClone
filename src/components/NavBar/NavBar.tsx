import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { NavContainer, NavItem } from './NavBar.sc'
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
        <FaMoon size={24} onClick={() => changeTheme('dark')} />
      ) : (
        <FaSun size={24} onClick={() => changeTheme('light')} />
      )}
    </NavContainer>
  )
}

export default NavBar
