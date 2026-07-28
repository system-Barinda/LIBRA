import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const serviceLinks = [
  { label: "Borrow Books", href: "/borrow-books" },
  { label: "Digital Library", href: "/digital-library" },
  { label: "Reading Rooms", href: "/reading-rooms" },
  { label: "Research Support", href: "/research-support" },
  { label: "Book Reservation", href: "/book-reservation" },
  { label: "Membership", href: "/membership" },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Authors", href: "/authors" },
  { label: "Categories", href: "/categories" },
  { label: "Membership", href: "/membership" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const LibraryFooter = () => {
  return (
    <footer className="relative mt-40 bg-slate-950 text-white">
      {/* Floating CTA */}
      <div className="absolute left-1/2 top-0 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 p-8 shadow-2xl lg:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur">
                Join Our Library
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
                Your Next Favorite Book
                <br />
                Starts Here.
              </h2>

              <p className="mt-5 text-orange-100">
                Explore thousands of books, research materials and digital
                resources available anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:scale-105"
              >
                Register Free
              </Link>

              <Link
                to="/books"
                className="flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
              >
                Browse Books
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-56">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-500 p-3">
                <BookOpen size={24} />
              </div>

              <div>
                <h2 className="text-3xl font-bold">LIBRA</h2>
                <p className="text-sm text-slate-400">Modern Digital Library</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Empowering learning through books, research resources, digital
              collections, and community knowledge sharing.
            </p>

            {/* Social Icons using react-icons/fa6 */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h3 className="mb-5 font-semibold text-white">Explore</h3>

              <ul className="space-y-3 text-slate-400">
                {exploreLinks.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-orange-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-white">Services</h3>

              <ul className="space-y-3 text-slate-400">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-orange-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-white">Company</h3>

              <ul className="space-y-3 text-slate-400">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-orange-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white">Stay Updated</h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Subscribe to receive new arrivals, events and library updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="h-12 w-full rounded-xl border border-slate-700 bg-slate-900 pl-11 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-semibold transition hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-400" />
                Kigali, Rwanda
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                +250 788 000 000
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                library@libra.com
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="my-12 grid gap-6 border-y border-slate-800 py-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["50K+", "Books Available"],
            ["15K+", "Active Members"],
            ["24/7", "Online Access"],
            ["98%", "Reader Satisfaction"],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-3xl font-bold text-orange-500">{value}</h3>
              <p className="mt-2 text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} LIBRA Library. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-orange-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-orange-400">
              Terms of Service
            </Link>

            <Link to="/cookies" className="hover:text-orange-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LibraryFooter;
