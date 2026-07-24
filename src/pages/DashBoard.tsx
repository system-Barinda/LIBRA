import React from "react";
import Navbar from "../components/Navbar";
import OverviewCards from "../components/OverviewCards";
import CategoryAndRevenueBreakdown from "../components/CategoryAndRevenueBreakdown";
import TopBorrowedBooks from "../components/TopBorrowedBooks";
import TopAuthors from "../components/TopAuthors";
import ActivityPanel from "../components/ActivityPanel";

function Dashboard() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleLogin = () => {
    console.log("Navigate to Login");
  };

  const handleRegister = () => {
    console.log("Navigate to Register");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 text-slate-800 flex flex-col font-sans">
      {/* Top Navigation Bar - Full Width */}
      <Navbar
        onSearch={handleSearch}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left / Main Column (2/3 width on desktop) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            {/* Overview Stats */}
            <section>
              <OverviewCards />
            </section>

            {/* Category & Revenue Charts */}
            <section>
              <CategoryAndRevenueBreakdown />
            </section>
          </div>

          {/* Right / Sidebar Column (1/3 width on desktop) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <TopBorrowedBooks />
            <TopAuthors />
            <ActivityPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
