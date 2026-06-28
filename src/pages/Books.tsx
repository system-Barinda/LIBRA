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

// --- Types & Interfaces ---
interface BookItem {
  title: string;
  id: string;
  image: string;
  author: { name: string; avatar: string };
  publisher: string;
  year: number;
  status: 'Available' | 'Borrowed' | 'Damaged' | 'Lost';
  copies: string;
  shelfLocation: string;
  resourceLink: string;
}

// --- Mock Data ---
const booksData: BookItem[] | any = [
  {
    title: 'Where The Flowers Bloom',
    id: 'BK-08745',
    image: '🌾',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Aurora Press',
    year: 2032,
    status: 'Available',
    copies: '3/3',
    shelfLocation: 'F2-SCIFI-SH2-R3-P05',
    resourceLink: 'https://libra.io/books/echoes-o...'
  },
  {
    title: 'Floral Dreams',
    id: 'BK-08745',
    image: '🌸',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Hollow House',
    year: 2030,
    status: 'Borrowed',
    copies: '0/2',
    shelfLocation: 'F1-LIT-SH1-R4-P02',
    resourceLink: 'https://libra.io/books/the-silen...'
  },
  {
    title: 'My Story',
    id: 'BK-08745',
    image: '📘',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Grove & Co.',
    year: 2031,
    status: 'Available',
    copies: '2/2',
    shelfLocation: 'F2-MYS-SH3-R1-P07',
    resourceLink: 'https://libra.io/books/whispers...'
  },
  {
    title: 'Threads of Fate',
    id: 'BK-08745',
    image: '🧣',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Nebula Press',
    year: 2033,
    status: 'Available',
    copies: '1/3',
    shelfLocation: 'F2-SCIFI-SH1-R6-P09',
    resourceLink: 'https://libra.io/books/fragment...'
  },
  {
    title: 'Drew Feig',
    id: 'BK-08745',
    image: '📖',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Red River Books',
    year: 2029,
    status: 'Damaged',
    copies: '0/1',
    shelfLocation: 'F3-THR-SH2-R3-P04',
    resourceLink: 'https://libra.io/books/crimson-...'
  },
  {
    title: 'The Book of Prayer',
    id: 'BK-08745',
    image: '🌿',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Forge & Feather',
    year: 2028,
    status: 'Lost',
    copies: '0/2',
    shelfLocation: 'F3-FANT-SH4-R2-P01',
    resourceLink: 'https://libra.io/books/iron-veil'
  },
  {
    title: 'The Coffee Shop Next Door',
    id: 'BK-08745',
    image: '☕',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Moondust Media',
    year: 2030,
    status: 'Borrowed',
    copies: '0/2',
    shelfLocation: 'F1-MYS-SH3-R5-P03',
    resourceLink: 'https://libra.io/books/lost-ember'
  },
  {
    title: 'My Recipe Book',
    id: 'BK-08745',
    image: '🍳',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Greenline Books',
    year: 2027,
    status: 'Available',
    copies: '2/2',
    shelfLocation: 'F2-FANT-SH2-R1-P06',
    resourceLink: 'https://libra.io/books/verdant-h...'
  },
  {
    title: "Claudia's Life Story",
    id: 'BK-08745',
    image: '📕',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Skyline House',
    year: 2031,
    status: 'Available',
    copies: '2/2',
    shelfLocation: 'F2-SCIFI-SH4-R3-P04',
    resourceLink: 'https://libra.io/books/aetherbo...'
  },
  {
    title: 'Dune Whisper',
    id: 'BK-08745',
    image: '⏳',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Portal Ink',
    year: 2032,
    status: 'Available',
    copies: '1/1',
    shelfLocation: 'F3-FANT-SH1-R1-P05',
    resourceLink: 'https://libra.io/books/glass-bet...'
  },

  {
    title: 'The Lost Kingdom',
    id: 'BK-08745',
    Image: '👑',
    author: { name: 'Sylvia North', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Obsidian Edge',
    year: 2029,
    status: 'Borrowed',
    copies: '0/2',
    shelfLocation: 'F2-THR-SH5-R4-P06',
    resourceLink: 'https://libra.io/books/shadows-...'
  }
];

export default function Books() {
  return (
    <div className="min-h-screen bg-[#F9FAFC] p-4 md:p-6 lg:p-8 font-sans antialiased text-gray-600">
      
      {/* Header Bar */}
      <div className="flex flex-row justify-between items-center gap-4 mb-5 bg-transparent">
        <h2 className="font-bold text-gray-800 text-lg sm:text-xl tracking-tight">Books Collection</h2>
        
        {/* Navigation Controls Wrapper */}
        <div className="flex items-center gap-2">
          {/* Mobile Icon Search Button Variant */}
          <button className="sm:hidden p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-all">
            <Search size={18} />
          </button>

          {/* Desktop/Tablet Responsive Search Element */}
          <div className="relative hidden sm:block min-w-[200px] md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search a book" 
              className="pl-9 pr-8 py-2 text-xs border border-gray-200 rounded-xl bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-full transition-all"
            />
          </div>

          {/* Configuration filter toggle item row */}
          <button className="p-2 sm:px-3 sm:py-2 text-xs font-semibold text-gray-600 border border-transparent sm:border-gray-200 rounded-xl bg-gray-100 sm:bg-white hover:bg-gray-50 transition-colors">
            <SlidersHorizontal size={16} className="sm:size-[14px] text-gray-500 sm:text-gray-400" />
          </button>

          {/* Grid View Selection Elements */}
          <div className="hidden sm:flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button className="p-1.5 rounded-lg text-white bg-[#FF7E40] shadow-2xs">
              <List size={15} />
            </button>
            <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
              <Grid size={15} />
            </button>
          </div>

          {/* Accent Activation Button */}
          <button className="text-xs font-bold text-white bg-[#FF7E40] hover:bg-[#e0682e] rounded-xl p-2 sm:px-4 sm:py-2 flex items-center gap-1.5 shadow-xs transition-all">
            <Plus size={18} className="sm:size-4" /> <span className="hidden sm:inline">Add Book</span>
          </button>
        </div>
      </div>

      {/* Primary Display Surface */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
        
        {/* --- Mobile View Stack Layout --- */}
        <div className="block sm:hidden divide-y divide-gray-100">
          {/* Header Row Mirror matching Image Layout */}
          <div className="flex justify-between items-center px-4 py-3 text-[11px] font-bold text-gray-400 bg-gray-50/20 uppercase tracking-wider border-b border-gray-100">
            <span>Book ↕</span>
            <span className="pr-6">Author ↕</span>
          </div>

          {booksData.map((book, idx) => (
            <div key={idx} className="p-4 flex items-start justify-between gap-3 bg-white">
              {/* Left Column Stacked Metadata elements */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="text-xl p-2 bg-gray-50 rounded-xl border border-gray-100 shrink-0 w-11 h-14 flex items-center justify-center">{book.image}</span>
                <div className="min-w-0">
                  <p className="font-bold text-gray-800 text-sm truncate leading-tight">{book.title}</p>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5">{book.id}</p>
                  
                  {/* Embedded Profile Elements underneath */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <img src={book.author.avatar} alt={book.author.name} className="w-4 h-4 rounded-full object-cover shrink-0" />
                    <span className="text-[11px] text-gray-500 font-medium truncate">{book.author.name}</span>
                  </div>
                </div>
              </div>

              {/* Right Column Layout parameters */}
              <div className="flex flex-col items-end gap-1.5 shrink-0 text-right">
                <span className="font-semibold text-gray-800 text-xs">{book.publisher}</span>
                <span className="text-[10px] text-gray-400 font-medium">{book.year}</span>
                
                {/* Visual Status indicators alignment box */}
                <div className="mt-1">
                  {book.status === 'Available' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" title="Available" />
                  )}
                  {book.status === 'Borrowed' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" title="Borrowed" />
                  )}
                  {book.status === 'Damaged' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" title="Damaged" />
                  )}
                  {book.status === 'Lost' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" title="Lost" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Tablet & Desktop Display Table Structure --- */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[768px] lg:min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 bg-gray-50/20 uppercase tracking-wider">
                <th className="py-3 px-4 md:px-6 cursor-pointer hover:bg-gray-50/50">Book <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer hover:bg-gray-50/50">Author <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer hover:bg-gray-50/50 hidden lg:table-cell">Publisher <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer hover:bg-gray-50/50">Status <span className="text-[9px] ml-0.5">↕</span></th>
                <th className="py-3 px-4 md:px-6 cursor-pointer hover:bg-gray-50/50">Details <span className="text-[9px] ml-0.5">↕</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
              {booksData.map((book, idx) => (
                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                  
                  {/* Book Data Block */}
                  <td className="py-3.5 px-4 md:px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xl p-2 bg-gray-50 rounded-xl border border-gray-100 shrink-0 shadow-3xs w-11 h-14 flex items-center justify-center">{book.image}</span>
                      <div>
                        <p className="font-bold text-gray-800 line-clamp-1 text-sm md:text-xs">{book.title}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">{book.id}</p>
                        <div className="flex items-center gap-1.5 mt-1 md:hidden">
                          <img src={book.author.avatar} alt={book.author.name} className="w-4 h-4 rounded-full object-cover" />
                          <span className="text-[10px] text-gray-500">{book.author.name}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Author / Publisher Information combo block */}
                  <td className="py-3.5 px-4 md:px-6">
                    <div>
                      <span className="font-semibold text-gray-800 block">{book.publisher}</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5">{book.year}</span>
                      <div className="flex items-center gap-1 mt-1.5">
                        <img src={book.author.avatar} alt={book.author.name} className="w-4 h-4 rounded-full object-cover shrink-0" />
                        <span className="text-[11px] text-gray-400 font-medium">{book.author.name}</span>
                      </div>
                    </div>
                  </td>

                  {/* Large Desktop Panel Publisher field */}
                  <td className="py-3.5 px-4 md:px-6 hidden lg:table-cell">
                    <div>
                      <p className="font-medium text-gray-700">{book.publisher}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{book.year}</p>
                    </div>
                  </td>

                  {/* Operational status Badge mapping */}
                  <td className="py-3.5 px-4 md:px-6">
                    {book.status === 'Available' && (
                      <span className="bg-emerald-50 text-emerald-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-100/50">Available</span>
                    )}
                    {book.status === 'Borrowed' && (
                      <span className="bg-orange-50 text-orange-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-orange-100/50">Borrowed</span>
                    )}
                    {book.status === 'Damaged' && (
                      <span className="bg-rose-50 text-rose-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-rose-100/50">Damaged</span>
                    )}
                    {book.status === 'Lost' && (
                      <span className="bg-gray-100 text-gray-500 font-bold text-[10px] px-2.5 py-1 rounded-full">Lost</span>
                    )}
                  </td>

                  {/* Consolidated Extended Details block */}
                  <td className="py-3.5 px-4 md:px-6">
                    <div className="space-y-1 text-xs">
                      <p className="text-gray-500 font-medium">Copies: <span className="font-bold text-gray-700">{book.copies}</span></p>
                      <p className="text-gray-500 font-medium">Shelf: <span className="font-semibold text-gray-700 font-mono text-[11px]">{book.shelfLocation}</span></p>
                      <a href="#resource" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-500 transition-all truncate max-w-[150px] md:max-w-[180px]">
                        <Link2 size={12} className="shrink-0" />
                        <span className="truncate underline text-[11px]">{book.resourceLink}</span>
                      </a>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global Footer Controls Row */}
        <div className="p-4 border-t border-gray-100 bg-white flex flex-row justify-center sm:justify-between items-center text-xs font-medium text-gray-500">
          <div className="hidden sm:flex items-center gap-1.5">
            <span>Show</span>
            <div className="relative">
              <select className="appearance-none border border-gray-200 rounded-lg pl-2 pr-6 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-orange-500/30 text-gray-700 font-semibold cursor-pointer">
                <option>12</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown size={12} className="absolute right-1.5 top-2 text-gray-400 pointer-events-none" />
            </div>
            <span>of 56 results</span>
          </div>

          {/* Responsive Actionable Steps Pagination Blocks */}
          <div className="flex items-center gap-1.5 sm:gap-1">
            <button className="p-2 sm:p-1.5 border border-gray-100 rounded-xl bg-gray-50 text-gray-300 cursor-not-allowed">
              <ChevronLeft size={14} />
            </button>
            <button className="px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-xl sm:rounded-lg text-white bg-[#FF7E40] font-bold shadow-2xs">1</button>
            <button className="px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-xl sm:rounded-lg bg-gray-100 sm:bg-transparent hover:bg-gray-50 text-gray-600 transition-colors">2</button>
            <button className="px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-xl sm:rounded-lg bg-gray-100 sm:bg-transparent hover:bg-gray-50 text-gray-600 transition-colors">3</button>
            <span className="px-0.5 text-gray-300 hidden sm:inline">...</span>
            <button className="px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-xl sm:rounded-lg bg-gray-100 sm:bg-transparent hover:bg-gray-50 text-gray-600 transition-colors hidden sm:inline">6</button>
            <button className="p-2 sm:p-1.5 border border-gray-200 rounded-xl sm:rounded-lg bg-white text-gray-500 hover:bg-gray-50 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Embedded footer brand note placeholder blocks */}
      <div className="mt-8 text-center text-[11px] tracking-wide text-gray-400 space-y-1">
        <p>Copyright © 2025 Peterdraw</p>
        <div className="flex justify-center gap-3 font-medium text-gray-400/80">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Term and conditions</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>

    </div>
  );
}