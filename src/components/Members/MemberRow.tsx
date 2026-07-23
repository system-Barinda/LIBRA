import React from "react";
import StatusBadge from "./StatusBadge";

export default function MemberRow({ member, isMobile = false }: any) {
  if (isMobile) {
    return (
      <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{member.id}</span>
                <StatusBadge status={member.membership} type="membership" />
              </div>
            </div>
          </div>

          <StatusBadge status={member.status} />
        </div>

        <div className="mt-3 border-t border-gray-50 pt-2 text-xs text-gray-500">
          <p className="font-medium text-gray-800">{member.email}</p>
          <p>{member.phone}</p>
          <p className="mt-1 text-gray-400">
            {member.join} — {member.expiry}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-3 divide-x divide-gray-100 rounded-lg bg-gray-50 p-2 text-center text-xs">
          <div>
            <div className="text-gray-400">Borrowed</div>
            <div className="font-bold text-gray-800">{member.borrowed}</div>
          </div>
          <div>
            <div className="text-gray-400">Overdue</div>
            <div className="font-semibold font-bold text-gray-800">
              {member.overdue}
            </div>
          </div>
          <div>
            <div className="text-gray-400">Fines</div>
            <div className="font-semibold font-bold text-gray-800">
              {member.fines}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <tr className="transition hover:bg-gray-50/50">
      {/* Member Info */}
      <td className="py-3.5">
        <div className="flex items-center gap-3">
          <img
            src={member.avatar}
            alt={member.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900">{member.name}</div>
            <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-400">
              <span>{member.id}</span>
              <StatusBadge status={member.membership} type="membership" />
            </div>
          </div>
        </div>
      </td>

      {/* Email / Phone */}
      <td className="py-3.5">
        <div className="font-medium text-gray-800">{member.email}</div>
        <div className="mt-0.5 text-xs text-gray-400">{member.phone}</div>
      </td>

      {/* Status */}
      <td className="py-3.5 text-center">
        <StatusBadge status={member.status} />
      </td>

      {/* Join – Expiry Date */}
      <td className="py-3.5 text-center text-xs font-medium text-gray-600">
        {member.join} <span className="mx-1 text-gray-300">—</span>{" "}
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
      <td className="py-3.5 pr-2 text-right font-medium text-gray-800">
        {member.fines}
      </td>
    </tr>
  );
}
