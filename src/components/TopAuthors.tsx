import { ChevronDown, BookOpen, Users } from "lucide-react";

interface Author {
  id: number;
  name: string;
  avatar: string;
  booksCount: number;
  borrowersCount: number;
}

const authors: Author[] = [
  {
    id: 1,
    name: "Ava Thornton",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    booksCount: 6,
    borrowersCount: 365,
  },
  {
    id: 2,
    name: "Leo Vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    booksCount: 5,
    borrowersCount: 342,
  },
  {
    id: 3,
    name: "Mira Ellison",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    booksCount: 4,
    borrowersCount: 326,
  },
  {
    id: 4,
    name: "Olivia Wilson",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    booksCount: 3,
    borrowersCount: 365,
  },
];

export default function TopAuthors() {
  return (
    <div className="w-full bg-[#f8f9fa] rounded-2xl p-4 sm:p-6">
      
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-black tracking-tight">
          Top Authors
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shrink-0">
          This Week
          <ChevronDown size={16} className="text-slate-500" />
        </button>
      </div>

      {/* Main Container Card */}
      <div className="bg-white  text-slate-900">
        {authors.map((author) => (
          <div
            key={author.id}
            className="flex items-center justify-between p-4 sm:p-5 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
          >
            {/* Left side: Avatar & Info */}
            <div className="flex items-center gap-4 min-w-0">
              {/* Avatar Frame with Orange Border Effect */}
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-orange-500 shrink-0 shadow-sm">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-950"
                />
              </div>

              {/* Name & Books Count */}
              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-800 dark:text-white truncate">
                  {author.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 dark:text-slate-500 mt-0.5">
                  <BookOpen size={14} className="stroke-[2]" />
                  <span>{author.booksCount} Books</span>
                </div>
              </div>
            </div>

            {/* Right side: Borrowers Metric */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 dark:text-slate-400 shrink-0 pl-2">
              <Users size={16} className="stroke-[1.5]" />
              <span className="font-medium">
                <strong className="font-semibold text-slate-600 dark:text-slate-200">{author.borrowersCount}</strong> Borrowers
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}