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