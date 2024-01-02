import { useEffect, useState, useContext } from "react";

import EndScreen from "./EndScreen";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import { QuizContext } from "./Context";
function App() {
  let [gameState, setGameState] = useState("menu");
  let [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>

      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState == "menu" ? <MainMenu /> : null}
        {gameState == "quiz" ? <Quiz /> : null}
        {gameState == "endScreen" ? <EndScreen /> : null}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
