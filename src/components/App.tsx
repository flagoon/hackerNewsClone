import React from 'react'
import styled from 'styled-components'

import Messages from './Messages/Messages'

const App: React.FC = () => (
  <Container>
    <Messages />
  </Container>
)

export default App

export const Container = styled.div`
  width: 70%;
  margin: 5rem auto;
  color: ${(props) => props.theme.colors.text};
`
