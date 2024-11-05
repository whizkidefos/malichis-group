"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/malichisgroup-icon.png" alt="Malichis Group" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl text-gray-900">MALICHIS GROUP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand transition">Home</Link>
            <Link href="/properties" className="text-gray-700 hover:text-brand transition">Properties</Link>
            <Link href="/cleaning" className="text-gray-700 hover:text-brand transition">Cleaning Services</Link>
            <Link href="/foundation" className="text-gray-700 hover:text-brand transition">Foundation</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-brand transition">Home</Link>
            <Link href="/properties" className="block px-3 py-2 text-gray-700 hover:text-brand transition">Properties</Link>
            <Link href="/cleaning" className="block px-3 py-2 text-gray-700 hover:text-brand transition">Cleaning Services</Link>
            <Link href="/foundation" className="block px-3 py-2 text-gray-700 hover:text-brand transition">Foundation</Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-center bg-brand text-white rounded-full font-medium hover:bg-brand-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}