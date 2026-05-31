import {
  BookOpen,
  Clock3,
  Users,
  Library,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const cards = [
  {
    label: "Borrowed Books",
    value: "1,250",
    subtitle: "books borrowed",
    change: "+8.2%",
    trend: "up",
    icon: BookOpen,
  },
  {
    label: "Overdue Returns",
    value: "132",
    subtitle: "overdue items",
    change: "-5.6%",
    trend: "down",
    icon: Clock3,
  },
  {
    label: "Total Visitors",
    value: "3,420",
    subtitle: "this month",
    change: "-2.4%",
    trend: "down",
    icon: Users,
  },
  {
    label: "Total Books",
    value: "18,750",
    subtitle: "in collection",
    change: "+150",
    trend: "up",
    icon: Library,
  },
];

export default function TopBar() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
          >
            {/* Top Row */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white">
                <Icon size={18} />
              </div>

              <p className="text-sm font-medium text-gray-600">
                {card.label}
              </p>
            </div>

            {/* Value */}
            <h3 className="mt-5 text-3xl font-bold text-gray-900">
              {card.value}
            </h3>

            {/* Bottom Row */}
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-400">{card.subtitle}</p>

              <span
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                  card.trend === "up"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                {card.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}