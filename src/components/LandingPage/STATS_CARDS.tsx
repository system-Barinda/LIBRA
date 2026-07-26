import { TrendingDown, TrendingUp } from "lucide-react";
import { stats } from "../../data/Stats";

export function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500">
              {stat.title}
            </span>
            <div className="p-2 bg-orange-50 text-orange-500 rounded-xl">
              <stat.icon className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {stat.value}
            </span>
            <span
              className={`text-xs font-bold flex items-center gap-0.5 ${
                stat.isPositive ? "text-emerald-600" : "text-rose-500"
              }`}
            >
              {stat.isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {stat.change}
            </span>
          </div>
          <p className="text-[11px] text-gray-400">{stat.subtext}</p>
        </div>
      ))}
    </section>
  );
}
