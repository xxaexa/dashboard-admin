import { MainWrapProps } from "../../types";

const MainWrap = ({ children, style }: MainWrapProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-full max-w-4xl px-8 space-y-8 bg-white rounded shadow-md ${style}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainWrap;
