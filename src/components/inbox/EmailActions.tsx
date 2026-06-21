import { Reply, Forward } from "lucide-react";

export default function EmailActions() {
  return (
    <div className="flex gap-2">
      <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-xl px-10 py-4 text-lg font-medium text-gray-700 transition-colors">
        <Reply className="w-5 h-5" />
        Reply
      </button>

      <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-xl px-10 py-4 text-lg font-medium text-gray-700 transition-colors">
        <Forward className="w-5 h-5" />
        Forward
      </button>
    </div>
  );
}