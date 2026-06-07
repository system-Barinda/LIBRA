import ActivityPanel from "../components/ActivityPanel";
import CategoryAndRevenueBreakdown from "../components/CategoryAndRevenueBreakdown";
import OverviewCards from "../components/OverviewCards";
import TopBar from "../components/TopBar";
import TopBorrowedBooks from "../components/TopBorrowedBooks";

function Dashboard() {
  return (
    <div className="flex flex-col justify-around md:flex-row  md:w-[70%] border border-slate-800">
    <div className="w-full">
      {/* Top Section */}
      <TopBar />

      {/* Overview Cards */}
      <div className="mt-6">
        <OverviewCards />
      </div>

      {/* CategoryAndRevenueBreakdown */}
      <div className="mt-6">
        <CategoryAndRevenueBreakdown />
      </div>
       
      
    </div>


    <div className=" w-full h-screen border border-slate-800 md:w-[100%]"> <TopBorrowedBooks /></div>
  </div>);
}

export default Dashboard;