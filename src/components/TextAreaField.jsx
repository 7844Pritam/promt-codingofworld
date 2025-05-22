import React from 'react';

const TextAreaField = ({ id, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        Prompt Content
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows="10"
        className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary border-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
