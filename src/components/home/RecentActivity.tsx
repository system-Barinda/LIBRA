import { CheckCircle } from "lucide-react";

export function RecentActivity() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5 mt-8 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle size={18} className="text-emerald-500" />
          Recent Library Activity
        </h3>
        <button className="text-xs text-orange-600 hover:underline font-semibold">
          View All Log History
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-slate-500 text-xs">Recently Issued</p>
          <p className="font-semibold text-slate-800 mt-1">
            "Silent Mountains"
          </p>
          <span className="text-xs text-slate-400">2 minutes ago</span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-slate-500 text-xs">Returned Today</p>
          <p className="font-semibold text-slate-800 mt-1">
            "Minimalist Architecture"
          </p>
          <span className="text-xs text-slate-400">1 hour ago</span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2 md:col-span-1">
          <p className="text-slate-500 text-xs">New Collection Added</p>
          <p className="font-semibold text-slate-800 mt-1">
            "Where The Flowers Bloom"
          </p>
          <span className="text-xs text-slate-400">4 hours ago</span>
        </div>
      </div>
    </section>
  );
}
