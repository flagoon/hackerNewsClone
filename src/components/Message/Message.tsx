import React from 'react'
import { Link } from 'react-router-dom'

import { MessageContainer, MessageHeader, MessageInfo } from './Message.sc'

const Message: React.FC<{ message: Item }> = ({ message }) => {
  return (
    <MessageContainer>
      <MessageHeader>
        <a href={message.url}>{message.title}</a>
      </MessageHeader>

      <MessageInfo>
        by <Link to={`/author?id=${message.by}`}>{message.by}</Link> on{' '}
        {new Date(message.time * 1000).toLocaleString()} with{' '}
        <Link
          to={{
            pathname: '/post',
            state: { message },
            search: `id=${message.id}`,
          }}
        >
          {message.descendants}
        </Link>{' '}
        comments
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message
