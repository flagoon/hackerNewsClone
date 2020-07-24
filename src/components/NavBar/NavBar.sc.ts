import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
