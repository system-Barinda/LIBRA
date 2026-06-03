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
    note: "from last week",
    trend: "up",
    icon: BookOpen,
  },
  {
    label: "Overdue Returns",
    value: "132",
    subtitle: "overdue items",
    change: "-5.6%",
    note: "improvement",
    trend: "up",
    icon: Clock3,
  },
  {
    label: "Total Visitors",
    value: "3,420",
    subtitle: "this month",
    change: "-2.4%",
    note: "from previous month",
    trend: "down",
    icon: Users,
  },
  {
    label: "Total Books",
    value: "18,750",
    subtitle: "in collection",
    change: "+150",
    note: "new books this month",
    trend: "up",
    icon: Library,
  },
];

export default function TopBar() {
  return (
    <div className="gap-4 grid grid-cols-2 w-full md:grid-cols-1 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-2xl border border-gray-800 bg-[#FAFAFA] p-4 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-white">
                <Icon size={14} />
              </div>

              <span className="text-sm text-gray-600">
                {card.label}
              </span>
            </div>

            {/* Value */}
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              {card.value}
            </h3>

            {/* Footer */}
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10px] text-gray-400">
                {card.subtitle}
              </span>

              <span
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ${
                  card.trend === "up"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp size={10} />
                ) : (
                  <TrendingDown size={10} />
                )}
                {card.change}
              </span>
            </div>

            <p className="mt-1 text-[11px] text-gray-400 text-right">
              {card.note}
            </p>
          </div>
        );
      })}
    </div>
  );
}

{/* <div className=" bg-amber-950 grid gap-4 lg:grid-cols-4 w-full"></div> */}