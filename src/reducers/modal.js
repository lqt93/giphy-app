const initialState = {
  GifViewer: {
    isOpen: false,
    data: {}
  }
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_TOGGLE':
      return {
        ...state,
        [action.payload.modalName]: {
          isOpen: action.payload.isOpen,
          data: action.payload.data ? action.payload.data : state[action.payload.modalName].data
        }
      }
    default:
      return state
  }
}

export default modal
