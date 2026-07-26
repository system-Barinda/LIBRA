import type { RecentActivityItem } from "../types/BookTypes";

export const recentActivities: RecentActivityItem[] = [
  {
    id: "1",
    type: "update",
    title: "Inventory Updated",
    description: "Admin added 15 new books to the 'Science & Tech' category",
    time: "Sep 27, 2026 - 09:15 AM",
  },
  {
    id: "2",
    type: "member",
    title: "New Member Registered",
    description: "Olivia James (MBR-4503) signed up for a Standard membership",
    time: "Sep 27, 2026 - 08:30 AM",
  },
  {
    id: "3",
    type: "return",
    title: "Book Returned",
    description: "'Echoes of Eternity' returned by Noah Miller (MBR-3201)",
    time: "Sep 26, 2026 - 04:45 PM",
  },
  {
    id: "4",
    type: "overdue",
    title: "Overdue Alert Sent",
    description:
      "Reminder sent to Liam Sharp (MBR-4102) for overdue book 'Design Systems'",
    time: "Sep 26, 2026 - 02:15 PM",
  },
];
