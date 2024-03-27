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
    <div className="flex flex-row w-1/4" ref={dropdownRef}>
      <div className="relative inline-block text-left">
        <button
          id="menu-button"
          className={`flex items-center rounded-lg text-white hover:bg-orange-600 dark:text-black dark:bg-[#BB86FC] dark:hover:bg-[#BB70FC] ${
            open
              ? "bg-orange-600 dark:bg-[#BB70FC]"
              : "bg-orange-500 dark:bg-[#BB86FC]"
          } py-1 px-3 m-2`}
          type="text"
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
            className="absolute left-0 z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 dark:divide-black rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-purple-200 dark:text-black"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-purple-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Create Folder
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-purple-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Upload File
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-purple-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Upload Folder
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
