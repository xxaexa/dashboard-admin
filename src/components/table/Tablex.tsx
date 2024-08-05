import { useState, useEffect } from "react";
import { formatToRupiah } from "../../helper"; // Assuming formatToRupiah is in helper.js
import { TableProps } from "../../types"; // Assuming TableProps defines table structure

interface RowData {
  total: string; // Updated type to string
  [key: string]: any; // Index signature for dynamic property access
}

function Tablex({ columns, data, onDelete, onEdit }: TableProps) {
  const [formattedData, setFormattedData] = useState<RowData[]>([]);

  useEffect(() => {
    const formattedData = data.map((item) => ({
      ...item,
      total: formatToRupiah(item.total), // Formatting total to string
    }));
    setFormattedData(formattedData);
  }, [data]);

  return (
    <table className="min-w-full bg-white border border-gray-300 rounded border-collapse">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.accessor}
              className="py-2 px-4 border border-gray-300 text-left bg-gray-100"
            >
              {column.header}
            </th>
          ))}
          <th className="py-2 px-4 text-left bg-gray-100">Action</th>
        </tr>
      </thead>
      <tbody>
        {formattedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={column.accessor}
                className="py-2 px-4 border border-gray-300"
              >
                {["total", "subtotal"].includes(column.accessor)
                  ? row[column.accessor]
                  : row[column.accessor]}
              </td>
            ))}
            <td className="py-2 px-4 flex items-center">
              <button
                onClick={() => onEdit(rowIndex)}
                className="hover:text-green-400 px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(rowIndex)}
                className="hover:text-red-400 px-2 py-1 rounded"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tablex;
