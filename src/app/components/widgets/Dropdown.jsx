import React, { useContext, useState } from "react";
import { GridContext } from "../../contexts/GridContext";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { changeToolMode } = useContext(GridContext);

    const toolMode = (mode) => {
        changeToolMode(mode);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 transition ease-in-out duration-150"
                id="dropdownMenuButton1"
                aria-haspopup="true"
                aria-expanded={isOpen ? "true" : "false"}
            >
                Tools
                <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 z-30 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => toolMode("progress")}
                        >
                            Progress
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => toolMode("spr")}
                        >
                            Delete
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => toolMode("hide")}
                        >
                            Hide
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => toolMode("oneHalfTT")}
                        >
                            One half torque tube
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => toolMode("quarterHalfTT")}
                        >
                            Quarter torque tube
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => toolMode("threeQuartersHalfTT")}
                        >
                            Three quarters torque tube
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
