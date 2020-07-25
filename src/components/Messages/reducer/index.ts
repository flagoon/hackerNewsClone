import postsReducer, { initialState } from './postReducer'
import { fetchPosts, fetchPostsFailure, fetchPostsSuccess } from './actions'
import { PostsActionTypes } from './types'

export {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  postsReducer,
  PostsActionTypes,
  initialState as postsReducerInitialState,
}
