import React, { Component } from 'react'
import keys from '../../config/keys'
import Card from '../Card'
import './carouselStyles.css'

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      imageURLs: [],
      displayImage: '',
      isLoading: false,
      counter: 0
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      keys.flickrKey
    }&tags=girls&per_page=50&page=1&format=json&nojsoncallback=1`

    fetch(flickrApiUrl)
      .then(res => res.json())
      .then(data =>
        data.photos.photo.map(image => {
          const imageURL = `https://farm${image.farm}.staticflickr.com/${
            image.server
          }/${image.id}_${image.secret}.jpg`

          const displayImage = this.state.imageURLs[0]

          this.setState({
            imageURLs: [...this.state.imageURLs, imageURL],
            isLoading: false,
            displayImage
          })
        })
      )
      .catch(error => console.log('There has been an error: ', error))
  }

  render() {
    const { counter, imageURLs, isLoading } = this.state

    if (isLoading) {
      return <p>Loading..</p>
    }

    return (
      <div className='container'>
        <div className='empty-space-large'>
          <h1>Carousel</h1>
          {imageURLs &&
            imageURLs.map(item => <Card image={item} index={counter} />)}
          <button onClick={() => this.nextImage()}>BACK</button>
          <button onClick={() => this.previousImage()}>FORWARD</button>
        </div>
      </div>
    )
  }
}

export default Carousel
