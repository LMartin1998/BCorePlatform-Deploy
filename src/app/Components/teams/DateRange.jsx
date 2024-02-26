import { useState } from "react";

export default function DateRange() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center">
      <button
        id="menu-button"
        className={`flex items-center text-gray-700 rounded-lg ${
          open
            ? "bg-slate-400 text-white"
            : "hover:bg-slate-400 hover:text-white"
        } py-1 px-3`}
        type="text"
        aria-haspopup="true"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prevOpen) => !prevOpen);
        }}
      ></button>
    </div>
  );
}
