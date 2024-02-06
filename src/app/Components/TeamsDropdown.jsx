import { useState } from "react";

export default function TeamsDropdown({
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

  return (
    <div className="flex flex-row">
      <input
        className="border border-gray-500 rounded mr-1 focus:outline-none focus:border-black focus:border-2"
        type="text"
        placeholder="Search..."
        onChange={filterSearch}
        value={input}
      ></input>
      <div className="relative inline-block text-left">
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
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("all");
                  setGlobalFilter("");
                  setColumnFilter([]);
                  setInput("");
                }}
              >
                Clear
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "all" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("all");
                }}
              >
                All
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "name" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("name");
                }}
              >
                Name
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "team" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("team");
                }}
              >
                Team
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "role" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("role");
                }}
              >
                Role
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "phone" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("phone");
                }}
              >
                Phone
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "buggy" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("buggy");
                }}
              >
                Buggy
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "skidsteer" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("skidsteer");
                }}
              >
                Skidsteer
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className={`text-gray-700 block px-4 py-2 text-sm ${
                  filter === "status" ? "bg-blue-100" : ""
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter("status");
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
