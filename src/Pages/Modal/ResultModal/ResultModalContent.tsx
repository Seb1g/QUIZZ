import { ResultModalContentType, ResultModalContentProps } from "../../../Shared/Types/types"
import { ReadAllLocalStorage } from "../../../Processes/ReadAllLocalStorage";
import "../../../Shared/Styles/ScrollBar.sass"
import React from 'react';

export const ResultModalContent: React.FC<ResultModalContentProps> = ({ setOpen }) => {
  const localStorageData = ReadAllLocalStorage();
  const objectArray: ResultModalContentType[] = Object.values(localStorageData).map((str: string) => JSON.parse(str));

  return (
    <div
    style={{
      backgroundColor: "#fff",
      width: "600px",
      maxWidth: "600px",
      maxHeight: "500px",
      padding: "30px 30px",
      borderRadius: "10px",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
      transition: "all 0.5s ease-in-out",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
    >
      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          width: "100%",
          marginBottom: "20px",
          display: "grid",
          gap: "10px",
          backgroundColor: "#e3e3e3",
          padding: "25px 35px",
          borderRadius: "10px",
        }}>
        {objectArray.map((item: ResultModalContentType, index: number) => (
          <div key={index}
            style={{
              backgroundColor: "#c9c9c9",
              padding: "10px",
              borderRadius: "10px",
              display: "grid",
              placeItems: "center",
              marginBottom: "10px",
            }}>
            Correct Answers {item.correctAnswers} from {item.valueQuestion} Questions
            {item.category !== null
              ? (<div> {`In category ${item.category}`}</div>)
              : ""}
          </div>
        ))}
      </div>
      <button onClick={() => setOpen(false)}
        style={{
          backgroundColor: "#c9c9c9",
          height: "40px",
          width: "80px",
          borderRadius: "10px",
          alignSelf: "center",
        }}>
        Close
      </button>
    </div>
  )
}