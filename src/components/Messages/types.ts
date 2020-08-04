export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

interface FetchPostsAction {
  type: typeof FETCH_POSTS
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS
  ids: number[]
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE
  error: string
}

export type PostsActionTypes =
  | FetchPostsAction
  | FetchPostsFailureAction
  | FetchPostsSuccessAction
