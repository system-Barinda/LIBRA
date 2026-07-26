import React from "react";
import { BookOpen, TrendingUp, TrendingDown, Star } from "lucide-react";
import { stats } from "../data/Stats";
import { bookCategories } from "../data/bookCategories";
import { libraryActivity } from "../data/libraryActivity";
import { recentActivities } from "../data/recentActivities";
import { topAuthors } from "../data/topAuthors";
import { topBorrowedBooks } from "../data/topBorrowedBooks";

export const LandingPage: React.FC = () => {
  return (
    <div className=" min-h-screen bg-gray-50 text-gray-800 font-sans flex  lg:flex-row">
      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
        {/* 4 STATS CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500">
                  {stat.title}
                </span>
                <div className="p-2 bg-orange-50 text-orange-500 rounded-xl">
                  <stat.icon className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </span>
                <span
                  className={`text-xs font-bold flex items-center gap-0.5 ${
                    stat.isPositive ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {stat.isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-[11px] text-gray-400">{stat.subtext}</p>
            </div>
          ))}
        </section>

        {/* MAIN DASHBOARD GRID: LEFT HEAVY (CHARTS & TABLES), RIGHT SIDEBAR (BOOKS & ACTIVITIES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
          {/* LEFT CONTENT COL (8 COLUMNS) */}
          <div className="lg:col-span-8 space-y-6">
            {/* CHARTS ROW 1: Library Usage Trends & Revenue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Library Usage Trends Chart */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">
                      Library Usage Trends
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                        Visitors
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-300"></span>{" "}
                        Borrowers
                      </span>
                    </div>
                  </div>
                  <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                </div>

                {/* Simulated Bar Chart */}
                <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-gray-100">
                  {[
                    { day: "Sun", v: 40, b: 25 },
                    { day: "Mon", v: 65, b: 45 },
                    { day: "Tue", v: 85, b: 60, active: true },
                    { day: "Wed", v: 50, b: 30 },
                    { day: "Thu", v: 75, b: 50 },
                    { day: "Fri", v: 90, b: 70 },
                    { day: "Sat", v: 60, b: 40 },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-1 h-full justify-end group relative"
                    >
                      {bar.active && (
                        <div className="absolute -top-7 bg-gray-900 text-white text-[10px] py-0.5 px-1.5 rounded shadow whitespace-nowrap z-10">
                          Thu, 27 Sept 2026: {bar.v} Visitors
                        </div>
                      )}
                      <div className="w-full max-w-[28px] flex items-end gap-1 h-full">
                        <div
                          style={{ height: `${bar.v}%` }}
                          className={`w-1/2 rounded-t-sm transition-all ${
                            bar.active
                              ? "bg-orange-500"
                              : "bg-orange-400/80 group-hover:bg-orange-500"
                          }`}
                        />
                        <div
                          style={{ height: `${bar.b}%` }}
                          className="w-1/2 rounded-t-sm bg-amber-300 group-hover:bg-amber-400 transition-all"
                        />
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium mt-1">
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">Revenue</h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Monthly Total Performance
                    </p>
                  </div>
                  <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                  </select>
                </div>

                {/* Simulated Area Chart */}
                <div className="h-44 relative flex items-end justify-between pt-6 border-b border-gray-100">
                  <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-gray-100" />
                  <div className="absolute top-6 right-8 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded font-medium shadow">
                    $12,450
                  </div>
                  {/* Visual SVG line overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full p-2 overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 10 120 Q 80 90, 150 110 T 290 50 T 400 40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                    />
                  </svg>
                  {["Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m, i) => (
                    <div key={i} className="flex-1 text-center z-10">
                      <span className="text-[10px] text-gray-400 font-medium">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CHARTS ROW 2: Book Categories & Revenue Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Book Categories */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-sm text-gray-900">
                    Book Categories
                  </h3>
                  <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                    <option>Last Week</option>
                  </select>
                </div>

                {/* Strip bar chart visualization */}
                <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden flex mb-5">
                  <div className="w-[35%] bg-orange-500 h-full" />
                  <div className="w-[22%] bg-amber-500 h-full" />
                  <div className="w-[15%] bg-blue-500 h-full" />
                  <div className="w-[12%] bg-teal-500 h-full" />
                  <div className="w-[10%] bg-purple-500 h-full" />
                  <div className="w-[6%] bg-rose-400 h-full" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {bookCategories.map((cat, i) => (
                    <div
                      key={i}
                      className="p-2 bg-gray-50/70 rounded-xl flex items-center gap-2.5"
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cat.color}`}
                      />
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-gray-800 truncate">
                          {cat.name}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {cat.pct} • {cat.count}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Breakdown Donut */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-gray-900">
                    Revenue Breakdown
                  </h3>
                  <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                    <option>This Month</option>
                  </select>
                </div>

                <div className="flex items-center justify-between gap-4 my-auto">
                  {/* Donut graphic */}
                  <div className="relative w-28 h-28 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-gray-100"
                        strokeWidth="3.8"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-orange-500"
                        strokeDasharray="60, 100"
                        strokeWidth="3.8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-amber-400"
                        strokeDasharray="25, 100"
                        strokeDashoffset="-60"
                        strokeWidth="3.8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-extrabold text-gray-900">
                        $12,450
                      </span>
                      <span className="text-[9px] text-gray-400">
                        Total Revenue
                      </span>
                    </div>
                  </div>

                  {/* Legend list */}
                  <div className="space-y-2 flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />{" "}
                        Membership Fees
                      </span>
                      <span className="font-bold text-gray-900">$7,470</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />{" "}
                        Fines
                      </span>
                      <span className="font-bold text-gray-900">$2,490</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />{" "}
                        Events
                      </span>
                      <span className="font-bold text-gray-900">$1,494</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-gray-300" />{" "}
                        Others
                      </span>
                      <span className="font-bold text-gray-900">$996</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LIBRARY ACTIVITY TABLE */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    Library Activity
                  </h3>
                  <p className="text-xs text-gray-400">
                    Recent borrowings, returns, and overdue items
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-semibold focus:outline-none">
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-semibold uppercase text-[10px] tracking-wider">
                      <th className="pb-3 px-2">Book</th>
                      <th className="pb-3 px-2">Member Info</th>
                      <th className="pb-3 px-2">Borrow & Due Date</th>
                      <th className="pb-3 px-2">Return Date</th>
                      <th className="pb-3 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {libraryActivity.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-3 px-2">
                          <div className="font-bold text-gray-800">
                            {row.bookTitle}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {row.bookAuthor}
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div>
                              <div className="font-semibold text-gray-800">
                                {row.member}
                              </div>
                              <div className="text-[10px] text-gray-400">
                                {row.memberId}
                              </div>
                            </div>
                            <span
                              className={`px-1.5 py-0.5 text-[9px] rounded font-bold ${
                                row.memberTier === "Premium"
                                  ? "bg-purple-100 text-purple-700"
                                  : row.memberTier === "Standard"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {row.memberTier}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 font-medium text-gray-600">
                          {row.borrowDueDate}
                        </td>
                        <td className="py-3 px-2 font-medium text-gray-600">
                          {row.returnDate}
                        </td>
                        <td className="py-3 px-2">
                          <span
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold inline-block ${
                              row.status === "Returned"
                                ? "bg-emerald-50 text-emerald-600"
                                : row.status === "Borrowed"
                                  ? "bg-amber-50 text-amber-600"
                                  : "bg-rose-50 text-rose-600"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR COL (4 COLUMNS) */}
          <div className="lg:col-span-4 space-y-6">
            {/* TOP BORROWED BOOKS */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-gray-900">
                  Top Borrowed Books
                </h3>
                <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                  <option>This Month</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {topBorrowedBooks.map((book) => (
                  <div
                    key={book.id}
                    className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-full h-24 rounded-xl ${book.coverBg} mb-3 flex items-center justify-center p-2 text-white shadow-inner relative overflow-hidden`}
                    >
                      <BookOpen className="w-8 h-8 opacity-40" />
                      <div className="absolute inset-0 bg-black/10 flex items-end p-2">
                        <span className="text-[10px] font-extrabold text-white leading-tight truncate">
                          {book.title}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-gray-900 truncate">
                          {book.title}
                        </span>
                        <span className="flex items-center text-amber-500 font-bold text-[10px]">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" />
                          {book.rating}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mb-2">
                        Book ID: {book.bookId}
                      </p>
                      <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                        <span>Borrowers</span>
                        <span className="font-bold text-gray-800">
                          {book.borrowers}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TOP AUTHORS */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-gray-900">Top Authors</h3>
                <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                  <option>This Week</option>
                </select>
              </div>

              <div className="space-y-3">
                {topAuthors.map((author) => (
                  <div
                    key={author.id}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-xs text-gray-800">
                          {author.name}
                        </h4>
                        <p className="text-[10px] text-gray-400">
                          {author.books} Books
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                      {author.borrowers}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT ACTIVITIES */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-gray-900">
                  Recent Activities
                </h3>
                <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
                  <option>This Week</option>
                </select>
              </div>

              <div className="relative pl-4 space-y-5 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                {recentActivities.map((act) => (
                  <div key={act.id} className="relative flex gap-3 text-xs">
                    {/* Activity Icon Dot */}
                    <div
                      className={`absolute -left-4 top-0.5 w-3 h-3 rounded-full border-2 border-white ${
                        act.type === "update"
                          ? "bg-blue-500"
                          : act.type === "member"
                            ? "bg-emerald-500"
                            : act.type === "return"
                              ? "bg-amber-500"
                              : "bg-rose-500"
                      }`}
                    />

                    <div>
                      <h4 className="font-bold text-gray-800 leading-tight">
                        {act.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                        {act.description}
                      </p>
                      <span className="text-[9px] text-gray-400 mt-1 block font-medium">
                        {act.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
