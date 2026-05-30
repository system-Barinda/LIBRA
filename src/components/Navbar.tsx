import { Search, Bell, SlidersHorizontal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Good Morning, Noah!
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-[300px]">
          <Search
            size={16}
            className="text-gray-400 mr-2"
          />

          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent outline-none text-sm flex-1"
          />

          <button>
            <SlidersHorizontal
              size={16}
              className="text-gray-400"
            />
          </button>
        </div>

        {/* Notification */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200">
          <Bell size={18} className="text-gray-600" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Noah Tanaka
            </h3>

            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}