import React from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ChevronDown, 
  Grid, 
  List, 
  Plus, 
  Link2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { booksData } from '../data/booksData';

// --- Types & Interfaces ---


// --- Verified Mock Data ---


export default function Books() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-4 md:p-6 lg:p-8 font-sans antialiased text-gray-600">
      
      {/* --- Header Bar Panel --- */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
        <h2 className="font-bold text-gray-800 text-xl tracking-tight">Books Collection</h2>
        
        {/* Navigation & Toolbar Controls Layout */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {/* Main Actionable Search Input Block */}
          <div className="relative flex-1 min-w-[200px] sm:flex-initial sm:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={15} />
            <input 
              type="text" 
              placeholder="Search a book" 
              className="pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl bg-[#F5F5F5] focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 w-full transition-all"
            />
          </div>

          {/* Filter Trigger Elements */}
          <button className="p-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 flex items-center gap-1.5 transition-colors shrink-0">
            <SlidersHorizontal size={14} className="text-gray-500" />
            <span>Filter</span>
          </button>

          {/* Sort Menu Options Dropdown Selection */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0">
            <span className="hidden sm:inline">Sort by:</span>
            <button className="border border-gray-200 rounded-xl bg-white px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-1 transition-all">
              Popular <ChevronDown size={12} className="ml-0.5 text-gray-400" />
            </button>
          </div>

          {/* Grid Layout Toggle View Box */}
          <div className="flex items-center gap-0.5 bg-gray-100 p-1 rounded-xl shrink-0">
            <button className="p-1.5 rounded-lg text-white bg-[#FF7E40] shadow-sm">
              <List size={14} />
            </button>
            <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
              <Grid size={14} />
            </button>
          </div>

          {/* Primary Create Action Call To Button */}
          <button className="text-xs font-semibold text-white bg-[#FF7E40] hover:bg-[#e0682e] rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-sm transition-all shrink-0 ml-auto sm:ml-0">
            <Plus size={16} /> <span>Add Book</span>
          </button>
        </div>
      </div>

      {/* --- Primary Display Surface Card Wrapper --- */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        
        {/* Responsive Table Layout Module Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 bg-[#FAFAFA] uppercase tracking-wider">
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none w-[30%]">Book <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none w-[15%]">Author <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell w-[15%]">Publisher <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none w-[10%]">Status <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell text-center w-[8%]">Copies <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell w-[12%]">Shelf Location <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer select-none hidden md:table-cell w-[10%]">Resource Link <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 md:hidden w-[10%]">Details</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
              {booksData.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50/40 transition-colors">
                  
                  {/* Book Details Block Title Column */}
                  <td className="py-3 px-4 md:px-6 align-middle">
                    <div className="flex items-center gap-3">
                      <img 
                        src={book.image} 
                        alt={book.title} 
                        className="w-10 h-14 object-cover rounded-md bg-gray-50 border border-gray-100 shadow-sm shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-gray-800 text-xs md:text-sm truncate">{book.title}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">{book.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Author Information Column */}
                  <td className="py-3 px-4 md:px-6 align-middle">
                    <div className="flex items-center gap-2">
                      <img src={book.author.avatar} alt={book.author.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
                      <span className="font-medium text-gray-700 truncate max-w-[120px]">{book.author.name}</span>
                    </div>
                  </td>

                  {/* Publisher Block Hidden on Mobile */}
                  <td className="py-3 px-4 md:px-6 hidden md:table-cell align-middle">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-700 truncate">{book.publisher}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{book.year}</p>
                    </div>
                  </td>

                  {/* Operational Status Badges Column */}
                  <td className="py-3 px-4 md:px-6 align-middle whitespace-nowrap">
                    {book.status === 'Available' && (
                      <span className="bg-[#E6F4EA] text-[#137333] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">Available</span>
                    )}
                    {book.status === 'Borrowed' && (
                      <span className="bg-[#FCE8E6] text-[#C5221F] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">Borrowed</span>
                    )}
                    {book.status === 'Damaged' && (
                      <span className="bg-[#FEF7E0] text-[#B06000] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">Damaged</span>
                    )}
                    {book.status === 'Lost' && (
                      <span className="bg-[#F1F3F4] text-[#5F6368] font-semibold text-[10px] px-2.5 py-1 rounded-full border border-transparent">Lost</span>
                    )}
                  </td>

                  {/* Standard Desktop Extra Columns Layout */}
                  <td className="py-3 px-4 md:px-6 hidden md:table-cell text-center font-medium text-gray-700 align-middle">
                    {book.copies}
                  </td>

                  <td className="py-3 px-4 md:px-6 hidden md:table-cell font-medium text-gray-700 tracking-tight align-middle whitespace-nowrap">
                    {book.shelfLocation}
                  </td>

                  <td className="py-3 px-4 md:px-6 hidden md:table-cell align-middle">
                    <a href="#resource" className="inline-flex items-center gap-1 text-[#FF7E40] hover:text-[#e0682e] transition-all max-w-[140px]">
                      <Link2 size={12} className="shrink-0" />
                      <span className="truncate underline font-medium">{book.resourceLink}</span>
                    </a>
                  </td>

                  {/* Combined Aggregated Column Block Specific for Responsive Views */}
                  <td className="py-3 px-4 md:px-6 md:hidden align-middle">
                    <div className="space-y-1 text-[11px] min-w-[100px]">
                      <p className="text-gray-400">Copies: <span className="font-semibold text-gray-700">{book.copies}</span></p>
                      <p className="text-gray-400">Shelf: <span className="font-semibold text-gray-700 whitespace-nowrap">{book.shelfLocation}</span></p>
                      <a href="#resource" className="inline-flex items-center gap-0.5 text-[#FF7E40] underline font-medium">
                        <Link2 size={10} /> Link
                      </a>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Global Dynamic Footer Controls Row --- */}
        <div className="p-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row gap-4 justify-between items-center text-xs font-medium text-gray-500">
          {/* Counter Status Entry Indicators Layout */}
          <div className="flex items-center gap-1.5">
            <span>Show</span>
            <div className="relative">
              <select className="appearance-none border border-gray-200 rounded-lg pl-2 pr-6 py-1 bg-white focus:outline-none text-gray-700 font-semibold cursor-pointer text-xs">
                <option>12</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown size={12} className="absolute right-1.5 top-2 text-gray-400 pointer-events-none" />
            </div>
            <span>of 56 results</span>
          </div>

          {/* Actionable Steps Multi-page Elements Block */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1">
            <button className="p-1.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-300 cursor-not-allowed shrink-0">
              <ChevronLeft size={14} />
            </button>
            <button className="px-2.5 py-1 rounded-lg text-white bg-[#FF7E40] font-bold shrink-0">1</button>
            <button className="px-2.5 py-1 rounded-lg bg-transparent hover:bg-gray-50 text-gray-600 transition-colors shrink-0">2</button>
            <button className="px-2.5 py-1 rounded-lg bg-transparent hover:bg-gray-50 text-gray-600 transition-colors shrink-0">3</button>
            <span className="px-1 text-gray-300 shrink-0">..</span>
            <button className="px-2.5 py-1 rounded-lg bg-transparent hover:bg-gray-50 text-gray-600 transition-colors shrink-0">6</button>
            <button className="p-1.5 border border-gray-200 rounded-lg bg-white text-gray-500 hover:bg-gray-50 transition-colors shrink-0">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}