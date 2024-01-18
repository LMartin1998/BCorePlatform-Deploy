import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toolMode = (mode) => {
    console.log(`Selected mode: ${mode}`);
    // Puedes realizar las acciones correspondientes para cada modo aquí
    // Por ahora, simplemente imprime el modo seleccionado en la consola
    setIsOpen(false); // Cerrar el dropdown después de seleccionar una opción
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 transition ease-in-out duration-150"
        id="dropdownMenuButton1"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        Tools
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.293.707l-4 4a1 1 0 01-1.414-1.414L8.586 11H3a1 1 0 010-2h5.586l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 01.293.707V12z"
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
              onClick={() => toolMode('progress')}
            >
              Progress
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => toolMode('spr')}
            >
              Delete
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => toolMode('hide')}
            >
              Hide
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => toolMode('oneHalfTT')}
            >
              One half torque tube
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => toolMode('quarterHalfTT')}
            >
              Quarter torque tube
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => toolMode('threeQuartersHalfTT')}
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
