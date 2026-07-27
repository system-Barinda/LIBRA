import type { ActivityRow } from "../types/BookTypes";

export const activities: ActivityRow[] = [
  {
    activity: "Borrow",
    dateTime: "Sept 27, 2035\n09:20 AM",
    member: {
      name: "Livia Hart",
      id: "MBR-2081",
      tier: "Premium",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80",
    },
    book: { title: "Where The Flowers Bloom", id: "BK-10234", image: "🌾" },
    dueDate: "Oct 11, 2035",
    returnDate: "—",
    status: "Borrowed",
    fine: "$0.00",
  },
  {
    activity: "Return",
    dateTime: "Sept 26, 2035\n05:15 PM",
    member: {
      name: "Ezra Nolan",
      id: "MBR-1170",
      tier: "Premium",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80",
    },
    book: { title: "Floral Dreams", id: "BK-09876", image: "🌸" },
    dueDate: "Sept 25, 2035",
    returnDate: "Sept 26, 2035",
    status: "Returned",
    fine: "$1.00",
  },
  {
    activity: "Reservation",
    dateTime: "Sept 26, 2035\n04:05 PM",
    member: {
      name: "Isla Ray",
      id: "MBR-2389",
      tier: "Standard",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80",
    },
    book: { title: "My Story", id: "BK-11001", image: "📘" },
    dueDate: "—",
    returnDate: "—",
    status: "—",
    fine: "$0.00",
  },
];
