import { useState } from 'react';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <label
      className={`${
        isActive ? 'bg-primary' : 'bg-gray-300'
      } relative inline-block w-10 h-6 rounded-full cursor-pointer transition-colors duration-300`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={isActive}
        onChange={toggleButton}
      />
      <span
        className={`${
          isActive ? 'translate-x-full' : 'translate-x-0'
        } inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ease-in-out`}
      />
    </label>
  );
};

export default ToggleButton;
