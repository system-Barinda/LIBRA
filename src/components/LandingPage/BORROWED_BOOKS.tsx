import { BookOpen, Star } from "lucide-react";
import { topBorrowedBooks } from "../../data/topBorrowedBooks";

export function BorrowedBooks() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm text-gray-900">Top Borrowed Books</h3>
        <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 font-semibold focus:outline-none">
          <option>This Month</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {topBorrowedBooks.map((book) => (
          <div
            key={book.id}
            className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div
              className={`w-full h-24 rounded-xl ${book.coverBg} mb-3 flex items-center justify-center p-2 text-white shadow-inner relative overflow-hidden`}
            >
              <BookOpen className="w-8 h-8 opacity-40" />
              <div className="absolute inset-0 bg-black/10 flex items-end p-2">
                <span className="text-[10px] font-extrabold text-white leading-tight truncate">
                  {book.title}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-gray-900 truncate">
                  {book.title}
                </span>
                <span className="flex items-center text-amber-500 font-bold text-[10px]">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" />
                  {book.rating}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 mb-2">
                Book ID: {book.bookId}
              </p>
              <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10px] text-gray-500 font-medium">
                <span>Borrowers</span>
                <span className="font-bold text-gray-800">
                  {book.borrowers}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
