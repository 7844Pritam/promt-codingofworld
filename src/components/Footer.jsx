import { Link } from "react-router-dom";
import { BsTwitterX, BsDiscord, BsGithub } from "react-icons/bs";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-pacifico text-primary mb-4 inline-block">
              PromptHub
            </Link>
            <p className="text-gray-600 mb-6">
              Discover, share, and learn from the best AI prompts created by our community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
              >
                <BsDiscord />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Popular Prompts
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  New Releases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Discussions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest prompts and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 PromptHub. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-500 hover:text-primary text-sm">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-primary text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;