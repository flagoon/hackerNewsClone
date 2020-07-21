import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: Montserrat, sans-serif;
    background: ${(props) => props.theme.colors.background}
  }
  a {
    text-decoration: none;
  }
`
