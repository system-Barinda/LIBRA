import React, { useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ChevronsUpDown,
} from "lucide-react";
import type { AnyARecord } from "dns";

export default function Members() {
  const [search, setSearch] = useState("");

  const members = [
    {
      id: "MBR-2081",
      name: "Livia Hart",
      email: "livia.hart@email.com",
      phone: "+62 812 0001 2345",
      membership: "Premium",
      status: "Active",
      join: "Jan 10, 2034",
      expiry: "Jan 10, 2036",
      borrowed: 42,
      overdue: 0,
      fines: "$0.00",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "MBR-1170",
      name: "Ezra Nolan",
      email: "ezra.nolan@email.com",
      phone: "+62 812 0002 5678",
      membership: "Premium",
      status: "Active",
      join: "Feb 12, 2034",
      expiry: "Feb 12, 2036",
      borrowed: 39,
      overdue: 1,
      fines: "$1.00",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
    {
      id: "MBR-2389",
      name: "Isla Ray",
      email: "isla.ray@email.com",
      phone: "+62 812 0003 8910",
      membership: "Standard",
      status: "Expired",
      join: "Mar 05, 2033",
      expiry: "Mar 05, 2035",
      borrowed: 37,
      overdue: 0,
      fines: "$0.00",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "MBR-4112",
      name: "Milo Sharp",
      email: "milo.sharp@email.com",
      phone: "+62 812 0004 1122",
      membership: "Basic",
      status: "Suspended",
      join: "Jul 01, 2034",
      expiry: "Jul 01, 2035",
      borrowed: 31,
      overdue: 4,
      fines: "$4.00",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    {
      id: "MBR-3021",
      name: "Ava Lin",
      email: "ava.lin@email.com",
      phone: "+62 812 0005 3344",
      membership: "Premium",
      status: "Suspended",
      join: "Apr 09, 2034",
      expiry: "Apr 09, 2036",
      borrowed: 35,
      overdue: 3,
      fines: "$3.00",
      avatar: "https://i.pravatar.cc/150?img=42",
    },
    {
      id: "MBR-2759",
      name: "Julian Cross",
      email: "julian.cross@email.com",
      phone: "+62 812 0006 5566",
      membership: "Basic",
      status: "Active",
      join: "May 14, 2034",
      expiry: "May 14, 2035",
      borrowed: 29,
      overdue: 0,
      fines: "$0.00",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: "MBR-1945",
      name: "Elara Moon",
      email: "elara.moon@email.com",
      phone: "+62 812 0007 7788",
      membership: "Standard",
      status: "Active",
      join: "Jun 03, 2034",
      expiry: "Jun 03, 2035",
      borrowed: 27,
      overdue: 0,
      fines: "$1.00",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    {
      id: "MBR-3095",
      name: "Celine Moore",
      email: "celine.moore@email.com",
      phone: "+62 812 0008 9900",
      membership: "Basic",
      status: "Expired",
      join: "Jul 20, 2032",
      expiry: "Jul 20, 2034",
      borrowed: 30,
      overdue: 1,
      fines: "$1.00",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: "MBR-1643",
      name: "Noah Trent",
      email: "noah.trent@email.com",
      phone: "+62 812 0009 1234",
      membership: "Standard",
      status: "Active",
      join: "Mar 01, 2035",
      expiry: "Mar 01, 2036",
      borrowed: 34,
      overdue: 2,
      fines: "$2.00",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
    {
      id: "MBR-2210",
      name: "Leo Finch",
      email: "leo.finch@email.com",
      phone: "+62 812 0010 5678",
      membership: "Standard",
      status: "Suspended",
      join: "Aug 11, 2033",
      expiry: "Aug 11, 2035",
      borrowed: 26,
      overdue: 4,
      fines: "$4.00",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    {
      id: "MBR-3678",
      name: "Nova Wells",
      email: "nova.wells@email.com",
      phone: "+62 812 0011 8910",
      membership: "Basic",
      status: "Active",
      join: "Sep 17, 2034",
      expiry: "Sep 17, 2035",
      borrowed: 22,
      overdue: 0,
      fines: "$0.00",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
  ];

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusBadge = (status:any) => {
    switch (status) {
      case "Active":
        return "bg-[#E6F4EA] text-[#2D7D46]";
      case "Expired":
        return "bg-[#FCE8E6] text-[#D93025]";
      case "Suspended":
      default:
        return "bg-[#E8EAED] text-[#5F6368]";
    }
  };

  const getMembershipBadge = (membership:AnyARecord) => {
    switch (membership) {
      case "Premium":
        return "bg-[#1E293B] text-white";
      case "Standard":
        return "bg-[#FFEDD5] text-[#9A3412]";
      case "Basic":
      default:
        return "bg-[#F1F5F9] text-[#475569]";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 text-[#202124]">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        {/* Top Controls */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex items-center">
              <Search
                size={16}
                className="absolute left-3.5 text-gray-400"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a member"
                className="w-64 rounded-xl bg-[#F1F3F4] py-2 pl-9 pr-9 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <SlidersHorizontal
                size={14}
                className="absolute right-3 text-gray-400 cursor-pointer"
              />
            </div>

            {/* Filter Dropdowns */}
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
            <button className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white hover:bg-[#e85a26] transition">
              <Plus size={16} />
              Add Member
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-100">
                <th className="pb-3 font-normal">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Member Info <ChevronsUpDown size={12} />
                  </div>
                </th>
                <th className="pb-3 font-normal">
                  <div className="flex items-center gap-1 cursor-pointer">
                    Email / Phone <ChevronsUpDown size={12} />
                  </div>
                </th>
                <th className="pb-3 font-normal text-center">
                  <div className="flex items-center justify-center gap-1 cursor-pointer">
                    Status <ChevronsUpDown size={12} />
                  </div>
                </th>
                <th className="pb-3 font-normal text-center">
                  <div className="flex items-center justify-center gap-1 cursor-pointer">
                    Join – Expiry Date <ChevronsUpDown size={12} />
                  </div>
                </th>
                <th className="pb-3 font-normal text-center">
                  <div className="flex items-center justify-center gap-1 cursor-pointer">
                    Borrowed <ChevronsUpDown size={12} />
                  </div>
                </th>
                <th className="pb-3 font-normal text-center">
                  <div className="flex items-center justify-center gap-1 cursor-pointer">
                    Overdue <ChevronsUpDown size={12} />
                  </div>
                </th>
                <th className="pb-3 font-normal text-right pr-2">
                  <div className="flex items-center justify-end gap-1 cursor-pointer">
                    Fines <ChevronsUpDown size={12} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50/50 transition">
                  {/* Member Info */}
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {member.name}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                          <span>{member.id}</span>
                          <span
                            className={`rounded px-2 py-0.5 text-[10px] font-medium ${getMembershipBadge(
                              member.membership
                            )}`}
                          >
                            {member.membership}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Email / Phone */}
                  <td className="py-3.5">
                    <div className="font-medium text-gray-800">
                      {member.email}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {member.phone}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 text-center">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusBadge(
                        member.status
                      )}`}
                    >
                      {member.status}
                    </span>
                  </td>

                  {/* Join – Expiry Date */}
                  <td className="py-3.5 text-center text-xs text-gray-600 font-medium">
                    {member.join} <span className="text-gray-300 mx-1">—</span>{" "}
                    {member.expiry}
                  </td>

                  {/* Borrowed */}
                  <td className="py-3.5 text-center font-medium text-gray-800">
                    {member.borrowed}
                  </td>

                  {/* Overdue */}
                  <td className="py-3.5 text-center font-medium text-gray-800">
                    {member.overdue}
                  </td>

                  {/* Fines */}
                  <td className="py-3.5 text-right font-medium text-gray-800 pr-2">
                    {member.fines}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="space-y-4 lg:hidden">
          {filtered.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{member.id}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${getMembershipBadge(
                          member.membership
                        )}`}
                      >
                        {member.membership}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${getStatusBadge(
                    member.status
                  )}`}
                >
                  {member.status}
                </span>
              </div>

              <div className="mt-3 text-xs text-gray-500 border-t border-gray-50 pt-2">
                <p className="font-medium text-gray-800">{member.email}</p>
                <p>{member.phone}</p>
                <p className="mt-1 text-gray-400">
                  {member.join} — {member.expiry}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-3 divide-x divide-gray-100 rounded-lg bg-gray-50 p-2 text-center text-xs">
                <div>
                  <div className="text-gray-400">Borrowed</div>
                  <div className="font-bold text-gray-800">
                    {member.borrowed}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Overdue</div>
                  <div className="font-bold text-gray-800 font-semibold">
                    {member.overdue}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Fines</div>
                  <div className="font-bold text-gray-800 font-semibold">
                    {member.fines}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Pagination */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-4 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            Show
            <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
              11 <ChevronDown size={12} />
            </button>
            of 56 results
          </div>

          <div className="flex items-center gap-1 text-xs font-medium">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F3F4] text-gray-400 hover:bg-gray-200">
              <ChevronLeft size={14} />
            </button>
            <button className="h-8 w-8 rounded-lg bg-[#FF6B35] text-white">
              1
            </button>
            <button className="h-8 w-8 rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
              2
            </button>
            <button className="h-8 w-8 rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
              3
            </button>
            <span className="px-1 text-gray-400">..</span>
            <button className="h-8 w-8 rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
              6
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}