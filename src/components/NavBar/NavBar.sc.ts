import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NavItem = styled(NavLink)`
  margin-right: 20px;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Moon = styled(FaMoon)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const Sun = styled(FaSun)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`
