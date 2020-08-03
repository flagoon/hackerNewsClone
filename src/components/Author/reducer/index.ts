import { fetchAuthor, fetchAuthorFailure, fetchAuthorSuccess } from './actions'
import { AuthorActions } from './types'
import authorReducer, { initialState } from './authorReducer'

export {
  AuthorActions,
  fetchAuthor,
  fetchAuthorSuccess,
  fetchAuthorFailure,
  initialState as authorInitialState,
  authorReducer,
}
