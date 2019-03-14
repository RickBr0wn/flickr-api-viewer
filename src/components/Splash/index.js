import React from 'react'
import './splashStyles.css'
import { Link } from 'react-router-dom'
import { SEARCH, CAROUSEL } from '../../constants'

const Splash = () => {
  return (
    <div className='splash-container'>
      <div className='hero'>
        <Link to={SEARCH}>
          Image Search
          <span>
            <i class='material-icons'>image_search</i>
          </span>
        </Link>
        <h1>Flickr Viewer</h1>
        <Link to={CAROUSEL}>
          <div>
            Latest Images
            <span>
              <i class='material-icons'>photo_library</i>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Splash
