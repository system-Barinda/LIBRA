import {
  Paperclip,
  Link,
  Smile,
  Image as ImageIcon,
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Send,
  ChevronDown,
} from "lucide-react";

export default function ReplyBox() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
        <span className="text-sm text-gray-500">To:</span>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 text-sm">
          livia.hart@email.com
        </div>

        <div className="ml-auto flex items-center gap-4 text-sm text-gray-500">
          <button className="hover:text-orange-500">Cc</button>
          <button className="hover:text-orange-500">Bcc</button>
        </div>
      </div>

      {/* Message Area */}
      <textarea
        placeholder="Type something..."
        className="w-full h-52 resize-none p-5 outline-none text-sm text-gray-700"
      />

      {/* Formatting Toolbar */}
      <div className="flex items-center gap-3 px-5 py-3 border-t border-gray-200 text-gray-500">
        <button>
          <Undo2 size={16} />
        </button>

        <button>
          <Redo2 size={16} />
        </button>

        <div className="w-px h-5 bg-gray-200" />

        <button className="flex items-center gap-1 text-sm">
          Sans Serif
          <ChevronDown size={14} />
        </button>

        <div className="w-px h-5 bg-gray-200" />

        <button>
          <Bold size={16} />
        </button>

        <button>
          <Italic size={16} />
        </button>

        <button>
          <Underline size={16} />
        </button>

        <button>
          <List size={16} />
        </button>

        <button>
          <ListOrdered size={16} />
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200">
        <div className="flex items-center gap-4 text-gray-500">
          <button>
            <Paperclip size={18} />
          </button>

          <button>
            <Link size={18} />
          </button>

          <button>
            <Smile size={18} />
          </button>

          <button>
            <ImageIcon size={18} />
          </button>
        </div>

        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl transition">
          <Send size={16} />
          Send
        </button>
      </div>
    </div>
  );
}