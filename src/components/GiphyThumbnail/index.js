import React from 'react'
import PropTypes from 'prop-types'
import './GiphyThumbnail.scss'

class GiphyThumbnail extends React.Component {
  render () {
    const {
      images,
      userInfo
    } = this.props
    return (
      <div className='giphy-thumbnail'>
        <div className='thumbnail-container'>
          <div className='img-prev-container'>
            <img src={images.fixed_width.url} alt='gif-from-giphy' />
          </div>
          <div className='img-info-container'>

          </div>
        </div>
        <div className='user-container'>
          <a href={userInfo.profile_url}  target='__blank'>
            <span className='user-ava'> <img src={userInfo.avatar_url} alt='user-ava' /> </span>
            <span className='user-name'> {userInfo.username} </span>
          </a>
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