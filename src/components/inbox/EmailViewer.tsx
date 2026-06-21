import {
  ArrowLeft,
  Archive,
  Trash2,
  MoreVertical,
  Send
} from "lucide-react";

export default function EmailViewer() {
  return (
    <div className=" border h-full bg-[#fafaf8] p-4">

      <div className="bg-white rounded-3xl h-full flex flex-col shadow-sm">

        {/* Toolbar */}
        <div className="h-16 border-b px-6 flex items-center justify-between">

          <div className="flex gap-6 text-gray-500">

            <ArrowLeft size={18} />
            <Archive size={18} />
            <Trash2 size={18} className="hidden lg:block" />
            <MoreVertical size={18} />

          </div>

          <div className="text-gray-400 text-sm">
             5 from  6
          </div>
        </div>

        {/* Header */}
        <div className="px-8 py-6 border-b">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
              L
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Livia Hart
              </h3>

              <p className="text-gray-400 text-sm">
                livia.hart@email.com
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto px-8 py-8">

          <h2 className="text-2xl font-semibold mb-10">
            Overdue Book Follow-up
          </h2>

          <div className="space-y-8 text-gray-700 leading-8">

            <p>Hi there,</p>

            <p>
              I just returned Echoes of Astra this morning via the return box at
              the west entrance.
            </p>

            <p>
              Could you please confirm if it's already marked as returned in the
              system?
            </p>

            <p>
              I want to make sure I don't incur any late fees.
            </p>

            <p>Thanks in advance,</p>

            <p className="font-medium">
              Livia
            </p>

          </div>
        </div>

        {/* Reply */}
        <div className="p-6 border-t">

          <textarea
            rows={5}
            placeholder="Type something..."
            className="w-full rounded-2xl border p-5 resize-none outline-none focus:ring-2 focus:ring-orange-400"
          />

          <div className="flex justify-end mt-4">

            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl flex gap-2 items-center">
              <Send size={16} />
              Send
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}