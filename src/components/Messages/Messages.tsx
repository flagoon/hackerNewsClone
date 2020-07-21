import React from 'react'

interface Props {
  name: string[]
}

const Messages: React.FC<Props> = ({ name }) => <div>{name}</div>

export default Messages
