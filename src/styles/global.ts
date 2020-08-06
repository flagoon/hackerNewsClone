import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

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
    font-family: 'Roboto Slab', serif;
    background: ${(props) => props.theme.colors.background}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
