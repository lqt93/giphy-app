import React from 'react'
import PropTypes from 'prop-types'
import './DefaultModal.scss'

class DefaultModal extends React.Component {
  componentWillMount () {
    const {
      handleCancel,
      id
    } = this.props
    document.onclick = (event) => {
      if (event === undefined) event = window.event
      var target = 'target' in event ? event.target : event.srcElement
      if (target.getAttribute('id') === `${id}-default-modal-layout`) {
        handleCancel()
      }
    }
  }

  componentWillUpdate (nextProps) {
    let body = document.body
    if (nextProps.isOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }

  render () {
    const {
      id,
      isOpen,
      handleCancel,
      modalStyle,
      children
    } = this.props
    return (
      <div
        className='default-modal-container'
        style={{ display: isOpen ? 'block' : 'none' }}
        id={`${id}-default-modal-layout`}>
        <div
          className='close-btn'
          onClick={() => handleCancel()}>
          <i className='fa fa-times' aria-hidden='true' />
        </div>
        <div className='default-modal' style={modalStyle}>
          <div className='inside-container'>
            <div className='inside-container-1'>
              {isOpen && children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DefaultModal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  handleCancel: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
  isOpen: PropTypes.bool.isRequired
}

export default DefaultModal