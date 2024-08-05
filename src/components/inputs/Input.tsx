import { InputProps } from "../../types";

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="border-[1.5px] border-slate-300 rounded px-2 py-1 outline-none w-[160px]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
