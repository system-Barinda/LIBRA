export function RevenueBreakdownDonut() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm text-gray-900">Revenue Breakdown</h3>
        <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
          <option>This Month</option>
        </select>
      </div>

      <div className="flex items-center justify-between gap-4 my-auto">
        {/* Donut graphic */}
        <div className="relative w-28 h-28 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-gray-100"
              strokeWidth="3.8"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-orange-500"
              strokeDasharray="60, 100"
              strokeWidth="3.8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-amber-400"
              strokeDasharray="25, 100"
              strokeDashoffset="-60"
              strokeWidth="3.8"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-extrabold text-gray-900">
              $12,450
            </span>
            <span className="text-[9px] text-gray-400">Total Revenue</span>
          </div>
        </div>

        {/* Legend list */}
        <div className="space-y-2 flex-1 text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-gray-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-500" /> Membership
              Fees
            </span>
            <span className="font-bold text-gray-900">$7,470</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-gray-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Fines
            </span>
            <span className="font-bold text-gray-900">$2,490</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-gray-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> Events
            </span>
            <span className="font-bold text-gray-900">$1,494</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-gray-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-gray-300" /> Others
            </span>
            <span className="font-bold text-gray-900">$996</span>
          </div>
        </div>
      </div>
    </div>
  );
}
