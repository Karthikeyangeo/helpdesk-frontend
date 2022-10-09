import React from 'react'
import { useParams } from 'react-router-dom'

export default function Success() {
  let params = useParams()
  return (
    <div>Success Your Ticket is {params.id}</div>
  )
}
