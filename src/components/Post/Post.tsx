import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const Post: React.FC = () => {
  const { search } = useLocation()
  const { id } = queryString.parse(search)

  return <div>{id}</div>
}

export default Post
