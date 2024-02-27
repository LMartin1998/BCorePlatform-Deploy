import { useState } from "react";

export default function EntriesTeams({ setOpenEntries }) {
  const [btnSelection, setBtnSelection] = useState("0");
  const updateBtnSelection = (e) => {
    e.stopPropagation();
    setBtnSelection(e.currentTarget.id);
  };

  return (
    <div className="absolute flex flex-col w-full h-4/5 left-0 right-0 top-1/2 transform -translate-y-1/2 z-50 justify-center items-center">
      <div
        className="flex justify-center items-center rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
          setOpenEntries(false);
        }}
      >
        <button className="bg-transparent">Close</button>
      </div>
      <div className="w-full h-full rounded-lg shadow-lg bg-white">
        <div className="flex w-full justify-center items-center border-b border-gray-300">
          <div
            className="flex w-1/6 m-1 p-1 justify-center items-center rounded-lg"
            id="0"
            onClick={updateBtnSelection}
          >
            <button
              className={`flex w-full justify-center items-center ${
                btnSelection === "0" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Entries
            </button>
          </div>
          <div
            className="flex w-1/6 m-1 p-1 justify-center items-center rounded-lg"
            id="1"
            onClick={updateBtnSelection}
          >
            <button
              className={`flex w-full justify-center items-center ${
                btnSelection === "1" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
