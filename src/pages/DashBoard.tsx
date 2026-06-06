import ActivityPanel from "../components/ActivityPanel";
import OverviewCards from "../components/OverviewCards";
import TopBar from "../components/TopBar";
import TopBorrowedBooks from "../components/TopBorrowedBooks";

function Dashboard() {
  return (
    <div className="flex flex-col justify-around">
    <div className="w-full">
      {/* Top Section */}
      <TopBar />

      {/* Overview Cards */}
      <div className="mt-6">
        <OverviewCards />
      </div>
       
      
    </div>


    <div className=" w-full h-screen border border-slate-800"> <TopBorrowedBooks /></div>
  </div>);
}

export default Dashboard;