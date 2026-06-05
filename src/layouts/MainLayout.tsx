import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F6F4]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Sidebar Drawer */}
          <div className="relative h-full w-72 max-w-[85vw]">
            <Sidebar
              isMobile={true}
              closeMenu={() => setShowMobileMenu(false)}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-40 bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white font-bold">
                L
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-lg font-semibold text-slate-800">
              Dashboard
            </h1>

            {/* Menu Button */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}