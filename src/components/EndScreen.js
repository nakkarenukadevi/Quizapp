import React, { useContext } from "react";
import { QuizContext } from "./Context";
import { Questions } from "./QuesionBank";
import "./App.css";
const EndScreen = () => {
  let { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Game</button>
    </div>
  );
};

export default EndScreen;
