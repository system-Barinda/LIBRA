import { Reply, Forward } from "lucide-react";

export default function EmailActions() {
  return (
    <div className="flex gap-2 justify-between h-15">
      <button className=" w-[50%] rounded  flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-200 font-medium text-gray-700 transition-colors">
        <Reply className="w-5 h-5" />
        Reply
      </button>

      <button className=" w-[50%] rounded  flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-200  font-medium text-gray-700 transition-colors">
        <Forward className="w-5 h-5" />
        Forward
      </button>
    </div>
  );
}