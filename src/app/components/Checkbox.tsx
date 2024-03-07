import { useState, useEffect } from "react";
import { CheckedIcon } from "./Icons";

let id = 0;

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxId, setCheckboxId] = useState("");

  useEffect(() => {
    setCheckboxId(`miCheckbox-${id++} checkAll`);
  }, []);

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <>
      <input
        type="checkbox"
        id={checkboxId}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <label
        htmlFor={checkboxId}
        className={`flex items-center justify-center item cursor-pointer w-4 h-4 border border-solid border-white rounded text-white ${
          isChecked
            ? "bg-gradient-to-r from-[#0B979A] to-[#955BF1] border-0"
            : "bg-transparent"
        }`}
      >
        {isChecked && <CheckedIcon />}
      </label>
    </>
  );
}
