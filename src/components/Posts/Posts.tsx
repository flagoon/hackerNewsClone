import React from 'react'
import { getPosts } from '../../api'
import Message from '../Message/Message'
import Loading from '../Loading/Loading'
import Comment from '../Comment/Comment'

import postsReducer from './reducer'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from './actions'

const Posts: React.FC<{ ids: number[]; type: 'story' | 'comment' }> = ({
  ids,
  type,
}) => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: false,
    posts: [],
  })
  React.useEffect(() => {
    if (ids.length > 0) {
      dispatch(fetchPosts())
      getPosts(ids)
        .then((fetchedPosts) => {
          const stories = fetchedPosts.filter((story) => story.type === type)
          dispatch(fetchPostsSuccess(stories.filter((story) => !story.deleted)))
        })
        .catch((exception) => dispatch(fetchPostsFailure(exception.message)))
    }
  }, [ids, type])

  if (state.isLoading) {
    return <Loading />
  }

  if (state.error) {
    return <div>{state.error}</div>
  }

  return (
    <>
      {state.posts.map((post) =>
        type === 'story' ? (
          <Message key={post.id} message={post} />
        ) : (
          <Comment comment={post} />
        ),
      )}
    </>
  )
}

export default Posts
