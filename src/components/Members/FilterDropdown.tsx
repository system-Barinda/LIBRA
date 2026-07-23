import React, { useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";

export default function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    membershipType: "Standard",
  });

  const handleInputChange = (e: {
    target: { name: unknown; value: unknown };
  }) => {
    const { name, value }: unknown = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // TODO: Add your submit logic here (e.g., API call)
    console.log("New Member Data:", formData);

    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      membershipType: "Standard",
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Dropdowns */}
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
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e85a26]"
          >
            <Plus size={16} />
            Add Member
          </button>
        </div>
      </div>

      {/* Add Member Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl transition-all">
            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Add New Member
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="w-full rounded-xl border border-gray-200 bg-[#F1F3F4]/50 px-3.5 py-2 text-sm outline-none focus:border-[#FF6B35] focus:bg-white focus:ring-1 focus:ring-[#FF6B35]"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
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
                <label className="mb-1 block text-sm font-medium text-gray-700">
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

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Membership Type
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

              {/* Form Actions */}
              <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
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
