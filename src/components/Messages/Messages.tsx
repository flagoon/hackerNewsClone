import React from 'react'
import Message from './Message/Message'
import { getStories } from '../../api'
import {
  fetchPosts,
  fetchPostsFailure,
  fetchPostsSuccess,
  postsReducer,
  postsReducerInitialState,
} from './reducer'
import Loading from '../Loading/Loading'

const Messages: React.FC<{ type: 'top' | 'new' }> = ({ type }) => {
  const [state, dispatch] = React.useReducer(
    postsReducer,
    postsReducerInitialState,
  )

  React.useEffect(() => {
    dispatch(fetchPosts())
    getStories(type)
      .then(async (ids) => {
        const fetchArray = ids.map(async (id) =>
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
          ),
        )
        const result = await Promise.all(
          fetchArray,
        ).then(async (fetchedPosts) =>
          Promise.all<Item>(fetchedPosts.map((f) => f.json())),
        )
        dispatch(fetchPostsSuccess(result))
      })
      .catch((exception) => dispatch(fetchPostsFailure(exception.message)))
  }, [type])

  if (state.isLoading) {
    return <Loading />
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  if (state.posts.length === 0) {
    return <div>There are no posts</div>
  }

  return (
    <>
      {state.posts.map((message) => {
        return <Message key={message.id} message={message} />
      })}
    </>
  )
}

export default Messages
