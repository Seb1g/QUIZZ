import ModalWindow from "./Modal/ModalWindow";
import React from "react"

export const MainPage: React.FC = () => {
  return (
      <div className="startWrapper">
        <h1 className="mainHeadline">My Quiz App</h1>
        <ModalWindow></ModalWindow>
      </div>
  );
};