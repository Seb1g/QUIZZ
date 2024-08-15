import { ModalContent } from './ModalContent'
import "../../Shared/Styles/ModalWindow.sass"
import "../../Shared/Styles/MainPage.sass"
import { useState, FC } from 'react'
import Modal from 'react-modal';

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
    <div className='modalContent'>
      <ModalContent />
      <button onClick={closeModal}>Close</button>
    </div>
  );
  return (
    <div className="fragment">
      <button onClick={openModal} className="mainButton">Let's start playing!</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="mainModal">
        {modalContent}
      </Modal>
    </div>
  );
};

export default ModalWindow;