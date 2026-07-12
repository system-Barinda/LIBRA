import { members } from "../../data/members";
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
} from "lucide-react";

const badgeColors = {
  Active:
    "bg-green-100 text-green-700",
  Expired:
    "bg-orange-100 text-orange-700",
  Suspended:
    "bg-gray-200 text-gray-600",
};

const membershipColors = {
  Premium:
    "bg-indigo-100 text-indigo-700",
  Standard:
    "bg-orange-100 text-orange-700",
  Basic:
    "bg-gray-100 text-gray-600",
};

export default function MembersTable() {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-gray-100">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between p-5 border-b">

        <div className="flex flex-wrap gap-3">

          <div className="relative w-full sm:w-72">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              placeholder="Search member..."
              className="w-full rounded-lg border pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
            Membership
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
            Status
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
            <Filter size={16} />
            Filter
          </button>

        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">
          <Plus size={18} />
          Add Member
        </button>

      </div>

      {/* Desktop */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="text-left text-sm text-gray-500">

            <tr className="border-b">

              <th className="px-6 py-4">Member</th>

              <th>Email</th>

              <th>Status</th>

              <th>Join / Expiry</th>

              <th>Borrowed</th>

              <th>Overdue</th>

              <th>Fines</th>

            </tr>

          </thead>

          <tbody>

            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <img
                      src={member.avatar}
                      className="w-11 h-11 rounded-full"
                    />

                    <div>

                      <h3 className="font-medium">
                        {member.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {member.id}
                      </p>

                      <span
                        className={`mt-1 inline-flex rounded-full px-2 py-1 text-xs ${membershipColors[member.membership]}`}
                      >
                        {member.membership}
                      </span>

                    </div>

                  </div>

                </td>

                <td>

                  <div>
                    <p>{member.email}</p>
                    <p className="text-xs text-gray-500">
                      {member.phone}
                    </p>
                  </div>

                </td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColors[member.status]}`}
                  >
                    {member.status}
                  </span>

                </td>

                <td>

                  {member.joinDate}
                  <br />
                  <span className="text-gray-400">
                    {member.expiryDate}
                  </span>

                </td>

                <td>{member.borrowed}</td>

                <td>{member.overdue}</td>

                <td>{member.fines}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="grid gap-4 p-4 lg:hidden">

        {members.map((member) => (

          <div
            key={member.id}
            className="rounded-xl border p-4"
          >

            <div className="flex gap-3">

              <img
                src={member.avatar}
                className="h-14 w-14 rounded-full"
              />

              <div className="flex-1">

                <div className="flex justify-between">

                  <h2 className="font-semibold">
                    {member.name}
                  </h2>

                  <span
                    className={`rounded-full px-3 py-1 text-xs ${badgeColors[member.status]}`}
                  >
                    {member.status}
                  </span>

                </div>

                <p className="text-sm text-gray-500">
                  {member.email}
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-2 py-1 text-xs ${membershipColors[member.membership]}`}
                >
                  {member.membership}
                </span>

              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-5 text-center">

              <div>

                <p className="text-lg font-semibold">
                  {member.borrowed}
                </p>

                <p className="text-xs text-gray-500">
                  Borrowed
                </p>

              </div>

              <div>

                <p className="text-lg font-semibold">
                  {member.overdue}
                </p>

                <p className="text-xs text-gray-500">
                  Overdue
                </p>

              </div>

              <div>

                <p className="text-lg font-semibold">
                  {member.fines}
                </p>

                <p className="text-xs text-gray-500">
                  Fines
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between border-t p-5">

        <p className="text-sm text-gray-500">
          Showing 1-10 of 56 members
        </p>

        <div className="flex gap-2">

          <button className="h-9 w-9 rounded-lg border">
            1
          </button>

          <button className="h-9 w-9 rounded-lg bg-orange-500 text-white">
            2
          </button>

          <button className="h-9 w-9 rounded-lg border">
            3
          </button>

          <button className="h-9 w-9 rounded-lg border">
            4
          </button>

        </div>

      </div>

    </div>
  );
}