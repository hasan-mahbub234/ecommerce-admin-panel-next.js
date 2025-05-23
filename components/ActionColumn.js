import ActionButton from "@/utils/ActionButton";
import React from "react";

function ActionColumn({ editFunc, dltFunc }) {
  return (
    <div className="flex flex-row items-center">
      <ActionButton
        content={() => (
          <div className="flex flex-row itemc-center">
            <i className="fa-solid fa-pen mt-[6px] mr-1 text-[10px]"></i>
            <p>Edit</p>
          </div>
        )}
        change={editFunc}
        style={"bg-green-600 hover:bg-green-700 mr-3"}
      />
      {dltFunc && (
        <ActionButton
          change={dltFunc}
          content={() => (
            <div className="flex flex-row itemc-center">
              <i className="fa-solid fa-trash-can mt-[6px] mr-1 text-[10px]"></i>
              <p>Delete</p>
            </div>
          )}
          style={"bg-red-600 hover:bg-red-700"}
        />
      )}
    </div>
  );
}

export default ActionColumn;
