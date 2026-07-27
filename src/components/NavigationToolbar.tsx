import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  List,
  Grid,
  Plus,
} from "lucide-react";

export function NavigationToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
      <div className="relative flex-1 min-w-[200px] sm:flex-initial sm:w-64">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={15} />
        <input
          type="text"
          placeholder="Search a book"
          className="pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl bg-[#F5F5F5] focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 w-full transition-all"
        />
      </div>

      <button className="p-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 flex items-center gap-1.5 transition-colors shrink-0">
        <SlidersHorizontal size={14} className="text-gray-500" />
        <span>Filter</span>
      </button>

      <div className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0">
        <span className="hidden sm:inline">Sort by:</span>
        <button className="border border-gray-200 rounded-xl bg-white px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-1 transition-all">
          Popular <ChevronDown size={12} className="ml-0.5 text-gray-400" />
        </button>
      </div>

      <div className="flex items-center gap-0.5 bg-gray-100 p-1 rounded-xl shrink-0">
        <button className="p-1.5 rounded-lg text-white bg-[#FF7E40] shadow-sm">
          <List size={14} />
        </button>
        <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
          <Grid size={14} />
        </button>
      </div>

      <button className="text-xs font-semibold text-white bg-[#FF7E40] hover:bg-[#e0682e] rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-sm transition-all shrink-0 ml-auto sm:ml-0">
        <Plus size={16} /> <span>Add Book</span>
      </button>
    </div>
  );
}
