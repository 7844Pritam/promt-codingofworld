import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../utils/constants";
import * as Icons from "react-icons/bs";
import React from "react";
import { BsList } from "react-icons/bs";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsList />
      </button>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="text-2xl font-pacifico text-primary">
            PromptHub
          </Link>
        </div>
        <nav className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Categories</h3>
          <ul className="space-y-2">
            {CATEGORIES.map((category) => {
              const Icon = category.icon ? Icons[category.icon] : null;
              return (
                <li key={category.name}>
                  <Link
                    to={`/explore?category=${category.name}`}
                    className="flex items-center text-gray-600 hover:text-primary transition py-2 px-2 rounded-md hover:bg-gray-100"
                  >
                    {Icon && <Icon className="mr-2" />}
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;