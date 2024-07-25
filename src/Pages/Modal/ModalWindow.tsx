import Modal from 'react-modal';
import { Fragment, useState, FC } from 'react'
import { ModalContent } from './ModalContent'
Modal.setAppElement('#root');

const ModalWindow: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const modalContent = (
    <div>
      <ModalContent />
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