import ActivityPanel from "../components/ActivityPanel";
import CategoryAndRevenueBreakdown from "../components/CategoryAndRevenueBreakdown";
import OverviewCards from "../components/OverviewCards";
import TopAuthors from "../components/TopAuthors";
import TopBar from "../components/TopBar";
import TopBorrowedBooks from "../components/TopBorrowedBooks";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full min-h-screen bg-white text-slate-800">
      
      {/* Left / Main Content Column (Takes up roughly 2/3 space on desktop) */}
      <div className="w-full md:w-2/3 flex flex-col gap-6 ">
        {/* Top Section */}
        <TopBar />

        {/* Overview Cards */}
        <div >
          <OverviewCards />
        </div>

        {/* Category & Revenue Breakdown */}
        <div className="">
          <CategoryAndRevenueBreakdown />
        </div>
        
        {/* Activity Panel (Included if needed, currently imported but unused) */}
        {/* <div><ActivityPanel /></div> */}
      </div>

      {/* Right / Sidebar Column (Takes up roughly 1/3 space on desktop) */}
      <div className="w-full md:w-1/3  rounded-xl p-4 text-slate-900/50 h-fit">
        <TopBorrowedBooks />
        <br />

        <TopAuthors />
        <br />

        <ActivityPanel />
      </div>

    </div>
  );
}

export default Dashboard;