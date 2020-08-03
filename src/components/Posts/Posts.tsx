import React from 'react'
import { getPosts } from '../../api'
import Message from '../Message/Message'
import Loading from '../Loading/Loading'

import postsReducer from './reducer'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from './actions'

const Posts: React.FC<{ ids: string[] }> = ({ ids }) => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: false,
    posts: [],
  })
  React.useEffect(() => {
    dispatch(fetchPosts())
    getPosts(ids)
      .then((fetchedPosts) => {
        const onlyStories = fetchedPosts.filter(
          (story) => story.type === 'story',
        )
        dispatch(fetchPostsSuccess(onlyStories))
      })
      .catch((exception) => dispatch(fetchPostsFailure(exception.message)))
  }, [ids])

  if (state.isLoading) {
    return <Loading />
  }

  if (state.error) {
    return <div>{state.error}</div>
  }

  return (
    <>
      {state.posts.map((post) => (
        <Message key={post.id} message={post} />
      ))}
    </>
  )
}

export default Posts
