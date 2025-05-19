import { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

function CustomSelect({ options, value, onChange, placeholder, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <div
        className="custom-select__control"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <BsChevronDown className="text-gray-500" />
      </div>
      {isOpen && (
        <div className="custom-select__menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-select__option ${
                value === option.value ? "custom-select__option--selected" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;