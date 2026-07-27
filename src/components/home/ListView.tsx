import { Star } from "lucide-react";

export function ListView() {
  return (
    <div ref={catalogRef} className="space-y-3">
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          onClick={() => handleSelectBook(book)}
          className={`flex items-center justify-between bg-white rounded-xl border p-3 cursor-pointer transition-all hover:shadow-md ${
            selectedBook?.id === book.id
              ? "border-orange-500 ring-2 ring-orange-500/20"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center gap-4 min-w-0">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-12 h-16 object-cover rounded-md flex-shrink-0"
            />
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-900 text-sm truncate">
                {book.title}
              </h3>
              <p className="text-xs text-slate-500 truncate">{book.author}</p>
              <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-medium mt-1">
                <Star size={12} fill="currentColor" /> {book.rating}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span
              className={`text-xs px-2.5 py-1 rounded-md font-medium hidden sm:block ${
                book.status === "Available"
                  ? "bg-emerald-50 text-emerald-600"
                  : book.status === "Borrowed"
                    ? "bg-orange-50 text-orange-600"
                    : "bg-slate-100 text-slate-600"
              }`}
            >
              {book.status}
            </span>
            <span className="text-xs text-slate-400 hidden md:block">
              {book.borrowedCount} Borrows
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
