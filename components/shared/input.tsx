'use client';

import { ChangeEvent, useState } from 'react';

const UserInput = (props: {
  label?: string;
  required?: boolean;
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const {
    label,
    type,
    name,
    value,
    required = false,
    placeholder,
    className,
    inputChange,
  } = props;
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} id={label} className="w-fit">
          {label}
        </label>
      )}
      <div className="rounded-lg ">
        <input
          type={type ? type : 'text'}
          id={label}
          name={name}
          required={required}
          value={value}
          placeholder={placeholder}
          className={`${className} flex-1  outline-none mr-1`}
          onChange={inputChange}
        />
      </div>
    </div>
  );
};

export default UserInput;
