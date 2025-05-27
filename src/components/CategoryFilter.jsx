import { BsGrid, BsListCheck } from "react-icons/bs";
import * as Icons from "react-icons/bs";
import React from "react";

function CategoryFilter({ category, activeCategory, setActiveCategory }) {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Browse Prompts</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 hidden sm:inline">View:</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-primary">
              <BsGrid />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400">
              <BsListCheck />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 hidden md:inline">Sort by:</span>
            <select className="text-sm border-none bg-white rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
              <option>Popular</option>
              <option>Newest</option>
              <option>Most Saved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Updated container for category buttons to wrap */}
      <div className="flex flex-wrap gap-2 mb-6 pb-2">
        {/* All Category Button */}
        <button
          className={`category-pill whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition ${
            activeCategory === "All" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>

        {/* Dynamic Category Buttons */}
        {category.map((category) => {
          const Icon = category.icon ? Icons[category.icon] : null;
          return (
            <button
              key={category.name}
              className={`category-pill whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {Icon && <Icon className="inline mr-1" />}
              {category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryFilter;
