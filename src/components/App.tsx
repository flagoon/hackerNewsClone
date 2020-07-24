import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { IconContext } from 'react-icons'

import ThemeContext from '../context/ThemeContext'
import Messages from './Messages/Messages'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'
import NavBar from './NavBar/NavBar'

/**
 * Because I'm using styled components I had problem with global styling react-icons. Normally we add
 * style or className to IconContext.Provider component, but it was problematic, because I was using styled-components
 * theme, so it can't be normal css. I had to create a HOC, that is returning IconContext.Provider with proper
 * className, and className will be added, when this component would be styled.
 */
const MyIconProvider = ({
  className,
  children,
}: {
  className: string
  children: JSX.Element
}) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
)

/**
 * My component is styled with styled-components, meaning the className is assigned to it.
 */
const MyIconProviderWithStyles = styled(MyIconProvider)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('light')

  const changeTheme = (newTheme: string): void => {
    setTheme(newTheme)
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      {/* Unfortunatelly typescript is complaining that className is required, but it's not provided. This is workaround */}
      <MyIconProviderWithStyles className="not-important">
        <ThemeContext.Provider
          value={{
            theme,
            changeTheme,
          }}
        >
          <Router>
            <Container>
              <GlobalStyles />
              <NavBar />
              <Messages />
            </Container>
          </Router>
        </ThemeContext.Provider>
      </MyIconProviderWithStyles>
    </ThemeProvider>
  )
}

export default App

export const Container = styled.div`
  width: 70%;
  margin: 5rem auto;
  color: ${(props) => props.theme.colors.text};
`
