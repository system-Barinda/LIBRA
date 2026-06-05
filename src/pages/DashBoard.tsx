import ActivityPanel from "../components/ActivityPanel";
import OverviewCards from "../components/OverviewCards";
import TopBar from "../components/TopBar";

function Dashboard() {
  return (
    <div className="p-6">
      {/* Top Section */}
      <TopBar />

      {/* Overview Cards */}
      <div className="mt-6">
        <OverviewCards />
      </div>

      {/* Main Content Grid */}
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="xl:col-span-2 space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Library Overview
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Track books, members, and library activity from a single dashboard.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm min-h-[300px]">
            Content Area
          </div>
        </div>

        {/* Right Sidebar Panel */}
        <div>
          <ActivityPanel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;