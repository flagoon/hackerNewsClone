import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  fetchPostsActions,
} from './types'

export const fetchPosts = (): fetchPostsActions => ({
  type: FETCH_POSTS,
})

export const fetchPostsSuccess = (posts: Item[]): fetchPostsActions => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
})

export const fetchPostsFailure = (error: string): fetchPostsActions => ({
  type: FETCH_POSTS_FAILURE,
  error,
})
