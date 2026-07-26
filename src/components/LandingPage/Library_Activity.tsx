import { libraryActivity } from "../../data/libraryActivity";

export function LibraryActivity() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="font-bold text-base text-gray-900">
            Library Activity
          </h3>
          <p className="text-xs text-gray-400">
            Recent borrowings, returns, and overdue items
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-600 font-semibold focus:outline-none">
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 font-semibold uppercase text-[10px] tracking-wider">
              <th className="pb-3 px-2">Book</th>
              <th className="pb-3 px-2">Member Info</th>
              <th className="pb-3 px-2">Borrow & Due Date</th>
              <th className="pb-3 px-2">Return Date</th>
              <th className="pb-3 px-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {libraryActivity.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-3 px-2">
                  <div className="font-bold text-gray-800">{row.bookTitle}</div>
                  <div className="text-[10px] text-gray-400">
                    {row.bookAuthor}
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="font-semibold text-gray-800">
                        {row.member}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {row.memberId}
                      </div>
                    </div>
                    <span
                      className={`px-1.5 py-0.5 text-[9px] rounded font-bold ${
                        row.memberTier === "Premium"
                          ? "bg-purple-100 text-purple-700"
                          : row.memberTier === "Standard"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {row.memberTier}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2 font-medium text-gray-600">
                  {row.borrowDueDate}
                </td>
                <td className="py-3 px-2 font-medium text-gray-600">
                  {row.returnDate}
                </td>
                <td className="py-3 px-2">
                  <span
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold inline-block ${
                      row.status === "Returned"
                        ? "bg-emerald-50 text-emerald-600"
                        : row.status === "Borrowed"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
