import React from 'react'
import PropTypes from 'prop-types';
import './GiphyThumbnail.scss'

class GiphyThumbnail extends React.Component {
  render () {
    const {
      images,
      userInfo
    } = this.props
    return (
      <div className='giphy-thumbnail'>
        <div className='thumnail-container'>
          <div className='img-prev-container'>
            <img src={images.downsized_medium.url} alt='gif-from-giphy' />
          </div>
          <div className='img-info-container'>

          </div>
        </div>
        <div className='user-container'>
          {userInfo.username}
        </div>
      </div>
    )
  }
}

GiphyThumbnail.propTypes = {
  images: PropTypes.array,
  userInfo: PropTypes.object
}

export default GiphyThumbnail