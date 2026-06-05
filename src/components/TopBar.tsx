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

export default function OverviewCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="
              bg-white
              rounded-2xl
              p-5
              border
              border-slate-200
              shadow-sm
              hover:shadow-md
              transition-all
              duration-300
              h-30
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-white">
                  <Icon size={15} />
                </div>

                <span className="text-sm font-medium text-slate-600">
                  {card.label}
                </span>
              </div>

              <span
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  card.trend === "up"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp size={11} />
                ) : (
                  <TrendingDown size={11} />
                )}

                {card.change}
              </span>
            </div>

            {/* Value */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              {card.value}
            </h2>

            {/* Footer */}
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {card.subtitle}
              </p>

              <p className="text-xs text-slate-400">
                {card.note}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}