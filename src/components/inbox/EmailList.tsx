const emails = [
  {
    id: 1,
    name: "Livia Hart",
    subject: "Overdue Book Follow-up",
    preview:
      "I just returned Echoes of Astra this morning via the return box...",
    time: "09:22",
    unread: true,
  },
  {
    id: 2,
    name: "Ezra Nolan",
    subject: "Premium Account Upgrade",
    preview:
      "Thank you for subscribing to the premium library membership...",
    time: "08:47",
    unread: false,
  },
  {
    id: 3,
    name: "Sophia Reed",
    subject: "Reserved Book Available",
    preview:
      "The book you reserved is now available for pickup at the library...",
    time: "Yesterday",
    unread: true,
  },
];

export default function EmailList() {
  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Messages
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {emails.length} conversations
        </p>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Email List */}
      <div className="flex-1 overflow-y-auto">
        {emails.map((email, index) => (
          <div
            key={email.id}
            className={`p-4 border-b border-gray-100 cursor-pointer transition hover:bg-orange-50 ${
              index === 0
                ? "bg-orange-50 border-l-4 border-l-orange-500"
                : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                  {email.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900">
                      {email.name}
                    </h4>

                    {email.unread && (
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                    )}
                  </div>

                  <p className="text-sm font-medium text-gray-700 truncate">
                    {email.subject}
                  </p>

                  <p className="text-xs text-gray-500 truncate mt-1">
                    {email.preview}
                  </p>
                </div>
              </div>

              <span className="text-xs text-gray-400 whitespace-nowrap">
                {email.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}