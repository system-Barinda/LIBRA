import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export function GlobalFooter() {
  return (
    <div className="p-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row gap-4 justify-between items-center text-xs font-medium text-gray-500">
      <div className="flex items-center gap-1.5">
        <span>Show</span>
        <div className="relative">
          <select className="appearance-none border border-gray-200 rounded-lg pl-2 pr-6 py-1 bg-white focus:outline-none text-gray-700 font-semibold cursor-pointer text-xs">
            <option>12</option>
            <option>25</option>
            <option>50</option>
          </select>
          <ChevronDown
            size={12}
            className="absolute right-1.5 top-2 text-gray-400 pointer-events-none"
          />
        </div>
        <span>of 56 results</span>
      </div>

      <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1">
        <button className="p-1.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-300 cursor-not-allowed shrink-0">
          <ChevronLeft size={14} />
        </button>
        <button className="px-2.5 py-1 rounded-lg text-white bg-[#FF7E40] font-bold shrink-0">
          1
        </button>
        <button className="px-2.5 py-1 rounded-lg bg-transparent hover:bg-gray-50 text-gray-600 transition-colors shrink-0">
          2
        </button>
        <button className="px-2.5 py-1 rounded-lg bg-transparent hover:bg-gray-50 text-gray-600 transition-colors shrink-0">
          3
        </button>
        <span className="px-1 text-gray-300 shrink-0">..</span>
        <button className="px-2.5 py-1 rounded-lg bg-transparent hover:bg-gray-50 text-gray-600 transition-colors shrink-0">
          6
        </button>
        <button className="p-1.5 border border-gray-200 rounded-lg bg-white text-gray-500 hover:bg-gray-50 transition-colors shrink-0">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
