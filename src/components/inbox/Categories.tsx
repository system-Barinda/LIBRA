import {
  Inbox,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  PenSquare,
} from "lucide-react";

const categories = [
  {
    name: "Inbox",
    icon: Inbox,
    count: 48,
    active: true,
  },
  {
    name: "Starred",
    icon: Star,
    count: 12,
  },
  {
    name: "Sent",
    icon: Send,
    count: 31,
  },
  {
    name: "Drafts",
    icon: FileText,
    count: 4,
  },
  {
    name: "Archive",
    icon: Archive,
    count: 86,
  },
  {
    name: "Trash",
    icon: Trash2,
    count: 7,
  },
];

export default function Categories() {
  return (
    <div className="hidden lg:block h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition">
          <PenSquare size={18} />
          New Message
        </button>
      </div>

      {/* Categories */}
      <div className="flex-1 p-3">
        <h3 className="px-3 mb-3 text-xs uppercase tracking-wider text-gray-400 font-semibold">
          Mailbox
        </h3>

        <div className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition ${
                  category.active
                    ? "bg-orange-50 text-orange-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{category.name}</span>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    category.active
                      ? "bg-orange-100 text-orange-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="rounded-xl bg-orange-50 p-4">
          <h4 className="font-medium text-gray-900">
            Storage Usage
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            3.2 GB of 10 GB used
          </p>

          <div className="mt-3 h-2 bg-orange-100 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-orange-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}