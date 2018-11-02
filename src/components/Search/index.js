import React from 'react'

import ImageResults from '../ImageResults/index'

import './searchStyles.css'
import keys from '../../config/keys'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      textInput: '',
      imageURLs: []
    }
  }

  onChange = event => {
    const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=computer&api_key=${keys.flickrKey}&format=json&nojsoncallback=1`
    this.setState({ [event.target.name]: event.target.value}, 
      () => {
        fetch(flickrApiUrl)
          .then(res => res.json())
          .then(data => data.photos.photo.map(image => {
            const imageURL = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
            this.setState({
              imageURLs: [
                ...this.state.imageURLs,
                imageURL
              ]        
            })
          }))
          .catch(error => console.log('There has been an error: ', error))
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
          <input type="text" className="form__input" placeholder="Search for image" id="search" name="textInput" value={this.state.textInput} onChange={this.onChange} />
          <label htmlFor="search" className="form__label">Search for image</label>
        </form>
        <br />
        <ImageResults photos={this.state.imageURLs} />
      </div>
    )
  }
}

export default Search