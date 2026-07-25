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
  ChevronLeft,
  Star,
  CheckCircle,
  X,
  SearchX,
  Bookmark,
  Layers,
  BookOpen,
  Library,
  Compass,
} from "lucide-react";
import gsap from "gsap";

import { BOOKS_DATA } from "../data/Books_Data";
import type { Book } from "../types/BookTypes";
import LibraryHero from "../components/LibraryHero";
import HeroBanner from "../components/HeroBanner";

export const MediaCatalogPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Book | null>(
    BOOKS_DATA[0] || null,
  );
  const [layoutMode, setLayoutMode] = useState<"grid" | "list">("grid");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filter items dynamically without breaking state references
  const filteredCatalog = useMemo(() => {
    const query = searchFilter.trim().toLowerCase();
    if (!query) return BOOKS_DATA;

    return BOOKS_DATA.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        (item.category && item.category.toLowerCase().includes(query)),
    );
  }, [searchFilter]);

  // Synchronize selection safely when search results update
  useEffect(() => {
    if (filteredCatalog.length > 0) {
      const exists = filteredCatalog.some(
        (item) => item.id === selectedItem?.id,
      );
      if (!exists) {
        setSelectedItem(filteredCatalog[0]);
      }
    } else {
      setSelectedItem(null);
    }
  }, [filteredCatalog]);

  // Ref references for smooth animations
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const displayGridRef = useRef<HTMLDivElement>(null);
  const detailPanelRef = useRef<HTMLElement>(null);
  const trendingRowRef = useRef<HTMLDivElement>(null);
  const classicsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (
        displayGridRef.current &&
        displayGridRef.current.children.length > 0
      ) {
        gsap.fromTo(
          displayGridRef.current.children,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.04,
            ease: "power2.out",
          },
        );
      }

      if (detailPanelRef.current) {
        gsap.fromTo(
          detailPanelRef.current,
          { opacity: 0, x: 15 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" },
        );
      }
    }, pageContainerRef);

    return () => ctx.revert();
  }, [layoutMode, filteredCatalog]);

  const handleSelectItem = (item: Book) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const scrollContainer = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right",
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <HeroBanner />

      {/* Main Container */}
      <div
        ref={pageContainerRef}
        className="flex-1 flex flex-col xl:flex-row h-full min-w-0 overflow-hidden"
      >
        {/* WORKSPACE CONTENT AREA */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* HEADER / NAVIGATION BAR */}
          <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-6 flex items-center justify-between z-10 sticky top-0">
            <div className="relative w-full max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search catalog by title, creator, or topic..."
                className="w-full pl-10 pr-10 py-2 bg-slate-100 border border-transparent rounded-lg text-sm focus:outline-none focus:bg-white focus:border-orange-500 transition"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition"
                  title="Clear Search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 md:gap-4 ml-4">
              <button className="relative p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full" />
              </button>
            </div>
          </header>

          {/* CATALOG BODY */}
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8">
              {/* SECTION 1: WELCOME FEATURE CARDS (IMAGE 1 STYLE) */}
              <section className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Library className="text-orange-500" size={20} /> Welcome to
                  Open Media Catalog
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">
                        Read Digital Books
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Millions of entries accessible online.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                      <Bookmark size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">
                        Track Favorites
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Organize your collections and logs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                      <Compass size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">
                        Virtual Explorer
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Interactive shelves for seamless browsing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CONTROL BAR */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Layers size={22} className="text-orange-500" />
                    Media Archive
                  </h2>
                  <p className="text-sm text-slate-500">
                    {searchFilter
                      ? `Matching entries for "${searchFilter}" (${filteredCatalog.length} found)`
                      : "Explore and manage your active physical and digital archives."}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <button className="flex items-center gap-2 px-3 py-2 bg-slate-100 border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition">
                    <Filter size={16} /> Filter
                  </button>

                  <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setLayoutMode("grid")}
                      className={`p-1.5 rounded transition ${
                        layoutMode === "grid"
                          ? "bg-white shadow-sm text-orange-600 font-semibold"
                          : "text-slate-500"
                      }`}
                      aria-label="Grid layout"
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setLayoutMode("list")}
                      className={`p-1.5 rounded transition ${
                        layoutMode === "list"
                          ? "bg-white shadow-sm text-orange-600 font-semibold"
                          : "text-slate-500"
                      }`}
                      aria-label="List layout"
                    >
                      <List size={16} />
                    </button>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded-lg shadow-sm shadow-orange-200 transition">
                    <Plus size={16} /> New Entry
                  </button>
                </div>
              </div>

              {/* SECTION 2: TRENDING CATALOG (HORIZONTAL SCROLLING CAROUSEL - IMAGE 1) */}
              {!searchFilter && (
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      Trending Catalog
                    </h3>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => scrollContainer(trendingRowRef, "left")}
                        className="p-1.5 text-slate-500 hover:bg-slate-200 rounded-full transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => scrollContainer(trendingRowRef, "right")}
                        className="p-1.5 text-slate-500 hover:bg-slate-200 rounded-full transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={trendingRowRef}
                    className="flex gap-4 overflow-x-auto scrollbar-none pb-2"
                  >
                    {BOOKS_DATA.slice(0, 6).map((item) => (
                      <div
                        key={`trending-${item.id}`}
                        onClick={() => handleSelectItem(item)}
                        className="min-w-[160px] max-w-[160px] bg-white rounded-xl border border-slate-200 p-3 cursor-pointer hover:shadow-md transition shrink-0 flex flex-col justify-between"
                      >
                        <div>
                          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-100 mb-2">
                            <img
                              src={item.coverUrl}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-semibold text-slate-900 text-xs truncate">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate">
                            {item.author}
                          </p>
                        </div>

                        <button
                          className={`mt-3 w-full py-1.5 text-xs font-semibold rounded-lg border transition ${
                            item.status === "Available"
                              ? "bg-orange-500 border-orange-500 text-white hover:bg-orange-600"
                              : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {item.status === "Available" ? "Borrow" : item.status}
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SECTION 3: MEDIA DISPLAY (GRID / LIST) */}
              {filteredCatalog.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 text-center p-6">
                  <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3">
                    <SearchX size={24} />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">
                    No records found
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mt-1 mb-4">
                    No matching catalog entries were found for "{searchFilter}".
                    Try revising your search term.
                  </p>
                  <button
                    onClick={() => setSearchFilter("")}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : layoutMode === "grid" ? (
                <div
                  ref={displayGridRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                  {filteredCatalog.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className={`group bg-white rounded-xl border p-4 cursor-pointer transition-all hover:shadow-lg ${
                        selectedItem?.id === item.id
                          ? "border-orange-500 ring-2 ring-orange-500/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-slate-100">
                        <img
                          src={item.coverUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span
                          className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-md font-medium shadow-sm backdrop-blur-md ${
                            item.status === "Available"
                              ? "bg-emerald-500/90 text-white"
                              : item.status === "Borrowed"
                                ? "bg-orange-500/90 text-white"
                                : "bg-slate-700/90 text-white"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="font-semibold text-slate-900 truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-2">
                        {item.author}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                        <span className="flex items-center gap-1 text-amber-500 font-medium">
                          <Star size={14} fill="currentColor" /> {item.rating}
                        </span>
                        <span>{item.borrowedCount} Checked Out</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* LIST LAYOUT */
                <div ref={displayGridRef} className="space-y-3">
                  {filteredCatalog.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className={`flex items-center justify-between bg-white rounded-xl border p-3 cursor-pointer transition-all hover:shadow-md ${
                        selectedItem?.id === item.id
                          ? "border-orange-500 ring-2 ring-orange-500/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <img
                          src={item.coverUrl}
                          alt={item.title}
                          className="w-12 h-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-slate-900 text-sm truncate">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 truncate">
                            {item.author}
                          </p>
                          <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-medium mt-1">
                            <Star size={12} fill="currentColor" /> {item.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-md font-medium hidden sm:block ${
                            item.status === "Available"
                              ? "bg-emerald-50 text-emerald-600"
                              : item.status === "Borrowed"
                                ? "bg-orange-50 text-orange-600"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.status}
                        </span>
                        <span className="text-xs text-slate-400 hidden md:block">
                          {item.borrowedCount} Borrows
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* SECTION 4: ARTICLES & ARTICLES GRID (IMAGE 2 BLOG LAYOUT STYLE) */}
              <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="text-center max-w-xl mx-auto mb-8">
                  <p className="text-xs font-bold text-orange-500 tracking-wider uppercase mb-1">
                    All Your Favorite Reads In One Place
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Latest Insights & Articles
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <article className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                    <img
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80"
                      alt="Business Strategies"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-1">
                          Top 5 Media On Business Strategies
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Learn how to successfully expand your organizational
                          skills with selected reads.
                        </p>
                      </div>
                      <button className="mt-4 text-xs font-semibold text-orange-600 hover:underline flex items-center gap-1">
                        Learn More <ChevronRight size={14} />
                      </button>
                    </div>
                  </article>

                  <article className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                    <img
                      src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80"
                      alt="Personal Growth"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-1">
                          Non-Fiction Selections For Growth
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Discover practical frameworks designed to assist your
                          daily learning and focus.
                        </p>
                      </div>
                      <button className="mt-4 text-xs font-semibold text-orange-600 hover:underline flex items-center gap-1">
                        Learn More <ChevronRight size={14} />
                      </button>
                    </div>
                  </article>

                  <article className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                    <img
                      src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&q=80"
                      alt="Must Read Media"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm mb-1">
                          Must-Read Titles This Season
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Explore top recommendations curated by the active
                          community catalog.
                        </p>
                      </div>
                      <button className="mt-4 text-xs font-semibold text-orange-600 hover:underline flex items-center gap-1">
                        Learn More <ChevronRight size={14} />
                      </button>
                    </div>
                  </article>
                </div>
              </section>

              {/* RECENT SYSTEM LOGS */}
              <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" />
                    Live System Activity
                  </h3>
                  <button className="text-xs text-orange-600 hover:underline font-semibold">
                    View Complete Audit Log
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-500 text-xs">Recently Issued</p>
                    <p className="font-semibold text-slate-800 mt-1">
                      "Silent Mountains"
                    </p>
                    <span className="text-xs text-slate-400">
                      2 minutes ago
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-500 text-xs">Returned Today</p>
                    <p className="font-semibold text-slate-800 mt-1">
                      "Minimalist Architecture"
                    </p>
                    <span className="text-xs text-slate-400">1 hour ago</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2 md:col-span-1">
                    <p className="text-slate-500 text-xs">New Archive Unit</p>
                    <p className="font-semibold text-slate-800 mt-1">
                      "Where The Flowers Bloom"
                    </p>
                    <span className="text-xs text-slate-400">4 hours ago</span>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* DETAILS / INSPECTION DRAWER PANEL */}
        <aside
          ref={detailPanelRef}
          className={`
            fixed xl:relative inset-y-0 right-0 z-50 w-full sm:w-80 bg-white border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl xl:shadow-none
            ${
              isDrawerOpen
                ? "translate-x-0"
                : "translate-x-full xl:translate-x-0"
            }
          `}
        >
          {selectedItem ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Bookmark size={16} className="text-orange-500" /> Item
                  Summary
                </h3>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="xl:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
                    title="Close Panel"
                  >
                    <X size={20} />
                  </button>
                  <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              {/* Cover Showcase */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-lg max-h-72 mx-auto">
                <img
                  src={selectedItem.coverUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metadata Breakdown */}
              <h2 className="text-xl font-bold text-slate-900 leading-tight">
                {selectedItem.title}
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                {selectedItem.author}
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-medium text-slate-800">
                    {selectedItem.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-medium text-orange-600">
                    {selectedItem.status}
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
                    {selectedItem.rating}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-slate-400 my-auto">
              No media item selected
            </div>
          )}

          {/* Action Footer */}
          {selectedItem && (
            <div className="pt-6 border-t border-slate-100 space-y-2 mt-6">
              <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition shadow-sm shadow-orange-200">
                Checkout Item
              </button>
              <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition flex items-center justify-center gap-2">
                View Access Logs <ChevronRight size={16} />
              </button>
            </div>
          )}
        </aside>
      </div>

      <LibraryHero />
    </div>
  );
};

export default MediaCatalogPage;
