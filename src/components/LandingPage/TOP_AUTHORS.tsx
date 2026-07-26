import { topAuthors } from "../../data/topAuthors";

export function TopAuthors() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm text-gray-900">Top Authors</h3>
        <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
          <option>This Week</option>
        </select>
      </div>

      <div className="space-y-3">
        {topAuthors.map((author) => (
          <div
            key={author.id}
            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-xs text-gray-800">
                  {author.name}
                </h4>
                <p className="text-[10px] text-gray-400">
                  {author.books} Books
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
              {author.borrowers}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
