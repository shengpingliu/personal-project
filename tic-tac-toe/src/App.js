import { ReactComponent as Logo } from "./logo.svg";
import { useState } from "react";
import { calculateWinner } from "./helper";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  // let cubeNumber = [];

  const restartGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXisNext(true);
  };
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <div className="App">
      <Logo className="App-logo" />
      <div className="game">
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
      <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default App;
