import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeContext from '../context/ThemeContext'
import Messages from './Messages/Messages'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'
import NavBar from './NavBar/NavBar'

const App: React.FC = () => {
  const [theme, setTheme] = React.useState('light')

  const changeTheme = (newTheme: string): void => {
    setTheme(newTheme)
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
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
    </ThemeProvider>
  )
}

export default App

export const Container = styled.div`
  width: 70%;
  margin: 5rem auto;
  color: ${(props) => props.theme.colors.text};
`
