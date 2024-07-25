import { Routes, Route } from "react-router-dom";
import { QuestionsWindow } from "../QuestionsWindow";
import { SelectCategory } from "../../Widgets/Dropdown/SelectCategory"
import { SelectDifficulty } from '../../Widgets/Dropdown/SelectDifficulty';
import { SelectType } from "../../Widgets/Dropdown/SelectType";
import { ValueQuestions } from "../../Widgets/NumberInput/ValueQuestions"
import { GenerateLinkButton } from '../../Widgets/GenerateLinkButton/GenerateLinkButton';
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