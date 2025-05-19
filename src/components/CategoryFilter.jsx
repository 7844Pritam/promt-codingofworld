import { useState } from "react";
import { CATEGORIES } from "../utils/constants";
import * as Icons from "react-icons/bs";
import { BsGrid,BsListCheck } from "react-icons/bs";
import React from "react";

function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Browse Prompts</h2>
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
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

      <div className="flex overflow-x-auto hide-scrollbar pb-2 mb-6">
        <div className="flex space-x-2">
          {CATEGORIES.map((category) => {
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
      </div>
    </section>
  );
}

export default CategoryFilter;