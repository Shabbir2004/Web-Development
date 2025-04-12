import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } flex-col w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto lg:order-1 mt-4 lg:mt-0`}
            id="mobile-menu"
          >
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Contact", to: "/contact" },
                { name: "Github", to: "/github" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-2 px-4 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {/* Mobile-only login buttons */}
              <div className="flex flex-col items-start lg:hidden mt-4 space-y-2">
                <Link
                  to="#"
                  className="text-gray-800 bg-gray-100 rounded-md px-4 py-2 w-full text-left"
                >
                  Log in
                </Link>
                <Link
                  to="#"
                  className="text-white bg-orange-700 rounded-md px-4 py-2 w-full text-left"
                >
                  Get started
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
