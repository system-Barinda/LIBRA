import { recentActivities } from "../../data/recentActivities";

export function RecentActivities() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm text-gray-900">Recent Activities</h3>
        <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
          <option>This Week</option>
        </select>
      </div>

      <div className="relative pl-4 space-y-5 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
        {recentActivities.map((act) => (
          <div key={act.id} className="relative flex gap-3 text-xs">
            {/* Activity Icon Dot */}
            <div
              className={`absolute -left-4 top-0.5 w-3 h-3 rounded-full border-2 border-white ${
                act.type === "update"
                  ? "bg-blue-500"
                  : act.type === "member"
                    ? "bg-emerald-500"
                    : act.type === "return"
                      ? "bg-amber-500"
                      : "bg-rose-500"
              }`}
            />

            <div>
              <h4 className="font-bold text-gray-800 leading-tight">
                {act.title}
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                {act.description}
              </p>
              <span className="text-[9px] text-gray-400 mt-1 block font-medium">
                {act.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
