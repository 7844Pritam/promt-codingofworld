import { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsBell, BsPlus, BsList } from "react-icons/bs";
import React from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-pacifico text-primary">
            PromptHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-900 font-medium hover:text-primary transition">
              Home
            </Link>
            <Link to="/explore" className="text-gray-600 hover:text-primary transition">
              Explore
            </Link>
            <Link to="/collections" className="text-gray-600 hover:text-primary transition">
              Collections
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-primary transition">
              Community
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search prompts..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <BsSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>

          <Link
            to="/login"
            className="hidden md:flex items-center justify-center bg-primary text-black px-4 py-2 rounded-button text-sm font-medium hover:bg-primary/90 transition whitespace-nowrap"
          >
      Login
          </Link>
          <Link
            to="/signup"
            className="hidden md:flex items-center justify-center bg-primary text-black px-4 py-2 rounded-button text-sm font-medium hover:bg-primary/90 transition whitespace-nowrap"
          >
SignUp
          </Link>
          <Link
            to="/add-prompt"
            className="hidden md:flex items-center justify-center bg-primary text-black px-4 py-2 rounded-button text-sm font-medium hover:bg-primary/90 transition whitespace-nowrap"
          >
            <BsPlus className="mr-1.5" /> Add Prompt
          </Link>

          <div className="flex items-center space-x-1 md:space-x-3">
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100">
              <BsBell />
            </button>
            <div className="relative">
              <button className="w-9 h-9 flex items-center justify-center rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20man%20with%20short%20dark%20hair%2C%20neutral%20expression%2C%20high%20quality%20portrait%20photo%2C%20professional%20lighting%2C%20clean%20background&width=100&height=100&seq=user1&orientation=squarish"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <BsList className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <Link to="/" className="block py-2 text-gray-900 hover:text-primary">
            Home
          </Link>
          <Link to="/explore" className="block py-2 text-gray-600 hover:text-primary">
            Explore
          </Link>
          <Link to="/collections" className="block py-2 text-gray-600 hover:text-primary">
            Collections
          </Link>
          <Link to="/community" className="block py-2 text-gray-600 hover:text-primary">
            Community
          </Link>
          <Link to="/add-prompt" className="block py-2 text-gray-600 hover:text-primary">
            Add Prompt
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;