import React, { useState } from "react";
import initialMembers from "../data/members";
import SearchBar from "../components/Members/SearchBar";
import FilterDropdown from "../components/Members/FilterDropdown";
import MembersTable from "../components/Members/MembersTable";
import Pagination from "../components/Members/Pagination";

export default function Members() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // 1. Filter members based on search query
  const filtered = initialMembers.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Reset to page 1 whenever search query updates
  const handleSearchChange = (value: React.SetStateAction<string>) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // 2. Calculate pagination slice boundaries
  const totalCount = filtered.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMembers = filtered.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleItemsPerPageChange = (newSize: React.SetStateAction<number>) => {
    setItemsPerPage(newSize);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#202124]">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Search Bar & Actions Container */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <SearchBar search={search} setSearch={handleSearchChange} />
          <FilterDropdown />
        </div>

        {/* Table / Mobile Cards */}
        <MembersTable members={paginatedMembers} />

        {/* Bottom Pagination */}
        <Pagination
          currentCount={paginatedMembers.length}
          totalCount={totalCount}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
}
