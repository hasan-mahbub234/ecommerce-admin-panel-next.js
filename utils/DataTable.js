"use client";
import React, { use, useState } from "react";
import SelectInput from "./SelectInput";
import ActionButton from "./ActionButton";

function DataTable({
  data,
  columns,
  itemsPerPageOptions = [5, 10, 20],
  handleDeleteSelectedRows,
  selectedRows,
  setSelectedRows,
  showRowQuantity,
  showPagination,
  showSelectRow,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const [tableData, setTableData] = useState(data);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle select all rows
  const handleSelectAll = () => {
    if (selectedRows.size === tableData.length) {
      setSelectedRows(new Set());
    } else {
      const allRows = new Set(tableData.map((_, index) => index));
      setSelectedRows(allRows);
    }
  };

  // Handle individual row selection
  const handleRowSelection = (rowIndex) => {
    const updatedSelection = new Set(selectedRows);
    if (updatedSelection.has(rowIndex)) {
      updatedSelection.delete(rowIndex);
    } else {
      updatedSelection.add(rowIndex);
    }
    setSelectedRows(updatedSelection);
  };

  // Handle row quantity change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e));
    setCurrentPage(1); // Reset to the first page
  };

  // Calculate pagination range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = tableData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div className="w-full overflow-x-auto">
      {showRowQuantity && (
        <div className="mb-4 flex items-center justify-end">
          {/* Row Quantity Selector */}
          <SelectInput
            // label="Select Social Media"
            placeholder="Rows per page"
            value={itemsPerPage}
            change={handleItemsPerPageChange}
            dropdownOptions={itemsPerPageOptions}
            style={""}
            renderOption={(option) => (
              <div className="flex items-center">
                <span className="text-gray-700">{option}</span>
              </div>
            )}
            inputstyle={{ width: 100 }}
          />

          {/* Delete Action Button */}
          {selectedRows?.size > 0 && (
            <ActionButton
              change={handleDeleteSelectedRows}
              content={() => (
                <div className="flex flex-row itemc-center py-2">
                  <i className="fa-solid fa-trash-can mt-[6px] mr-1 text-[10px]"></i>
                  <p>Delete All</p>
                </div>
              )}
              style={"bg-pink-500 hover:bg-red-600 ml-2"}
            />
          )}
        </div>
      )}

      <table className="w-full border-collapse border-[1px] border-cyan-700 shadow-md">
        {/* Table Head */}
        <thead className="bg-cyan-700 text-white">
          <tr>
            {/* Checkbox Column */}
            {showSelectRow && (
              <th className="border border-gray-700 px-4 py-2 text-left font-poppins font-[500] text-[14px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRows?.size === tableData.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}

            {columns.map((column, index) => (
              <th
                key={index}
                className="border border-gray-700 px-4 py-2 text-left font-poppins font-[500] text-[12px]"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {/* Row Checkbox */}
                {selectedRows && (
                  <td className="border border-gray-700 px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(rowIndex)}
                      onChange={() => handleRowSelection(rowIndex)}
                    />
                  </td>
                )}

                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-400 px-2 py-2 text-[10px] font-roboto font-[500]"
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
              <td colSpan={columns.length + 1} className="text-center py-4">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {showPagination && (
        <div className="mt-4 flex justify-end items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-[6px] py-[1px] border-[2px] border-cyan-700 text-cyan-700 text-[12px] rounded-[1px] mr-1 cursor-pointer"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="flex flex-row items-center text-[13px] font-poppins font-[500]">
            <p className="bg-cyan-100 mx-1 px-[7px] py-[2px]">{currentPage}</p>
            of<p></p>{" "}
            <p className="bg-cyan-100 mx-1 px-[7px] py-[2px]">{totalPages}</p>
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-[6px] py-[1px] border-[2px] border-cyan-700 text-cyan-700 text-[12px] rounded-[1px] ml-1 cursor-pointer"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default DataTable;
