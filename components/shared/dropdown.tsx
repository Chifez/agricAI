'use client';

import React, { useState, useEffect } from 'react';
// import { RiArrowDropDownLine } from 'react-icons/ri';

type DropDownProps = {
  options: string[];
  label: string;
  placeholder: string;
  initialState: string;
  className?: string;
  onChange?: (value: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({
  options,
  label,
  placeholder,
  initialState,
  className,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleSelect = (value: string) => {
    setInputValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col ">
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type="text"
          id={label}
          list="dropdown-options"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => handleSelect(inputValue)}
          className={` ${className} flex-1 outline-none flex-grow mr-1`}
        />

        <datalist id="dropdown-options">
          {options.map((item, index) => (
            <option key={index} value={item} />
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default DropDown;
