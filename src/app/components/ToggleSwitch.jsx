import React, { useState, useEffect, useContext } from 'react';
import { GridContext } from '../contexts/GridContext';

export default function ToggleSwitch() {

  const { perspectiveMode,
    changePerspectiveMode,} = useContext(GridContext);

  useEffect(() => {
    changePerspectiveMode;
}, [changePerspectiveMode]);

  return (
    <div className="flex items-center">
      <div
        onClick={changePerspectiveMode}
        className={`cursor-pointer relative ${perspectiveMode ? 'bg-blue-500' : 'bg-gray-400'} rounded-full w-8 h-4 transition`}
      >
        <div className={`absolute ${perspectiveMode ? 'translate-x-4' : 'translate-x-0'} left-0 bg-white w-4 h-4 rounded-full shadow-md transition transform duration-300 ease-in-out`} />
      </div>
    </div>
  );
};
