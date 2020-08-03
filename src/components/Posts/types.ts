export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

interface FetchPosts {
  type: typeof FETCH_POSTS
}

interface FetchPostsSuccess {
  type: typeof FETCH_POSTS_SUCCESS
  posts: Item[]
}

interface FetchPostsFailure {
  type: typeof FETCH_POSTS_FAILURE
  error: string
}

export type fetchPostsActions =
  | FetchPosts
  | FetchPostsSuccess
  | FetchPostsFailure
