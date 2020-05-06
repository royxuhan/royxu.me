import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image'

const artworks = [
  'images//artwork/1.jpg',
  'images//artwork/2.jpg',
  'images//artwork/3.jpg',
  'images//artwork/4.jpg',
  'images//artwork/5.jpg',
  'images//artwork/6.jpg',
  'images//artwork/7.jpg',
  'images//artwork/8.jpg',
  'images//artwork/9.jpg',
  'images//artwork/10.jpg',
  'images//artwork/11.jpg',
  'images//artwork/12.jpg',
  'images//artwork/13.jpg',
  'images//artwork/14.jpg',
  'images//artwork/15.jpg'
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`)
  }
}

class Artwork extends Component {
  render () {
    // if (this.props.data) {
    //   var artworks = this.props.data.artwork.map(function (piece) {
    //     var artwork = 'images/artwork/' + piece.image
    //     return <div className='each-slide'>
    //       <div className='each-slide'>
    //         <div style={{ backgroundImage: `url(${artwork})` }} />
    //       </div>
    //     </div>
    //   })
    // }

    return (
      <section id='artwork'>
        <h1>Artwork</h1>
        <div className='slide-container'>
          <Slide {...properties}>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[0]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[1]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[2]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[3]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[4]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[5]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[6]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[7]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[8]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[9]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[10]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[11]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[12]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[13]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[14]})` }} />
            </div>
            <div className='each-slide'>
              <div style={{ backgroundImage: `url(${artworks[15]})` }} />
            </div>
          </Slide>
        </div>
      </section>
    )
  }
}

export default Artwork
