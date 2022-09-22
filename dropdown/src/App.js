import "./App.css";
import { useState } from "react";
import CustomDropdown from "./components/CustomDropdown";

function App() {
  const [curOption, setCurOption] = useState("");

  const options = [
    { key: 1, value: "test1" },
    { key: 2, value: "test2" },
    { key: 3, value: "test3" },
  ];
  return (
    <div className="App">
      <h1>Custom Dropdown</h1>
      <CustomDropdown
        options={options}
        onChange={(item) => setCurOption(item)}
        placeholder="Type to Search"
      />
      <p>Selected Option: {curOption}</p>
    </div>
  );
}

export default App;
