import { useNavigate } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../helper";

const Navbar = () => {
  const navigate = useNavigate();

  const handleTransactionClick = () => {
    navigate("/");
  };

  const handleLogoutClick = () => {
    removeUserFromLocalStorage();
    navigate("/login");
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={handleTransactionClick}
              className="text-gray-900 font-medium hover:text-gray-700  py-2 rounded-md text-sm"
            >
              Transaction
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={handleLogoutClick}
              className="text-gray-900 font-medium hover:text-gray-700 px-3 py-2 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
