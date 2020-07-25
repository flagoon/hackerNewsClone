import React from 'react'
import { NavLink } from 'react-router-dom'
import { Message, MessageHeader, MessageInfo } from './Messages.sc'
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
        return (
          <Message key={message.id}>
            <MessageHeader>
              <a href={message.url}>{message.title}</a>
            </MessageHeader>

            <MessageInfo>
              by <NavLink to={`/author?id=${message.by}`}>{message.by}</NavLink>{' '}
              on {message.time} with{' '}
              <NavLink to={`/post?id=${message.id}`}>
                {message.descendants}
              </NavLink>{' '}
              comments
            </MessageInfo>
          </Message>
        )
      })}
    </>
  )
}

export default Messages
