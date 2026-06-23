import { Search, SlidersHorizontal, Plus, PanelLeft } from "lucide-react";
import Categories from "./Categories";
import { useState } from "react";

const emails = [
  {
    id: 1,
    name: "Livia Hart",
    subject: "Overdue Book Follow-up",
    preview: "Hi, I just returned Echoes of Astra this morning. Can you confirm it's marked returned?",
    time: "09:22 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Ezra Nolan",
    subject: "Premium Account Upgrade Inquiry",
    preview: "Hello, I'd like to upgrade to Premium. Can you guide me through the steps?",
    time: "08:47 AM",
  },
  {
    id: 3,
    name: "Isla Ray",
    subject: "Event Participation Confirmation",
    preview: "Thank you for the invitation. I'll be joining the library workshop.",
    time: "Yesterday",
  },
];

export default function EmailList() {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="h-full w-full bg-[#fafaf8] flex flex-col relative overflow-hidden">
      
      {/* Search Input Filter Action Header Panel */}
      <div className="p-4 flex gap-3 items-center shrink-0">
        <div className="flex-1 bg-white rounded-2xl px-4 h-14 shadow-xs gap-3 flex items-center justify-between border border-gray-100">
          <button onClick={() => setShowCategory(true)} className="lg:hidden rounded-md hover:bg-gray-100 p-1"> 
            <PanelLeft className="text-gray-700" /> 
          </button>
          <Search size={18} className="text-gray-400 shrink-0" />

          <input
            placeholder="Search email"
            className="ml-1 flex-1 outline-none bg-transparent text-sm text-gray-700"
          />

          <SlidersHorizontal size={18} className="text-gray-400 shrink-0 cursor-pointer" />
        </div>
          
        <button 
          className="w-14 h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-xs shrink-0 transition-colors"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay Drawer (Preserved Viewport Logic) */}
      {showCategory && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setShowCategory(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[85vw] shadow-2xl">
            <Categories isMobile={true} closeMenu={() => setShowCategory(false)} />
          </div>
        </div>
      )}

      {/* Active Emails Mapping Grid */}
      <div className="flex-1 overflow-auto px-4 pb-5 space-y-3">
        {emails.map((email, index) => (
          <div
            key={email.id}
            className={`${
              index === 0 ? "bg-[#f1efeb]" : "bg-white border border-gray-50 hover:bg-gray-50/50"
            } p-5 rounded-2xl cursor-pointer transition-all shadow-xs`}
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold shrink-0">
                  {email.name[0]}
                </div>

                <div>
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold text-[15px] text-gray-800">
                      {email.name}
                    </h3>
                    {email.unread && (
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    )}
                  </div>

                  <h4 className="font-medium mt-0.5 text-[13px] text-gray-700">
                    {email.subject}
                  </h4>

                  <p className="text-gray-400 mt-1 text-[13px] leading-relaxed line-clamp-2">
                    {email.preview}
                  </p>
                </div>
              </div>

              <span className="text-xs text-gray-400 whitespace-nowrap pt-1">
                {email.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}