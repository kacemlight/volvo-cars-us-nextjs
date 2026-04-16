'use client';

import { useState } from 'react';
import { NavigationItem } from '@/lib/types';

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  // Track whether mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Volvo Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-volvo-blue hover:text-volvo-lightblue transition">
              VOLVO
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-volvo-blue transition font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Search + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-volvo-blue transition" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* CTA Button */}
            <a
              href="/build"
              className="px-6 py-2 bg-volvo-blue text-white rounded hover:bg-volvo-lightblue transition font-semibold"
            >
              Build & Price
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-volvo-blue transition"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu - Only visible when toggled */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-volvo-lightgray hover:text-volvo-blue transition rounded"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {item.label}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <a
              href="/build"
              className="block mx-4 px-4 py-2 bg-volvo-blue text-white rounded text-center hover:bg-volvo-lightblue transition font-semibold"
            >
              Build & Price
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
