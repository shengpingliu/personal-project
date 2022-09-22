import { forwardRef, useState } from "react";
import "./CustomDropdown.css";
import withClickOutside from "../withClickOutside";

const CustomDropdown = forwardRef(
  (
    { options, onChange, placeholder = "", selectedKey, open, setOpen },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");

    const onItemSelected = (option) => {
      onChange !== undefined && onChange(option.key);
      onChange !== undefined && setInputValue(option.value);
      setOpen(false);
    };
    const onInputChange = (e) => {
      if (e?.target?.value) {
        setInputValue(e.target.value);
      }
    };
    const onInputClick = () => {
      setOpen((prev) => !prev);
    };

    return (
      <div className="dropdown-container" ref={ref}>
        <div className="input-container" onClick={onInputClick}>
          <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={onInputChange}
          />
        </div>
        <div className={`dropdown ${open ? "visible" : ""}`}>
          {options.map((op) => (
            <div
              key={op.key}
              onClick={() => onItemSelected(op)}
              className="option"
            >
              {op.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default withClickOutside(CustomDropdown);
