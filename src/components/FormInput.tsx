import React from "react";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
  name?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  name,
}) => (
  <div className="mb-4">
    <label className="block mb-1 font-bold">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      name={name}
      className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
    />
  </div>
);

export default FormInput;
