import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function FilesDropdown() {
  const [open, setOpen] = useState(false);
  const changeOpen = (e) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button className="m-1 rounded-lg hover:ring-2" onClick={changeOpen}>
        <HiOutlineDotsVertical size={16}></HiOutlineDotsVertical>
      </button>
      {open && (
        <div
          className="absolute right-0 top-full z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
            >
              Delete
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Edit
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
