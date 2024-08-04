import { TextProps } from "../../types"

const SmallText = ({ text, className }: TextProps) => {
  return (
    <div className={`text-sm font-bold ${className}`}>{text}</div>
  )
}

export default SmallText