interface PopupProps {
  onClose: () => void;
}
import { useState } from "react";

const Popup = ({ onClose }: PopupProps) => {
  const [newCustomerName, setNewCustomerName] = useState("");

  const handleAddCustomer = () => {
    // Implement logic to add the new customer here
    console.log("New customer added:", newCustomerName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add New Customer</h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomerName}
          onChange={(e) => setNewCustomerName(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddCustomer}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
