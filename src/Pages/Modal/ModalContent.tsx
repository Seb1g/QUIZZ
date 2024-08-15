import { GenerateLinkButton } from '../../Widgets/GenerateLinkButton/GenerateLinkButton';
import { SelectDifficulty } from '../../Widgets/Dropdown/SelectDifficulty';
import { ValueQuestions } from "../../Widgets/NumberInput/ValueQuestions"
import { SelectCategory } from "../../Widgets/Dropdown/SelectCategory"
import { SelectType } from "../../Widgets/Dropdown/SelectType";
import { QuestionsWindow } from "../QuestionsWindow";
import { Routes, Route } from "react-router-dom";
import "../../Shared/Styles/styles.css"

export const ModalContent = () => {
  return (
    <div>
      <SelectCategory />
      <ValueQuestions />
      <SelectDifficulty />
      <SelectType />
      <GenerateLinkButton />
      <Routes>
        <Route path="/question" element={<QuestionsWindow />} />
      </Routes>
    </div>
  )
};