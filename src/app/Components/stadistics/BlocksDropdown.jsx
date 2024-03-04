import { useContext, useEffect, useRef, useState } from "react";
import SelectBlock from "@/app/components/steps/SelectBlock";
import { GridContext } from "@/app/contexts/GridContext";

export default function BlocksDropdown() {
  const { setSelectedBlocks } = useContext(GridContext);
  const [selection, setSelection] = useState("All");
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-end items-center">
      <div className="w-1/6 flex justify-end items-center" ref={dropdownRef}>
        <button
          className="w-full mr-5 flex justify-center items-center border border-blue-500 rounded-lg bg-white hover:bg-gray-300 hover:cursor-pointer"
          type="text"
          aria-haspopup="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          <p className="m-1">{selection}</p>
        </button>
        {open && (
          <div
            className="absolute w-1/3 h-4/6 top-36 right-5 pr-3 overflow-auto"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelection("All");
                  setSelectedBlocks([]);
                }}
              >
                Clear
              </a>
            </div>
            <SelectBlock></SelectBlock>
          </div>
        )}
      </div>
    </div>
  );
}
