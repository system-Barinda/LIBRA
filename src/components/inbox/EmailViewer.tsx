import {
  ArrowLeft,
  Archive,
  Trash2,
  MoreVertical,Download,
} from "lucide-react";
import EmailActions from "./EmailActions";

export default function EmailViewer() {
  return (
    <div className=" h-full bg-[#fafaf8] p-4">

      <div className="bg-white rounded-3xl h-full flex flex-col shadow-sm">

        {/* Toolbar */}
        <div className="h-16  px-6 flex items-center justify-between">

          <div className="flex gap-6 text-gray-500">

            <ArrowLeft size={18} />
            <Archive size={18} className="hidden lg:block" />
            <Download size={18} className="w-5 h-5" />
            <Trash2 size={18} className="hidden lg:block" />
            <MoreVertical size={18} />

          </div>

          <div className="text-gray-400 text-sm">
             5 from  36
          </div>
        </div>

        {/* Header */}
        <div className="px-8 py-6 flex flex-col gap-4">

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
           <p className="text-gray-400">semptember 27 2026   -   09:27 PM</p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto px-8 py-8">

          <h2 className="text-[18px] font-semibold mb-10">
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
        <div className="p-6  mt-20">

         <EmailActions />

          </div>
        </div>

      </div>

  
  );
}