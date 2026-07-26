export function LibraryUsageTrends() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-sm text-gray-900">
            Library Usage Trends
          </h3>
          <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
              Visitors
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-300"></span>{" "}
              Borrowers
            </span>
          </div>
        </div>
        <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>

      {/* Simulated Bar Chart */}
      <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-gray-100">
        {[
          { day: "Sun", v: 40, b: 25 },
          { day: "Mon", v: 65, b: 45 },
          { day: "Tue", v: 85, b: 60, active: true },
          { day: "Wed", v: 50, b: 30 },
          { day: "Thu", v: 75, b: 50 },
          { day: "Fri", v: 90, b: 70 },
          { day: "Sat", v: 60, b: 40 },
        ].map((bar, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-1 h-full justify-end group relative"
          >
            {bar.active && (
              <div className="absolute -top-7 bg-gray-900 text-white text-[10px] py-0.5 px-1.5 rounded shadow whitespace-nowrap z-10">
                Thu, 27 Sept 2026: {bar.v} Visitors
              </div>
            )}
            <div className="w-full max-w-[28px] flex items-end gap-1 h-full">
              <div
                style={{ height: `${bar.v}%` }}
                className={`w-1/2 rounded-t-sm transition-all ${
                  bar.active
                    ? "bg-orange-500"
                    : "bg-orange-400/80 group-hover:bg-orange-500"
                }`}
              />
              <div
                style={{ height: `${bar.b}%` }}
                className="w-1/2 rounded-t-sm bg-amber-300 group-hover:bg-amber-400 transition-all"
              />
            </div>
            <span className="text-[10px] text-gray-400 font-medium mt-1">
              {bar.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
