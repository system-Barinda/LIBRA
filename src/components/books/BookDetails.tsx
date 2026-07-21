import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';

export default function BookDetails({ book, onBack }) {
  const [selectedPoint, setSelectedPoint] = useState(3); // April index

  const trendData = [
    { month: 'Jan', val: 3 },
    { month: 'Feb', val: 3 },
    { month: 'Mar', val: 7 },
    { month: 'Apr', val: 9 },
    { month: 'May', val: 4 },
    { month: 'Jun', val: 10 },
    { month: 'Jul', val: 8 },
    { month: 'Aug', val: 9 }
  ];

  // Map coordinates for simple inline SVG line drawing
  const svgWidth = 300;
  const svgHeight = 80;
  const points = trendData.map((d, i) => {
    const x = (i / (trendData.length - 1)) * (svgWidth - 20) + 10;
    const y = svgHeight - (d.val / 12) * (svgHeight - 20) - 10;
    return { x, y, ...d };
  });

  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="min-h-screen bg-[#F4F5F7] p-3 sm:p-5 md:p-6 lg:p-8 font-sans antialiased text-gray-700">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm"
      >
        <ArrowLeft size={16} /> Back to Books
      </button>

      {/* Main Responsive Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-[1400px] mx-auto">
        
        {/* LEFT / TOP COLUMN: Main Book Card (Desktop: col-span-7 or 8) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-5">
          
          {/* Main Book Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6">
              
              {/* Cover Image */}
              <div className="w-full sm:w-56 md:w-64 shrink-0 flex justify-center sm:block bg-amber-400 rounded-xl">
                <img 
                  src={book?.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"} 
                  alt={book?.title || "Where the Flowers Bloom"} 
                  className="w-full sm:w-full h-full sm:h-80 md:h-full object-cover rounded-xl shadow-md border border-gray-100"
                />
              </div>

              {/* Information Block */}
              <div className="flex-1 space-y-4">
                {/* Status Badges */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#FDE8E1] text-[#E0682E] rounded-full text-xs font-semibold">
                    Contemporary Fiction
                  </span>
                  <span className="px-3 py-1 bg-[#00875A] text-white rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Available
                  </span>
                </div>

                {/* Title & Author */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    {book?.title || "Where the Flowers Bloom"}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    by <span className="font-medium text-gray-600">{book?.author?.name || "Olivia Wilson"}</span>
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-b border-gray-100 py-3 text-center sm:text-left">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Rating</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">4.9/5</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Language</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">English</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Total Pages</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">392 pages</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Copies</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800">{book?.copies || "2 of 4"}</p>
                  </div>
                </div>

                {/* Metadata Details */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex gap-4">
                    <span className="w-24 text-gray-400 shrink-0">Book ID</span>
                    <span className="font-semibold text-gray-800">{book?.id || "BK-11122"}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-24 text-gray-400 shrink-0">Publisher (Year)</span>
                    <span className="font-semibold text-gray-800">{book?.publisher || "Meadowlight Press"}, {book?.year || "2030"}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-24 text-gray-400 shrink-0">Shelf Location</span>
                    <span className="font-semibold text-gray-800">{book?.shelfLocation || "F4-FIC-SH2-R5-P12"}</span>
                  </div>
                  <div className="flex gap-4 overflow-hidden">
                    <span className="w-24 text-gray-400 shrink-0">Resource Link</span>
                    <a href="#link" className="font-medium text-[#FF7E40] truncate underline hover:text-[#e0682e]">
                      {book?.resourceLink || "https://libra.io/books/where-the-flowers-bloom"}
                    </a>
                  </div>
                </div>

                {/* Synopsis */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-gray-800 mb-1">Synopsis</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    In a quiet countryside town, Where the Flowers Bloom follows the intertwined lives of three generations as they navigate love, loss, and the resilience of family. With each season, the blooming fields mirror their struggles and triumphs, weaving a story of healing and hope.
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 mb-1.5">Tags</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['#contemporary-fiction', '#family-saga', '#nature', '#hope'].map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-500 text-[11px] px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* TABLET / DESKTOP ALIGNED - Borrowing History Table (on Tablet/Mobile appears in flow) */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base">Borrowing History</h3>
              <button className="flex items-center gap-1 text-xs border border-gray-200 rounded-lg px-2.5 py-1 bg-white text-gray-600 hover:bg-gray-50">
                This Week <ChevronDown size={12} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-gray-50/80 text-gray-400 font-medium text-[10px] uppercase border-b border-gray-100">
                    <th className="py-2.5 px-3">Member Info ↕</th>
                    <th className="py-2.5 px-3">Borrow & Due Date ↕</th>
                    <th className="py-2.5 px-3">Return Date ↕</th>
                    <th className="py-2.5 px-3">Overdue ↕</th>
                    <th className="py-2.5 px-3 text-right">Fine ↕</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                  <tr>
                    <td className="py-3 px-3 flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Milo" className="w-6 h-6 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-800">Milo Sharp</p>
                        <p className="text-[10px] text-gray-400">MBR-4112</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">Aug 24, 2035 — Aug 24, 2035</td>
                    <td className="py-3 px-3">Aug 10</td>
                    <td className="py-3 px-3 text-gray-400">—</td>
                    <td className="py-3 px-3 text-right">$0.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt="Celine" className="w-6 h-6 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-800">Celine Moore</p>
                        <p className="text-[10px] text-gray-400">MBR-3095</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">Jul 26, 2035 — Jul 30, 2035</td>
                    <td className="py-3 px-3">Jul 12</td>
                    <td className="py-3 px-3 text-gray-700 font-semibold">4 Days</td>
                    <td className="py-3 px-3 text-right">$2.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" alt="Ava" className="w-6 h-6 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-800">Ava Lin</p>
                        <p className="text-[10px] text-gray-400">MBR-3021</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">Jun 15, 2035 — Jun 15, 2035</td>
                    <td className="py-3 px-3">Jun 01</td>
                    <td className="py-3 px-3 text-gray-400">—</td>
                    <td className="py-3 px-3 text-right">$0.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 flex items-center gap-2">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Leo" className="w-6 h-6 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-gray-800">Leo Finch</p>
                        <p className="text-[10px] text-gray-400">MBR-2210</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">May 17, 2035 — May 17, 2035</td>
                    <td className="py-3 px-3">May 03</td>
                    <td className="py-3 px-3 text-gray-400">—</td>
                    <td className="py-3 px-3 text-right">$0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Dashboard Widgets (Desktop: col-span-5 or 4) */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-5">
          
          {/* Reservations Box */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-sm">Reservations</h3>
              <button className="flex items-center gap-1 text-xs border border-gray-200 rounded-lg px-2.5 py-1 bg-white text-gray-600 hover:bg-gray-50">
                This Week <ChevronDown size={12} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[
                { rank: '#1', name: 'Isla Ray', id: 'MBR-2389', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
                { rank: '#2', name: 'Noah Trent', id: 'MBR-1643', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
                { rank: '#3', name: 'Ezra Nolan', id: 'MBR-1170', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
                { rank: '#4', name: 'Nova Wells', id: 'MBR-3678', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150' },
              ].map((res, i) => (
                <div key={i} className="text-center">
                  <div className="relative rounded-xl overflow-hidden bg-[#FF7E40] aspect-square mb-1.5">
                    <span className="absolute top-1 left-1.5 text-[9px] font-bold text-white z-10">{res.rank}</span>
                    <img src={res.img} alt={res.name} className="w-full h-full object-cover mix-blend-normal hover:scale-105 transition-transform" />
                  </div>
                  <p className="font-bold text-gray-800 text-[11px] truncate">{res.name}</p>
                  <p className="text-[9px] text-gray-400">{res.id}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Borrowing Trend Box */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800 text-sm">Borrowing Trend</h3>
              <button className="flex items-center gap-1 text-xs border border-gray-200 rounded-lg px-2.5 py-1 bg-white text-gray-600 hover:bg-gray-50">
                Last 8 Months <ChevronDown size={12} />
              </button>
            </div>

            <div className="mb-2">
              <p className="text-[10px] text-gray-400">Total Borrowed</p>
              <p className="text-xl font-bold text-gray-800">78</p>
            </div>

            {/* Line Chart Component */}
            <div className="relative w-full h-32 my-2">
              <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
                <polyline
                  fill="none"
                  stroke="#FF7E40"
                  strokeWidth="2"
                  points={polylinePoints}
                />
                {points.map((p, index) => (
                  <g key={index} className="cursor-pointer" onClick={() => setSelectedPoint(index)}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={selectedPoint === index ? "5" : "3"}
                      fill={selectedPoint === index ? "#FF7E40" : "#ffffff"}
                      stroke="#FF7E40"
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </svg>

              {/* Dynamic Tooltip on Chart */}
              {selectedPoint !== null && (
                <div 
                  className="absolute bg-white px-2 py-1 rounded-lg shadow-md border border-gray-100 text-[10px] font-semibold text-center pointer-events-none transform -translate-x-1/2 -translate-y-full"
                  style={{ 
                    left: `${(selectedPoint / (trendData.length - 1)) * 90 + 5}%`,
                    top: '30%'
                  }}
                >
                  <p className="text-gray-400 text-[8px]">April 2035</p>
                  <p className="text-gray-800 font-bold">{trendData[selectedPoint].val} loans</p>
                </div>
              )}
            </div>

            {/* Month Labels */}
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1">
              {trendData.map((t, idx) => (
                <span key={idx}>{t.month}</span>
              ))}
            </div>

            {/* Summary Grid Stats */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="bg-[#F2F5FB] p-2.5 rounded-xl">
                <p className="text-[10px] text-gray-500 font-medium">Total Reserved</p>
                <p className="text-xs font-bold text-gray-800 mt-0.5">10 <span className="text-[9px] font-normal text-gray-400">this month</span></p>
              </div>
              <div className="bg-[#FFF4EE] p-2.5 rounded-xl">
                <p className="text-[10px] text-gray-500 font-medium">Average Wait Time</p>
                <p className="text-xs font-bold text-gray-800 mt-0.5">5 <span className="text-[9px] font-normal text-gray-400">days</span></p>
              </div>
              <div className="bg-[#FFF4EE] p-2.5 rounded-xl">
                <p className="text-[10px] text-gray-500 font-medium">Top Borrower Segment</p>
                <p className="text-xs font-bold text-gray-800 mt-0.5">Students <span className="text-[9px] font-normal text-gray-400">(65%)</span></p>
              </div>
              <div className="bg-[#F2F5FB] p-2.5 rounded-xl">
                <p className="text-[10px] text-gray-500 font-medium">Next Available Copy</p>
                <p className="text-xs font-bold text-gray-800 mt-0.5">Sept 25 <span className="text-[9px] font-normal text-gray-400">est.</span></p>
              </div>
            </div>
          </div>

          {/* Related Books Box */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-sm">Related Books</h3>
              <button className="flex items-center gap-1 text-xs border border-gray-200 rounded-lg px-2.5 py-1 bg-white text-gray-600 hover:bg-gray-50">
                This Week <ChevronDown size={12} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'My Story', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200' },
                { title: "Claudia's Life Story", img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200' },
                { title: 'The Lost Kingdom', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200' },
              ].map((rel, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-1.5 bg-gray-100 border border-gray-100 shadow-sm">
                    <img src={rel.img} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <p className="font-bold text-gray-800 text-[11px] leading-tight text-center truncate">{rel.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}