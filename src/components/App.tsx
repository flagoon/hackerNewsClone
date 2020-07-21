import React from 'react'
import styled from 'styled-components'

const App: React.FC = () => <Container>Hello</Container>

export default App

export const Container = styled.div`
  width: 70%;
  margin: 5rem auto;
  color: ${(props) => props.theme.colors.text};
`
