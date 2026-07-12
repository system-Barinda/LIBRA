import React from "react"

import { ChevronDown } from "lucide-react";

const FilterDropdown = ({
  label,
  value,
  options,
  onChange,
}:any) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm outline-none focus:border-orange-500"
      >
        <option value="">{label}</option>

        {options.map((item:any) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default FilterDropdown;