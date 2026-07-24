import React from "react";

const activity = [
  {
    book: "Claudia’s Life Story",
    author: "Mira Ellison",
    member: "Livia Hart",
    memberId: "MBR-2081",
    membership: "Premium",
    badgeColor: "bg-slate-800 text-white",
    coverColor: "bg-[#ebdcd5]",
  },
  {
    book: "The Coffee Shop Next Door",
    author: "Avery Davis",
    member: "Noah Trent",
    memberId: "MBR-1643",
    membership: "Standard",
    badgeColor: "bg-orange-100 text-orange-700",
    coverColor: "bg-[#d0e1ed]",
  },
  {
    book: "The Book of Prayer",
    author: "Elara Quinn",
    member: "Celine Moore",
    memberId: "MBR-3095",
    membership: "Basic",
    badgeColor: "bg-gray-100 text-gray-700",
    coverColor: "bg-[#dfdec4]",
  },
  {
    book: "Floral Dreams",
    author: "Claudia Alexa",
    member: "Isla Ray",
    memberId: "MBR-2389",
    membership: "Standard",
    badgeColor: "bg-orange-100 text-orange-700",
    coverColor: "bg-[#edd9db]",
  },
];

export default function ActivityPanel() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          Library Activity
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 transition hover:bg-gray-200">
          Last Week
          <svg
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Main Container */}
      <div className="rounded-xl border border-gray-200 overflow-hidden">
        {/* Table Header (Visible on Desktop) */}
        <div className="hidden sm:grid sm:grid-cols-2 bg-gray-50/70 border-b border-gray-200 px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div className="flex items-center gap-1">
            Book
            <span className="text-gray-400">↕</span>
          </div>
          <div className="flex items-center gap-1">
            Member Info
            <span className="text-gray-400">↕</span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100 bg-white">
          {activity.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:px-6 sm:py-4 flex flex-col sm:grid sm:grid-cols-2 gap-4 items-start sm:items-center hover:bg-gray-50/80 transition-colors duration-150"
            >
              {/* Book Info */}
              <div className="flex items-center gap-3.5 w-full">
                <div
                  className={`h-14 w-10 sm:h-16 sm:w-12 flex-shrink-0 rounded-md shadow-sm border border-black/5 ${item.coverColor}`}
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {item.book}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{item.author}</p>
                </div>
              </div>

              {/* Member Info */}
              <div className="flex items-center justify-between w-full pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                    {item.member.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 truncate">
                      {item.member}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono">
                      {item.memberId}
                    </p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${item.badgeColor}`}
                >
                  {item.membership}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
