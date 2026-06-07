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
    <div className="w-full bg-[#f4f6f8] text-slate-500 p-4 md:w-[110%] sm:p-6">
      
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-slate-800 tracking-tight">
          Top Borrowed Books
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shrink-0">
          This Month
          <ChevronDown size={16} className="text-slate-500" />
        </button>
      </div>

      {/* Books List Container */}
      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className=" w-full flex flex-row gap-4 bg-white text-slate-600  transition-all hover:shadow-md"
          >
            {/* Book Cover Container */}
            <div className="w-20 h-24 sm:w-24 sm:h-28 shrink-0">
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            {/* Content Details */}
            <div className="flex flex-1 flex-col justify-between py-0.5">
              
              {/* Row 1: Author & Rating */}
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 truncate">
                  {book.author}
                </p>

                <div className="flex items-center gap-1 shrink-0">
                  <Star size={16} className="fill-orange-400 text-orange-400" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {book.rating}
                  </span>
                </div>
              </div>

              {/* Row 2: Book Title */}
              <h3 className="text-base sm:text-xl font-bold text-slate-800 dark:text-white line-clamp-1 leading-snug">
                {book.title}
              </h3>

              {/* Row 3: Metadata Metrics */}
              <div className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 space-y-0.5">
                <p>
                  Book ID: <span className="font-semibold text-slate-700 dark:text-slate-200">{book.id}</span>
                </p>
                <p>
                  Borrowers: <span className="font-semibold text-slate-700 dark:text-slate-200">{book.borrowers}</span>
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}