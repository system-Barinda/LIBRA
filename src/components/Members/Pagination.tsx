import React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentCount: number;
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

export default function Pagination({
  currentCount,
  totalCount,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;

  // Generate dynamic array of page numbers
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("..");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("..");
      if (!pages.includes(totalPages)) pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-4 sm:flex-row">
      {/* Items Per Page Selector */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        Show
        <div className="relative">
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-1 pl-2 pr-6 text-xs font-semibold text-gray-700 outline-none hover:border-gray-300 focus:ring-1 focus:ring-[#FF6B35]"
          >
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <ChevronDown
            size={12}
            className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
        of {totalCount} results
      </div>

      {/* Page Navigation Controls */}
      <div className="flex items-center gap-1 text-xs font-medium">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Dynamic Page Buttons */}
        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={`h-8 w-8 rounded-lg transition-colors ${
                currentPage === page
                  ? "bg-[#FF6B35] font-semibold text-white"
                  : "bg-[#F1F3F4] text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="px-1 text-gray-400">
              {page}
            </span>
          ),
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F3F4] text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
