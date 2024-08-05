import { DatePickerProps } from "../../types";

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <input
      className="border-[1.5px] border-slate-300 rounded px-2 py-1 outline-none w-[160px]"
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DatePicker;
