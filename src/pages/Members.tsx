import React, { useState, useMemo } from "react";
import initialMembers from "../data/members";
import SearchBar from "../components/Members/SearchBar";
import FilterDropdown from "../components/Members/FilterDropdown";
import MembersTable from "../components/Members/MembersTable";
import Pagination from "../components/Members/Pagination";

export default function Members() {
  const [search, setSearch] = useState("");
  const [membershipType, setMembershipType] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // 1. Reset pagination when any filter changes
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleMembershipChange = (type: string) => {
    setMembershipType(type);
    setCurrentPage(1);
  };

  const handleStatusChange = (st: string) => {
    setStatus(st);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  // 2. Compute Filtered & Sorted Members
  const processedMembers = useMemo(() => {
    return initialMembers
      .filter((m: any) => {
        // Search filter
        const matchesSearch = m.name
          .toLowerCase()
          .includes(search.toLowerCase());

        // Membership Type filter
        const matchesMembership =
          membershipType === "All" ||
          m.membershipType?.toLowerCase() === membershipType.toLowerCase() ||
          m.type?.toLowerCase() === membershipType.toLowerCase();

        // Status filter
        const matchesStatus =
          status === "All" || m.status?.toLowerCase() === status.toLowerCase();

        return matchesSearch && matchesMembership && matchesStatus;
      })
      .sort((a: any, b: any) => {
        // Sort Logic
        if (sortBy === "name_asc") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "name_desc") {
          return b.name.localeCompare(a.name);
        }
        if (sortBy === "oldest") {
          return (
            new Date(a.joinDate || a.id).getTime() -
            new Date(b.joinDate || b.id).getTime()
          );
        }
        // Default: newest
        return (
          new Date(b.joinDate || b.id).getTime() -
          new Date(a.joinDate || a.id).getTime()
        );
      });
  }, [search, membershipType, status, sortBy]);

  // 3. Pagination calculations
  const totalCount = processedMembers.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMembers = processedMembers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleItemsPerPageChange = (newSize: number) => {
    setItemsPerPage(newSize);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#202124]">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Search Bar & Actions Container */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <SearchBar search={search} setSearch={handleSearchChange} />
          <FilterDropdown
            membershipType={membershipType}
            setMembershipType={handleMembershipChange}
            status={status}
            setStatus={handleStatusChange}
            sortBy={sortBy}
            setSortBy={handleSortChange}
          />
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
