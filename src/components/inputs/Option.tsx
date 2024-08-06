import { useState } from "react";
import Popup from "../popup/Popup";
import { OptionProps } from "../../types";

const Option = ({
  options,
  selectedValue,
  onChange,
  isCustomerOption,
}: OptionProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "add-customer") {
      setIsPopupOpen(true);
    } else {
      onChange(value);
    }
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="placeholder-gray-600 border-[1.5px] border-slate-300 rounded px-2 py-1.5 outline-none w-[160px]"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

        {isCustomerOption && (
          <option value="add-customer">Tambah Customer Baru</option>
        )}
      </select>

      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default Option;
