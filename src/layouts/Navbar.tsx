import React, { useState } from "react";

export interface NavbarProps {
  onSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Books", href: "/book-media" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/service" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Brand Logo & Name */}
          <a
            href="/home"
            className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-orange-500 rounded-lg flex items-center justify-center p-1.5 text-white shadow-sm hover:bg-orange-600 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M3 18h18v2H3v-2zm2-4h14v2H5v-2zm2-4h10v2H7v-2zm2-4h6v2H9V6z" />
              </svg>
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-gray-900 tracking-wide">
              LIBRA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs xl:max-w-sm items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search books or authors..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50/80 border border-transparent rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="/register">
              <button
                type="button"
                className="px-5 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all duration-150 shadow-sm"
              >
                Register
              </button>
            </a>
            <a href="/login">
              <button
                type="button"
                className="px-6 py-2 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 active:bg-orange-700 transition-all duration-150 shadow-sm hover:shadow"
              >
                Login
              </button>
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-gray-50/50 px-4 pt-3 pb-5 space-y-4">
          {/* Mobile Search Bar */}
          <div className="md:hidden">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search books or authors..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <a href="/register">
              <button
                type="button"
                className="w-full py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
              >
                Register
              </button>
            </a>
            <a href="/login">
              <button
                type="button"
                className="w-full py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-sm"
              >
                Login
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
