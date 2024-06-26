import { useEffect, useRef, useState } from "react";
import {
  HiOutlineSortDescending,
  HiOutlineSortAscending,
} from "react-icons/hi";

export default function TableSort({ options, table }) {
  const [open, setOpen] = useState(false);

  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderOptions = () => {
    return options.map((option) => (
      <div className="py-1" key={option.label} role="none">
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          role="menuitem"
          tabIndex="-1"
          id={`menu-item-${option.label}`}
          onClick={(e) => {
            e.stopPropagation();
            table.getColumn(option.label).toggleSorting();
          }}
        >
          {option.value}
        </a>
      </div>
    ));
  };

  return (
    <div className="flex flex-row" ref={sortRef}>
      <div className="relative inline-block text-left">
        <button
          id="menu-button"
          className={`flex items-center text-gray-700 rounded-lg ${
            open
              ? "bg-slate-400 text-white dark:bg-blue-800 dark:text-white"
              : "hover:bg-slate-400 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-800 dark:text-white"
          } py-1 px-3`}
          type="text"
          aria-haspopup="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          {open ? (
            <HiOutlineSortAscending size={16}></HiOutlineSortAscending>
          ) : (
            <HiOutlineSortDescending size={16}></HiOutlineSortDescending>
          )}
          Sort
        </button>
        {open && (
          <div
            className="absolute right-0 z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            {renderOptions()}
          </div>
        )}
      </div>
    </div>
  );
}
