import React, { useState } from "react";
import {
  Search,
  Bell,
  Grid,
  List,
  Filter,
  Plus,
  MoreVertical,
  ChevronRight,
  Star,
} from "lucide-react";
import { BOOKS_DATA } from "../data/Books_Data";
import type { Book } from "../types/BookTypes";

export const DashboardHomePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book>(BOOKS_DATA[0]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by title, author, or ISBN..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-lg text-sm focus:outline-none focus:bg-white focus:border-orange-500 transition"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="User Avatar"
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
              <div className="text-sm">
                <p className="font-semibold text-slate-800 leading-none">
                  Sarah Holmes
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT BODY WITH DETAILS SIDEBAR */}
        <div className="flex-1 flex overflow-hidden">
          {/* PRIMARY WORKSPACE */}
          <main className="flex-1 overflow-y-auto p-6">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Book Collection
                </h2>
                <p className="text-sm text-slate-500">
                  Manage and browse through your active library catalog.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition">
                  <Filter size={16} /> Filter
                </button>
                <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white shadow-sm text-orange-600" : "text-slate-500"}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded ${viewMode === "list" ? "bg-white shadow-sm text-orange-600" : "text-slate-500"}`}
                  >
                    <List size={16} />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded-lg shadow-sm shadow-orange-200 transition">
                  <Plus size={16} /> Add Book
                </button>
              </div>
            </div>

            {/* Book Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BOOKS_DATA.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className={`bg-white rounded-xl border p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedBook.id === book.id
                      ? "border-orange-500 ring-2 ring-orange-500/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-slate-100">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <span
                      className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-md font-medium shadow-sm backdrop-blur-md ${
                        book.status === "Available"
                          ? "bg-emerald-500/90 text-white"
                          : book.status === "Borrowed"
                            ? "bg-orange-500/90 text-white"
                            : "bg-slate-700/90 text-white"
                      }`}
                    >
                      {book.status}
                    </span>
                  </div>

                  <h3 className="font-semibold text-slate-900 truncate">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">{book.author}</p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star size={14} fill="currentColor" /> {book.rating}
                    </span>
                    <span>{book.borrowedCount} Borrows</span>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* 3. DETAILS / METADATA PANEL */}
          <aside className="w-80 bg-white border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Book Details</h3>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Cover Display */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={selectedBook.coverUrl}
                  alt={selectedBook.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Information */}
              <h2 className="text-xl font-bold text-slate-900 leading-tight">
                {selectedBook.title}
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                {selectedBook.author}
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-medium text-slate-800">
                    {selectedBook.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-medium text-orange-600">
                    {selectedBook.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Rating:</span>
                  <span className="font-medium text-slate-800 flex items-center gap-1">
                    <Star
                      size={14}
                      className="text-amber-500"
                      fill="currentColor"
                    />
                    {selectedBook.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-2">
              <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition shadow-sm shadow-orange-200">
                Issue Book
              </button>
              <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition flex items-center justify-center gap-2">
                View Full Logs <ChevronRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
