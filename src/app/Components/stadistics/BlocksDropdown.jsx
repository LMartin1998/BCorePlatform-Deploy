import { useState } from "react";

export default function BlocksDropdown() {
  const [selection, setSelection] = useState("All");

  return (
    <div className="w-full flex justify-end items-center">
      <button className="m-1 flex justify-center items-center border border-blue-500 rounded-lg bg-white hover:bg-gray-300 hover:cursor-pointer">
        <p className="m-1">{selection}</p>
      </button>
    </div>
  );
}
