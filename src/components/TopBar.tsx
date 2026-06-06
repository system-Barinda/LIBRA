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
    <section className="grid grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label} 
            className="
              bg-white
              hover:shadow-md
              transition-all
              duration-300
              h-30
              
            "
          >
            {/* Header */}
            <div className="flex flex-col items-start justify-between">
              <div className="p-4 flex items-center gap-3">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 text-white">
                  <Icon size={10} />
                </div>

                <span className="text-[12px] font-medium text-slate-600">
                  {card.label}
                </span>
              </div>

            
            </div>
              <div className="flex px-4 py-2  items-center justify-between">
                 {/* Value */}
            <h2 className="text-[15px] font-bold tracking-tight text-slate-900">
              {card.value}
            </h2> 
              <span
                className={`flex  border items-center gap-1 rounded-full  text-[8px] font-semibold ${
                  card.trend === "up"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp size={8} />
                ) : (
                  <TrendingDown size={8} />
                )}

                {card.change}
              </span>     
           

            </div>

            {/* Footer */}
            <div className="px-4  flex items-center justify-between">
              <p className="text-slate-500 text-[11px]">
                {card.subtitle}
              </p>

              {/* <p className=" txet-sm text-slate-400">
                {card.note}
              </p> */}
            </div>
          </div>
        );
      })}
    </section>
  );
}