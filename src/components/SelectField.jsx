import React from 'react';
import { BsListUl } from 'react-icons/bs';

const SelectField = ({ name, value, onChange, options, label }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none pr-10"
        >
          <option value="" disabled>Select a category</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <BsListUl className="absolute right-3 top-3.5 pointer-events-none text-gray-500" />
      </div>
    </div>
  );
};

export default SelectField;
