import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentCount, totalCount }:any) {
  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-4 sm:flex-row">
      <div className="flex items-center gap-2 text-xs text-gray-500">
        Show
        <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
          {currentCount} <ChevronDown size={12} />
        </button>
        of {totalCount} results
      </div>

      <div className="flex items-center gap-1 text-xs font-medium">
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F3F4] text-gray-400 hover:bg-gray-200">
          <ChevronLeft size={14} />
        </button>
        <button className="h-8 w-8 rounded-lg bg-[#FF6B35] text-white">
          1
        </button>
        <button className="h-8 w-8 rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
          2
        </button>
        <button className="h-8 w-8 rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
          3
        </button>
        <span className="px-1 text-gray-400">..</span>
        <button className="h-8 w-8 rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
          6
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200">
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}