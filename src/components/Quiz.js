import React, { useState } from "react";
import { Questions } from "./QuesionBank";
import { QuizContext } from "./Context";
import { useContext } from "react";
const Quiz = () => {
  let [optionChosen, setOptionChosen] = useState("");

  let [currQuestion, setCurrQuestion] = useState(0);

  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrQuestion(currQuestion + 1);
  };
  const finshQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
          {""}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
          {""}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
          {""}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
          {""}
        </button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button onClick={finshQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
