import React from "react";
import { LibraryActivity } from "../components/LandingPage/Library_Activity";
import { StatsCards } from "../components/LandingPage/STATS_CARDS";
import { BorrowedBooks } from "../components/LandingPage/BORROWED_BOOKS";
import { TopAuthors } from "../components/LandingPage/TOP_AUTHORS";
import { RevenueBreakdownDonut } from "../components/LandingPage/Revenue_Breakdown_Donut";
import { RecentActivities } from "../components/LandingPage/RECENT_ACTIVITIES";
import { BookCategories } from "../components/LandingPage/Book_Categories";
import { LibraryUsageTrends } from "../components/LandingPage/Library_Usage_Trends";
import { RevenuChart } from "../components/LandingPage/Revenue_Chart";

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
              <RevenuChart />
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
