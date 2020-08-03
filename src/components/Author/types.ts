export const FETCH_AUTHOR = 'FETCH_AUTHOR'
export const FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS'
export const FETCH_AUTHOR_FAILURE = 'FETCH_AUTHOR_FAILURE'

interface FetchAuthorAction {
  type: typeof FETCH_AUTHOR
}

interface FetchAuthorSuccessAction {
  type: typeof FETCH_AUTHOR_SUCCESS
  author: Author
}

interface FetchAuthorFailureAction {
  type: typeof FETCH_AUTHOR_FAILURE
  error: string
}

export type AuthorActions =
  | FetchAuthorAction
  | FetchAuthorSuccessAction
  | FetchAuthorFailureAction
