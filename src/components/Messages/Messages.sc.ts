import styled from 'styled-components'

export const Message = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`

export const MessageHeader = styled.h3`
  display: inline-block;
  margin-block-start: 2rem;
  margin-block-end: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const MessageInfo = styled.div`
  margin-bottom: 1rem;

  & > a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
  }
`
