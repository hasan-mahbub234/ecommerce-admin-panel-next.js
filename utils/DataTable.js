import React from "react";

function DataTable({ data, columns }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border-[1px] border-cyan-700 shadow-md">
        {/* Table Head */}
        <thead className="bg-cyan-700 text-white">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="border border-gray-700 px-4 py-2 text-left font-poppins font-[500] text-[14px]"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-400 px-4 py-2"
                  >
                    {column.render
                      ? column.render(row) // 🔥 Call render function if available
                      : row[column.key] !== undefined
                      ? row[column.key]
                      : "N/A"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
