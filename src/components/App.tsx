import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { useDarkTheme } from '../hooks'
import ThemeContext from '../context/ThemeContext'
import Messages from './Messages/Messages'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'
import NavBar from './NavBar/NavBar'

const App: React.FC = () => {
  const [theme, toggleTheme] = useDarkTheme()
  const themeMode = theme === 'light' ? light : dark

  return (
    <ThemeProvider theme={themeMode}>
      {/* Unfortunatelly typescript is complaining that className is required, but it's not provided. This is workaround */}

      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
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
    </ThemeProvider>
  )
}

export default App

export const Container = styled.div`
  width: 70%;
  margin: 5rem auto;
  color: ${(props) => props.theme.colors.text};
`
