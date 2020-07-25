import styled from 'styled-components'

export const Toggler = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
