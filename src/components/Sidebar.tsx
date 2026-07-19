import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Mail, 
  BookOpen, 
  Library, 
  Layers, 
  Contact, 
  Settings, 
  LogOut,
  ChevronDown,
  LibraryBig 
} from "lucide-react";

const nav = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Inbox", path: "/inbox", icon: Mail },
  { label: "Library Activity", path: "/activity", icon: BookOpen },
  { label: "Books", path: "/books", icon: Library },
  {
    label: "Management",
    icon: Layers,
    children: [
      { label: "Stock Management", path: "/management/stock" },
      { label: "Supply & Acquisition", path: "/management/supply" },
    ],
  },
  { label: "Members", path: "/members", icon: Contact },
  { label: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar({ closeMenu, isMobile = false }) {
  const [openManagement, setOpenManagement] = useState(true);
  const location = useLocation();

  // Checks if any nested option matches the active page URL exactly
  const isChildActive = (children) => {
    return children.some(child => location.pathname === child.path);
  };

  return (
    <aside className="bg-white border-r border-gray-100 p-4 md:p-2 lg:p-6 w-full h-full min-h-screen flex flex-col justify-between select-none transition-all md:w-16 lg:w-64">
      <div>
        {/* Header Logo Box */}
        <div className="mb-8 flex items-center justify-between gap-3 px-2 md:justify-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-orange-500/10 text-[#FF7E40]">
              <LibraryBig size={24} className="stroke-[2.5]" />
            </div>

            <div className="block md:hidden lg:block">
              <h1 className="text-lg font-bold text-slate-800 tracking-wide">
                LIBRA
              </h1>
            </div>
          </div>

          {isMobile && (
            <button
              onClick={closeMenu}
              className="p-1 rounded-lg text-slate-400 hover:bg-gray-100 transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Navigation Link List */}
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;

            if (item.children) {
              const hasActiveChild = isChildActive(item.children);
              return (
                <div key={item.label} className="space-y-1">
                  {/* Dropdown Parent Menu Button */}
                  <button
                    onClick={() => setOpenManagement(!openManagement)}
                    className={`w-full flex items-center px-3.5 py-3 rounded-xl transition-all text-sm font-medium justify-center lg:justify-between ${
                      hasActiveChild 
                        ? "text-[#FF7E40] bg-orange-50/60 rounded-xl" 
                        : "text-slate-500 hover:bg-gray-50 hover:text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="shrink-0" />
                      <span className="block md:hidden lg:inline">{item.label}</span>
                    </div>

                    <ChevronDown
                      size={14}
                      className={`block md:hidden lg:block transition-transform duration-200 text-slate-400 ${
                        openManagement ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Submenus Drawer Dropdown */}
                  {openManagement && (
                    <div className="lg:ml-4 lg:border-l lg:border-gray-100 lg:pl-4 space-y-1 flex flex-col items-center lg:items-stretch">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          onClick={isMobile ? closeMenu : undefined}
                          className={({ isActive }) =>
                            `w-full block text-center lg:text-left rounded-xl px-2 lg:px-3.5 py-2 text-xs font-semibold transition-all ${
                              isActive
                                ? "bg-[#FF7E40] text-white shadow-sm"
                                : "text-slate-500 hover:bg-gray-50 hover:text-slate-800"
                            }`
                          }
                        >
                          {/* Visible on Mobile and Desktop */}
                          <span className="block md:hidden lg:inline">{child.label}</span>
                          
                          {/* Abbreviated Tags Only on Tablet viewports */}
                          <span className="hidden md:block lg:hidden text-[10px] tracking-tight whitespace-nowrap">
                            {child.label === "Stock Management" ? "SM" : "S&A"}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            {/* Default Standalone Sidebar Links */}
            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={isMobile ? closeMenu : undefined}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all justify-center lg:justify-start ${
                    isActive
                      ? "bg-[#FF7E40] text-white shadow-sm"
                      : "text-slate-500 hover:bg-gray-50 hover:text-slate-800"
                  }`
                }
              >
                <Icon size={20} className="shrink-0" />
                <span className="block md:hidden lg:inline">{item.label}</span>
              </NavLink>
            );
          })}
          
          <div className="my-4 border-t border-gray-100 w-full" />

          {/* Logout Action Button Element */}
          <button className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all justify-center lg:justify-start">
            <LogOut size={20} className="shrink-0" />
            <span className="block md:hidden lg:inline">Logout</span>
          </button>
        </nav>
      </div>

      {/* Sidebar Footer Banner Card (Hidden only on Tablet layout viewports) */}
      <div className="block md:hidden lg:block mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-4 text-sm text-slate-600">
        <p className="font-bold text-slate-800">On-the-Go Management</p>
        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
          Libra Mobile lets you access books, members, and stats anytime, anywhere.
        </p>
        <button className="mt-4 w-full rounded-xl bg-[#FF7E40] hover:bg-[#e0682e] px-4 py-2 text-xs font-semibold text-white transition-all shadow-sm">
          Try for Free
        </button>
      </div>
    </aside>
  );
}