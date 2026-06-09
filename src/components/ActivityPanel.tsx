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
    <div className="w-full border bg-white">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Library Activity
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 transition hover:bg-gray-200">
          Last Week
          <svg
            className="h-4 w-4"
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



      {/* Table */}
      <div className="overflow-hidden border border-red-800  border border-gray-100">
        {/* Header Row - Hidden on Mobile */}
        <div className="border-b flex items-center justify-between px-6 py-3 text-xs font-semibold text-gray-400 uppercase">
          <div className="flex items-center gap-1">
            Book
            <span className="text-xs">↕</span>
          </div>

          <div className="flex items-center gap-1">
            Member Info
            <span className="text-xs">↕</span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {activity.map((item, index) => (
            <div
              key={index}
              className="
                p-4
                md:grid md:grid-cols-2 md:items-center md:px-6
                hover:bg-gray-50 transition 
              "
            >
              {/* Mobile Layout */}
              <div className="space-y-3 h-20 md:space-y-0 flex text-[10px]">
                {/* Book */}
                <div className="flex items-center border">
                  <div
                    className={`h-10 w-6 md:h-16 md:w-12 flex-shrink-0 rounded-md ${item.coverColor}`}
                  />

                  <div className="min-w-0">
                    <h4 className="text-[10px]  text-gray-800 leading-tight">
                      {item.book}
                    </h4>

                    <p className="text-[9px] text-gray-400 mt-1">
                      {item.author}
                    </p>
                  </div>
                </div>

                {/* Member (Mobile) */}
                <div className="border flex flex-col items-center justify-between md:hidden">
                  <div className="flex items-center gap-3 border ">
                    <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                      {item.member.charAt(0)}
                    </div>

                    <div className="border">
                      <p className="  text-[10px] font-semibold text-gray-800">
                        {item.member}
                      </p>
                     
                    </div>
                  </div>

                 <div className="semi-details flex mb-2  bg-red-400">
                   <p className=" border text-[6px] text-gray-400">
                        {item.memberId}
                      </p>

                      <span
                    className={`rounded-lg px-2 py-1 text-[6px] font-semibold ${item.badgeColor}`}
                  >
                    {item.membership}
                  </span>
                 </div>



                  
                </div>
              </div>

              {/* Desktop Member Column */}
              <div className="hidden md:flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                  {item.member.charAt(0)}
                </div>

                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.member}
                    </h4>

                    <p className="text-xs text-gray-400">
                      {item.memberId}
                    </p>
                  </div>

                  <span
                    className={`rounded-lg px-3 py-1 text-xs font-semibold ${item.badgeColor}`}
                  >
                    {item.membership}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}