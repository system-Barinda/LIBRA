import React, { useState } from "react";
import initialMembers from "../data/members";
import SearchBar from "../components/Members/SearchBar";
import FilterDropdown from "../components/Members/FilterDropdown";
import MembersTable from "../components/Members/MembersTable";
import Pagination from "../components/Members/Pagination";

export default function Members() {
  const [search, setSearch] = useState("");

  const filtered = initialMembers.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#202124]">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Search Bar & Actions Container */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <SearchBar search={search} setSearch={setSearch} />
          <FilterDropdown />
        </div>

        {/* Table / Mobile Cards */}
        <MembersTable members={filtered} />

        {/* Bottom Pagination */}
        <Pagination currentCount={filtered.length} totalCount={56} />
      </div>
    </div>
  );
}