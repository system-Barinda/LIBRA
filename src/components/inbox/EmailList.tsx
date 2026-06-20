import { Search, SlidersHorizontal, Plus } from "lucide-react";

const emails = [
  {
    id: 1,
    name: "Livia Hart",
    subject: "Overdue Book Follow-up",
    preview:
      "Hi, I just returned Echoes of Astra this morning. Can you confirm it's marked returned?",
    time: "09:22 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Ezra Nolan",
    subject: "Premium Account Upgrade Inquiry",
    preview:
      "Hello, I'd like to upgrade to Premium. Can you guide me through the steps?",
    time: "08:47 AM",
  },
  {
    id: 3,
    name: "Isla Ray",
    subject: "Event Participation Confirmation",
    preview:
      "Thank you for the invitation. I'll be joining the library workshop.",
    time: "Yesterday",
  },
];

export default function EmailList() {
  return (
    <div className="border h-full bg-[#fafaf8] flex flex-col">

      {/* Top */}
      <div className="p-5">
        <div className="flex gap-3">

          <div className="flex-1 bg-white rounded-2xl px-4 h-14 shadow-sm flex items-center">
            <Search size={18} className="text-gray-400" />

            <input
              placeholder="Search email"
              className="ml-3 flex-1 outline-none bg-transparent"
            />

            <SlidersHorizontal size={18} className="text-gray-400" />
          </div>

          <button className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-sm">
            <Plus />
          </button>
        </div>
      </div>

      {/* Emails */}
      <div className="flex-1 overflow-auto px-5 pb-5">

        {emails.map((email, index) => (
          <div
            key={email.id}
            className={`${
              index === 0
                ? "bg-[#f1efeb]"
                : "bg-transparent border-b"
            } rounded-3xl p-5 mb-4 cursor-pointer`}
          >
            <div className="flex justify-between">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                  {email.name[0]}
                </div>

                <div>
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold text-[18px]">
                      {email.name}
                    </h3>

                    {email.unread && (
                      <span className="w-3 h-3 bg-orange-500 rounded-sm"></span>
                    )}
                  </div>

                  <h4 className="font-medium mt-1">
                    {email.subject}
                  </h4>

                  <p className="text-gray-500 mt-2 text-sm leading-6">
                    {email.preview}
                  </p>
                </div>
              </div>

              <span className="text-sm text-gray-400 whitespace-nowrap">
                {email.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}