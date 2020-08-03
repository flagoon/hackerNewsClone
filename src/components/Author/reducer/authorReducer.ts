import {
  AuthorActions,
  FETCH_AUTHOR,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
} from './types'

interface AuthorReducerState {
  isLoading: boolean
  author: Author
  error?: string
}

export const initialState: AuthorReducerState = {
  isLoading: false,
  author: {
    created: 0,
    karma: 0,
    id: '',
    submited: [],
  },
}

const authorReducer = (
  state: AuthorReducerState = initialState,
  action: AuthorActions,
): AuthorReducerState => {
  switch (action.type) {
    case FETCH_AUTHOR:
      return { ...state, isLoading: true }
    case FETCH_AUTHOR_SUCCESS: {
      return { ...state, isLoading: false, author: action.author }
    }
    case FETCH_AUTHOR_FAILURE: {
      return { ...state, isLoading: false, error: action.error }
    }
    default:
      return state
  }
}

export default authorReducer
