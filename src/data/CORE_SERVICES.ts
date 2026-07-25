import { BookOpen, Laptop, Search, Users } from "lucide-react";
import type { CoreService } from "../types/BookTypes";

export const CORE_SERVICES: CoreService[] = [
  {
    id: "digital-lending",
    title: "Digital & Physical Borrowing",
    subtitle: "Access thousands of books, e-books, and media seamlessly.",
    description:
      "Explore our vast collection of physical titles, audiobooks, and e-journals. Reserve online and collect at your convenience or stream instantly on your personal devices.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    features: [
      "Instant e-book & audiobook streaming",
      "24/7 online reservation system",
      "Flexible renewal options with auto-reminders",
      "Access to academic and research archives",
    ],
    ctaText: "Explore Digital Catalog",
  },
  {
    id: "study-spaces",
    title: "Study Spaces & Pods",
    subtitle: "Quiet spaces designed for deep focus and group collaboration.",
    description:
      "Book individual study pods or group conference rooms equipped with high-speed Wi-Fi, interactive whiteboards, and quiet acoustics.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    features: [
      "Real-time room availability & online booking",
      "Soundproof individual focus pods",
      "Collaborative spaces with smart screens",
      "Ergonomic seating and power station hubs",
    ],
    ctaText: "Reserve a Study Space",
  },
  {
    id: "research-assistance",
    title: "Research & Consultation",
    subtitle: "Expert guidance for students, academics, and creators.",
    description:
      "Connect with specialized librarians for assistance in literature reviews, database queries, citation formatting, and resource acquisition.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
    features: [
      "One-on-one virtual or in-person sessions",
      "Access to restricted peer-reviewed journals",
      "Citation management software support",
      "Custom bibliography compilation support",
    ],
    ctaText: "Book a Research Session",
  },
  {
    id: "tech-amenities",
    title: "Tech & Equipment Rental",
    subtitle: "Hardware and digital equipment available on-demand.",
    description:
      "Borrow laptops, tablet e-readers, camera gear, and high-quality headphones directly from the library tech desk for project work.",
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    features: [
      "Same-day laptop and tablet checkout",
      "High-speed 3D printing & scanning services",
      "Media creation equipment (mics, cameras)",
      "Technical support staff on duty",
    ],
    ctaText: "View Hardware Inventory",
  },
];
