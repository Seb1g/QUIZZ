import { useGetDynamicDataQuery } from "../../Shared/Redux/Slices/getDataSlice";
import { useMixingAnswer } from "../../Features/MixingAnswer";
import { RootState } from "../../Shared/Redux/Store/store";
import { htmlDecode } from "../../Features/htmlDecode";
import { useSelector } from "react-redux";
import { useOnClickAnswer } from "../../Features/ClickAnswer";

export const Quiz = () => {
  const { answerStep, questionStep } = useSelector((state: RootState) => state.quizStep);
  const { answers, question } = useSelector((state: RootState) => state.quizData);
  const { data: items, isLoading } = useGetDynamicDataQuery("");

  useMixingAnswer(items ?? null);

  const { onClickAnswer } = useOnClickAnswer(items ?? undefined);

  if (isLoading || !items || !answers || !question) {
    return <div
      className="quizLoading"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#968a7e"
      }}>
      <p style={{ color: "white", fontSize: "2rem" }}>
        Loading...
      </p>
    </div>;
  }

  return (
    <div className="questionBlock" style={{ display: "flex", flexDirection: "column" }}>
      <div className="progressBar"></div>
      <div className="questionString">
        <h1>{htmlDecode(question[questionStep]?.toString())}</h1>
      </div>
      <div className="answerBlock">
        <ul>
          {answers[answerStep]?.map((item, index) => (
            <div className="answerItem">
              <button key={index} onClick={() => onClickAnswer(item)}>
                {htmlDecode(item)}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};