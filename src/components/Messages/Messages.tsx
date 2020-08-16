import React from 'react'
import chunk from 'lodash/chunk'
import { getStories } from '../../api'
import { fetchPosts, fetchPostsFailure, fetchPostsSuccess } from './actions'
import postsReducer, {
  initialState as postsReducerInitialState,
} from './reducer'
import Loading from '../Loading/Loading'
import Posts from '../Posts/Posts'

const Messages: React.FC<{ type: 'top' | 'new' }> = ({ type }) => {
  const [newIds, setNewIds] = React.useState<number[][]>([[]])
  const [counter, setCounter] = React.useState<number>(0)
  const [state, dispatch] = React.useReducer(
    postsReducer,
    postsReducerInitialState,
  )

  const increaseCounter = () => {
    setCounter((c) => c + 1)
  }

  React.useEffect(() => {
    dispatch(fetchPosts())
    getStories(type)
      .then((ids) => {
        dispatch(fetchPostsSuccess(ids))
        setNewIds(chunk(ids, 50))
      })
      .catch((exception) => dispatch(fetchPostsFailure(exception.message)))
  }, [type])

  if (state.isLoading) {
    return <Loading initialText="Loading messages" />
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <Posts ids={newIds[counter]} type="story" fetchMore={increaseCounter} />
  )
}

export default Messages
