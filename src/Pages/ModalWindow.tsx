import Modal from 'react-modal';
import { Fragment, useState } from 'react'
import RenderCategory from '../Widgets/RenderCategory'

const ModalWindow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalContent = (
    <div>
      <RenderCategory></RenderCategory>
      <button onClick={closeModal}>Close</button>
    </div>
  )
  return (
      <Fragment>
        <button onClick={openModal}>Выбрать категории и сложность вопросов</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {modalContent}
        </Modal>
      </Fragment>
  )
}

export default ModalWindow;