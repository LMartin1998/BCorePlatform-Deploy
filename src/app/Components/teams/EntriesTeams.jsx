import { useState } from "react";
import styles from "@/app/styles/EntriesTeams.module.css";

export default function EntriesTeams({ setOpenEntries }) {
  const [btnSelection, setBtnSelection] = useState("0");
  const updateBtnSelection = (e) => {
    e.stopPropagation();
    setBtnSelection(e.currentTarget.id);
  };

  return (
    <div className={styles.slide_top}>
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
        <div className="w-1/2 flex mt-1">
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
        <div className="w-full h-full flex justify-center items-center">
          <div className="w1/3 h-full flex m-1 justify-center items-center"></div>
          <div className="w1/3 h-full flex m-1 justify-center items-center"></div>
          <div className="w1/3 h-full flex m-1 justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
}
