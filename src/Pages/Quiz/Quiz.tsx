import { useGetDynamicDataQuery } from "../../Shared/Redux/Slices/getDataSlice";
import { useMixingAnswer  } from "../../Processes/MixingAnswer";
import { RootState } from "../../Shared/Redux/Store/store";
import { htmlDecode } from "../../Processes/htmlDecode";
import { useSelector } from "react-redux";
import { useOnClickAnswer } from "../../Processes/ClickAnswer";

export const Quiz = () => {
  const { answerStep, questionStep } = useSelector((state: RootState) => state.quizStep);
  const { answers, question } = useSelector((state: RootState) => state.quizData);
  const { data: items, isLoading } = useGetDynamicDataQuery("");

  useMixingAnswer(items ?? null);

  const { onClickAnswer } = useOnClickAnswer(items ?? undefined);

  if (isLoading || !items || !answers || !question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="questionBlock" style={{ display: "flex", flexDirection: "column" }}>
      <div className="progressBar"></div>
      <h1>{htmlDecode(question[questionStep]?.toString())}</h1>
      <ul>
        {answers[answerStep]?.map((item, index) => (
          <button key={index} onClick={() => onClickAnswer(item)}>
            {htmlDecode(item)}
          </button>
        ))}
      </ul>
    </div>
  );
};