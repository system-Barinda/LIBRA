import React from "react";
import { ChevronsUpDown } from "lucide-react";
import MemberRow from "./MemberRow";

export default function MembersTable({ members }:any) {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full text-left text-sm text-gray-600">
          <thead>
            <tr className="border-b border-gray-100 text-xs text-gray-400">
              <th className="pb-3 font-normal">
                <div className="flex cursor-pointer items-center gap-1">
                  Member Info <ChevronsUpDown size={12} />
                </div>
              </th>
              <th className="pb-3 font-normal">
                <div className="flex cursor-pointer items-center gap-1">
                  Email / Phone <ChevronsUpDown size={12} />
                </div>
              </th>
              <th className="pb-3 text-center font-normal">
                <div className="flex cursor-pointer items-center justify-center gap-1">
                  Status <ChevronsUpDown size={12} />
                </div>
              </th>
              <th className="pb-3 text-center font-normal">
                <div className="flex cursor-pointer items-center justify-center gap-1">
                  Join – Expiry Date <ChevronsUpDown size={12} />
                </div>
              </th>
              <th className="pb-3 text-center font-normal">
                <div className="flex cursor-pointer items-center justify-center gap-1">
                  Borrowed <ChevronsUpDown size={12} />
                </div>
              </th>
              <th className="pb-3 text-center font-normal">
                <div className="flex cursor-pointer items-center justify-center gap-1">
                  Overdue <ChevronsUpDown size={12} />
                </div>
              </th>
              <th className="pb-3 pr-2 text-right font-normal">
                <div className="flex cursor-pointer items-center justify-end gap-1">
                  Fines <ChevronsUpDown size={12} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {members.map((member:any) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="space-y-4 lg:hidden">
        {members.map((member:any) => (
          <MemberRow key={member.id} member={member} isMobile={true} />
        ))}
      </div>
    </>
  );
}