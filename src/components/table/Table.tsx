// Table.tsx
import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
  formatters?: { [key: string]: (value: any) => string };
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  formatters = {},
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
              >
                {col.header}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300"
                >
                  {formatters[col.accessor]
                    ? formatters[col.accessor](row[col.accessor])
                    : row[col.accessor]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex ">
                <button
                  onClick={() => onEdit?.(row)}
                  className=" hover:text-blue-400 mr-4"
                  type="button"
                >
                  Edit
                </button>
                <p className="pr-3">|</p>
                <button
                  onClick={() => onDelete?.(row)}
                  className=" hover:text-red-400"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
