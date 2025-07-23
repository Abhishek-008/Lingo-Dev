// app/page.tsx
import React from 'react';
import Navbar from '../components/NavBar'; // Import the new Navbar component

export default function Home() {
  return (
    // Added pt-16 to account for the fixed navbar height (h-16)
    <div className="min-h-screen bg-white text-black font-inter flex flex-col items-center p-4 pt-16">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section - adjusted margin-top to ensure content starts below navbar */}
      <section className="text-center mt-12 mb-20 px-4 flex-grow flex flex-col justify-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          <span className="block">Pure.</span>
          <span className="block text-gray-700">Simple.</span>
          <span className="block">Essential.</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
          A clean slate for your vision. Focus on clarity and impact.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg">
          Discover More
        </button>
      </section>

      {/* Footer Section */}
      <footer className="w-full max-w-4xl text-center text-gray-600 py-6 border-t border-gray-200 mt-auto">
        <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}
