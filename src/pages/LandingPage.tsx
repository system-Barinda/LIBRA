import React, { useState } from "react";
import {
  LayoutDashboard,
  Inbox,
  Activity,
  BookOpen,
  Users,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Plus,
  MoreVertical,
  BookMarked,
  RotateCcw,
  UserCheck,
  Star,
  CheckCircle2,
  Clock,
  AlertCircle,
  Menu,
  X,
  Filter,
  Download,
  Calendar,
} from "lucide-react";

// --- TYPES ---
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
  icon: React.ElementType;
}

interface TopBook {
  id: string;
  title: string;
  author: string;
  rating: number;
  bookId: string;
  borrowers: number;
  coverBg: string;
  coverImage?: string;
}

interface TopAuthor {
  id: string;
  name: string;
  books: number;
  borrowers: string;
  avatar: string;
}

interface RecentActivityItem {
  id: string;
  type: "update" | "member" | "return" | "overdue";
  title: string;
  description: string;
  time: string;
}

interface LibraryActivityRow {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  member: string;
  memberId: string;
  memberTier: string;
  borrowDueDate: string;
  returnDate: string;
  status: "Returned" | "Borrowed" | "Overdue";
}

export const LandingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample Data matching the exact UI components in the image
  const stats = [
    {
      title: "Borrowed Books",
      value: "1,250",
      change: "+8.2%",
      isPositive: true,
      subtext: "from last week",
      icon: BookMarked,
    },
    {
      title: "Overdue Returns",
      value: "132",
      change: "-4.5%",
      isPositive: true, // fewer overdue is positive
      subtext: "improved",
      icon: RotateCcw,
    },
    {
      title: "Total Visitors",
      value: "3,420",
      change: "-2.4%",
      isPositive: false,
      subtext: "from previous month",
      icon: UserCheck,
    },
    {
      title: "Total Books",
      value: "18,750",
      change: "+150",
      isPositive: true,
      subtext: "new books this month",
      icon: BookOpen,
    },
  ];

  const topBorrowedBooks: TopBook[] = [
    {
      id: "1",
      title: "Everything Kimchi",
      author: "Olivia Wilson",
      rating: 4.8,
      bookId: "BK-10024",
      borrowers: 128,
      coverBg: "bg-gradient-to-br from-amber-400 to-orange-600",
    },
    {
      id: "2",
      title: "My Story",
      author: "Olivia Wilson",
      rating: 4.8,
      bookId: "BK-09875",
      borrowers: 112,
      coverBg: "bg-gradient-to-br from-sky-400 to-blue-600",
    },
  ];

  const topAuthors: TopAuthor[] = [
    {
      id: "1",
      name: "Ava Thornton",
      books: 4,
      borrowers: "265 Borrowers",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      name: "Leo Vance",
      books: 5,
      borrowers: "242 Borrowers",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      name: "Mira Ellison",
      books: 4,
      borrowers: "228 Borrowers",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const recentActivities: RecentActivityItem[] = [
    {
      id: "1",
      type: "update",
      title: "Inventory Updated",
      description: "Admin added 15 new books to the 'Science & Tech' category",
      time: "Sep 27, 2026 - 09:15 AM",
    },
    {
      id: "2",
      type: "member",
      title: "New Member Registered",
      description:
        "Olivia James (MBR-4503) signed up for a Standard membership",
      time: "Sep 27, 2026 - 08:30 AM",
    },
    {
      id: "3",
      type: "return",
      title: "Book Returned",
      description: "'Echoes of Eternity' returned by Noah Miller (MBR-3201)",
      time: "Sep 26, 2026 - 04:45 PM",
    },
    {
      id: "4",
      type: "overdue",
      title: "Overdue Alert Sent",
      description:
        "Reminder sent to Liam Sharp (MBR-4102) for overdue book 'Design Systems'",
      time: "Sep 26, 2026 - 02:15 PM",
    },
  ];

  const libraryActivity: LibraryActivityRow[] = [
    {
      id: "1",
      bookTitle: "Charlie's Life Story",
      bookAuthor: "Mike Vance",
      member: "Livia Sart",
      memberId: "MBR-2103",
      memberTier: "Premium",
      borrowDueDate: "Sept 01 - Sept 15, 2026",
      returnDate: "Sept 14, 2026",
      status: "Returned",
    },
    {
      id: "2",
      bookTitle: "The Coffee Shop Next Door",
      bookAuthor: "Avery Davis",
      member: "Noah Trent",
      memberId: "MBR-1845",
      memberTier: "Standard",
      borrowDueDate: "Aug 20 - Sept 10, 2026",
      returnDate: "-",
      status: "Borrowed",
    },
    {
      id: "3",
      bookTitle: "The Book of Prayer",
      bookAuthor: "Elena Quinn",
      member: "Celine Moore",
      memberId: "MBR-3091",
      memberTier: "Basic",
      borrowDueDate: "Aug 20 - Sept 03, 2026",
      returnDate: "Sept 02, 2026",
      status: "Returned",
    },
    {
      id: "4",
      bookTitle: "Floral Dreams",
      bookAuthor: "Claudia Hans",
      member: "Isla Roy",
      memberId: "MBR-0287",
      memberTier: "Standard",
      borrowDueDate: "Aug 20 - Sept 08, 2026",
      returnDate: "-",
      status: "Overdue",
    },
  ];

  const bookCategories = [
    {
      name: "Fiction",
      pct: "35%",
      count: "6,562 books",
      color: "bg-orange-500",
    },
    {
      name: "Non-Fiction",
      pct: "22%",
      count: "4,125 books",
      color: "bg-amber-500",
    },
    {
      name: "Science & Technology",
      pct: "15%",
      count: "2,812 books",
      color: "bg-blue-500",
    },
    { name: "History", pct: "12%", count: "2,250 books", color: "bg-teal-500" },
    {
      name: "Children & Young Adult",
      pct: "10%",
      count: "1,875 books",
      color: "bg-purple-500",
    },
    { name: "Others", pct: "6%", count: "1,126 books", color: "bg-rose-400" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col lg:flex-row">
      {/* ================= SIDEBAR (DESKTOP) ================= */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0 justify-between p-5 z-20">
        {/* Promo Sidebar Widget */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-4 text-white mt-8 shadow-lg shadow-orange-200 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <h4 className="font-bold text-sm mb-1">On-the-Go Management</h4>
          <p className="text-xs text-orange-100 mb-3 leading-relaxed">
            Libra Mobile lets you access books, members and stats anytime,
            anywhere.
          </p>
          <button className="w-full py-2 bg-white text-orange-600 rounded-xl text-xs font-bold shadow-sm hover:bg-orange-50 transition-colors">
            Try for Free
          </button>
        </div>
      </aside>

      {/* ================= MOBILE / TABLET HEADER ================= */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-lg tracking-wider text-gray-900">
            LIBRA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-2 z-20">
          {[
            "Dashboard",
            "Inbox",
            "Library Activity",
            "Books",
            "Management",
            "Members",
            "Settings",
          ].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
                activeTab === item
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
        {/* TOP NAVBAR / HEADER ROW */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Good Morning, Noah!
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64 md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
              />
            </div>

            {/* Profile Header */}
            <div className="flex items-center gap-3 pl-2 sm:border-l border-gray-200">
              <button className="hidden sm:flex p-2 text-gray-500 hover:bg-white hover:shadow-sm rounded-xl border border-transparent hover:border-gray-200 transition-all">
                <Bell className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2.5 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Noah Tanaka"
                  className="w-9 h-9 rounded-full object-cover border-2 border-orange-200"
                />
                <div className="hidden md:block text-left">
                  <div className="text-xs font-bold text-gray-800">
                    Noah Tanaka
                  </div>
                  <div className="text-[10px] text-gray-400">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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

        {/* FOOTER */}
        <footer className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Libra System. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Contact Support
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
