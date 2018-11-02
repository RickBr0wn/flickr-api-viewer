import React from 'react'

import './imageResultsStyles.css'

const ImageResults = props => {
  const { photos } = props
  let photoList

  if(photos) {
    photoList = (
      photos.map((photo, index) => (
        <div key={index}>
          <img src={photo}  />
        </div>
      ))
    )
  }
  
  return(
    <div className="grid">
      { photoList }
    </div>
  )
}

export default ImageResults