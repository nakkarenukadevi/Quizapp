import { useEffect, useState, useContext } from "react";
import "./App.css";
import EndScreen from "./components/EndScreen";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./components/Context";
function App() {
  let [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState}
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState == "menu" ? <MainMenu /> : null}
        {gameState == "quiz" ? <Quiz /> : null}
        {gameState == "endScreen" ? <EndScreen /> : null}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
