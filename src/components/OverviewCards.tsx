import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { ChevronDown } from 'lucide-react';

// Data for Library Usage Trends (Left Chart)
const usageData = [
  { name: 'Sun', visitors: 58, borrowers: 22 },
  { name: 'Mon', visitors: 72, borrowers: 45 },
  { name: 'Tue', visitors: 85, borrowers: 70 },
  { name: 'Wed', visitors: 90, borrowers: 52 },
  { name: 'Thu', visitors: 65, borrowers: 32 },
  { name: 'Fri', visitors: 68, borrowers: 42 },
  { name: 'Sat', visitors: 74, borrowers: 28 },
];

// Data for Revenue Breakdown (Right Chart)
// Custom property added to isolate the highlighted month (Jun)
const revenueData = [
  { name: 'Feb', revenue: 5200, displayValue: '$5.2K', isHighlighted: false },
  { name: 'Mar', revenue: 7600, displayValue: '$7.6K', isHighlighted: false },
  { name: 'Apr', revenue: 9200, displayValue: '$9.2K', isHighlighted: false },
  { name: 'May', revenue: 8600, displayValue: '$8.6K', isHighlighted: false },
  { name: 'Jun', revenue: 7598, displayValue: '$7,598', isHighlighted: true },
  { name: 'Jul', revenue: 6400, displayValue: '$6.4K', isHighlighted: false },
  { name: 'Aug', revenue: 7300, displayValue: '$7.3K', isHighlighted: false },
  { name: 'Sep', revenue: 8400, displayValue: '$8.4K', isHighlighted: false },
];

// Custom Tooltip component for the Library Usage Chart to match the exact tooltip in image_01c165.png
const CustomUsageTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl bg-white p-4 shadow-xl border border-slate-50 text-xs">
        <p className="font-medium text-slate-400 mb-2">Thu, 27 Sept 2025</p>
        <div className="space-y-1.5 font-semibold text-slate-800">
          <div className="flex items-center justify-between gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2.5 h-2.5 rounded bg-[#ECEAE6] inline-block" />
              Visitors
            </span>
            <span className="text-slate-900 font-bold">81</span>
          </div>
          <div className="flex items-center justify-between gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2.5 h-2.5 rounded bg-[#FF7034] inline-block" />
              Borrowers
            </span>
            <span className="text-slate-900 font-bold">32</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function OverviewCards() {
  return (
    // <section className="grid gap-6 md:grid-cols-2 bg-[#FBFBFA] p-6 w-full">
      
    <section className="grid gap-6 md:grid-cols-2 bg-[#b9b911] w-full">
      {/* 1. LIBRARY USAGE TRENDS CARD */}
      <div className="bg-white  p-6 shadow-sm border border-slate-100/50 flex flex-col justify-between ">
        {/* Header section */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#1E2229]">Library Usage Trends</h3>
            <div className="flex items-center gap-4 mt-3 text-xs font-semibold text-[#8C8E93]">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#ECEAE6]" /> Visitors
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#FF7034]" /> Borrowers
              </span>
            </div>
          </div>
          <button className="flex items-center gap-1.5 bg-[#EFEFEA] hover:bg-[#E5E5DF] text-[#1E2229] px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
            Last Week <ChevronDown className="w-4 h-4 text-[#5D6066]" />
          </button>
        </div>

        {/* Chart area */}
        <div className="w-full h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={usageData} barGap={-24} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#F3F3F0" strokeDasharray="0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A3A5A8', fontSize: 12, fontWeight: 500 }} 
                dy={10}
              />
              <YAxis 
                domain={[0, 100]} 
                ticks={[0, 25, 50, 75, 100]} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A3A5A8', fontSize: 12, fontWeight: 500 }} 
              />
              <Tooltip content={<CustomUsageTooltip />} cursor={{ fill: 'transparent' }} />
              {/* Background bar tracking total capacity (Visitors) */}
              <Bar dataKey="visitors" fill="#ECEAE6" radius={[6, 6, 6, 6]} maxBarSize={24} />
              {/* Foreground main bar metrics (Borrowers) */}
              <Bar dataKey="borrowers" fill="#FF7034" radius={[6, 6, 6, 6]} maxBarSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. REVENUE TRENDS CARD */}
      <div className="bg-white shadow-sm border border-slate-100/50 flex flex-col justify-between">
        {/* Header section */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-[#1E2229]">Revenue</h3>
          <button className="flex items-center gap-1.5 bg-[#EFEFEA] hover:bg-[#E5E5DF] text-[#1E2229] px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
            Last 8 Months <ChevronDown className="w-4 h-4 text-[#5D6066]" />
          </button>
        </div>

        {/* Chart area */}
        <div className="w-full h-64 relative">
          {/* Custom Label for Highlighted Month (June $7,598) perfectly positioned over the chart step */}
          <div className="absolute top-[40px] left-[54%] -translate-x-1/2 flex flex-col items-center z-10">
            <span className="text-xs font-bold text-[#1E2229] bg-white px-1 py-0.5 rounded">$7,598</span>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 20, right: 10, left: -15, bottom: 0 }}>
              <defs>
                {/* Standard Fade Gradient */}
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#31435F" stopOpacity={0.08}/>
                  <stop offset="95%" stopColor="#31435F" stopOpacity={0.00}/>
                </linearGradient>
                {/* Highlighted Orange Block Gradient for June */}
                <linearGradient id="juneGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF7034" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#FF7034" stopOpacity={0.01}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#F3F3F0" strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A3A5A8', fontSize: 12, fontWeight: 500 }} 
                dy={10}
              />
              <YAxis 
                domain={[0, 10000]} 
                ticks={[0, 2500, 5000, 7500, 10000]} 
                tickFormatter={(val) => val === 0 ? '$0' : `$${val/1000}K`}
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#A3A5A8', fontSize: 12, fontWeight: 500 }} 
              />
              
              {/* Base background fill area using a stepped design curve */}
              <Area 
                type="stepAfter" 
                dataKey="revenue" 
                stroke="#31435F" 
                strokeWidth={2} 
                fill="url(#revenueGrad)" 
              />

              {/* Overlaid highlight explicitly focusing the active June selection column */}
              <Area 
                type="stepAfter"
                dataKey={(data) => data.isHighlighted ? data.revenue : null}
                stroke="#FF7034"
                strokeWidth={2}
                fill="url(#juneGrad)"
                connectNulls={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </section>
  );
}