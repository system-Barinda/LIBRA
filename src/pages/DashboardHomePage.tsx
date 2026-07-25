import React, { useState, useEffect, useRef, useMemo } from "react";
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
  Sparkles,
  TrendingUp,
  BookOpen,
  Users,
  CheckCircle,
  X,
  SearchX,
} from "lucide-react";
import gsap from "gsap";

import { BOOKS_DATA } from "../data/Books_Data";
import type { Book } from "../types/BookTypes";

export const DashboardHomePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book>(BOOKS_DATA[0]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Search state
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtered books based on real-time user input
  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return BOOKS_DATA;

    return BOOKS_DATA.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        (book.category && book.category.toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  // Keep selectedBook valid if search results change
  useEffect(() => {
    if (
      filteredBooks.length > 0 &&
      !filteredBooks.some((b) => b.id === selectedBook.id)
    ) {
      setSelectedBook(filteredBooks[0]);
    }
  }, [filteredBooks, selectedBook]);

  // GSAP Animation Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Banner Fade & Slide Up
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        );
      }

      // Staggered Cards / Rows Entrance Animation
      if (catalogRef.current && catalogRef.current.children.length > 0) {
        gsap.fromTo(
          catalogRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
          },
        );
      }

      // Sidebar Details Panel Entrance
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { opacity: 0, x: 25 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", delay: 0.2 },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [viewMode, searchQuery]);

  return (
    <div
      ref={containerRef}
      className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden"
    >
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP HEADER WITH FUNCTIONAL SEARCH */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-10">
          <div className="mx-auto relative w-72 md:w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, or category..."
              className="w-full pl-10 pr-10 py-2 bg-slate-100 border border-transparent rounded-lg text-sm focus:outline-none focus:bg-white focus:border-orange-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition"
                title="Clear Search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* CONTENT BODY WITH DETAILS SIDEBAR */}
        <div className="flex-1 flex overflow-hidden">
          {/* PRIMARY WORKSPACE */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
            {/* HERO ATTRACTION BANNER */}
            <div
              ref={heroRef}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-6 md:p-8 text-white shadow-lg shadow-orange-500/10"
            >
              <div className="relative z-10 max-w-xl space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
                  <Sparkles size={14} /> Featured Collection
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Discover & Manage Your Literary World
                </h1>
                <p className="text-orange-100 text-sm md:text-base">
                  Track dynamic user checkouts, review active library stats, and
                  quickly manage incoming books in real-time.
                </p>

                {/* Quick Stats Badges */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs md:text-sm font-medium">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <BookOpen size={16} /> 1,240 Total Titles
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <Users size={16} /> 312 Active Readers
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <TrendingUp size={16} /> +18% Monthly Growth
                  </div>
                </div>
              </div>

              {/* Decorative Background Accents */}
              <div className="absolute -right-8 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* PAGE HEADER & CONTROLS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Book Collection
                </h2>
                <p className="text-sm text-slate-500">
                  {searchQuery
                    ? `Showing results for "${searchQuery}" (${filteredBooks.length} found)`
                    : "Manage and browse through your active library catalog."}
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition">
                  <Filter size={16} /> Filter
                </button>
                <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded transition ${
                      viewMode === "grid"
                        ? "bg-white shadow-sm text-orange-600 font-semibold"
                        : "text-slate-500"
                    }`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded transition ${
                      viewMode === "list"
                        ? "bg-white shadow-sm text-orange-600 font-semibold"
                        : "text-slate-500"
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded-lg shadow-sm shadow-orange-200 transition">
                  <Plus size={16} /> Add Book
                </button>
              </div>
            </div>

            {/* BOOK CATALOG VIEW OR NO RESULTS STATE */}
            {filteredBooks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 text-center p-6">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3">
                  <SearchX size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  No books found
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
                  We couldn't find any title or author matching "{searchQuery}".
                  Try searching for another keyword.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition"
                >
                  Clear Search Filter
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div
                ref={catalogRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    onClick={() => setSelectedBook(book)}
                    className={`group bg-white rounded-xl border p-4 cursor-pointer transition-all hover:shadow-lg ${
                      selectedBook?.id === book.id
                        ? "border-orange-500 ring-2 ring-orange-500/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-slate-100">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            ) : (
              /* LIST VIEW */
              <div ref={catalogRef} className="space-y-3">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    onClick={() => setSelectedBook(book)}
                    className={`flex items-center justify-between bg-white rounded-xl border p-3 cursor-pointer transition-all hover:shadow-md ${
                      selectedBook?.id === book.id
                        ? "border-orange-500 ring-2 ring-orange-500/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={book.coverUrl}
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-slate-900 text-sm truncate">
                          {book.title}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">
                          {book.author}
                        </p>
                        <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-medium mt-1">
                          <Star size={12} fill="currentColor" /> {book.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md font-medium hidden sm:block ${
                          book.status === "Available"
                            ? "bg-emerald-50 text-emerald-600"
                            : book.status === "Borrowed"
                              ? "bg-orange-50 text-orange-600"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {book.status}
                      </span>
                      <span className="text-xs text-slate-400 hidden md:block">
                        {book.borrowedCount} Borrows
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ATTRACTION FEATURE: QUICK RECENT ACTIVITY SECTION */}
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
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
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-slate-500 text-xs">New Collection Added</p>
                  <p className="font-semibold text-slate-800 mt-1">
                    "Where The Flowers Bloom"
                  </p>
                  <span className="text-xs text-slate-400">4 hours ago</span>
                </div>
              </div>
            </section>
          </main>

          {/* DETAILS / METADATA PANEL */}
          <aside
            ref={sidebarRef}
            className="hidden xl:flex w-80 bg-white border-l border-slate-200 p-6 flex-col justify-between overflow-y-auto"
          >
            {selectedBook ? (
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
            ) : (
              <div className="text-center text-slate-400 my-auto">
                No book selected
              </div>
            )}

            {/* Actions */}
            {selectedBook && (
              <div className="pt-6 border-t border-slate-100 space-y-2 mt-6">
                <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition shadow-sm shadow-orange-200">
                  Issue Book
                </button>
                <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition flex items-center justify-center gap-2">
                  View Full Logs <ChevronRight size={16} />
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
