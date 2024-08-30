import { FC, useState } from "react";
import { ResultModalContent } from "./ResultModalContent";
import "../../../Shared/Styles/ModalWindow/ResultModalStyle/ResultModalContent.sass"
import { Button } from "@nextui-org/react";

export const ResultModalWindow: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button color="default" variant="bordered"
        className="openModalButton"
        onClick={() => setOpen(true)}>
        Your Results
      </Button>
      <div>
        {open &&
          <div className="wrapperModal">
            <ResultModalContent setOpen={setOpen}></ResultModalContent>
          </div>
        }
      </div>
    </div >
  )
};