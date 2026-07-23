import React, { useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";

interface FilterDropdownProps {
  membershipType: string;
  setMembershipType: (type: string) => void;
  status: string;
  setStatus: (status: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  onAddMember?: (newMember: any) => void;
}

export default function FilterDropdown({
  membershipType,
  setMembershipType,
  status,
  setStatus,
  sortBy,
  setSortBy,
  onAddMember,
}: FilterDropdownProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "Standard",
    status: "Active",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMemberObj = {
      id: `M${Math.floor(100 + Math.random() * 900)}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "+1 202-555-0000",
      type: formData.membershipType,
      membershipType: formData.membershipType,
      status: formData.status,
      joinDate: new Date().toISOString().split("T")[0],
      borrowed: 0,
      overdue: 0,
      fines: "$0.00",
    };

    if (onAddMember) {
      onAddMember(newMemberObj);
    }

    // Reset Form & Close Modal
    setFormData({
      name: "",
      email: "",
      phone: "",
      membershipType: "Standard",
      status: "Active",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Membership Type Dropdown */}
          <div className="relative">
            <select
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
              className="cursor-pointer appearance-none rounded-xl bg-[#F1F3F4] py-2 pl-4 pr-8 text-sm text-gray-700 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#FF6B35]"
            >
              <option value="All">All Membership Types</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
            />
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="cursor-pointer appearance-none rounded-xl bg-[#F1F3F4] py-2 pl-4 pr-8 text-sm text-gray-700 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#FF6B35]"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
              <option value="Suspended">Suspended</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Sort by:
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="cursor-pointer appearance-none rounded-xl bg-[#F1F3F4] py-1.5 pl-3 pr-8 text-sm font-medium text-gray-700 outline-none hover:bg-gray-200 focus:ring-2 focus:ring-[#FF6B35]"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-700"
              />
            </div>
          </div>

          {/* Add Member Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e85a26]"
          >
            <Plus size={16} />
            Add Member
          </button>
        </div>
      </div>

      {/* Add Member Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Add New Member
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-gray-200 bg-[#F1F3F4]/50 px-3.5 py-2 text-sm outline-none focus:border-[#FF6B35] focus:bg-white focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-[#F1F3F4]/50 px-3.5 py-2 text-sm outline-none focus:border-[#FF6B35] focus:bg-white focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 202-555-0100"
                  className="w-full rounded-xl border border-gray-200 bg-[#F1F3F4]/50 px-3.5 py-2 text-sm outline-none focus:border-[#FF6B35] focus:bg-white focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Membership
                  </label>
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#F1F3F4]/50 px-3.5 py-2 text-sm outline-none focus:border-[#FF6B35] focus:bg-white focus:ring-1 focus:ring-[#FF6B35]"
                  >
                    <option value="Basic">Basic</option>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#F1F3F4]/50 px-3.5 py-2 text-sm outline-none focus:border-[#FF6B35] focus:bg-white focus:ring-1 focus:ring-[#FF6B35]"
                  >
                    <option value="Active">Active</option>
                    <option value="Expired">Expired</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                </div>
              </div>

              {/* Form Actions */}
              <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#FF6B35] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#e85a26]"
                >
                  Save Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
