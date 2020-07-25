import React from 'react'
import styled from 'styled-components'

const Loading: React.FC = () => {
  const [text, setText] = React.useState<string>('Loading')

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (text !== 'Loading...') {
        setText((value) => `${value}.`)
      } else {
        setText('Loading')
      }
    }, 300)
    return () => window.clearInterval(interval)
  }, [text])

  return <LoadingContainer>{text}</LoadingContainer>
}

export default Loading

const LoadingContainer = styled.div`
  font-size: 36px;
  margin-top: 2rem;
`
