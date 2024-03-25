import React, { useState } from 'react';
import ToggleButton from '../widgets/ToggleButton';

const ToggleButtonGroup = ({ options, onChange }) => {
  // const [selected, setSelected] = useState(options[0].value);
  const [selected, setSelected] = useState(null);



  const handleClick = (value) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex justify-center">
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          label={option.label}
          active={selected === option.value}
          onClick={() => handleClick(option.value)}
        />
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
