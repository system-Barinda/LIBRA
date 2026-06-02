import React from 'react';

const nav = [
  { label: 'Dashboard', active: true },
  { label: 'Inbox' },
  { label: 'Library Activity' },
  { label: 'Books' },
  { label: 'Management' },
  { label: 'Members' },
  { label: 'Settings' },
];

export default function Sidebar({ closeMenu, isMobile = false }) {
  return (
    <aside className="bg-gray-700 p-6 w-full h-full min-h-screen flex flex-col justify-between select-none">
      <div>
        {/* Sidebar Header Title Info */}
        <div className="mb-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/20 text-orange-300 font-bold">
              L
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Library Admin</p>
              <h1 className="text-xl font-bold text-white tracking-wide">LIBRA</h1>
            </div>
          </div>

          {/* Mobile close context action 'X' button */}
          {isMobile && (
            <button 
              onClick={closeMenu} 
              className="p-1 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Navigations Action Links */}
        <nav className="space-y-1">
          {nav.map((item) => (
            <button
              key={item.label}
              onClick={isMobile ? closeMenu : undefined}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                item.active
                  ? 'bg-slate-800 text-white shadow-lg shadow-slate-950/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Dynamic CTA Bottom Promo Box */}
      <div className="mt-8 rounded-2xl bg-slate-800/40 border border-slate-600/30 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">On-the-Go Management</p>
        <p className="mt-1 text-xs text-slate-400 leading-relaxed">Access books, members, and stats anytime.</p>
        <button className="mt-4 w-full justify-center inline-flex rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-slate-950 transition duration-150 hover:bg-orange-400 shadow-md">
          Try for Free
        </button>
      </div>
    </aside>
  );
}