import {
  PostsActionTypes,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS,
} from './types'

export interface PostReducerState {
  isLoading: boolean
  ids: string[]
  error?: string
}

export const initialState = {
  isLoading: false,
  ids: [],
}

const postReducer = (
  state: PostReducerState,
  action: PostsActionTypes,
): PostReducerState => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, isLoading: true, error: '', ids: [] }
    case FETCH_POSTS_SUCCESS:
      return { ...state, isLoading: false, ids: action.ids }
    case FETCH_POSTS_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    default:
      throw new Error('Wrong action type')
  }
}

export default postReducer
