export interface BookItem {
  title: string;
  id: string;
  image: string;
  author: { name: string; avatar: string };
  publisher: string;
  year: number;
  status: "Available" | "Borrowed" | "Damaged" | "Lost";
  copies: string;
  shelfLocation: string;
  resourceLink: string;
}

export type MembershipType = "Basic" | "Standard" | "Premium";

export type MemberStatus = "Active" | "Expired" | "Suspended";

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  membership: MembershipType;
  status: MemberStatus;
  joined: string;
  expiry: string;
  borrowed: number;
  overdue: number;
  fines: string;
}

// --- TypeScript Interfaces ---
export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  status: "Available" | "Borrowed" | "Reserved";
  coverUrl: string;
  borrowedCount: number;
}

export interface CoreService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  ctaText: string;
}

// --- TYPES ---
export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
  icon: React.ElementType;
}

export interface TopBook {
  id: string;
  title: string;
  author: string;
  rating: number;
  bookId: string;
  borrowers: number;
  coverBg: string;
  coverImage?: string;
}

export interface TopAuthor {
  id: string;
  name: string;
  books: number;
  borrowers: string;
  avatar: string;
}

export interface RecentActivityItem {
  id: string;
  type: "update" | "member" | "return" | "overdue";
  title: string;
  description: string;
  time: string;
}

export interface LibraryActivityRow {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  member: string;
  memberId: string;
  memberTier: string;
  borrowDueDate: string;
  returnDate: string;
  status: "Returned" | "Borrowed" | "Overdue";
}

// --- Types & Interfaces ---
export interface StatCardProps1 {
  title: string;
  value: string;
  unit: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

export interface ActiveBorrower {
  name: string;
  id: string;
  count: number;
  avatar: string;
}

export interface ReservationItem {
  title: string;
  author: string;
  member: string;
  memberId: string;
  time: string;
  image: string;
}

export interface ActivityRow {
  activity: "Borrow" | "Return" | "Reservation";
  dateTime: string;
  member: {
    name: string;
    id: string;
    tier: "Premium" | "Standard" | "Basic";
    avatar: string;
  };
  book: { title: string; id: string; image: string };
  dueDate: string;
  returnDate: string;
  status: "Borrowed" | "Returned" | "Overdue" | "—";
  fine: string;
}
