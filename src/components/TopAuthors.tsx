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
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    booksCount: 6,
    borrowersCount: 365,
  },
  {
    id: 2,
    name: "Leo Vance",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    booksCount: 5,
    borrowersCount: 342,
  },
  {
    id: 3,
    name: "Mira Ellison",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    booksCount: 4,
    borrowersCount: 326,
  },
  {
    id: 4,
    name: "Olivia Wilson",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    booksCount: 3,
    borrowersCount: 365,
  },
];

export default function TopAuthors() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#232B35]">
          Top Authors
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
          This Week
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Authors List */}
      <div className="overflow-hidden rounded-3xl bg-white">
        {authors.map((author, index) => (
          <div
            key={author.id}
            className={`flex items-center justify-between px-4 py-5 ${
              index !== authors.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full border-[3px] border-orange-400">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-[13px] font-semibold text-[#232B35]">
                  {author.name}
                </h3>

                <div className="mt-1  border flex items-center gap-1 text-sm text-gray-400">
                  <BookOpen size={13} />
                  <span>{author.booksCount} Books</span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Users size={14} />
              <span>{author.borrowersCount} Borrowers</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}