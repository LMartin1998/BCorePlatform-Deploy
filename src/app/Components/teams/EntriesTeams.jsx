import { useState } from "react";

export default function EntriesTeams({ setOpenEntries }) {
  const [btnSelection, setBtnSelection] = useState("0");
  const updateBtnSelection = (e) => {
    e.stopPropagation();
    setBtnSelection(e.currentTarget.id);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="flex justify-center items-center w-full h-[6%] rounded-lg shadow-xl"
        onClick={(e) => {
          e.stopPropagation();
          setOpenEntries(false);
        }}
      >
        <button className="flex w-fit h-fit justify-center items-center rounded-lg p-1 bg-gray-100 hover:bg-gray-300">
          Close
        </button>
      </div>
      <div className="w-full h-full bg-white rounded-lg">
        <div className="flex w-full h-[6%] justify-center items-center">
          <div
            className="flex w-1/6 m-1 p-1 justify-center items-center rounded-lg"
            id="0"
            onClick={updateBtnSelection}
          >
            <button
              className={`flex w-full justify-center items-center ${
                btnSelection === "0"
                  ? "border-b-2 border-blue-300"
                  : "rounded-lg hover:bg-blue-50"
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
                btnSelection === "1"
                  ? "border-b-2 border-blue-300"
                  : "rounded-lg hover:bg-blue-50"
              }`}
            >
              Summary
            </button>
          </div>
        </div>
        <div className="flex w-1/2 h-[5%] mt-1">
          <div className="w-1/3 flex border rounded-lg bg-blue-300">
            <button className="w-full">Filter</button>
          </div>
          <div className="w-1/3 flex border rounded-lg bg-blue-300">
            <button className="w-full">Filter</button>
          </div>
          <div className="w-1/3 flex border rounded-lg bg-blue-300">
            <button className="w-full">Filter</button>
          </div>
        </div>
        <div className="flex w-full h-[85%] justify-center items-center">
          <div className="w1/3 h-full flex m-1 justify-center items-center"></div>
          <div className="w1/3 h-full flex m-1 justify-center items-center"></div>
          <div className="w1/3 h-full flex m-1 justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}
