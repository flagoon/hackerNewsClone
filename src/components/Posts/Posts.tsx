import React from 'react'
import debounce from 'lodash/debounce'
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
  const containerRef = React.useRef<HTMLDivElement>(null)

  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: false,
    posts: [],
  })

  const fetchMoreStories = () => {
    const postsDivHeight = containerRef.current?.clientHeight
    // size of whole window, from top scroll position to bottom scroll position.
    const windowWholeArea = document.documentElement.scrollHeight
    const windowVisibleArea = window.innerHeight
    const windowTopScrollPosition = window.scrollY
    if (windowTopScrollPosition + windowVisibleArea > windowWholeArea - 500) {
      console.warn('scrollHeight: ', postsDivHeight)
      console.warn('window: ', windowWholeArea)
      console.error('windowVisibleArea: ', windowVisibleArea)
      console.error('windowTopScrollPosition: ', windowTopScrollPosition)
    }
  }

  const fetchWithScroll = debounce(fetchMoreStories, 300)

  React.useEffect(() => {
    window.addEventListener('scroll', fetchWithScroll)
    return () => window.removeEventListener('scroll', fetchWithScroll)
  }, [fetchWithScroll])

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
    <div ref={containerRef}>
      {state.posts.map((post) =>
        type === 'story' ? (
          <Message key={post.id} message={post} />
        ) : (
          <Comment comment={post} />
        ),
      )}
    </div>
  )
}

export default Posts
