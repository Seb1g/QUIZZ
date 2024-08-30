import { ResultModalContentType, ResultModalContentProps } from "../../../Shared/Types/types"
import { ReadAllLocalStorage } from "../../../Features/ReadAllLocalStorage";
import "../../../Shared/Styles/ModalWindow/ResultModalStyle/ResultModalContent.sass"
import React from 'react';

export const ResultModalContent: React.FC<ResultModalContentProps> = ({ setOpen }) => {
  const localStorageData = ReadAllLocalStorage();
  const objectArray: ResultModalContentType[] = Object
  .values(localStorageData)
  .map((str: string) => JSON.parse(str));

  return (
    <div className="modalBlock">
      <div className="dataContainer">
        {objectArray.map((item: ResultModalContentType, index: number) => (
          <div key={index} className="data">
            Correct Answers {item.correctAnswers} from {item.valueQuestion} Questions
            {item.category !== null
              ? (<div> {`In category ${item.category}`}</div>)
              : ""}
          </div>
        ))}
      </div>
      <button onClick={() => setOpen(false)}
      className="modalButton">
        Close
      </button>
    </div>
  )
}