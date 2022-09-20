import "./GameCube.css";

const GameCube = ({ value, onClick }) => {
  const style = value ? `game-cube squares ${value}` : "game-cube squares";
  return (
    <button onClick={onClick} className={style}>
      {value}
    </button>
  );
};

export default GameCube;
