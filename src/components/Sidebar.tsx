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
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/20 text-orange-300 font-bold">
              L
            </div>

            <div>
              <p className="text-xs text-slate-400 font-medium">
                Library Admin
              </p>
              <h1 className="text-xl font-bold text-white tracking-wide">
                LIBRA
              </h1>
            </div>
          </div>

          {isMobile && (
            <button
              onClick={closeMenu}
              className="p-1 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
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
                  {/* Parent */}
                  <button
                    onClick={() => setOpenManagement(!openManagement)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-400 hover:bg-slate-800/50 hover:text-white transition"
                  >
                    <span className="font-semibold">{item.label}</span>

                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openManagement ? "rotate-180" : ""
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

                  {/* Children */}
                  {openManagement && (
                    <div className="ml-4 mt-2 border-l border-gray-300 pl-4 space-y-2">
                      {item.children.map((child, index) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          onClick={isMobile ? closeMenu : undefined}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-3 text-sm transition ${
                              isActive || index === 0
                                ? "bg-orange-500 text-white font-medium"
                                : "text-slate-500 hover:bg-gray-200"
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
                  `block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-slate-800 text-white shadow-lg"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
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
      <div className="mt-8 rounded-2xl bg-slate-800/40 border border-slate-600/30 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">On-the-Go Management</p>

        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
          Access books, members, and stats anytime.
        </p>

        <button className="mt-4 w-full rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-orange-400">
          Try for Free
        </button>
      </div>
    </aside>
  );
}