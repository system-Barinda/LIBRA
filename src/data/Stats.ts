import { BookMarked, RotateCcw, UserCheck, BookOpen } from "lucide-react";

export const stats = [
  {
    title: "Borrowed Books",
    value: "1,250",
    change: "+8.2%",
    isPositive: true,
    subtext: "from last week",
    icon: BookMarked,
  },
  {
    title: "Overdue Returns",
    value: "132",
    change: "-4.5%",
    isPositive: true, // fewer overdue is positive
    subtext: "improved",
    icon: RotateCcw,
  },
  {
    title: "Total Visitors",
    value: "3,420",
    change: "-2.4%",
    isPositive: false,
    subtext: "from previous month",
    icon: UserCheck,
  },
  {
    title: "Total Books",
    value: "18,750",
    change: "+150",
    isPositive: true,
    subtext: "new books this month",
    icon: BookOpen,
  },
];
