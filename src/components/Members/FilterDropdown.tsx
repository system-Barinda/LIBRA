import React from "react";
import { ChevronDown, Plus } from "lucide-react";

interface FilterDropdownProps {
  membershipType: string;
  setMembershipType: (type: string) => void;
  status: string;
  setStatus: (status: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  onAddMemberClick?: () => void;
}

export default function FilterDropdown({
  membershipType,
  setMembershipType,
  status,
  setStatus,
  sortBy,
  setSortBy,
  onAddMemberClick,
}: FilterDropdownProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Membership Type Dropdown */}
        <div className="relative">
          <select
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
            className="cursor-pointer appearance-none rounded-xl bg-[#F1F3F4] py-2 pl-4 pr-8 text-sm text-gray-700 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#FF6B35]"
          >
            <option value="All">All Membership Types</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="cursor-pointer appearance-none rounded-xl bg-[#F1F3F4] py-2 pl-4 pr-8 text-sm text-gray-700 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#FF6B35]"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Suspended">Suspended</option>
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          Sort by:
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cursor-pointer appearance-none rounded-xl bg-[#F1F3F4] py-1.5 pl-3 pr-8 text-sm font-medium text-gray-700 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#FF6B35]"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-700"
            />
          </div>
        </div>

        {/* Add Member Button */}
        <button
          onClick={onAddMemberClick}
          className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e85a26]"
        >
          <Plus size={16} />
          Add Member
        </button>
      </div>
    </div>
  );
}
