export interface BookItem {
  title: string;
  id: string;
  image: string;
  author: { name: string; avatar: string };
  publisher: string;
  year: number;
  status: 'Available' | 'Borrowed' | 'Damaged' | 'Lost';
  copies: string;
  shelfLocation: string;
  resourceLink: string;
};

export type MembershipType = 'Basic' | 'Standard' | 'Premium'

export type MemberStatus = 'Active' | 'Expired' | 'Suspended'

export interface Member {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  membership: MembershipType
  status: MemberStatus
  joined: string
  expiry: string
  borrowed: number
  overdue: number
  fines: string
}