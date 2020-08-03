import {
  AuthorActions,
  FETCH_AUTHOR,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
} from './types'

export const fetchAuthor = (): AuthorActions => ({
  type: FETCH_AUTHOR,
})

export const fetchAuthorSuccess = (author: Author): AuthorActions => ({
  type: FETCH_AUTHOR_SUCCESS,
  author,
})

export const fetchAuthorFailure = (error: string): AuthorActions => ({
  type: FETCH_AUTHOR_FAILURE,
  error,
})
