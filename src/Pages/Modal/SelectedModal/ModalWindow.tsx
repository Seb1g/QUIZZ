import { ModalContent } from './ModalContent'
import "../../../Shared/Styles/ModalWindow.sass"
import "../../../Shared/Styles/MainPage.sass"
import { useState, FC } from 'react'

const ModalWindow: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Open
      </button>
      <div>
        {open &&
          <div>
            <ModalContent setOpen={setOpen}></ModalContent>
          </div>}
      </div>
    </div>
  )
};

export default ModalWindow;