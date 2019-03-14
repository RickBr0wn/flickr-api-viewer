import React from 'react'

const Card = ({ image, index }) => {
  return (
    <div>
      <h1>Card {index}</h1>
      <img src={image} />
    </div>
  )
}

export default Card
