import { GenerateLinkButton } from '../../../Widgets/GenerateLinkButton/GenerateLinkButton';
import { SelectDifficulty } from '../../../Widgets/Dropdown/SelectDifficulty';
import { ValueQuestions } from '../../../Widgets/NumberInput/ValueQuestions';
import { SelectCategory } from '../../../Widgets/Dropdown/SelectCategory';
import { SelectType } from '../../../Widgets/Dropdown/SelectType';
import { QuestionsWindow } from '../../QuestionsWindow';
import { Routes, Route } from 'react-router-dom';
import { ResultModalContentProps } from '../../../Shared/Types/types';
import '../../../Shared/Styles/ModalWindow/SelectedModalStyle/ModalWindowContent.sass';

export const ModalContent: React.FC<ResultModalContentProps> = ({ setOpen }) => {
  return (
    <div
      className='modalBlock'>
      <div
        className='dataContainer'>
        <SelectCategory />
        <ValueQuestions />
        <SelectDifficulty />
        <SelectType />
        <GenerateLinkButton />
        <Routes>
          <Route path="/question" element={<QuestionsWindow />} />
        </Routes>
      </div>
      <button
        className='modalButton'
        onClick={() => setOpen(false)}>
        Close
      </button>
    </div>
  )
};