import {
  ArrowRight,
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

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
              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:scale-105">
                Register Free
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10">
                Browse Books
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-56">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
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

            <div className="mt-8 flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="rounded-xl bg-slate-800 p-3 transition hover:bg-orange-500"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h3 className="mb-5 font-semibold text-white">Explore</h3>

              <ul className="space-y-3 text-slate-400">
                {["Home", "Books", "Authors", "Categories", "Membership"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-orange-400">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold">Services</h3>

              <ul className="space-y-3 text-slate-400">
                {[
                  "Borrow Books",
                  "Research",
                  "Reading Rooms",
                  "E-Books",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-orange-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold">Company</h3>

              <ul className="space-y-3 text-slate-400">
                {["About", "Blog", "Contact", "Privacy", "Terms"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-orange-400">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white">Stay Updated</h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Subscribe to receive new arrivals, events and library updates.
            </p>

            <div className="mt-6">
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

              <button className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-semibold transition hover:bg-orange-600">
                Subscribe
              </button>
            </div>

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
            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-400">
              Terms of Service
            </a>

            <a href="#" className="hover:text-orange-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LibraryFooter;
