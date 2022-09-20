import { ReactComponent as Logo } from "./logo.svg";
import { useState } from "react";
import Star from "./components/Star";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hoverState, setHoverState] = useState(0);

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <Logo className="App-logo" />
      <h1>Amazon Star Rating</h1>
      <div className="flex-container">
        {stars.map((star) => {
          return (
            <Star
              key={star}
              starId={star}
              rating={hoverState || rating}
              onMouseEnter={() => setHoverState(star)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => setRating(star)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
