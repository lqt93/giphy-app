export const toggleModal = (modalName, isOpen, data) => {
  return {
    type: 'MODAL_TOGGLE',
    payload: {
      modalName: modalName,
      isOpen: isOpen,
      data: data
    }
  }
}