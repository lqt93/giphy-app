import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './Home.scss'
// Services and actions
import GiphyService from '../../api/giphy'
import { setTrendingList } from '../../actions/giphy'
import { toggleModal } from '../../actions/modal'
// Components
import GiphyThumbnail from '../../components/GiphyThumbnail'

class Home extends React.Component {
  componentWillMount () {
    const query = this.props.giphyState
    GiphyService.getTrendingGifs(query)
    .then(res => {
      this.props.setTrendingList(res.data)
    })
    .catch(err => {

    })
  }
  render () {
    const { trendingData } = this.props.giphyState
    const { toggleModal } = this.props
    console.log('>>>>>>>>>> trendingData', trendingData)
    return (
      <div className='home-container'>
        <div className='giphy-grid'>
          {
            trendingData.length > 0 &&
            trendingData.map((item, index) => {
              return (
                <GiphyThumbnail
                  key={index}
                  userInfo={item.user}
                  images={item.images}
                  onImgClick={() => toggleModal('GifViewer', true, item)}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  giphyState: state.giphy
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleModal,
    setTrendingList
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)