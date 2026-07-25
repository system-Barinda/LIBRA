import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Laptop,
  Users,
  Search,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Wifi,
  Printer,
  Headphones,
  Award,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";

interface CoreService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  ctaText: string;
}

const CORE_SERVICES: CoreService[] = [
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

export const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(CORE_SERVICES[0].id);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeContentRef = useRef<HTMLDivElement>(null);

  const selectedService =
    CORE_SERVICES.find((s) => s.id === activeTab) || CORE_SERVICES[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        activeContentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8 space-y-16"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold tracking-wide">
              <Sparkles size={14} /> Library Services
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Empowering Your Learning & Research Journey
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Discover a wide range of free and accessible services designed to
              empower readers, students, and researchers with modern media tools
              and dedicated study environments.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-center sm:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900">
                  50K+
                </p>
                <p className="text-xs text-slate-500">Digital Titles</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900">
                  24/7
                </p>
                <p className="text-xs text-slate-500">Online Access</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900">
                  100%
                </p>
                <p className="text-xs text-slate-500">Free Community Access</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
                alt="Library Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 backdrop-blur-md bg-white/10 rounded-xl border border-white/20">
                <p className="text-xs font-semibold">Open Daily for Everyone</p>
                <p className="text-[11px] text-slate-200">
                  Visit our central branch or explore online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TABBED INTERACTIVE SERVICE SHOWCASE */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Core Offerings
            </h2>
            <p className="text-slate-500 text-sm">
              Select a service category below to view detailed features and
              available resources.
            </p>
          </div>

          {/* Service Navigation Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition shrink-0 border ${
                    isActive
                      ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={16} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Service Content Display */}
          <div
            ref={activeContentRef}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
          >
            <div className="lg:col-span-6 space-y-5">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl w-fit">
                <selectedService.icon size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedService.title}
                </h3>
                <p className="text-xs font-semibold text-orange-500 mt-0.5">
                  {selectedService.subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-2.5">
                {selectedService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500 shrink-0"
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="pt-2 flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm">
                {selectedService.ctaText} <ArrowRight size={16} />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ADDITIONAL CONVENIENCE AMENITIES GRID */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Additional Member Amenities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Convenience tools integrated for your daily productivity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition shadow-sm space-y-3">
              <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl w-fit">
                <Wifi size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">
                Gigabit High-Speed Wi-Fi
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Free high-bandwidth wireless internet accessible across all
                campus library zones.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition shadow-sm space-y-3">
              <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl w-fit">
                <Printer size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">
                Printing & Scanning Hub
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                High-volume wireless printing, document scanning, and binding
                stations.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition shadow-sm space-y-3">
              <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl w-fit">
                <Headphones size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">
                Audio & Media Lounge
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated listening stations for podcasts, language learning,
                and audiobooks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition shadow-sm space-y-3">
              <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl w-fit">
                <Award size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">
                Workshops & Events
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Weekly community seminars, book clubs, and digital
                skill-building sessions.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM MEMBERSHIP CTA BANNER */}
        <section className="bg-orange-500 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left z-10">
            <span className="text-xs font-bold text-orange-900 uppercase tracking-widest">
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to access all library services?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Sign up for a free library digital card today to instantly reserve
              study spaces, borrow titles, and stream online media.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 z-10 w-full md:w-auto">
            <button className="px-6 py-3 bg-white hover:bg-gray-200 text-black text-xs sm:text-sm font-semibold rounded-xl transition shadow-md shadow-orange-500/30 text-center">
              Register Digital Card
            </button>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl transition text-center border border-slate-700">
              Visit Branch Guidelines
            </button>
          </div>

          {/* Decorative background blur elements */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
