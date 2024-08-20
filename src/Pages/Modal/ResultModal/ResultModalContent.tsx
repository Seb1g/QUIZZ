import "../../../Shared/Styles/ScrollBar.sass"
import React from 'react';

type result = {
  correctAnswers: number;
  valueQuestion: number;
  category: string;
}

type ResultModalContentProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ResultModalContent: React.FC<ResultModalContentProps> = ({ setOpen }) => {
  function readAllLocalStorage() {
    const allItems: { [key: string]: string } = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value = localStorage.getItem(key) ?? "";
        allItems[key] = value;
      }
    }
    return allItems;
  }

  const localStorageData = readAllLocalStorage();

  const objectArray: result[] = Object.values(localStorageData).map((str: string) => JSON.parse(str));
  console.log(localStorageData);

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
        {objectArray.map((item: result, index: number) => (
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