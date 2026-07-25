import type { Book } from "../types/BookTypes";

export const BOOKS_DATA: Book[] = [
  {
    id: "1",
    title: "Everything Green",
    author: "Sarah Jenkins",
    category: "Botanical & Life",
    rating: 4.8,
    status: "Available",
    coverUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    borrowedCount: 142,
  },
  {
    id: "2",
    title: "Where The Flowers Bloom",
    author: "Elena Rostova",
    category: "Fiction / Romance",
    rating: 4.9,
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    borrowedCount: 389,
  },
  {
    id: "3",
    title: "Minimalist Architecture",
    author: "David Chen",
    category: "Design & Art",
    rating: 4.6,
    status: "Available",
    coverUrl:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    borrowedCount: 95,
  },
  {
    id: "4",
    title: "Silent Mountains",
    author: "Marcus Vance",
    category: "Adventure",
    rating: 4.7,
    status: "Reserved",
    coverUrl:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    borrowedCount: 210,
  },
];
