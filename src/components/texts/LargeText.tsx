import { TextProps } from "../../types"

const LargeText = ({ text, className }: TextProps) => {
  return (
    <div className={`text-xl font-bold ${className}`}>
      {text}
    </div>
  )
}

export default LargeText