import React from 'react'

import './headerStyles.css'

const Header = () => {
  return (
    <nav className='header'>
      <i className='material-icons'>image_search</i>
      <h1>Flickr API Image Viewer</h1>
      <i className='material-icons'>menu</i>
    </nav>
  )
}

export default Header
