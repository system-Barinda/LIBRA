import React from "react";
import StatusBadge from "./StatusBadge";

const membershipStyle = {
  Premium: "bg-purple-100 text-purple-700",
  Standard: "bg-blue-100 text-blue-700",
  Basic: "bg-gray-100 text-gray-700",
};

const MemberRow = ({ member }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-all">

      <td className="px-6 py-5">
        <div className="flex items-center gap-4">

          <img
            src={member.avatar}
            alt={member.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-800">
              {member.name}
            </h3>

            <p className="text-xs text-gray-400">
              {member.id}
            </p>

            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                membershipStyle[member.membership]
              }`}
            >
              {member.membership}
            </span>
          </div>

        </div>
      </td>

      <td className="py-5">
        <p className="text-gray-700">{member.email}</p>
        <p className="text-xs text-gray-400">{member.phone}</p>
      </td>

      <td className="text-center">
        <StatusBadge status={member.status} />
      </td>

      <td className="text-center text-sm">
        <p>{member.joined}</p>
        <p className="text-gray-400">{member.expiry}</p>
      </td>

      <td className="text-center font-semibold">
        {member.borrowed}
      </td>

      <td className="text-center font-semibold">
        {member.overdue}
      </td>

      <td className="text-center font-semibold text-red-500">
        {member.fines}
      </td>

    </tr>
  );
};

export default MemberRow;