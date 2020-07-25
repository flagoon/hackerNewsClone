import React from 'react'
import { NavContainer, NavItem } from './NavBar.sc'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <div>
        <NavItem to="/">Top</NavItem>
        <NavItem to="/recent">Recent</NavItem>
      </div>
      <ThemeToggler />
    </NavContainer>
  )
}

export default NavBar
