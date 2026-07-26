import React from "react";
import { bookCategories } from "../data/bookCategories";
import { recentActivities } from "../data/recentActivities";
import { LibraryActivity } from "../components/LandingPage/Library_Activity";
import { StatsCards } from "../components/LandingPage/STATS_CARDS";
import { BorrowedBooks } from "../components/LandingPage/BORROWED_BOOKS";
import { TopAuthors } from "../components/LandingPage/TOP_AUTHORS";
import { RevenueBreakdownDonut } from "../components/LandingPage/Revenue_Breakdown_Donut";
import { RecentActivities } from "../components/LandingPage/RECENT_ACTIVITIES";
import { BookCategories } from "../components/LandingPage/Book_Categories";
import { LibraryUsageTrends } from "../components/LandingPage/Library_Usage_Trends";

export const LandingPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-gray-50 text-gray-800 font-sans flex  lg:flex-row">
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
        {/* 4 STATS CARDS */}
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* library usege Trends */}
              <LibraryUsageTrends />

              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm flex flex-col justify-between w-full">
                {/* Header Section */}
                <div className="flex sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-gray-900">
                      Revenue
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5">
                      Monthly Total Performance
                    </p>
                  </div>
                  <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2 sm:px-2.5 py-1 text-gray-600 font-semibold focus:outline-none cursor-pointer">
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                  </select>
                </div>

                {/* Simulated Area Chart */}
                <div className="h-36 sm:h-44 md:h-52 relative flex items-end justify-between pt-6 border-b border-gray-100 w-full overflow-hidden">
                  {/* Grid Guide Line */}
                  <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-gray-100 pointer-events-none" />

                  {/* Dynamic Floating Badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-8 bg-gray-900 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded font-medium shadow z-20">
                    $12,450
                  </div>

                  {/* Responsive SVG Line */}
                  <svg
                    className="absolute inset-0 w-full h-full p-2 overflow-visible"
                    viewBox="0 0 400 150"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 10 120 Q 80 90, 150 110 T 290 50 T 400 40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Month Labels */}
                  {["Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m, i) => (
                    <div key={i} className="flex-1 text-center z-10 pb-1">
                      <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium select-none">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CHARTS ROW 2: Book Categories & Revenue Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Book Categories */}
              <BookCategories />

              {/* Revenue Breakdown Donut */}
              <RevenueBreakdownDonut />
            </div>

            {/* LIBRARY ACTIVITY TABLE */}
            <LibraryActivity />
          </div>

          {/* RIGHT SIDEBAR COL (4 COLUMNS) */}
          <div className="lg:col-span-4 space-y-6">
            {/* TOP BORROWED BOOKS */}
            <BorrowedBooks />

            {/* TOP AUTHORS */}
            <TopAuthors />
            {/* RECENT ACTIVITIES */}
            <RecentActivities />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
