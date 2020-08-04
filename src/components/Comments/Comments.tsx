import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Message from '../Message/Message'
import Posts from '../Posts/Posts'

const Comments: React.FC = () => {
  const { state, search } = useLocation<{ message: Item }>()
  const [message, setMessage] = React.useState<Item>({} as Item)

  const { id } = queryString.parse(search)

  React.useEffect(() => {
    // if state is comming from react router, then set message for this ID. No need to fetch it again.
    if (state) {
      setMessage(state.message)
    } else {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      )
        .then((res) => res.json())
        .then((fetchedMessage) => setMessage(fetchedMessage))
    }
  }, [id, state])

  return message.title !== undefined ? (
    <>
      <Message message={message} />
      {message.kids ? (
        <Posts ids={message.kids as number[]} type="comment" />
      ) : (
        'This user has no comments'
      )}
    </>
  ) : null
}

export default Comments
