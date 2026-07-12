import React, { useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function MembersTable() {
  const [search, setSearch] = useState("");

  const members = [
    {
      id: "MBR-2081",
      name: "Livia Hart",
      email: "livia@email.com",
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
      email: "ezra@email.com",
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
      email: "isla@email.com",
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
      email: "milo@email.com",
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
      email: "ava@email.com",
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
      email: "julian@email.com",
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
  ];

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Expired":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const membershipColor = (type) => {
    switch (type) {
      case "Premium":
        return "bg-indigo-100 text-indigo-700";
      case "Standard":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-lg">

        {/* Header */}

        <div className="flex flex-col gap-4 border-b p-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-3">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search member..."
                className="w-72 rounded-xl border pl-10 pr-4 py-2 focus:border-orange-500 focus:outline-none"
              />

            </div>

            <button className="rounded-xl border px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
              Membership
              <ChevronDown size={16} />
            </button>

            <button className="rounded-xl border px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
              Status
              <ChevronDown size={16} />
            </button>

          </div>

          <button className="rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 flex items-center gap-2">
            <Plus size={18} />
            Add Member
          </button>

        </div>

        {/* Desktop Table */}

        <div className="hidden lg:block overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 text-gray-500 text-sm">

              <tr>

                <th className="px-6 py-4 text-left">Member</th>
                <th className="text-left">Email</th>
                <th>Status</th>
                <th>Join / Expiry</th>
                <th>Borrowed</th>
                <th>Overdue</th>
                <th>Fines</th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((member) => (
                <tr
                  key={member.id}
                  className="border-b hover:bg-orange-50 transition"
                >
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <img
                        src={member.avatar}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />

                      <div>

                        <h3 className="font-semibold">
                          {member.name}
                        </h3>

                        <p className="text-xs text-gray-400">
                          {member.id}
                        </p>

                        <span
                          className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${membershipColor(
                            member.membership
                          )}`}
                        >
                          {member.membership}
                        </span>

                      </div>

                    </div>

                  </td>

                  <td>

                    <p>{member.email}</p>

                    <p className="text-sm text-gray-400">
                      {member.phone}
                    </p>

                  </td>

                  <td className="text-center">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                        member.status
                      )}`}
                    >
                      {member.status}
                    </span>

                  </td>

                  <td className="text-center text-sm">

                    <p>{member.join}</p>

                    <p className="text-gray-400">
                      {member.expiry}
                    </p>

                  </td>

                  <td className="text-center font-medium">
                    {member.borrowed}
                  </td>

                  <td className="text-center font-medium">
                    {member.overdue}
                  </td>

                  <td className="text-center font-semibold">
                    {member.fines}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile */}

        <div className="space-y-4 p-4 lg:hidden">

          {filtered.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border bg-white p-4 shadow-sm"
            >
              <div className="flex gap-4">

                <img
                  src={member.avatar}
                  className="h-16 w-16 rounded-full"
                  alt=""
                />

                <div className="flex-1">

                  <div className="flex justify-between">

                    <h2 className="font-bold">
                      {member.name}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs ${statusColor(
                        member.status
                      )}`}
                    >
                      {member.status}
                    </span>

                  </div>

                  <p className="text-gray-500 text-sm">
                    {member.email}
                  </p>

                  <span
                    className={`mt-2 inline-block rounded-full px-2 py-1 text-xs ${membershipColor(
                      member.membership
                    )}`}
                  >
                    {member.membership}
                  </span>

                </div>

              </div>

              <div className="mt-5 grid grid-cols-3 text-center">

                <div>
                  <h2 className="font-bold text-lg">
                    {member.borrowed}
                  </h2>
                  <p className="text-xs text-gray-500">
                    Borrowed
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-lg">
                    {member.overdue}
                  </h2>
                  <p className="text-xs text-gray-500">
                    Overdue
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-lg">
                    {member.fines}
                  </h2>
                  <p className="text-xs text-gray-500">
                    Fines
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Footer */}

        <div className="flex flex-col gap-4 border-t p-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-gray-500">
            Showing 1 - {filtered.length} of {members.length} members
          </p>

          <div className="flex items-center gap-2">

            <button className="rounded-lg border p-2 hover:bg-gray-100">
              <ChevronLeft size={18} />
            </button>

            <button className="h-10 w-10 rounded-lg bg-orange-500 text-white">
              1
            </button>

            <button className="h-10 w-10 rounded-lg border">
              2
            </button>

            <button className="h-10 w-10 rounded-lg border">
              3
            </button>

            <button className="rounded-lg border p-2 hover:bg-gray-100">
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}