import { useState } from "react";

export default function TeamsDropdown({
  globalFilter,
  setGlobalFilter,
  columnFilter,
  setColumnFilter,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <input
        className="border border-gray-500 rounded mr-1 focus:outline-none focus:border-black focus:border-2"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          e.stopPropagation();
          setGlobalFilter(e.target.value);
        }}
      ></input>
      <div className="relative inline-block text-left">
        <button
          id="menu-button"
          className="flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3"
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
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("All");
                }}
              >
                All
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("owner");
                }}
              >
                #
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("tags");
                }}
              >
                Name
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("extension");
                }}
              >
                Team
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Size");
                }}
              >
                Role
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Size");
                }}
              >
                Phone
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Size");
                }}
              >
                Buggy
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Size");
                }}
              >
                Skidsteer
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("Size");
                }}
              >
                Status
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
