import React, { useState } from 'react';

// Mock Data matching the design mockups
const lowStockData = [
  { id: 'BK-10234', title: 'The Lost Kingdom', borrowed: '128 times', copies: '1/3', status: 'Available', statusColor: 'text-emerald-600 bg-emerald-50', cover: 'bg-purple-100 text-purple-400' },
  { id: 'BK-10874', title: 'Threads of Fate', borrowed: '95 times', copies: '0/1', status: 'Damaged', statusColor: 'text-rose-600 bg-rose-50', cover: 'bg-rose-900 text-rose-200' },
  { id: 'BK-10024', title: 'Where The Flowers Bloom', borrowed: '109 times', copies: '0/2', status: 'On Loan', statusColor: 'text-blue-600 bg-blue-50', cover: 'bg-amber-100 text-amber-600' }
];

const initialTableData = [
  { id: 'BK-10567', title: 'Where The Flowers Bloom', copies: '0/1', condition: 'Damaged', note: 'Water Damage', date: 'Sept 25, 2035', user: 'Milo Sharp', status: 'Written Off', statusStyle: 'bg-slate-100 text-slate-700', fine: '$2.50' },
  { id: 'BK-11234', title: 'Floral Dreams', copies: '2/3', condition: 'Damaged', note: 'Fire Damage', date: 'Sept 22, 2035', user: 'Staff - Ken R.', status: 'Replaced', statusStyle: 'bg-blue-50 text-blue-600', fine: '$3.50' },
  { id: 'BK-10345', title: 'My Story', copies: '0/2', condition: 'Lost', note: 'Not Returned', date: 'Sept 28, 2035', user: 'Julian Cross', status: 'Pending', statusStyle: 'bg-orange-50 text-orange-600', fine: '$4.00' },
  { id: 'BK-10991', title: 'Threads of Fate', copies: '1/2', condition: 'Damaged', note: 'Torn Pages', date: 'Sept 20, 2035', user: 'Staff - Alice H.', status: 'Repaired', statusStyle: 'bg-emerald-50 text-emerald-600', fine: '$1.00' },
  { id: 'BK-09999', title: 'My Recipe Book', copies: '1/2', condition: 'Damaged', note: 'Mold Growth', date: 'Sept 26, 2035', user: 'Leo Finch', status: 'Written Off', statusStyle: 'bg-slate-100 text-slate-700', fine: '$2.00' },
  { id: 'BK-10101', title: 'The Book of Prayer', copies: '2/2', condition: 'Lost', note: 'Member Relocated', date: 'Sept 23, 2035', user: 'Isla Ray', status: 'Pending', statusStyle: 'bg-orange-50 text-orange-600', fine: '$4.50' },
  { id: 'BK-11122', title: 'The Coffee Shop Next Door', copies: '1/3', condition: 'Damaged', note: 'Binding Broken', date: 'Sept 24, 2035', user: 'Staff - Admin', status: 'Repaired', statusStyle: 'bg-emerald-50 text-emerald-600', fine: '$1.00' },
  { id: 'BK-08745', title: 'Dune Whisper', copies: '2/2', condition: 'Damaged', note: 'Water Damage', date: 'Sept 19, 2035', user: 'Celine Moore', status: 'Replaced', statusStyle: 'bg-blue-50 text-blue-600', fine: '$2.50' },
  { id: 'BK-08745', title: 'Claudia\'s Life Story', copies: '2/2', condition: 'Damaged', note: 'Water Damage', date: 'Sept 19, 2035', user: 'Celine Moore', status: 'Replaced', statusStyle: 'bg-blue-50 text-blue-600', fine: '$2.50' }
];

export default function StockManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = initialTableData.filter(row => 
    row.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    row.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6 text-slate-800 font-sans antialiased max-w-[1440px] mx-auto">
      <div className="space-y-6">
        
        {/* TOP LAYOUT CONTROL GRID: Desktop (3 columns), Tablet (stacked/2 columns), Mobile (1 column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Damaged/Lost Books Trend */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">Damaged/Lost Books Trend</h3>
              <select className="appearance-none bg-slate-50 text-xs font-semibold text-slate-500 px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none cursor-pointer">
                <option>Last 8 Months</option>
              </select>
            </div>
            
            <div className="relative w-full h-40 my-2">
              <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                <path d="M 0,110 Q 60,110 130,80 T 240,40 T 360,95 T 500,65" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="215" y1="10" x2="215" y2="140" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
                <circle cx="215" cy="52" r="4" fill="#f97316" stroke="white" strokeWidth="2" />
              </svg>
              
              {/* Overlay Tooltip */}
              <div className="absolute top-1 left-[34%] bg-white border border-slate-100 shadow-lg rounded-xl p-2 text-center text-[10px] pointer-events-none min-w-[75px]">
                <p className="text-slate-400 font-medium">April 2035</p>
                <p className="font-bold text-slate-900 text-xs">39 Books</p>
              </div>
            </div>

            <div className="flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-1 pt-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          {/* Card 2: Stock Overview */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">Stock Overview</h3>
              <select className="appearance-none bg-slate-50 text-xs font-semibold text-slate-500 px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none cursor-pointer">
                <option>This Month</option>
              </select>
            </div>

            {/* Radial Ring Semi-Circle */}
            <div className="flex justify-center items-center relative h-32 my-auto">
              <svg width="160" height="100" viewBox="0 0 100 60" className="overflow-visible">
                <path d="M 10,50 A 40,40 0 0,1 90,50" fill="none" stroke="#f1f5f9" strokeWidth="10" strokeLinecap="round"/>
                <path d="M 10,50 A 40,40 0 0,1 70,17" fill="none" stroke="#1e293b" strokeWidth="11" strokeLinecap="round"/>
                <path d="M 74,19 A 40,40 0 0,1 90,50" fill="none" stroke="#f97316" strokeWidth="11" strokeLinecap="round"/>
                <path d="M 87,40 A 40,40 0 0,1 90,50" fill="none" stroke="#cbd5e1" strokeWidth="11" strokeLinecap="round"/>
              </svg>
              <div className="absolute text-center bottom-2">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Total Copies</p>
                <p className="text-xl font-extrabold text-slate-900 tracking-tight">18,750 <span className="text-[10px] font-normal text-slate-400">Books</span></p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-slate-50">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-[#1e293b]"/>Available</span>
                <span className="text-[10px] text-slate-400 ml-3.5 font-medium">12,600 copies</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-[#f97316]"/>On Loan</span>
                <span className="text-[10px] text-slate-400 ml-3.5 font-medium">3,900 copies</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-[#cbd5e1]"/>Reserved</span>
                <span className="text-[10px] text-slate-400 ml-3.5 font-medium">1,400 copies</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-[#e2e8f0]"/>Damaged/Lost</span>
                <span className="text-[10px] text-slate-400 ml-3.5 font-medium">850 copies</span>
              </div>
            </div>
          </div>

          {/* Card 3: Low Stock Favorites */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">Low Stock Favorites</h3>
              <select className="appearance-none bg-slate-50 text-xs font-semibold text-slate-500 px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none cursor-pointer">
                <option>This Month</option>
              </select>
            </div>

            <div className="space-y-3">
              {lowStockData.map((book, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-50 bg-slate-50/40 gap-3">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className={`w-9 h-11 rounded-md shrink-0 flex items-center justify-center font-bold text-xs shadow-sm ${book.cover}`}>
                      BK
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate tracking-tight">{book.title}</h4>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">Borrowed: <span className="text-slate-600 font-semibold">{book.borrowed}</span></p>
                    </div>
                  </div>
                  
                  {/* Tablet/Desktop values shown alignment blocks */}
                  <div className="hidden sm:flex items-center space-x-6 shrink-0 text-right">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Available</p>
                      <p className="text-xs font-bold text-slate-800 mt-0.5">{book.copies}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Status</p>
                      <p className={`text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 ${book.statusColor}`}>{book.status}</p>
                    </div>
                  </div>

                  <button className="bg-[#f97316] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition shrink-0 shadow-sm">
                    Reorder
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Damaged/Lost Books Grid Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          <div className="p-5 border-b border-slate-100 flex justify-between items-center gap-4 bg-white">
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">Damaged/Lost Books</h3>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Search a book..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="hidden sm:block w-48 md:w-64 bg-slate-50 text-xs pl-9 pr-4 py-2 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800 transition"
                />
                {/* Mobile visible fallback buttons matching row 4 patterns */}
                <button className="sm:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>
              </div>

              <div className="relative">
                <button className="sm:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 13.293A1 1 0 013 12.586V4z"/></svg>
                </button>
                <select className="hidden sm:block appearance-none bg-slate-50 text-xs pl-4 pr-8 py-2 rounded-xl border border-slate-200 focus:outline-none cursor-pointer hover:bg-slate-100 transition font-semibold text-slate-600">
                  <option>Filter</option>
                </select>
                <div className="hidden sm:block absolute right-2.5 top-2.5 pointer-events-none text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[320px]">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400 select-none">
                  <th className="py-3 px-4 md:px-6 font-semibold">Book</th>
                  <th className="hidden lg:table-cell py-3 px-6 font-semibold">Copies</th>
                  <th className="py-3 px-4 md:px-6 font-semibold">Condition</th>
                  <th className="hidden lg:table-cell py-3 px-6 font-semibold">Notes</th>
                  <th className="hidden md:table-cell py-3 px-6 font-semibold">Date Reported</th>
                  <th className="hidden lg:table-cell py-3 px-6 font-semibold">Reported By</th>
                  <th className="py-3 px-4 md:px-6 font-semibold">Replacement Status</th>
                  <th className="hidden md:table-cell py-3 px-6 font-semibold">Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {filteredData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                    
                    {/* Column 1: Book & Nested Mobile Details */}
                    <td className="py-3.5 px-4 md:px-6 align-middle">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-9 rounded bg-amber-50 shadow-sm border border-amber-100/40 flex items-center justify-center font-bold text-[9px] text-amber-700 shrink-0">
                          BK
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-slate-900 text-sm truncate tracking-tight">{row.title}</span>
                          <span className="text-slate-400 font-medium text-[10px] mt-0.5">{row.id}</span>
                          
                          {/* Stacking element render maps dynamically on compressed screen bounds */}
                          <div className="flex lg:hidden items-center gap-1.5 mt-1 flex-wrap font-medium">
                            <span className="text-slate-500 text-[11px] lg:hidden">{row.copies} Copies</span>
                            <span className="md:hidden text-slate-400 text-[10px]">On {row.date}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="hidden lg:table-cell py-3.5 px-6 align-middle text-slate-600 font-semibold">{row.copies}</td>
                    
                    {/* Column 3: Condition State Elements */}
                    <td className="py-3.5 px-4 md:px-6 align-middle">
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-1.5 font-bold text-slate-800">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${row.condition === 'Lost' ? 'bg-slate-400' : 'bg-orange-500'}`} />
                          <span>{row.condition}</span>
                        </div>
                        {/* Nested detail inline elements */}
                        <div className="lg:hidden mt-1 text-slate-400 font-medium bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5 w-max text-[10px]">
                          {row.note}
                        </div>
                      </div>
                    </td>

                    <td className="hidden lg:table-cell py-3.5 px-6 align-middle">
                      <span className="bg-slate-50 border border-slate-100 text-slate-500 rounded px-2 py-1 text-[11px] font-medium">{row.note}</span>
                    </td>

                    <td className="hidden md:table-cell py-3.5 px-6 text-slate-500 font-medium align-middle whitespace-nowrap">{row.date}</td>
                    
                    <td className="hidden lg:table-cell py-3.5 px-6 font-semibold text-slate-700 align-middle">{row.user}</td>
                    
                    {/* Column 7: Multi-tiered Replacement Actions status */}
                    <td className="py-3.5 px-4 md:px-6 align-middle">
                      <div className="flex flex-col">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold w-max ${row.statusStyle}`}>
                          {row.status}
                        </span>
                        {/* Inline fine positioning updates matching table view 2 */}
                        <span className="md:hidden text-slate-500 font-bold text-[11px] mt-1">Fine: {row.fine}</span>
                      </div>
                    </td>

                    <td className="hidden md:table-cell py-3.5 px-6 font-bold text-slate-800 align-middle">{row.fine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Pagination Footer Layout */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-500">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-2 pr-6 py-1 focus:outline-none cursor-pointer text-slate-600 font-bold">
                  <option>9</option>
                  <option>18</option>
                </select>
                <div className="absolute right-1.5 top-1.5 pointer-events-none text-slate-400">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
              <span>of 36 results</span>
            </div>

            <div className="flex items-center space-x-1">
              <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-300 transition" disabled>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button className="px-2.5 py-1 rounded-lg bg-orange-500 text-white font-bold transition">1</button>
              <button className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">2</button>
              <button className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">3</button>
              <span className="px-1 text-slate-400">...</span>
              <button className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition">6</button>
              <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}