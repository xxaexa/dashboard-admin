import { InputUsernameProps } from "../../types";

const InputUsername = ({
  id,
  style,
  name,
  type,
  label,
  value,
  onChange,
}: InputUsernameProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-bold">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        className={`block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  ${style}`}
      />
    </div>
  );
};

export default InputUsername;
