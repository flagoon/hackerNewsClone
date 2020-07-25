import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { useDarkTheme } from '../hooks'
import ThemeContext from '../context/ThemeContext'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'
import NavBar from './NavBar/NavBar'
import Loading from './Loading/Loading'
import Post from './Post/Post'
import { Author } from './Author/Author'

const Messages = React.lazy(() => import('./Messages/Messages'))

const App: React.FC = () => {
  const [theme, toggleTheme] = useDarkTheme()
  const themeMode = theme === 'light' ? light : dark

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <Container>
          <React.Suspense fallback={<Loading />}>
            <GlobalStyles />
            <Router>
              <NavBar />
              <Switch>
                <Route exact path="/">
                  <Messages type="top" />
                </Route>
                <Route path="/recent">
                  <Messages type="new" />
                </Route>
                <Route path="/post">
                  <Post />
                </Route>
                <Route path="/author">
                  <Author />
                </Route>
              </Switch>
            </Router>
          </React.Suspense>
        </Container>
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
