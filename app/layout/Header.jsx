"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Header = () => {
  const router = useRouter()
  const primaryColor = 'rgb(217, 80, 96)'; // Your first color
  const secondaryColor = 'rgb(0, 105, 96)'; // Your second color

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar (Using your secondary color) */}
      <div className="text-white text-sm py-2 px-4" style={{ backgroundColor: secondaryColor }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors"> Because your pet deserves the best care ✨</a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Where every pet is groomed with love 🐶🐱
            </a>
          </div>

          {/* GST 2.0 Reforms */}
          <div className="hidden md:block">
            <span
              className="px-2 py-0.5 rounded text-xs font-semibold"
              style={{ backgroundColor: primaryColor }}
            >
              GST 2.0 Reforms
            </span>
          </div>
        </div>
      </div>

      {/* Primary Header Row (Logo, Search, Icons) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo - Made larger */}
          <div onClick={() => router.push("/")} className="flex items-center cursor-pointer">
            <div className="flex items-center space-x-3">
              <img
                src="/dreamtaillogo.png"
                alt="Dream Tails Logo"
                className="h-12 w-auto md:h-16" // Increased height for larger logo
              />
              
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-6 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white text-gray-700 shadow-sm"
                style={{
                  borderColor: secondaryColor,
                  focusBorderColor: primaryColor
                }}
              />
              <svg
                className="w-5 h-5 absolute right-4 top-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* User Actions/Icons */}
          <div className="flex items-center space-x-6 text-gray-700 text-sm">
          

         

            {/* Login/Signup Button */}
            <button
              className="px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 text-white"
              style={{ backgroundColor: primaryColor }}
              onClick={() => router.push("/login")}
            >
              Login/Sign Up
            </button>
          </div>
        </div>
      </div>


    </header>
  )
}

export default Header