"use client";
import { useContext, useState, useEffect, useRef } from "react";

export default function DocsDropdown({
  globalFilter,
  setGlobalFilter,
  columnFilter,
  setColumnFilter,
}) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

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

  return (
    <div className="flex flex-row" ref={dropdownRef}>
      <input
        className="border border-gray-500 rounded mr-1 focus:outline-none focus:ring-black focus:ring-1 pr-1 pl-1"
        type="text"
        placeholder="Search..."
        onChange={filterSearch}
        value={input}
      ></input>
      <div className="relative inline-block text-left">
        <button
          id="menu-button"
          className={`flex items-center text-gray-700 rounded-lg ${open
            ? "bg-slate-400 text-white"
            : "hover:bg-slate-400 hover:text-white"
            } py-1 px-3`}
          type="text"
          aria-haspopup="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prevOpen) => !prevOpen);
          }}
        >
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
                }}
              >
                Clear
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${filter === "all" ? "bg-blue-100" : ""
                  } hover:bg-gray-200`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("all");
                  setOpen(false);
                }}
              >
                All
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${filter === "file" ? "bg-blue-100" : ""
                  } hover:bg-gray-200`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("file");
                  setOpen(false);
                }}
              >
                File
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${filter === "owner" ? "bg-blue-100" : ""
                  } hover:bg-gray-200`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("owner");
                  setOpen(false);
                }}
              >
                Owner
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${filter === "tags" ? "bg-blue-100" : ""
                  } hover:bg-gray-200`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("tags");
                  setOpen(false);
                }}
              >
                Tags
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${filter === "extension" ? "bg-blue-100" : ""
                  } hover:bg-gray-200`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("extension");
                  setOpen(false);
                }}
              >
                Extension
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${filter === "size" ? "bg-blue-100" : ""
                  } hover:bg-gray-200`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("size");
                  setOpen(false);
                }}
              >
                Size
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
