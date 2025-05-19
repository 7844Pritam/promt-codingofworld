
import React from "react";

function InputField({ label, id, type = "text", value, onChange, placeholder, error, ...props }) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-md border ${
          error ? "border-red-500" : "border-gray-200"
        } focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default InputField;