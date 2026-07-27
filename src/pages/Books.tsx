import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Grid,
  List,
  Plus,
  Link2,
} from "lucide-react";
import { booksData } from "../data/booksData";
import BookDetails from "../components/books/BookDetails";
import { GlobalFooter } from "../components/GlobalFooter";

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  // If a book is selected, show the Detail view matching the exact reference layout
  if (selectedBook) {
    return (
      <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-4 md:p-6 lg:p-8 font-sans antialiased text-gray-600">
      {/* Header Bar Panel */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
        <h2 className="font-bold text-gray-800 text-xl tracking-tight">
          Books Collection
        </h2>

        {/* Navigation & Toolbar Controls Layout */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 min-w-[200px] sm:flex-initial sm:w-64">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={15}
            />
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
      </div>

      {/* Table Display Card Wrapper */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 bg-[#FAFAFA] uppercase tracking-wider">
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none w-[30%]">
                  Book <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none w-[15%]">
                  Author <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell w-[15%]">
                  Publisher <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none w-[10%]">
                  Status <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell text-center w-[8%]">
                  Copies <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell w-[12%]">
                  Shelf Location <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell w-[10%]">
                  Resource Link <span className="text-[9px] ml-0.5">↕</span>
                </th>
                <th className="py-3 px-4 md:px-6 md:hidden w-[10%]">Details</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              {booksData.map((book) => (
                <tr
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="hover:bg-gray-50/80 transition-colors cursor-pointer"
                >
                  {/* Book Title Column */}
                  <td className="py-3 px-4 md:px-6 align-middle">
                    <div className="flex items-center gap-3">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-10 h-14 object-cover rounded-md bg-gray-50 border border-gray-100 shadow-sm shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-gray-800 text-xs md:text-sm truncate hover:text-[#FF7E40] transition-colors">
                          {book.title}
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                          {book.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Author Column */}
                  <td className="py-3 px-4 md:px-6 align-middle">
                    <div className="flex items-center gap-2">
                      <img
                        src={book.author.avatar}
                        alt={book.author.name}
                        className="w-5 h-5 rounded-full object-cover shrink-0"
                      />
                      <span className="font-medium text-gray-700 truncate max-w-[120px]">
                        {book.author.name}
                      </span>
                    </div>
                  </td>

                  {/* Publisher Column */}
                  <td className="py-3 px-4 md:px-6 hidden md:table-cell align-middle">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-700 truncate">
                        {book.publisher}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {book.year}
                      </p>
                    </div>
                  </td>

                  {/* Status Column */}
                  <td className="py-3 px-4 md:px-6 align-middle whitespace-nowrap">
                    {book.status === "Available" && (
                      <span className="bg-[#E6F4EA] text-[#137333] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">
                        Available
                      </span>
                    )}
                    {book.status === "Borrowed" && (
                      <span className="bg-[#FCE8E6] text-[#C5221F] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">
                        Borrowed
                      </span>
                    )}
                    {book.status === "Damaged" && (
                      <span className="bg-[#FEF7E0] text-[#B06000] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">
                        Damaged
                      </span>
                    )}
                    {book.status === "Lost" && (
                      <span className="bg-[#F1F3F4] text-[#5F6368] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">
                        Lost
                      </span>
                    )}
                  </td>

                  {/* Copies Column */}
                  <td className="py-3 px-4 md:px-6 hidden md:table-cell text-center font-medium text-gray-700 align-middle">
                    {book.copies}
                  </td>

                  {/* Shelf Location Column */}
                  <td className="py-3 px-4 md:px-6 hidden md:table-cell font-medium text-gray-700 tracking-tight align-middle whitespace-nowrap">
                    {book.shelfLocation}
                  </td>

                  {/* Resource Link Column */}
                  <td
                    className="py-3 px-4 md:px-6 hidden md:table-cell align-middle"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href="#resource"
                      className="inline-flex items-center gap-1 text-[#FF7E40] hover:text-[#e0682e] transition-all max-w-[140px]"
                    >
                      <Link2 size={12} className="shrink-0" />
                      <span className="truncate underline font-medium">
                        {book.resourceLink}
                      </span>
                    </a>
                  </td>

                  {/* Responsive Details Column */}
                  <td className="py-3 px-4 md:px-6 md:hidden align-middle">
                    <div className="space-y-1 text-[11px] min-w-[100px]">
                      <p className="text-gray-400">
                        Copies:{" "}
                        <span className="font-semibold text-gray-700">
                          {book.copies}
                        </span>
                      </p>
                      <p className="text-gray-400">
                        Shelf:{" "}
                        <span className="font-semibold text-gray-700 whitespace-nowrap">
                          {book.shelfLocation}
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global Footer Controls Row */}
        <GlobalFooter />
      </div>
    </div>
  );
}
