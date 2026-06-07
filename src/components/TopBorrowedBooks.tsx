import { Star, ChevronDown } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  borrowers: number;
}

const books: Book[] = [
  {
    id: "BK-10234",
    title: "Everything Kimchi",
    author: "Olivia Wilson",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300",
    rating: 4.9,
    borrowers: 128,
  },
  {
    id: "BK-09876",
    title: "My Story",
    author: "Olivia Wilson",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300",
    rating: 4.8,
    borrowers: 113,
  },
];

export default function TopBorrowedBooks() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 dark:border-slate-800">
      
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between gap-2">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Top Borrowed Books
        </h2>

        <button className="flex items-center gap-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0">
          This Month
          <ChevronDown size={14} className="opacity-70" />
        </button>
      </div>

      {/* Books List */}
      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col sm:flex-row gap-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 p-3.5 transition-all hover:shadow-md hover:border-slate-200 dark:hover:border-slate-800"
          >
            {/* Book Cover Container */}
            <div className="w-full sm:w-24 h-40 sm:h-28 flex justify-center shrink-0">
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-24 sm:w-full rounded-lg object-cover shadow-sm"
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-1 flex-col justify-between gap-2">
              
              {/* Row 1: Author & Rating */}
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 truncate">
                  {book.author}
                </p>

                <div className="flex items-center gap-1 shrink-0 bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded-md">
                  <Star size={12} className="fill-orange-400 text-orange-400" />
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                    {book.rating}
                  </span>
                </div>
              </div>

              {/* Row 2: Responsive Book Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-1 leading-snug">
                {book.title}
              </h3>

              {/* Row 3: Metadata (IDs and stats) */}
              <div className="flex flex-wrap sm:flex-col gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-900/60 pt-2 sm:pt-0 sm:border-none">
                <p>
                  ID: <span className="font-semibold text-slate-700 dark:text-slate-300">{book.id}</span>
                </p>
                <p>
                  Borrowers: <span className="font-semibold text-slate-700 dark:text-slate-300">{book.borrowers}</span>
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}