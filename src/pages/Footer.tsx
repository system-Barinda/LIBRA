import {
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-slate-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-orange-500/20 px-4 py-1 text-sm font-medium text-orange-400">
              Newsletter
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold md:text-5xl">
              Subscribe For Latest Library News &
              <span className="text-orange-500"> Book Updates</span>
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Get notified about new arrivals, events, workshops, reading
              recommendations and exclusive library updates.
            </p>

            <div className="mt-10 flex w-full max-w-xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <button className="h-14 rounded-xl bg-orange-500 px-8 font-semibold transition hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-500 p-3">
              <BookOpen size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">LIBRA</h2>
              <p className="text-sm text-gray-400">Digital Library Platform</p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            Discover thousands of books, journals and learning resources from
            anywhere. Making knowledge accessible to everyone.
          </p>

          <div className="mt-8 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-orange-500"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>

          <ul className="mt-6 space-y-4 text-gray-400">
            {[
              "Home",
              "Books",
              "Categories",
              "Services",
              "Authors",
              "About Us",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-orange-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Library Services */}
        <div>
          <h3 className="text-xl font-semibold">Library Services</h3>

          <ul className="mt-6 space-y-4 text-gray-400">
            {[
              "Borrow Books",
              "Digital Library",
              "Reading Rooms",
              "Research Support",
              "Book Reservation",
              "Membership",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-orange-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>

          <div className="mt-6 space-y-5 text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-orange-500" size={18} />
              <span>Kigali, Rwanda</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <span>+250 788 123 456</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <span>library@libra.com</span>
            </div>

            <button className="mt-5 flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold transition hover:bg-orange-600">
              Contact Us
              <Send size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} LIBRA Library. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-400">
              Terms of Service
            </a>

            <a href="#" className="hover:text-orange-400">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
