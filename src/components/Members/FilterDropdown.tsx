import React from "react";
import { ChevronDown, Plus } from "lucide-react";

export default function FilterDropdown() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Dropdowns */}
        <button className="flex items-center gap-2 rounded-xl bg-[#F1F3F4] px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
          Membership Type
          <ChevronDown size={14} />
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-[#F1F3F4] px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
          Status
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          Sort by:
          <button className="flex items-center gap-2 rounded-xl bg-[#F1F3F4] px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200">
            Newest
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Add Member Button */}
        <button className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e85a26]">
          <Plus size={16} />
          Add Member
        </button>
      </div>
    </div>
  );
}