import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PostsActionTypes,
} from './types'

export const fetchPosts = (): PostsActionTypes => ({
  type: FETCH_POSTS,
})

export const fetchPostsSuccess = (ids: number[]): PostsActionTypes => ({
  type: FETCH_POSTS_SUCCESS,
  ids,
})

export const fetchPostsFailure = (error: string): PostsActionTypes => ({
  type: FETCH_POSTS_FAILURE,
  error,
})
