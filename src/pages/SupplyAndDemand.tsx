import React, { useState } from 'react';

// Mock Data
const suppliersData = [
  { name: 'Aurora Books Co.', value: '5,875', percentage: '31%', color: 'bg-[#1e293b]' },
  { name: 'Nebula Press Distribution', value: '4,650', percentage: '25%', color: 'bg-[#f97316]' },
  { name: 'GroveLine Publishing', value: '3,825', percentage: '20%', color: 'bg-[#fed7aa]' },
  { name: 'Skyhigh Learning Partners', value: '1,750', percentage: '9%', color: 'bg-[#cbd5e1]' },
  { name: 'Others', value: '2,650', percentage: '15%', color: 'bg-[#f1f5f9]' },
];

const fundingData = [
  { name: 'Purchase', percentage: '35%', color: 'bg-[#1e293b]' },
  { name: 'Donation', percentage: '30%', color: 'bg-[#f97316]' },
  { name: 'Grant', percentage: '20%', color: 'bg-[#cbd5e1]' },
  { name: 'Exchange', percentage: '15%', color: 'bg-[#f1f5f9]' },
];

const initialTableData = [
  { vendor: 'Aurora Books Co.', logoColor: 'bg-orange-500 text-white', iconColor: 'text-orange-500', totalBooks: 320, file: 'aurora_books_q1.pdf', date: 'Jan 15, 2035', price: '$4,800.00', invoice: 'INV-AUR-1357', source: 'City Library Budget' },
  { vendor: 'Nebula Press Distribution', logoColor: 'bg-blue-500 text-white', iconColor: 'text-blue-500', totalBooks: 275, file: 'nebula_batch_3.pdf', date: 'Feb 10, 2035', price: '$4,125.00', invoice: 'INV-NEB-9884', source: 'Local Education Grant' },
  { vendor: 'GroveLine Publishing', logoColor: 'bg-purple-500 text-white', iconColor: 'text-purple-500', totalBooks: 200, file: 'groveline_list.pdf', date: 'Mar 05, 2035', price: '$3,100.00', invoice: 'INV-GRV-2235', source: 'City Library Budget' },
  { vendor: 'Skybound Learning Partners', logoColor: 'bg-orange-600 text-white', iconColor: 'text-orange-600', totalBooks: 150, file: 'skybound_batch2.pdf', date: 'Apr 18, 2035', price: '$2,250.00', invoice: 'INV-SKY-7642', source: 'State Education Fund' },
  { vendor: 'Hollow House Publishing', logoColor: 'bg-slate-700 text-white', iconColor: 'text-slate-700', totalBooks: 180, file: 'hallow_house_q2.pdf', date: 'May 02, 2035', price: '$2,700.00', invoice: 'INV-HOL-4519', source: 'Library Reserve' },
  { vendor: 'Forge & Feather Supplies', logoColor: 'bg-orange-500 text-white', iconColor: 'text-orange-500', totalBooks: 210, file: 'forge_list.pdf', date: 'Jun 09, 2035', price: '$3,350.00', invoice: 'INV-FNF-6678', source: 'City Library Budget' },
  { vendor: 'Greenline Books', logoColor: 'bg-emerald-600 text-white', iconColor: 'text-emerald-600', totalBooks: 135, file: 'greenline_books.pdf', date: 'Jul 01, 2035', price: '$2,025.00', invoice: 'INV-GRN-1229', source: 'Cultural Literacy Grant' },
  { vendor: 'Obsidian Edge Distributors', logoColor: 'bg-amber-600 text-white', iconColor: 'text-amber-600', totalBooks: 190, file: 'obsidian_batch.pdf', date: 'Jul 27, 2035', price: '$2,900.00', invoice: 'INV-OBS-2093', source: 'Library Reserve' },
];

export default function Supply() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = initialTableData.filter(row => 
    row.vendor.toLowerCase().includes(searchTerm.toLowerCase()) || 
    row.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6 text-slate-800 font-sans antialiased max-w-[1440px] mx-auto">
      <div className="space-y-6">
        
        {/* UPPER CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Top Suppliers */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between order-2 md:order-2 lg:order-1 lg:col-span-1">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 text-base">Top Suppliers</h3>
                <button className="text-slate-400 hover:text-slate-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
              <div className="mb-4">
                <p className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">Total Supplied Books</p>
                <p className="text-2xl font-bold text-slate-900 mt-0.5">18,750 <span className="text-xs font-normal text-slate-400">Books</span></p>
              </div>
              <div className="h-5 w-full flex rounded-md overflow-hidden mb-5">
                <div className="w-[31%] bg-[#1e293b]" />
                <div className="w-[25%] bg-[#f97316]" />
                <div className="w-[20%] bg-[#fed7aa]" />
                <div className="w-[9%] bg-[#cbd5e1]" />
                <div className="w-[15%] bg-[#e2e8f0]" />
              </div>
            </div>
            <div className="space-y-2.5">
              {suppliersData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                    <span className="text-slate-600 truncate font-medium">{item.name}</span>
                  </div>
                  <div className="shrink-0 flex items-center space-x-2 text-slate-400">
                    <span className="text-slate-500 font-semibold">{item.value}</span>
                    <span className="text-[10px] font-bold w-6 text-right">{item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Acquisitions Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between order-1 md:order-1 lg:order-2 md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 text-base">Acquisitions Overview</h3>
                <div className="relative">
                  <select className="appearance-none bg-slate-50 text-xs font-semibold text-slate-600 pl-3 pr-8 py-1.5 rounded-lg border border-slate-200 focus:outline-none cursor-pointer hover:bg-slate-100 transition">
                    <option>Last 8 Months</option>
                  </select>
                  <div className="absolute right-2.5 top-2.5 pointer-events-none text-slate-500">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4 text-xs font-medium">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-[#1e293b]" />
                  <span className="text-slate-600">Print</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-[#f97316]" />
                  <span className="text-slate-600">Digital</span>
                </div>
              </div>
            </div>

            {/* Line Chart Component */}
            <div className="relative w-full h-44 mt-2">
              <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <line x1="0" y1="30" x2="500" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                
                <path d="M 0,80 Q 70,40 140,50 T 280,100 T 420,60 T 500,85" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 0,110 Q 70,110 140,80 T 280,40 T 420,110 T 500,50" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                
                <line x1="230" y1="10" x2="230" y2="140" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
                <circle cx="230" cy="94" r="4" fill="#1e293b" stroke="white" strokeWidth="2" />
                <circle cx="230" cy="42" r="4" fill="#f97316" stroke="white" strokeWidth="2" />
              </svg>

              {/* Chart Tooltip Overlay */}
              <div className="absolute top-2 left-[48%] bg-white/95 backdrop-blur-sm border border-slate-100 shadow-xl rounded-xl p-2.5 text-[10px] pointer-events-none z-10 min-w-[95px]">
                <p className="font-bold text-slate-400 mb-1">April 2035</p>
                <div className="flex justify-between items-center space-x-3">
                  <span className="text-slate-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"/> Digital</span>
                  <span className="font-bold text-slate-900">342</span>
                </div>
                <div className="flex justify-between items-center space-x-3 mt-0.5">
                  <span className="text-slate-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]"/> Print</span>
                  <span className="font-bold text-slate-900">163</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1 pt-3">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          {/* Card 3: Funding Source Breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between order-3 md:order-3 lg:order-3 lg:col-span-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-slate-900 text-base">Funding Source Breakdown</h3>
              <button className="text-slate-400 hover:text-slate-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            <div className="flex justify-center items-center my-auto h-36">
              <svg width="120" height="120" viewBox="0 0 42 42" className="transform -rotate-90">
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f1f5f9" strokeWidth="4.5"/>
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#1e293b" strokeWidth="4.8" strokeDasharray="35 65" strokeDashoffset="0"/>
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f97316" strokeWidth="4.8" strokeDasharray="30 70" strokeDashoffset="-35"/>
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#cbd5e1" strokeWidth="4.8" strokeDasharray="20 80" strokeDashoffset="-65"/>
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="4.8" strokeDasharray="15 85" strokeDashoffset="-85"/>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {fundingData.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 bg-slate-50/70 rounded-xl p-1.5 border border-slate-100">
                  <span className={`text-[9px] text-white font-bold px-1.5 py-0.5 rounded ${item.color} w-8 text-center shrink-0`}>
                    {item.percentage}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM: Responsive Adaptive Table Structure */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          
          <div className="p-5 border-b border-slate-100 flex justify-between items-center gap-4 bg-white">
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">Supply & Acquisition</h3>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                {/* Search Bar: Displays fully on desktop/tablet, turns into search icon on mobile */}
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Search a vendor..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="hidden sm:block w-48 md:w-64 bg-slate-50 text-xs pl-9 pr-4 py-2 rounded-xl border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800 transition"
                />
                <button className="sm:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl border border-slate-200">
                  <span className="sr-only">Search</span>
                  <div className="w-4 h-4" /> {/* Space placeholder matching positioning layouts */}
                </button>
              </div>

              <div className="relative">
                <button className="sm:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 13.293A1 1 0 013 12.586V4z"/></svg>
                </button>
                <select className="hidden sm:block appearance-none bg-slate-50 text-xs pl-4 pr-8 py-2 rounded-xl border border-slate-200 focus:outline-none cursor-pointer hover:bg-slate-100 transition font-semibold text-slate-700">
                  <option>Filter</option>
                </select>
                <div className="hidden sm:block absolute right-2.5 top-2.5 pointer-events-none text-slate-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[320px]">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-4 md:px-6 font-semibold">Vendor</th>
                  <th className="hidden lg:table-cell py-3 px-6 font-semibold">Total Books</th>
                  <th className="hidden lg:table-cell py-3 px-6 font-semibold">Book List File</th>
                  <th className="py-3 px-4 md:px-6 font-semibold">Acquisition Date</th>
                  <th className="py-3 px-4 md:px-6 font-semibold">Purchase Price</th>
                  <th className="hidden lg:table-cell py-3 px-6 font-semibold">Invoice Number</th>
                  <th className="hidden md:table-cell py-3 px-6 font-semibold">Funding Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                {filteredData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                    
                    {/* Column 1: Responsive Vendor Details */}
                    <td className="py-3 px-4 md:px-6 align-middle">
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-bold text-[10px] ${row.logoColor || 'bg-slate-100 text-slate-600'}`}>
                          {row.vendor.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-900 text-sm">{row.vendor}</span>
                          {/* Mixed content rendering dynamically shown inline below Vendor on Tablet & Mobile views */}
                          <div className="flex lg:hidden items-center gap-2 mt-1 flex-wrap">
                            <span className="text-slate-400 font-medium text-[11px]">{row.totalBooks} Books</span>
                            <span className="inline-flex items-center space-x-1 bg-orange-50 text-orange-700 font-semibold text-[10px] px-1.5 py-0.5 rounded border border-orange-100/70">
                              {row.file}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Desktop Columns Hidden conditionally on Tablet/Mobile layouts */}
                    <td className="hidden lg:table-cell py-3 px-6 align-middle text-slate-500 font-medium">{row.totalBooks}</td>
                    
                    <td className="hidden lg:table-cell py-3 px-6 align-middle">
                      <a href="#" className="inline-flex items-center space-x-1 bg-orange-50 text-orange-700 font-medium px-2 py-0.5 rounded-md border border-orange-100 hover:bg-orange-100 transition whitespace-nowrap">
                        <svg className="w-3 h-3 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A1 1 0 0113 2.586L15.414 5A1 1 0 0116 5.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>
                        <span className="text-[11px]">{row.file}</span>
                      </a>
                    </td>

                    <td className="py-3 px-4 md:px-6 text-slate-500 font-medium align-middle whitespace-nowrap">{row.date}</td>
                    
                    {/* Column: Price & Inline Conditional Invoices */}
                    <td className="py-3 px-4 md:px-6 align-middle">
                      <div className="font-bold text-sm text-orange-600">{row.price}</div>
                      <div className="flex lg:hidden items-center space-x-1 text-slate-400 text-[10px] mt-0.5 whitespace-nowrap">
                        <span>Invoice:</span>
                        <span className="font-medium text-slate-500">{row.invoice}</span>
                      </div>
                    </td>

                    <td className="hidden lg:table-cell py-3 px-6 text-slate-500 font-medium align-middle whitespace-nowrap">{row.invoice}</td>
                    
                    <td className="hidden md:table-cell py-3 px-6 font-medium text-slate-500 align-middle whitespace-nowrap">{row.source}</td>
                  </tr>
                ))}
              </tbody> 
            </table>
          </div>

          {/* Table Pagination Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-500">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-2 pr-6 py-1 focus:outline-none cursor-pointer text-slate-600">
                  <option>8</option>
                  <option>16</option>
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