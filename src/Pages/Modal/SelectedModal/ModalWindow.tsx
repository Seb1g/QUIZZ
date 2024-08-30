import { ModalContent } from './ModalContent';
import { useState, FC } from 'react';
import { Button } from '@nextui-org/react';

export const ModalWindow: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button color="default" variant="bordered"
        className='openModalButton'
        onClick={() => setOpen(true)}>
        Let's Play!
      </Button>
      <div>
        {open &&
          <div
            className="wrapperModal">
            <ModalContent setOpen={setOpen}></ModalContent>
          </div>}
      </div>
    </div>
  )
};