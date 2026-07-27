import ActivityPanel from "../components/ActivityPanel";
import CategoryAndRevenueBreakdown from "../components/CategoryAndRevenueBreakdown";
import DashboardHero from "../components/DashboardHero";
import { GreateBanner } from "../components/GreateBanner";
import OverviewCards from "../components/OverviewCards";
import TopAuthors from "../components/TopAuthors";
import TopBar from "../components/TopBar";
import TopBorrowedBooks from "../components/TopBorrowedBooks";

function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-200 text-slate-800">
      <div className="flex flex-col gap-6 p-4 lg:p-6">
        {/* Banner */}
        <GreateBanner />

        {/* Dashboard Content */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Left / Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            <TopBar />

            <OverviewCards />

            <CategoryAndRevenueBreakdown />

            {/* <ActivityPanel /> */}
            <DashboardHero />
          </div>

          {/* Right Sidebar */}
          <div className="w-full xl:w-[350px] flex-shrink-0 flex flex-col gap-6">
            <TopBorrowedBooks />

            <TopAuthors />

            <ActivityPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
