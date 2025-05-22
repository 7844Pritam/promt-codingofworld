import React from "react";
import useCategories from "../hooks/useCategories";
import useGetPrompts from "../hooks/useGetPrompt";

const PromptsPage = () => {
  const { categories, categoriesLoading, categoriesError } = useCategories();
  const { prompts, promptsLoading, promptsError, selectedCategory, setSelectedCategory } = useGetPrompts();
console.log("Full Prompt Object:", prompt);

  // Debug: Log categories and prompts
  console.log("Categories:", categories);
console.log("Prompt category:", prompt.category);

  const filteredPrompts = selectedCategory
    ? prompts.filter((prompt) => {
        const match = prompt.category && prompt.category.toString() === selectedCategory;
        console.log("Filtering:", prompt.category?.toString(), selectedCategory, match);
        return match;
      })
    : prompts;

  if (categoriesLoading || promptsLoading) {
    return <div className="max-w-4xl mx-auto p-6 font-sans">Loading data...</div>;
  }

  if (categoriesError || promptsError) {
    return (
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <p className="text-red-500">{categoriesError || promptsError}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">All Prompts</h1>

      {/* Display Categories as Chips */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {categories.length === 0 ? (
            <p>No categories available.</p>
          ) : (
            categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category._id.toString())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category._id.toString()
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Display Prompts */}
      <div>
        {filteredPrompts.length === 0 ? (
          <p>No prompts found for this category.</p>
        ) : (
          <div className="grid gap-4">
            {filteredPrompts.map((prompt) => (
              <div
                key={prompt._id}
                className="p-4 border border-gray-300 rounded-md shadow-sm"
              >
                <h3 className="text-xl font-semibold">{prompt.title}</h3>
                <p className="text-gray-600 mt-1">{prompt.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Category:{" "}
                  {categories.find((cat) => cat._id.toString() === prompt.category?.toString())?.name ||
                    "Category Not Found"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Created: {new Date(prompt.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptsPage;