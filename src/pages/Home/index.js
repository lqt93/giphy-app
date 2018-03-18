import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoadingImg from '../../assets/loading.gif'
import './Home.scss'
// Services and actions
import GiphyService from '../../api/giphy'
import { setTrendingList } from '../../actions/giphy'
import { toggleModal } from '../../actions/modal'
// Components
import GiphyThumbnail from '../../components/GiphyThumbnail'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadingMore: false
    }
  }
  componentWillMount () {
    this.getTrendingGifs()
  }
  loadMore () {
    this.getTrendingGifs()
  }
  getTrendingGifs () {
    this.setState({ isLoadingMore: true })
    const {
      limit,
      offset
    } = this.props.giphyState
    GiphyService.getTrendingGifs({
      limit: limit,
      offset: offset
    })
    .then(res => {
      this.props.setTrendingList(res.data)
      this.setState({ isLoadingMore: false })
    })
    .catch(err => {
      console.log('query err', err)
      this.setState({ isLoadingMore: false })
    })
  }
  render () {
    const { trendingData } = this.props.giphyState
    const { toggleModal } = this.props
    return (
      <div className='home-container' id='home-container'>
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
        <div className='load-more'>
          {
            !this.state.isLoadingMore && <span onClick={() => this.loadMore()}> Load more... </span>
          }
          {
            this.state.isLoadingMore && <span> <img src={LoadingImg} alt='loading-img'/> </span>
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