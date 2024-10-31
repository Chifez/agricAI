'use client';

import React, { useState, useEffect } from 'react';

type DropDownProps = {
  options: string[];
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  initialState: string;
  className?: string;
  onChange?: (name: string, value: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({
  options,
  label,
  required = false,
  name,
  placeholder,
  initialState,
  className,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleSelect = (value: string) => {
    setInputValue(value);
    if (onChange) onChange(name, value);
  };

  return (
    <div className="flex flex-col ">
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type="text"
          id={label}
          name={name}
          required={required}
          list="dropdown-options"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (onChange) onChange(name, e.target.value);
          }}
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
