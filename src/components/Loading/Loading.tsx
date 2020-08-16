import React from 'react'
import styled from 'styled-components'

const Loading: React.FC<{ initialText: string }> = ({ initialText }) => {
  const [text, setText] = React.useState<string>(initialText)

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (text !== `${initialText}...`) {
        setText((value) => `${value}.`)
      } else {
        setText(initialText)
      }
    }, 300)
    return () => window.clearInterval(interval)
  }, [text, initialText])

  return <LoadingContainer>{text}</LoadingContainer>
}

export default Loading

const LoadingContainer = styled.div`
  font-size: 36px;
  margin-top: 2rem;
`
