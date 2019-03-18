import React from 'react'

const Card = ({ image, index }) => {
  return (
    <div className='cards-slider'>
      <div className='cards-slider-wrapper'>
        <h1>Card {index}</h1>
        <img src={image} />
      </div>
    </div>
  )
}

export default Card
