import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { getAuthor } from '../../api'
import authorReducer, { initialState as authorInitialState } from './reducer'
import { fetchAuthor, fetchAuthorFailure, fetchAuthorSuccess } from './actions'
import Posts from '../Posts/Posts'

const Author: React.FC = () => {
  const { search } = useLocation()
  const { id } = queryString.parse(search)

  const [state, dispatch] = React.useReducer(authorReducer, authorInitialState)

  React.useEffect(() => {
    dispatch(fetchAuthor())
    getAuthor(id as string)
      .then(async (author) => {
        dispatch(fetchAuthorSuccess(author))
      })
      .catch((exception: Error) =>
        dispatch(fetchAuthorFailure(exception.message)),
      )
  }, [id])

  if (state.isLoading) {
    return <div>Loading MF</div>
  }

  if (state.error) {
    return <div>Error</div>
  }

  return (
    <>
      <h1>{state.author.id}</h1>
      joined <span>{state.author.created}</span> has{' '}
      <span>{state.author.karma}</span>
      <h2>Posts</h2>
      <Posts ids={state.author.submitted} />
    </>
  )
}

export default Author
