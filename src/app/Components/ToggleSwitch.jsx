import React, { useState, useEffect } from 'react';

const ToggleSwitch = ({ onChange, checked, label }) => {
  const [isChecked, setChecked] = useState(checked || false);

  useEffect(() => {
    // Actualizar el estado solo si la propiedad checked cambia
    setChecked(checked || false);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isChecked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center">
      <div
        onClick={handleToggle}
        className={`cursor-pointer relative ${isChecked ? 'bg-blue-500' : 'bg-gray-400'} rounded-full w-8 h-4 transition`}
      >
        <div className={`absolute ${isChecked ? 'translate-x-4' : 'translate-x-0'} left-0 bg-white w-4 h-4 rounded-full shadow-md transition transform duration-300 ease-in-out`} />
      </div>
    </div>
  );
};

export default ToggleSwitch;
