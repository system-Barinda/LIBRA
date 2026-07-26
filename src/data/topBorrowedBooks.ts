import type { TopBook } from "../types/BookTypes";

export const topBorrowedBooks: TopBook[] = [
  {
    id: "1",
    title: "Everything Kimchi",
    author: "Olivia Wilson",
    rating: 4.8,
    bookId: "BK-10024",
    borrowers: 128,
    coverBg: "bg-gradient-to-br from-amber-400 to-orange-600",
  },
  {
    id: "2",
    title: "My Story",
    author: "Olivia Wilson",
    rating: 4.8,
    bookId: "BK-09875",
    borrowers: 112,
    coverBg: "bg-gradient-to-br from-sky-400 to-blue-600",
  },
];
