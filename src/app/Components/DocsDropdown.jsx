"use client";
import { useContext, useState } from "react";
import {
  FaArrowTurnUp,
  FaArrowTurnDown,
  FaArrowRightLong,
  FaArrowLeftLong,
} from "react-icons/fa6";
import { DocContext } from "../contexts/DocsContext";

export default function DocsDropdown() {
  const { filter, updateFilter } = useContext(DocContext);

  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState({});

  const changeOpen = (e) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const changeSubMenu = (e, id) => {
    e.stopPropagation();
    setSubMenu((prevSubMenu) => ({
      ...prevSubMenu,
      [id]: !prevSubMenu[id],
    }));
  };

  return (
    <div
      className="flex items-center text-gray-700 hover:bg-slate-400 hover:rounded-lg hover:text-white py-1 px-3"
      onClick={(e) => changeOpen(e)}
    >
      <div
        type="button"
        id="dropdownMenuButton1"
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
      >
        <div className="flex justify-start">
          {open ? <FaArrowTurnUp size={18} /> : <FaArrowTurnDown size={18} />}
          Filter
        </div>
      </div>
      {open && (
        <div className="origin-top-right absolute right-30 mt-28 z-30 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div
                id="tags"
                className="flex justify-start"
                onClick={(e) => changeSubMenu(e, "tags")}
              >
                <div className="flex justify-start">
                  {subMenu["tags"] ? (
                    <FaArrowLeftLong size={18} />
                  ) : (
                    <FaArrowRightLong size={18} />
                  )}
                  Tags
                </div>
              </div>
              {subMenu["tags"] && (
                <div
                  className="flex flex-col items-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <button>Electrical</button>
                  <button>Mechanical</button>
                </div>
              )}
            </div>
            <div
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div
                id="extension"
                className="flex justify-start"
                onClick={(e) => changeSubMenu(e, "extension")}
              >
                <div className="flex justify-start">
                  {subMenu["extension"] ? (
                    <FaArrowLeftLong size={18} />
                  ) : (
                    <FaArrowRightLong size={18} />
                  )}
                  Extensions
                </div>
              </div>
              {subMenu["extension"] && (
                <div
                  className="flex flex-col items-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  <button>PDF</button>
                  <button>DOCX</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
