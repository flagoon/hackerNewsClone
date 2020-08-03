import React from 'react'
import { NavLink } from 'react-router-dom'

import { MessageContainer, MessageHeader, MessageInfo } from './Message.sc'

const Message: React.FC<{ message: Item }> = ({ message }) => {
  return (
    <MessageContainer>
      <MessageHeader>
        <a href={message.url}>{message.title}</a>
      </MessageHeader>

      <MessageInfo>
        by <NavLink to={`/author?id=${message.by}`}>{message.by}</NavLink> on{' '}
        {message.time} with{' '}
        <NavLink to={`/post?id=${message.id}`}>{message.descendants}</NavLink>{' '}
        comments
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message
