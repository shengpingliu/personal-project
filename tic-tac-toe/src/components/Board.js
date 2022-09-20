import GameCube from "./GameCube";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  return (
    <div className="game-board">
      {squares.map((square, i) => (
        <GameCube key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
