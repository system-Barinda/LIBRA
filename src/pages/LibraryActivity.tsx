import React from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Bookmark, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  SlidersHorizontal, 
  ChevronDown 
} from 'lucide-react';

// --- Types & Interfaces ---
interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

interface ActiveBorrower {
  name: string;
  id: string;
  count: number;
  avatar: string;
}

interface ReservationItem {
  title: string;
  author: string;
  member: string;
  memberId: string;
  time: string;
  image: string;
}

interface ActivityRow {
  activity: 'Borrow' | 'Return' | 'Reservation';
  dateTime: string;
  member: { name: string; id: string; tier: 'Premium' | 'Standard' | 'Basic'; avatar: string };
  book: { title: string; id: string; image: string };
  dueDate: string;
  returnDate: string;
  status: 'Borrowed' | 'Returned' | 'Overdue' | '—';
  fine: string;
}

// --- Mock Data matching the image ---
const activeBorrowers: ActiveBorrower[] = [
  { name: 'Livia Hart', id: 'MBR-2081', count: 4, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { name: 'Ezra Nolan', id: 'MBR-1170', count: 3, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { name: 'Isla Ray', id: 'MBR-2389', count: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
];

const reservations: ReservationItem[] = [
  { title: 'Floral Dreams', author: 'Livia Hart', member: 'Livia Hart', memberId: 'MBR-2081', time: 'Sept 27, 2035 - 10:45 AM', image: '🌸' },
  { title: 'The Book of Prayer', author: 'Isla Ray', member: 'Isla Ray', memberId: 'MBR-2389', time: 'Sept 27, 2035 - 09:30 AM', image: '🌿' },
  { title: "Claudia's Life Story", author: 'Ezra Nolan', member: 'Ezra Nolan', memberId: 'MBR-1170', time: 'Sept 26, 2035 - 04:15 PM', image: '📕' },
];

const activities: ActivityRow[] = [
  {
    activity: 'Borrow',
    dateTime: 'Sept 27, 2035\n09:20 AM',
    member: { name: 'Livia Hart', id: 'MBR-2081', tier: 'Premium', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80' },
    book: { title: 'Where The Flowers Bloom', id: 'BK-10234', image: '🌾' },
    dueDate: 'Oct 11, 2035',
    returnDate: '—',
    status: 'Borrowed',
    fine: '$0.00'
  },
  {
    activity: 'Return',
    dateTime: 'Sept 26, 2035\n05:15 PM',
    member: { name: 'Ezra Nolan', id: 'MBR-1170', tier: 'Premium', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80' },
    book: { title: 'Floral Dreams', id: 'BK-09876', image: '🌸' },
    dueDate: 'Sept 25, 2035',
    returnDate: 'Sept 26, 2035',
    status: 'Returned',
    fine: '$1.00'
  },
  {
    activity: 'Reservation',
    dateTime: 'Sept 26, 2035\n04:05 PM',
    member: { name: 'Isla Ray', id: 'MBR-2389', tier: 'Standard', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80' },
    book: { title: 'My Story', id: 'BK-11001', image: '📘' },
    dueDate: '—',
    returnDate: '—',
    status: '—',
    fine: '$0.00'
  },
  {
    activity: 'Return',
    dateTime: 'Sept 25, 2035\n03:40 PM',
    member: { name: 'Milo Sharp', id: 'MBR-4112', tier: 'Basic', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&auto=format&fit=crop&q=80' },
    book: { title: 'My Recipe Book', id: 'BK-10567', image: '🍳' },
    dueDate: 'Sept 20, 2035',
    returnDate: 'Sept 25, 2035',
    status: 'Returned',
    fine: '$2.50'
  },
  {
    activity: 'Borrow',
    dateTime: 'Sept 25, 2035\n01:30 PM',
    member: { name: 'Julian Cross', id: 'MBR-2759', tier: 'Basic', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=50&auto=format&fit=crop&q=80' },
    book: { title: 'Drew Feig', id: 'BK-10345', image: '📖' },
    dueDate: 'Oct 08, 2035',
    returnDate: '—',
    status: 'Overdue',
    fine: '$1.00'
  }
];

// --- Sub-Components ---
const StatCard: React.FC<StatCardProps> = ({ title, value, unit, change, isPositive, icon, iconBg }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between w-full">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${iconBg} text-white shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-xs font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-0.5">
          {value} <span className="text-sm font-normal text-gray-400">{unit}</span>
        </h3>
      </div>
    </div>
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold shrink-0 ${
      isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
    }`}>
      {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
      {change}
    </div>
  </div>
);

export default function LibraryActivity() {
  return (
    <div className="min-h-screen bg-[#F9FAFC] p-4 md:p-8 font-sans antialiased text-gray-600">
      
      {/* Outer Layout Frame: Single column on mobile stack, 4-columns layout on big screens */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
        
        {/* Left/Middle block section (Combines Stats, Chart, and Borrowers) */}
        <div className="xl:col-span-3 flex flex-col gap-6">
          
          {/* Top KPI Cards: Vertically listed on phone, horizontal grid on tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard 
              title="Total Borrowed" 
              value="1,250" 
              unit="books" 
              change="+8.2%" 
              isPositive={true} 
              icon={<BookOpen size={20} />} 
              iconBg="bg-[#2D4A8A]" 
            />
            <StatCard 
              title="Total Returned" 
              value="1,110" 
              unit="books" 
              change="+4.5%" 
              isPositive={true} 
              icon={<CheckCircle size={20} />} 
              iconBg="bg-[#FF7E40]" 
            />
            <StatCard 
              title="Total Reserved" 
              value="320" 
              unit="books" 
              change="-1.5%" 
              isPositive={false} 
              icon={<Bookmark size={20} />} 
              iconBg="bg-[#1E293B]" 
            />
          </div>

          {/* Sub Grid: Library Check-ins Chart & Active Borrowers list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Library Check-ins Card */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs md:col-span-1 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-800 text-sm">Library Check-ins</h4>
                <button className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5 flex items-center gap-1 bg-white hover:bg-gray-50">
                  Last 8 Months <ChevronDown size={14} />
                </button>
              </div>
              <div className="h-28 flex items-end justify-between pt-4 gap-1 relative">
                <div className="absolute top-0 left-8 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow">1,316 visitors</div>
                <div className="w-full flex justify-between items-end h-20 px-2">
                  <div className="bg-orange-100 w-2 h-8 rounded-t"></div>
                  <div className="bg-orange-200 w-2 h-12 rounded-t"></div>
                  <div className="bg-slate-800 w-3 h-20 rounded-t relative"></div>
                  <div className="bg-orange-100 w-2 h-10 rounded-t"></div>
                  <div className="bg-orange-100 w-2 h-14 rounded-t"></div>
                  <div className="bg-orange-200 w-2 h-16 rounded-t"></div>
                  <div className="bg-orange-300 w-2 h-18 rounded-t"></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
              </div>
            </div>

            {/* Active Borrowers Card */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs md:col-span-2">
              <div className="flex justify-between items-center mb-5">
                <h4 className="font-bold text-gray-800 text-sm">Active Borrowers</h4>
                <button className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5 flex items-center gap-1 bg-white hover:bg-gray-50">
                  This Month <ChevronDown size={14} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {activeBorrowers.map((borrower, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-gray-50/50 rounded-xl p-3 border border-gray-100">
                    <div className="relative mb-2">
                      <img src={borrower.avatar} alt={borrower.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-4 ring-orange-100" />
                    </div>
                    <span className="font-bold text-gray-800 text-[11px] sm:text-xs text-center line-clamp-1">{borrower.name}</span>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium mb-2">{borrower.id}</span>
                    <div className="text-[8px] sm:text-[10px] font-semibold text-gray-500 border border-gray-200 bg-white px-1.5 sm:px-2 py-1 rounded-md shadow-2xs text-center">
                      📄 {borrower.count} borrowed
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Reservations Widget Section: Placed inline on wide monitors, drops down gracefully on phone */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs xl:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-gray-800 text-sm">Reservations</h4>
            <button className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5 flex items-center gap-1 bg-white hover:bg-gray-50">
              This Week <ChevronDown size={14} />
            </button>
          </div>
          <div className="flex flex-col gap-3.5">
            {reservations.map((res, idx) => (
              <div key={idx} className="flex items-center gap-3 p-1 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-12 bg-amber-50 rounded-md flex items-center justify-center text-lg shrink-0 shadow-2xs border border-amber-100">
                  {res.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-bold text-gray-800 text-xs truncate">{res.title}</h5>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5 truncate">👤 {res.author} ({res.memberId})</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">📅 {res.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section: Main Activity Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        
        {/* Table Header Controls */}
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
          <h3 className="font-bold text-gray-800 text-base">Library Activity</h3>
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-initial min-w-[200px]">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search for activity, member..." 
                className="pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full sm:w-64 transition-all"
              />
            </div>
            {/* Filter Trigger */}
            <button className="text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-1.5 bg-white hover:bg-gray-50">
              <SlidersHorizontal size={14} /> Filter <ChevronDown size={14} />
            </button>
            {/* Sort Control */}
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span>Sort by:</span>
              <button className="font-semibold text-gray-600 border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-1 bg-white hover:bg-gray-50">
                Date <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Overflow control to prevent mobile layout breaking */}
        <div className="overflow-x-auto invisible-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 bg-gray-50/50 uppercase tracking-wider">
                <th className="py-3 px-6">Activity ↕</th>
                <th className="py-3 px-6">Date & Time ↕</th>
                <th className="py-3 px-6">Member Info ↕</th>
                <th className="py-3 px-6">Book Title ↕</th>
                <th className="py-3 px-6">Due Date ↕</th>
                <th className="py-3 px-6">Return Date ↕</th>
                <th className="py-3 px-6">Status ↕</th>
                <th className="py-3 px-6 text-right">Fine ↕</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
              {activities.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-4 px-6 font-medium text-gray-700">{row.activity}</td>
                  <td className="py-4 px-6 text-gray-400 whitespace-pre-line leading-relaxed">{row.dateTime}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2.5">
                      <img src={row.member.avatar} alt={row.member.name} className="w-7 h-7 rounded-full object-cover shrink-0" />
                      <div>
                        <p className="font-bold text-gray-800">{row.member.name}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-gray-400 font-medium">{row.member.id}</span>
                          <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                            row.member.tier === 'Premium' ? 'bg-blue-50 text-blue-600' :
                            row.member.tier === 'Standard' ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {row.member.tier}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg p-1 bg-gray-50 rounded border border-gray-100 shrink-0">{row.book.image}</span>
                      <div>
                        <p className="font-bold text-gray-800 line-clamp-1">{row.book.title}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{row.book.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-700">{row.dueDate}</td>
                  <td className="py-4 px-6 font-medium text-gray-700">{row.returnDate}</td>
                  <td className="py-4 px-6">
                    {row.status === 'Borrowed' && (
                      <span className="bg-orange-500 text-white font-bold text-[10px] px-2.5 py-1 rounded-full">Borrowed</span>
                    )}
                    {row.status === 'Returned' && (
                      <span className="bg-emerald-50 text-emerald-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-100">Returned</span>
                    )}
                    {row.status === 'Overdue' && (
                      <span className="bg-rose-50 text-rose-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-rose-100">Overdue</span>
                    )}
                    {row.status === '—' && <span className="text-gray-300 font-medium">—</span>}
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-gray-800">{row.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}