import React, { useState } from 'react';
import clsx from 'clsx';
import Chip from './Chip';

const DropdownGeneral = ({ options, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    const isSelected = selectedOptions.some((selectedOption) => selectedOption.value === option.value);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption.value !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={clsx(
            'inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 focus:outline-none focus:border-blue-300 transition ease-in-out duration-150',
            { 'rounded-t-md': !isOpen, 'rounded-b-md': isOpen }
          )}
          onClick={handleToggleDropdown}
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOptions.length > 0
            ? selectedOptions.map((option) => option.label).join(', ')
            : buttonText}
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
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className={clsx(
                  'flex items-center justify-between px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100',
                  { 'rounded-b-md': option === options[options.length - 1] }
                )}
              >
                <span>{option.label}</span>
                {/* <Chip label={option.label}></Chip> */}
                <input
                  type="checkbox"
                  checked={selectedOptions.some((selectedOption) => selectedOption.value === option.value)}
                  className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-400 focus:outline-none focus:ring-2"
                  readOnly
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownGeneral;
