import React from 'react'

import './searchStyles.css'
import keys from '../../config/keys'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      textInput: ''
    }
  }

  onChange = event => {
    const testURL = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${keys.flickrKey}&format=json&nojsoncallback=1&per_page=5`
    this.setState({ [event.target.name]: event.target.value}, 
      () => {
        console.log('FETCH!!')
        // fetch(testURL)
        //   .then(res => res.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.log(error))
      }
    )
  }

  render() {
    return(
      <div className="container">
        <div className="empty-space-large"></div>
        <form className="form__group" autoComplete="off">
          <div className="icon-holder">
            <i className="material-icons">search</i>
          </div>
          <input type="text" className="form__input" placeholder="Search for image" id="search" name={this.state.textInput} value={this.state.textInput} onChange={this.onChange} />
          <label htmlFor="search" className="form__label">Search for image</label>
        </form>
      </div>
    )
  }
}

export default Search