import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { getAuthor } from '../../api'
import {
  authorReducer,
  authorInitialState,
  fetchAuthor,
  fetchAuthorFailure,
  fetchAuthorSuccess,
} from './reducer'

export const Author: React.FC = () => {
  const { search } = useLocation()
  const { id } = queryString.parse(search)

  const [state, dispatch] = React.useReducer(authorReducer, authorInitialState)

  React.useEffect(() => {
    dispatch(fetchAuthor())
    getAuthor(id as string)
      .then((author) => dispatch(fetchAuthorSuccess(author)))
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
      <h3>{state.author.id}</h3>
      <div>{state.author.created}</div>
      <div>{state.author.karma}</div>
      <div>{state.author.submited}</div>
    </>
  )
}
