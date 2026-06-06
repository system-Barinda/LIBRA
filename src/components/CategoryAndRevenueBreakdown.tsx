import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

// Left Side: Categories Data configuration matching image_00d8e7.png
const categories = [
  { label: 'Fiction', percentage: 35, count: '6,563 books', color: 'bg-[#21354F]' },
  { label: 'Non-Fiction', percentage: 22, count: '4,126 books', color: 'bg-[#FF7034]' },
  { label: 'Science & Technology', percentage: 15, count: '2,812 books', color: 'bg-[#FFC0A3]' },
  { label: 'History', percentage: 12, count: '2,250 books', color: 'bg-[#7A828A]' },
  { label: 'Children & Young Adult', percentage: 10, count: '1,875 books', color: 'bg-[#A9B1B8]' },
  { label: 'Others', percentage: 6, count: '1,124 books', color: 'bg-[#ECEAE6]' },
];

// Right Side: Donut Pie Distribution Dataset matching image_00d8e7.png
const revenueData = [
  { name: 'Membership Fees', value: 7470, percentage: 60, color: '#21354F', textColor: 'text-white', badgeColor: 'bg-[#21354F]' },
  { name: 'Fines', value: 2490, percentage: 20, color: '#FF7034', textColor: 'text-white', badgeColor: 'bg-[#FF7034]' },
  { name: 'Events', value: 1494, percentage: 12, color: '#A9B1B8', textColor: 'text-slate-700', badgeColor: 'bg-[#A9B1B8]' },
  { name: 'Others', value: 996, percentage: 8, color: '#ECEAE6', textColor: 'text-slate-600', badgeColor: 'bg-[#ECEAE6]' },
];

export default function CategoryAndRevenueBreakdown() {
  // Generates smooth, micro-spaced segments that stretch or contract fluidly across any screen width
  const renderSegmentedBar = () => {
    return (
      <div className="flex w-full items-center gap-[3px] sm:gap-[4px]">
        {categories.map((cat) => (
          <div 
            key={cat.label} 
            style={{ flexGrow: cat.percentage }} 
            className="flex gap-[3px] sm:gap-[4px]"
          >
            {/* Creates a rhythmic visual separation inside each category group block */}
            {Array.from({ length: Math.max(1, Math.round(cat.percentage / 2)) }).map((_, i) => (
              <div 
                key={i} 
                className={`h-10 sm:h-12 w-full min-w-[2px] rounded-full ${cat.color} opacity-95`}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="grid w-full gap-6 p-4 sm:p-6 bg-[#FBFBFA] xl:grid-cols-[1.20fr_1fr] lg:grid-cols-1 md:grid-cols-1">
      
      {/* LEFT PANEL: BOOK CATEGORIES COMPONENT */}
      <div className="flex flex-col justify-between rounded-[24px] border border-slate-100/50 bg-white p-5 sm:p-6 shadow-sm">
        {/* Module Header */}
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-[#1E2229] whitespace-nowrap">Book Categories</h3>
          <button className="flex items-center gap-1.5 bg-[#EFEFEA] hover:bg-[#E5E5DF] text-[#1E2229] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0">
            Last Week <ChevronDown className="w-3.5 h-3.5 text-[#5D6066]" />
          </button>
        </div>

        {/* Custom Segmented Distribution Visualizer */}
        <div className="w-full my-4 sm:my-6">
          {renderSegmentedBar()}
          <div className="w-full border-b border-slate-100/80 mt-5 sm:mt-6" />
        </div>

        {/* Detailed Responsive Grid Text Legends */}
        <div className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 sm:gap-y-6 mt-2">
          {categories.map((cat) => (
            <div key={cat.label} className="flex gap-2.5 items-start">
              <span className={`w-[3px] h-9 sm:h-10 rounded-full shrink-0 ${cat.color}`} />
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-bold text-[#1E2229] truncate block">{cat.label}</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#8C8E93] mt-0.5 whitespace-nowrap">
                  {cat.percentage}% <span className="text-[#C5C6C8] mx-0.5">—</span> {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: REVENUE BREAKDOWN DONUT COMPONENT */}
      <div className="flex flex-col justify-between rounded-[24px] border border-slate-100/50 bg-white p-5 sm:p-6 shadow-sm">
        {/* Module Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-base sm:text-lg font-bold text-[#1E2229] whitespace-nowrap">Revenue Breakdown</h3>
          <button className="flex items-center gap-1.5 bg-[#EFEFEA] hover:bg-[#E5E5DF] text-[#1E2229] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0">
            This Month <ChevronDown className="w-3.5 h-3.5 text-[#5D6066]" />
          </button>
        </div>

        {/* Chart Visualization and Legend Elements Split Row */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] items-center gap-6 mt-2">
          
          {/* Centered Donut Area */}
          <div className="w-full h-40 sm:h-44 md:h-48 relative flex items-center justify-center mx-auto max-w-[200px] sm:max-w-none">
            {/* Center Content Absolute Labels Block */}
            <div className="absolute text-center flex flex-col pointer-events-none transform -translate-y-0.5 z-10">
              <span className="text-xl sm:text-2xl font-black text-[#1E2229] tracking-tight">$12,450</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#A3A5A8] uppercase tracking-wide mt-0.5">Total Revenue</span>
            </div>

            <div className="w-full h-full absolute inset-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="90%"
                    paddingAngle={4}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={4} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Column Layout Metric Row Indicators */}
          <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
            {revenueData.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-2 min-w-0">
                <div className="flex gap-2.5 items-start min-w-0">
                  <span className={`w-[3px] h-7 sm:h-8 rounded-full shrink-0 ${item.badgeColor} mt-0.5`} />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2229] leading-tight truncate block">{item.name}</span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#8C8E93] mt-0.5">${item.value.toLocaleString()}</span>
                  </div>
                </div>
                {/* Outlined Custom Data Pill Percentage Badge */}
                <div className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:py-1 rounded-[6px] min-w-[34px] text-center ${item.badgeColor} ${item.textColor} bg-opacity-95 shrink-0`}>
                  {item.percentage}%
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}