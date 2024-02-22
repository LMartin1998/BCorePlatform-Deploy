import { useEffect, useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

export default function AddFiles() {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row w-1/4 m-1" ref={dropdownRef}>
      <button
        className="flex justify-center items-center w-full border border-black rounded-lg bg-orange-500 text-white"
        id="menu-button"
        aria-haspopup="true"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prevOpen) => !prevOpen);
        }}
      >
        <IoAddCircleOutline size={20}></IoAddCircleOutline>
        Add
      </button>
      {open && (
        <div
          className="absolute left-0 z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        ></div>
      )}
    </div>
  );
}
