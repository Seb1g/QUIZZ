import { ModalWindow } from './Modal/SelectedModal/ModalWindow';
import { ResultModalWindow } from './Modal/ResultModal/ResultModalWindow';
import React from 'react';

export const MainPage: React.FC = () => {
  return (
    <div className="startWrapper">
      <h1 className="mainHeadline">My Quiz App</h1>
      <div className='buttonsContainer'>
        <ResultModalWindow></ResultModalWindow>
        <ModalWindow></ModalWindow>
      </div>
    </div>
  );
};