import { bookCategories } from "../../data/bookCategories";

export function BookCategories() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm text-gray-900">Book Categories</h3>
        <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
          <option>Last Week</option>
        </select>
      </div>

      {/* Strip bar chart visualization */}
      <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden flex mb-5">
        <div className="w-[35%] bg-orange-500 h-full" />
        <div className="w-[22%] bg-amber-500 h-full" />
        <div className="w-[15%] bg-blue-500 h-full" />
        <div className="w-[12%] bg-teal-500 h-full" />
        <div className="w-[10%] bg-purple-500 h-full" />
        <div className="w-[6%] bg-rose-400 h-full" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {bookCategories.map((cat, i) => (
          <div
            key={i}
            className="p-2 bg-gray-50/70 rounded-xl flex items-center gap-2.5"
          >
            <div
              className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cat.color}`}
            />
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-gray-800 truncate">
                {cat.name}
              </p>
              <p className="text-[10px] text-gray-400">
                {cat.pct} • {cat.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
