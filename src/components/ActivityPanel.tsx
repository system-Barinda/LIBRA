import React from 'react'

// Updated data matching image_46b657.png exactly
const activity = [
  { 
    book: 'Claudia’s Life Story', 
    author: 'Mira Ellison',
    member: 'Livia Hart', 
    memberId: 'MBR-2081',
    membership: 'Premium',
    badgeColor: 'bg-[#1e293b] text-white', // Dark Navy
    coverColor: 'bg-[#ebdcd5]'
  },
  { 
    book: 'The Coffee Shop Next Door', 
    author: 'Avery Davis',
    member: 'Noah Trent', 
    memberId: 'MBR-1643',
    membership: 'Standard',
    badgeColor: 'bg-[#fbe2d3] text-[#c25e3a]', // Light Orange/Peach
    coverColor: 'bg-[#d0e1ed]'
  },
  { 
    book: 'The Book of Prayer', 
    author: 'Elara Quinn',
    member: 'Celine Moore', 
    memberId: 'MBR-3095',
    membership: 'Basic',
    badgeColor: 'bg-[#f1f3f5] text-[#495057]', // Neutral Gray
    coverColor: 'bg-[#dfdec4]'
  },
  { 
    book: 'Floral Dreams', 
    author: 'Claudia Alexa',
    member: 'Isla Ray', 
    memberId: 'MBR-2389',
    membership: 'Standard',
    badgeColor: 'bg-[#fbe2d3] text-[#c25e3a]',
    coverColor: 'bg-[#edd9db]'
  },
]

export default function ActivityPanel() {
  return (
    <div className="w-full max-w-4xl rounded-3xl bg-white p-8 font-sans shadow-sm">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-neutral-800">Library Activity</h2>
        
        {/* Dropdown Styled Selector */}
        <button className="flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors">
          Last Week
          <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Table Structure */}
      <div className="w-full overflow-hidden rounded-xl border border-neutral-100">
        {/* Table Column Headers */}
        <div className="grid grid-cols-2 bg-neutral-50/70 px-6 py-3 text-sm font-medium text-neutral-500 border-b border-neutral-100">
          <div className="flex items-center gap-1.5 cursor-pointer select-none">
            Book
            <span className="text-xs text-neutral-400">↕</span>
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer select-none">
            Member Info
            <span className="text-xs text-neutral-400">↕</span>
          </div>
        </div>

        {/* Table Body Content Rows */}
        <div className="divide-y divide-neutral-100">
          {activity.map((item, index) => (
            <div key={index} className="grid grid-cols-2 items-center px-6 py-4 hover:bg-neutral-50/40 transition-colors">
              
              {/* Left Column: Book Details */}
              <div className="flex items-center gap-4">
                {/* Book Cover Placeholder */}
                <div className={`h-16 w-12 flex-shrink-0 rounded-md ${item.coverColor} border border-neutral-200/40 shadow-xs flex items-end p-1`}>
                  <div className="w-full h-2 bg-white/40 rounded-xs" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="truncate text-sm font-semibold text-neutral-800">{item.book}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{item.author}</p>
                </div>
              </div>

              {/* Right Column: Member Details */}
              <div className="flex items-center gap-3">
                {/* Avatar Graphic Component */}
                <div className="relative h-10 w-10 flex-shrink-0 rounded-full bg-orange-500 flex items-center justify-center overflow-hidden border border-orange-200">
                  {/* Styled minimalist face icon matching image profiles */}
                  <div className="w-6 h-6 rounded-full bg-neutral-800 mt-2 relative">
                    <div className="absolute -top-1 left-1.5 w-3 h-2 bg-amber-100 rounded-b-md" />
                  </div>
                </div>
                
                <div className="flex flex-1 items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800">{item.member}</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{item.memberId}</p>
                  </div>
                  {/* Membership Badge */}
                  <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${item.badgeColor}`}>
                    {item.membership}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Decorative horizontal scrollbar mimicking the platform layer at the bottom */}
      <div className="mt-4 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
        <div className="h-full w-3/5 bg-neutral-300 rounded-full" />
      </div>
    </div>
  )
}