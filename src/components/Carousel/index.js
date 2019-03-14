import React, { Component } from 'react'
import keys from '../../config/keys'
import Card from '../Card'

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      imageURLs: [],
      displayImage: '',
      counter: 0
    }
  }

  componentDidMount() {
    const flickrApiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      keys.flickrKey
    }&tags=ddd&per_page=20&page=1&format=json&nojsoncallback=1`

    fetch(flickrApiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({ imageURLs: [] })
        return data
      })
      .then(data =>
        data.photos.photo.map(image => {
          const imageURL = `https://farm${image.farm}.staticflickr.com/${
            image.server
          }/${image.id}_${image.secret}.jpg`
          const displayImage = this.state.imageURLs[0]
          this.setState({
            imageURLs: [...this.state.imageURLs, imageURL, displayImage]
          })
        })
      )
      .catch(error => console.log('There has been an error: ', error))
  }

  countFn = param => {
    console.log(param)
    switch (param) {
      case '+': {
        const counter = this.state.counter++
        this.setState({ counter })
      }
      case '-': {
        const counter = this.state.counter--
        this.setState({ counter })
      }
      default: {
        return null
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='empty-space-large' />
        <h1>Carousel</h1>
        {this.state.imageURLs &&
          this.state.imageURLs.map(item => console.log(item))}
        <button onClick={() => this.countFn('-')}>BACK</button>
        <button onClick={() => this.countFn('+')}>FORWARD</button>
        <Card
          image={this.state.imageURLs[this.state.counter]}
          index={this.state.counter}
        />
      </div>
    )
  }
}

export default Carousel
