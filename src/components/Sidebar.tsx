import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { label: "Dashboard", path: "/" },
  { label: "Inbox", path: "/inbox" },
  { label: "Library Activity", path: "/activity" },
  { label: "Books", path: "/books" },
  {
    label: "Management",
    children: [
      {
        label: "Stock Management",
        path: "/management/stock",
      },
      {
        label: "Supply & Acquisition",
        path: "/management/supply",
      },
    ],
  },
  { label: "Members", path: "/members" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar({ closeMenu, isMobile = false }) {
  const [openManagement, setOpenManagement] = useState(true);

  return (
    <aside className="bg-gray-100 p-6 w-full h-full min-h-screen flex flex-col justify-between select-none">
      <div>
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/20 text-orange-400 font-bold">
              L
            </div>

            <div>
              <p className="text-xs text-slate-400 font-medium">
                Library Admin
              </p>
              <h1 className="text-xl font-bold text-slate-800 tracking-wide">
                LIBRA
              </h1>
            </div>
          </div>

          {isMobile && (
            <button
              onClick={closeMenu}
              className="p-1 rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {nav.map((item) => {
            if (item.children) {
              return (
                <div key={item.label}>
                  {/* Parent Menu with Dropdown Toggle */}
                  <button
                    onClick={() => setOpenManagement(!openManagement)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition font-semibold"
                  >
                    <span>{item.label}</span>

                    {/* Animated Dropdown Arrow Icon */}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 text-slate-500 ${
                        openManagement ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Sub-items (Dropdown Content) */}
                  {openManagement && (
                    <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-3 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          onClick={isMobile ? closeMenu : undefined}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-2.5 text-sm transition-colors duration-150 ${
                              isActive
                                ? "bg-orange-500 text-white font-medium shadow-sm"
                                : "text-slate-500 hover:bg-gray-200 hover:text-slate-800"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={isMobile ? closeMenu : undefined}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-semibold transition duration-150 ${
                    isActive
                      ? "bg-slate-800 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Card */}
      <div className="mt-8 rounded-2xl bg-slate-800/90 border border-slate-700/30 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">On-the-Go Management</p>

        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
          Access books, members, and stats anytime.
        </p>

        <button className="mt-4 w-full rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 transition">
          Try for Free
        </button>
      </div>
    </aside>
  );
}