import {
  Inbox,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  PenSquare,
  X,
} from "lucide-react";

const categories = [
  { name: "All Inbox", icon: Inbox, count: 17, active: true },
  { name: "Starred", icon: Star, count: 10 },
  { name: "Sent", icon: Send, count: 8 },
  { name: "Drafts", icon: FileText, count: 0 },
  { name: "Spam", icon: Archive, count: 0 },
  { name: "Trash", icon: Trash2, count: 0 },
];

export default function Categories({ isMobile, closeMenu }:any) {
  return (
    <div 
      className={`h-full bg-[#f4f3ef] border-r border-gray-100 flex flex-col justify-between ${
        isMobile ? "w-full" : "hidden lg:flex"
      }`}
    >
      <div>
        {/* Header containing responsive close trigger */}
        <div className="p-5 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">Category</span>
          {isMobile && (
            <button 
              onClick={closeMenu} 
              className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Categories Dynamic Navigation Links */}
        <div className="flex-1 px-3">
          <div className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all text-sm font-medium ${
                    category.active
                      ? "bg-white text-gray-900 shadow-xs"
                      : "hover:bg-gray-200/50 text-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={category.active ? "text-orange-500" : "text-gray-500"} />
                    <span>{category.name}</span>
                  </div>

                  {category.count > 0 && (
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        category.active
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Optional User Stats / Footer section */}
      <div className="p-5">
        <div className="flex items-center justify-between text-sm font-medium text-gray-700">
          <span>Label</span>
          <button className="text-gray-500 hover:text-black text-lg">+</button>
        </div>
        {/* Labels could go here */}
      </div>
    </div>
  );
}