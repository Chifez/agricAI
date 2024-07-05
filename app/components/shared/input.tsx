'use client';

import { ChangeEvent, useState } from 'react';

const UserInput = (props: {
  label?: string;
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { label, type, name, value, placeholder, className, inputChange } =
    props;
  return (
    <div className="flex items-center justify-between rounded-lg border border-primary">
      <input
        type={type ? type : 'text'}
        id={label}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${className} flex-1 outline-none mr-1`}
        onChange={inputChange}
      />

      {label && (
        <label htmlFor={label} id={label} className="w-fit">
          {label}
        </label>
      )}
    </div>
  );
};

export default UserInput;
