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

// --- Mock Data matching image_a7f46c.png ---
const booksData: BookItem[] = [
  {
    title: 'Where The Flowers Bloom',
    id: 'BK-10234',
    image: '🌾',
    author: { name: 'Mira Ellison', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Aurora Press',
    year: 2032,
    status: 'Available',
    copies: '3/3',
    shelfLocation: 'F2-SCIFI-SH2-R3-P05',
    resourceLink: 'https://libra.io/books/echo...'
  },
  {
    title: 'Floral Dreams',
    id: 'BK-09876',
    image: '🌸',
    author: { name: 'Leo Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Hollow House',
    year: 2030,
    status: 'Borrowed',
    copies: '0/2',
    shelfLocation: 'F1-LIT-SH1-R4-P02',
    resourceLink: 'https://libra.io/books/the-si...'
  },
  {
    title: 'My Story',
    id: 'BK-11001',
    image: '📘',
    author: { name: 'Elara Quinn', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Grove & Co.',
    year: 2031,
    status: 'Available',
    copies: '2/2',
    shelfLocation: 'F2-MYS-SH3-R1-P07',
    resourceLink: 'https://libra.io/books/whisp...'
  },
  {
    title: 'Threads of Fate',
    id: 'BK-11122',
    image: '🧣',
    author: { name: 'Aria Wells', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Nebula Press',
    year: 2033,
    status: 'Available',
    copies: '1/3',
    shelfLocation: 'F2-SCIFI-SH1-R6-P09',
    resourceLink: 'https://libra.io/books/fragm...'
  },
  {
    title: 'Drew Feig',
    id: 'BK-10567',
    image: '📖',
    author: { name: 'Daxon Reid', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Red River Books',
    year: 2029,
    status: 'Damaged',
    copies: '0/1',
    shelfLocation: 'F3-THR-SH2-R3-P04',
    resourceLink: 'https://libra.io/books/crims...'
  },
  {
    title: 'The Book of Prayer',
    id: 'BK-10345',
    image: '🌿',
    author: { name: 'Eliot Dorne', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Forge & Feather',
    year: 2028,
    status: 'Lost',
    copies: '0/2',
    shelfLocation: 'F3-FANT-SH4-R2-P01',
    resourceLink: 'https://libra.io/books/iron-v...'
  },
  {
    title: 'The Coffee Shop Next Door',
    id: 'BK-10098',
    image: '☕',
    author: { name: 'Kael Rowan', avatar: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Moondust Media',
    year: 2030,
    status: 'Borrowed',
    copies: '0/2',
    shelfLocation: 'F1-MYS-SH3-R5-P03',
    resourceLink: 'https://libra.io/books/lost-...'
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
    resourceLink: 'https://libra.io/books/verda...'
  },
  {
    title: "Claudia's Life Story",
    id: 'BK-10991',
    image: '📕',
    author: { name: 'Nyra Solis', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Skyline House',
    year: 2031,
    status: 'Available',
    copies: '2/2',
    shelfLocation: 'F2-SCIFI-SH4-R3-P04',
    resourceLink: 'https://libra.io/books/aethe...'
  },
  {
    title: 'Dune Whisper',
    id: 'BK-10888',
    image: '⏳',
    author: { name: 'Callen Dray', avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Portal Ink',
    year: 2032,
    status: 'Available',
    copies: '1/1',
    shelfLocation: 'F3-FANT-SH1-R1-P05',
    resourceLink: 'https://libra.io/books/glass-...'
  },
  {
    title: 'Everything Kimchi',
    id: 'BK-10777',
    image: '🥢',
    author: { name: 'Jonas Vale', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=50&auto=format&fit=crop&q=80' },
    publisher: 'NightQuill',
    year: 2034,
    status: 'Available',
    copies: '1/1',
    shelfLocation: 'F1-LIT-SH5-R2-P02',
    resourceLink: 'https://libra.io/books/midni...'
  },
  {
    title: 'The Lost Kingdom',
    id: 'BK-08888',
    image: '👑',
    author: { name: 'Rowan Blake', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&auto=format&fit=crop&q=80' },
    publisher: 'Obsidian Edge',
    year: 2029,
    status: 'Borrowed',
    copies: '0/2',
    shelfLocation: 'F2-THR-SH5-R4-P06',
    resourceLink: 'https://libra.io/books/shad...'
  }
];

export default function Books() {
  return (
    <div className="min-h-screen bg-[#F9FAFC] p-4 lg:p-8 font-sans antialiased text-gray-600">
      
      {/* Top Main Heading Actions Row Container */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-transparent">
        <h2 className="font-bold text-gray-800 text-xl tracking-tight">Books Collection</h2>
        
        {/* Navigation Toolbar Controls Grid */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Search Box Input element */}
          <div className="relative flex-1 sm:flex-initial min-w-[240px]">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search a book" 
              className="pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-full sm:w-64 transition-all"
            />
          </div>
          
          {/* Filters Control Toggle button */}
          <button className="text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-1.5 bg-white hover:bg-gray-50 transition-colors shadow-2xs">
            <SlidersHorizontal size={14} className="text-gray-400" /> Filter <ChevronDown size={14} className="text-gray-400" />
          </button>
          
          {/* Sorting Control Badge element */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Sort by:</span>
            <button className="font-semibold text-gray-600 border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors shadow-2xs">
              Popular <ChevronDown size={14} className="text-gray-400" />
            </button>
          </div>

          {/* Grid/List Display Mode Switch Toggles */}
          <div className="flex items-center gap-1 bg-gray-200/60 p-1 rounded-xl">
            <button className="p-1.5 rounded-lg text-white bg-[#FF7E40] shadow-2xs">
              <List size={15} />
            </button>
            <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
              <Grid size={15} />
            </button>
          </div>

          {/* Dynamic Resource Creation Submission Button trigger */}
          <button className="text-xs font-bold text-white bg-[#FF7E40] hover:bg-[#e0682e] rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-xs transition-all ml-auto sm:ml-0">
            <Plus size={16} /> Add Book
          </button>
        </div>
      </div>

      {/* Main Table Layer Frame panel view wrapper */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 bg-gray-50/40 uppercase tracking-wider">
                <th className="py-3 px-6">Book ↕</th>
                <th className="py-3 px-6">Author ↕</th>
                <th className="py-3 px-6">Publisher ↕</th>
                <th className="py-3 px-6">Status ↕</th>
                <th className="py-3 px-6">Copies ↕</th>
                <th className="py-3 px-6">Shelf Location ↕</th>
                <th className="py-3 px-6">Resource Link ↕</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
              {booksData.map((book, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  
                  {/* Book identity grid column */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-lg p-1.5 bg-gray-50 rounded-lg border border-gray-100 shrink-0 shadow-2xs">{book.image}</span>
                      <div>
                        <p className="font-bold text-gray-800 line-clamp-1">{book.title}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">{book.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Profile data segment element */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-2">
                      <img src={book.author.avatar} alt={book.author.name} className="w-6 h-6 rounded-full object-cover shrink-0" />
                      <span className="font-medium text-gray-700">{book.author.name}</span>
                    </div>
                  </td>

                  {/* Publication identity info */}
                  <td className="py-3.5 px-6">
                    <div>
                      <p className="font-medium text-gray-700">{book.publisher}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{book.year}</p>
                    </div>
                  </td>

                  {/* Reactive color status badge renderer */}
                  <td className="py-3.5 px-6">
                    {book.status === 'Available' && (
                      <span className="bg-emerald-50 text-emerald-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-100">Available</span>
                    )}
                    {book.status === 'Borrowed' && (
                      <span className="bg-orange-50 text-orange-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-orange-100">Borrowed</span>
                    )}
                    {book.status === 'Damaged' && (
                      <span className="bg-rose-50 text-rose-600 font-bold text-[10px] px-2.5 py-1 rounded-full border border-rose-100">Damaged</span>
                    )}
                    {book.status === 'Lost' && (
                      <span className="bg-gray-100 text-gray-500 font-bold text-[10px] px-2.5 py-1 rounded-full">Lost</span>
                    )}
                  </td>

                  {/* Item Quantities column text layout parameters */}
                  <td className="py-3.5 px-6 font-semibold text-gray-700">{book.copies}</td>

                  {/* Alphanumeric storage tracker indices */}
                  <td className="py-3.5 px-6 font-mono text-[11px] text-gray-500 tracking-tight">{book.shelfLocation}</td>

                  {/* Clickable uniform resource indicator tag links */}
                  <td className="py-3.5 px-6">
                    <a href="#resource" className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium hover:underline transition-all">
                      <Link2 size={13} className="shrink-0" />
                      <span className="truncate max-w-[160px]">{book.resourceLink}</span>
                    </a>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Unified App Layout Interactive Pagination Section Footer */}
        <div className="p-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <div className="relative">
              <select className="appearance-none border border-gray-200 rounded-lg pl-2.5 pr-7 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-orange-500/30 text-gray-700 font-semibold cursor-pointer">
                <option>12</option>
                <option>25</option>
                <option>50</option>
              </select>
              <ChevronDown size={12} className="absolute right-2 top-2 text-gray-400 pointer-events-none" />
            </div>
            <span>of 56 results</span>
          </div>

          {/* Interactive Navigation Step Controls */}
          <div className="flex items-center gap-1">
            <button className="p-1.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed">
              <ChevronLeft size={14} />
            </button>
            <button className="px-3 py-1 rounded-lg text-white bg-[#FF7E40] font-bold shadow-2xs">1</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">2</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">3</button>
            <span className="px-1.5 text-gray-300">...</span>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">6</button>
            <button className="p-1.5 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-3xs">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}