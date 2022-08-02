import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {

  const params = useParams()
  console.log(params)

  return (
    <div>
      <h1>cc</h1>
    </div>
  )
}

export default Pokemon
