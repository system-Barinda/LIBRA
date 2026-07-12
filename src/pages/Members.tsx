import React from "react";
import MembersTable from "../components/Members/MembersTable";

const Members = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="mx-auto max-w-7xl px-4 py-6">

        {/* Page Header */}

        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Members
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage library members, memberships, and borrowing activities.
            </p>
          </div>

        </div>

        {/* Members Table */}

        <MembersTable />

      </div>

    </div>
  );
};

export default Members;