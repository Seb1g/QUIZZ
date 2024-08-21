import { FC, useState } from "react";
import { ResultModalContent } from "./ResultModalContent";

export const ResultModalWindow: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="openModal"
        onClick={() => setOpen(true)}>
        Open
      </button>
      <div>
        {open &&
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <ResultModalContent setOpen={setOpen}></ResultModalContent>
          </div>
        }
      </div>
    </div >
  )
};