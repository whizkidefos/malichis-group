"use client";

import Link from 'next/link';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl text-gray-900">MALICHIS GROUP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition">Home</Link>
            <Link href="/properties" className="text-gray-700 hover:text-emerald-600 transition">Properties</Link>
            <Link href="/cleaning" className="text-gray-700 hover:text-emerald-600 transition">Cleaning Services</Link>
            <Link href="/foundation" className="text-gray-700 hover:text-emerald-600 transition">Foundation</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Home</Link>
            <Link href="/properties" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Properties</Link>
            <Link href="/cleaning" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Cleaning Services</Link>
            <Link href="/foundation" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition">Foundation</Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-center bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}