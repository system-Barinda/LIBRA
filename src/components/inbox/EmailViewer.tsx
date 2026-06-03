import {
  ArrowLeft,
  Archive,
  Trash2,
  MoreVertical,
} from "lucide-react";

export default function EmailViewer() {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-orange-500">
            <ArrowLeft size={18} />
          </button>

          <button className="text-gray-500 hover:text-orange-500">
            <Archive size={18} />
          </button>

          <button className="text-gray-500 hover:text-red-500">
            <Trash2 size={18} />
          </button>

          <button className="text-gray-500 hover:text-orange-500">
            <MoreVertical size={18} />
          </button>
        </div>

        <p className="text-sm text-gray-500">
          September 27, 2025 • 09:22 AM
        </p>
      </div>

      {/* Email Header */}
      <div className="px-6 py-5 border-b">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/80?img=32"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold text-gray-900">
              Livia Hart
            </h3>

            <p className="text-sm text-gray-500">
              livia.hart@email.com
            </p>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Overdue Book Follow-up
        </h2>

        <div className="space-y-4 text-gray-700 leading-7">
          <p>Hi there,</p>

          <p>
            I just returned Echoes of Astra this morning
            via the return box at the west entrance.
          </p>

          <p>
            Could you please confirm if it is already
            marked as returned in the system?
          </p>

          <p>
            I want to make sure I don't incur any late
            fees.
          </p>

          <p>Thanks in advance,</p>

          <p className="font-medium">Livia</p>
        </div>
      </div>

      {/* Reply Section */}
      <div className="border-t p-6">
        <textarea
          placeholder="Type your reply..."
          className="w-full h-32 resize-none rounded-xl border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="flex justify-end mt-4">
          <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition">
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
}