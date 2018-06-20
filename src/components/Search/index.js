import React from 'react'

import './searchStyles.css'

class Search extends React.Component {
  //     apiURL: 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ca3783111609d69139840916b7a01ad2&format=json&nojsoncallback=1&per_page=5'

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value}, () => {
      
    })
  }

  render() {
    return(
      <div className="container">
        <div className="empty-space-large"></div>
        <form className="form__group" autoComplete="off">
          <div className="icon-holder">
            <i class="material-icons">search</i>
          </div>
          <input type="text" className="form__input" placeholder="Search for image" id="search" />
          <label htmlFor="search" className="form__label">Search for image</label>
        </form>
      </div>
    )
  }
}

export default Search