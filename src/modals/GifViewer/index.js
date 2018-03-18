import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './GifViewer.scss'
// Actions
import { toggleModal } from '../../actions/modal'
// Components
import DefaultModal from '../DefaultModal'


class GifViewerModal extends React.Component {
  render () {
    const {
      GifViewer,
      onCancel,
    } = this.props
    if (!GifViewer.data.images) return null
    return (
      <DefaultModal
        id='gif-viewer'
        isOpen={GifViewer.isOpen}
        handleCancel={() => onCancel()}>
        <div className='gif-viewer'>
          <div className='gif__img-container'>
            <img src={GifViewer.data.images.downsized_large.url} alt='gif-img' />
          </div>
          <div className='gif__user-container'>
            <div className='user-row user-ava'>
              {
                GifViewer.data.user &&
                <a href={GifViewer.data.user.profile_url} target='__blank'>
                  <img src={GifViewer.data.user.avatar_url} alt='user-ava' />
                </a>
              }
            </div>
            <div className='user-row user-info'>
              <div className='info-row gif-title'> {GifViewer.data.title.split(' by ')[0]} </div>
              {
                GifViewer.data.user &&
                <div className='info-row'> by <a href={GifViewer.data.user.profile_url} target='__blank'> {GifViewer.data.username} </a> on <span> {GifViewer.data.import_datetime} </span> </div>
              }
            </div>
          </div>
        </div>
      </DefaultModal>
    )
  }
}

GifViewerModal.propTypes = {

}

const mapStateToProps = (state) => ({
    ...state.modal
})

const mapDispatchToProps = (dispatch) => ({
  onCancel: (value) => dispatch(toggleModal('GifViewer', false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GifViewerModal)