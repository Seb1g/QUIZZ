import { Routes, Route } from 'react-router-dom';
import { QuestionsWindow } from "../Pages/QuestionsWindow";
import { SelectCategory } from "./Dropdown/SelectCategory"
import { SelectDifficultyAndType } from './Dropdown/SelectDifficulyAndType';
import { ValueQuestions } from "./NumberInput/ValueQuestions"
import { GenerateLinkButton } from './GenerateLinkButton/GenerateLinkButton';
import "../Shared/styles.css"

const RenderCategory = () => {
  return (
    <div>
      <SelectCategory />
      <ValueQuestions />
      <SelectDifficultyAndType />
      <GenerateLinkButton />
      <Routes>
        <Route path="/question" element={<QuestionsWindow />} />
      </Routes>
    </div>
  )
};

export default RenderCategory;