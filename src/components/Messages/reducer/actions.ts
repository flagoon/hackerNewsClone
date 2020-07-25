import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PostsActionTypes,
} from './types'

export const fetchPosts = (): PostsActionTypes => ({
  type: FETCH_POSTS,
})

export const fetchPostsSuccess = (posts: Item[]): PostsActionTypes => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
})

export const fetchPostsFailure = (error: string): PostsActionTypes => ({
  type: FETCH_POSTS_FAILURE,
  error,
})
