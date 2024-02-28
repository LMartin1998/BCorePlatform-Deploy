import { useEffect, useRef, useState } from "react";

export default function GenreDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [genre, setGenre] = useState("Prefer no respond");

  const updateGenre = (e) => {
    e.stopPropagation();
    setGenre(e.target.text);
  };

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
    <div
      className="w-11/12 flex m-1 justify-center items-center"
      ref={dropdownRef}
    >
      <div className="w-full relative flex flex-col justify-center items-center rounded-md">
        <button
          id="menu-button"
          className="w-full items-center mt-1 mb-1 p-2 border rounded-md"
          type="text"
          aria-haspopup="true"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          {genre}
        </button>
        {open && (
          <div
            className="absolute top-8 z-10 mt-1 w-28 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                onClick={updateGenre}
              >
                Male
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={updateGenre}
              >
                Female
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={updateGenre}
              >
                Prefer no respond
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
