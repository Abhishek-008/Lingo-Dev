// components/Navbar.tsx
'use client'; // This component needs to be a Client Component

import React, { useState } from 'react';
import { LanguageSwitcher } from './LocaleSwitcher'; // Import the LanguageSwitcher

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo/Name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight">
              Your Brand
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-lg font-medium hover:text-gray-600 transition-colors duration-200">Home</a>
            <a href="/about" className="text-lg font-medium hover:text-gray-600 transition-colors duration-200">About</a>
            <a href="/contact" className="text-lg font-medium hover:text-gray-600 transition-colors duration-200">Contact</a>
            <LanguageSwitcher /> {/* Integrated Language Switcher */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Conditional rendering of hamburger/close icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100">About</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100">Contact</a>
            <div className="px-3 py-2">
              <LanguageSwitcher /> {/* Integrated Language Switcher in mobile menu */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
