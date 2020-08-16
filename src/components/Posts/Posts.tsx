import React from 'react'
import debounce from 'lodash/debounce'
import { getPosts } from '../../api'
import Message from '../Message/Message'
import Loading from '../Loading/Loading'
import Comment from '../Comment/Comment'

import postsReducer from './reducer'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from './actions'

const Posts: React.FC<{
  ids: number[]
  type: 'story' | 'comment'
  fetchMore?: () => void
}> = ({ ids, type, fetchMore }) => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: false,
    posts: [],
  })

  const fetchMoreStories = () => {
    const windowWholeArea = document.documentElement.scrollHeight
    const windowVisibleArea = window.innerHeight
    const windowTopScrollPosition = window.scrollY
    if (windowTopScrollPosition + windowVisibleArea > windowWholeArea - 200) {
      if (fetchMore) {
        fetchMore()
      }
    }
  }

  const fetchWithScroll = debounce(fetchMoreStories, 300)

  React.useEffect(() => {
    window.addEventListener('scroll', fetchWithScroll)
    return () => {
      return window.removeEventListener('scroll', fetchWithScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  if (state.error) {
    return <div>{state.error}</div>
  }

  return (
    <div>
      {state.posts.map((post) =>
        type === 'story' ? (
          <Message key={post.id} message={post} />
        ) : (
          <Comment key={post.id} comment={post} />
        ),
      )}
      {state.isLoading && <Loading initialText="Loading posts" />}
    </div>
  )
}

export default Posts
