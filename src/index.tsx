import React from 'react'
import '@babel/polyfill'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './components/App'
import 'normalize.css'

import GlobalStyles from './styles/global'
import light from './styles/themes/light'

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
)
