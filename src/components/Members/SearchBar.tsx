import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar({ search, setSearch }:any) {
  return (
    <div className="relative flex items-center">
      <Search size={16} className="absolute left-3.5 text-gray-400" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a member"
        className="w-64 rounded-xl bg-[#F1F3F4] py-2 pl-9 pr-9 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <SlidersHorizontal
        size={14}
        className="absolute right-3 cursor-pointer text-gray-400"
      />
    </div>
  );
}