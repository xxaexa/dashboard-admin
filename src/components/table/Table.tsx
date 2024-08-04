import { TableProps } from "../../types"

const Table = ({columns, data} : TableProps) => {
  return (
    <table className="min-w-full bg-white border border-gray-300 rounded">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className="py-2 px-4 border border-gray-300 text-left">
              {column.header}
            </th>
          ))}
          <th className="py-2 px-4 border border-gray-300 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {columns.map((column) => (
              <td key={column.accessor} className="py-2 px-4 border border-gray-300">
                {row[column.accessor]}
              </td>
            ))}
            <td className="py-2 px-4 flex">
              <button className="hover:text-green-400">Edit</button>
              <p className="pl-2">|</p>
              <button className="hover:text-red-400 ml-2">Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
