import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  fetchPostsActions,
} from './types'

export interface PostsState {
  isLoading: boolean
  error?: string
  posts: Item[]
}

const postsReducer = (
  state: PostsState,
  action: fetchPostsActions,
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, isLoading: true, error: '', posts: [] }
    case FETCH_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: action.posts }
    case FETCH_POSTS_FAILURE:
      return { ...state, isLoading: false, posts: [], error: action.error }

    default:
      throw new Error('[Posts Reducer]: Wrong action type')
  }
}

export default postsReducer
