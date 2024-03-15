import { useState, useRef, useEffect } from "react";
import { MdOutlineFilterAlt, MdOutlineFilterAltOff } from "react-icons/md";

export default function TableFilters({
  options,
  globalFilter,
  setGlobalFilter,
  columnFilter,
  setColumnFilter,
}) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");
  const filterSearch = (e) => {
    e.stopPropagation();
    setInput(e.target.value);
    if (filter === "all") {
      setGlobalFilter(e.target.value);
    } else {
      setColumnFilter([
        {
          id: filter,
          value: e.target.value,
        },
      ]);
    }
  };

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

  const renderOptions = () => {
    return options.map((option) => (
      <div className="py-1" key={option.label} role="none">
        <a
          href="#"
          className={`text-gray-700 block px-4 py-2 text-sm ${
            filter === option.label ? "bg-blue-100" : ""
          } hover:bg-gray-200`}
          role="menuitem"
          tabIndex="-1"
          id={`menu-item-${option.label}`}
          onClick={(e) => {
            e.stopPropagation();
            setFilter(option.label);
            setOpen(false);
          }}
        >
          {option.value}
        </a>
      </div>
    ));
  };

  return (
    <div className="flex items-center" ref={dropdownRef}>
      <input
        className="mt-1 mb-1 p-1 w-full border rounded-md text-center dark:focus:outline-none dark:focus:outline-blue-600 dark:placeholder-[#A0AEC0]"
        type="text"
        placeholder="Search..."
        onChange={filterSearch}
        value={input}
      ></input>
      <div className="relative inline-block text-left">
        <button
          id="menu-button"
          className={`flex items-center text-gray-700 rounded-lg ml-1 ${
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
            <MdOutlineFilterAlt size={16}></MdOutlineFilterAlt>
          ) : (
            <MdOutlineFilterAltOff size={16}></MdOutlineFilterAltOff>
          )}
          Filter
        </button>
        {open && (
          <div
            className="absolute left-0 z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                  setFilter("all");
                  setColumnFilter([]);
                  setGlobalFilter("");
                  setInput("");
                  setOpen(false);
                }}
              >
                Clear
              </a>
            </div>
            {renderOptions()}
          </div>
        )}
      </div>
    </div>
  );
}
