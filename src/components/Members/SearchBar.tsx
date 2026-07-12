import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }:any) => {
  return (
    <div className="relative w-full sm:w-80">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search members..."
        className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none focus:border-orange-500"
      />
    </div>
  );
};

export default SearchBar;