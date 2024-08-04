import { ButtonProps } from "../../types"

const Button = ({icon,text}: ButtonProps) => {
  return (
    <button className="bg-indigo-500 px-3 py-1.5  rounded flex items-center justify-center text-white border-[1px] border-indigo-500 ">
       {icon && <span className={`${text ? "mr-2" : ""} w-5 text-white`}>{icon}</span>}
       {text && <span>{text}</span>}
    </button>
  )
}

export default Button