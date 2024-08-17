import { ModalContent } from './ModalContent'
import "../../Shared/Styles/ModalWindow.sass"
import "../../Shared/Styles/MainPage.sass"
import { useState, FC } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalWindow: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const modalContent = (
    <div className='modalContent'>
      <ModalContent />
      <button onClick={() => setModalIsOpen(false)}>Close</button>
    </div>
  );
  return (
    <div className="fragment">
      <button onClick={() => setModalIsOpen(true)} className="mainButton">Let's start playing!</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="mainModal">
        {modalContent}
      </Modal>
    </div>
  );
};

export default ModalWindow;