import { Search, SlidersHorizontal, Plus ,PanelLeft} from "lucide-react";


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
    <div className="h-full bg-[#fafaf8] flex flex-col">

      {/* Top */}
      <div className="">
        <div className="flex gap-2">

          <div className=" bg-white rounded-2xl px-1 h-14 shadow-sm gap-2 flex items-center justify-between">
            <button className="rounded-md hover:bg-gray-100"> <PanelLeft className="text-gray-700" /> </button>
            <Search size={18} className="text-gray-400" />

            <input
              placeholder="Search email"
              className=" ml-1 flex-1 outline-none bg-transparent"
            />

            <SlidersHorizontal size={18} className="text-gray-400 " />
          </div>

          <button className="w-10 h-10 text-center rounded bg-orange-500 text-white flex items-center mx-auto mt-2 justify-center shadow-sm">
            <Plus />
          </button>
        </div>
      </div>

      {/* Emails */}
      <div className=" py-5 flex-1 overflow-auto px-1  pb-5">

        {emails.map((email, index) => (
          <div
            key={email.id}
            className={`${
              index === 0
                ? "bg-[#f1efeb]"
                : "bg-transparent "
            } p-2 mb-4 cursor-pointer`}
          >
            <div className="flex justify-between">

              <div className="flex gap-4">

                <div className="w-30 h-13 rounded-[100%] bg-orange-500 text-white flex items-center justify-center font-bold">
                  
                  {email.name[0]}
                </div>

                <div>
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold text-[15px]">
                      {email.name}
                    </h3>

                    {email.unread && (
                      <span className="w-3 h-3 bg-orange-500 rounded-sm"></span>
                    )}
                  </div>

                  <h4 className="font-medium mt-1 text-[13px]">
                    {email.subject}
                  </h4>

                  <p className="text-gray-500 mt-2 text-[13px] leading-6">
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