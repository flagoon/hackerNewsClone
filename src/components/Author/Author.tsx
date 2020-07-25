import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const Author: React.FC = () => {
  const { search } = useLocation()
  const { id } = queryString.parse(search)
  return <h3>{id}</h3>
}
