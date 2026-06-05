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
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300",
    rating: 4.9,
    borrowers: 128,
  },
  {
    id: "BK-09876",
    title: "My Story",
    author: "Olivia Wilson",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300",
    rating: 4.8,
    borrowers: 113,
  },
];

export default function TopBorrowedBooks() {
  return (
    <div className="bg-white rounded p-5 shadow-sm border border-slate-200">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[10px] font-bold text-slate-900">
          Top Borrowed Books
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
          This Month
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Books */}
      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="
              flex
              gap-4
              rounded-2xl
              border
              border-slate-100
              bg-slate-50
              p-4
              transition
              hover:shadow-md
            "
          >
            {/* Cover */}
            <img
              src={book.image}
              alt={book.title}
              className="
                h-32
                w-28
                rounded-2xl
                object-cover
                shrink-0
              "
            />

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between">
              {/* Top */}
              <div className="flex items-start justify-between">
                <p className="text-lg font-medium text-slate-500">
                  {book.author}
                </p>

                <div className="flex items-center gap-1">
                  <Star
                    size={18}
                    className="fill-orange-400 text-orange-400"
                  />
                  <span className="font-medium text-slate-600">
                    {book.rating}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-slate-900">
                {book.title}
              </h3>

              {/* Bottom */}
              <div className="space-y-1 text-slate-600">
                <p>
                  Book ID:{" "}
                  <span className="font-semibold">
                    {book.id}
                  </span>
                </p>

                <p>
                  Borrowers:{" "}
                  <span className="font-semibold">
                    {book.borrowers}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}