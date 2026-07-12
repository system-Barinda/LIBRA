import React, { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import membersData from "../../data/members";

import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import MemberRow from "./MemberRow";
import Pagination from "./Pagination";
import StatusBadge from "./StatusBadge";

const MembersTable = () => {
  const [search, setSearch] = useState("");
  const [membership, setMembership] = useState("");
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredMembers = useMemo(() => {
    return membersData.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.email.toLowerCase().includes(search.toLowerCase());

      const matchesMembership =
        membership === "" || member.membership === membership;

      const matchesStatus =
        status === "" || member.status === status;

      return (
        matchesSearch &&
        matchesMembership &&
        matchesStatus
      );
    });
  }, [search, membership, status]);

  const totalPages = Math.ceil(
    filteredMembers.length / itemsPerPage
  );

  const currentMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-gray-100">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center p-6 border-b">

        <div className="flex flex-wrap gap-3">

          <SearchBar
            value={search}
            onChange={(e:any) => {
              setCurrentPage(1);
              setSearch(e.target.value);
            }}
          />

          <FilterDropdown
            label="Membership"
            value={membership}
            onChange={(e:any) => setMembership(e.target.value)}
            options={[
              "Premium",
              "Standard",
              "Basic",
            ]}
          />

          <FilterDropdown
            label="Status"
            value={status}
            onChange={(e:any) => setStatus(e.target.value)}
            options={[
              "Active",
              "Expired",
              "Suspended",
            ]}
          />

        </div>

        <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">

          <Plus size={18} />

          Add Member

        </button>

      </div>

      {/* Desktop */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">

            <tr>

              <th className="px-6 py-4 text-left">
                Member
              </th>

              <th className="text-left">
                Contact
              </th>

              <th>Status</th>

              <th>Membership</th>

              <th>Borrowed</th>

              <th>Overdue</th>

              <th>Fines</th>

            </tr>

          </thead>

          <tbody>

            {currentMembers.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
              />
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="space-y-4 p-4 lg:hidden">

        {currentMembers.map((member) => (

          <div
            key={member.id}
            className="rounded-xl border p-4"
          >

            <div className="flex gap-3">

              <img
                src={member.avatar}
                className="w-14 h-14 rounded-full"
                alt=""
              />

              <div className="flex-1">

                <h3 className="font-semibold">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {member.email}
                </p>

                <div className="mt-2">
                  <StatusBadge
                    status={member.status}
                  />
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default MembersTable;