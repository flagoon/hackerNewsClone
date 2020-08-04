/* eslint-disable react/no-danger */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Comment: React.FC<{ comment: Item }> = ({ comment }) => {
  return (
    <Container>
      by <StyledLink to={`/author?id=${comment.by}`}>{comment.by}</StyledLink>{' '}
      on <span>{new Date(comment.time * 1000).toLocaleString()}</span>
      <div
        dangerouslySetInnerHTML={{ __html: comment.text as string }}
        style={{ marginTop: '1rem' }}
      />
    </Container>
  )
}

export default Comment

const Container = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.comment};
  margin: 1rem 0 1rem;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary};
`
