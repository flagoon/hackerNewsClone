import React from 'react'
import { getStories } from '../../api'
import { fetchPosts, fetchPostsFailure, fetchPostsSuccess } from './actions'
import postsReducer, {
  initialState as postsReducerInitialState,
} from './reducer'
import Loading from '../Loading/Loading'
import Posts from '../Posts/Posts'

const Messages: React.FC<{ type: 'top' | 'new' }> = ({ type }) => {
  const [state, dispatch] = React.useReducer(
    postsReducer,
    postsReducerInitialState,
  )

  React.useEffect(() => {
    dispatch(fetchPosts())
    getStories(type)
      .then((ids) => {
        dispatch(fetchPostsSuccess(ids))
      })
      .catch((exception) => dispatch(fetchPostsFailure(exception.message)))
  }, [type])

  if (state.isLoading) {
    return <Loading />
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return <Posts ids={state.ids} type="story" />
}

export default Messages
