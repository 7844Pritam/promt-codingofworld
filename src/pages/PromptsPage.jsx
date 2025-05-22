import React from "react";
import { useSearchParams } from "react-router-dom";
import useGetPrompts from "../hooks/useGetPrompt";
import useCategories from "../hooks/useCategories";

const PromptsPage = () => {
  const { prompts, promptsLoading, promptsError } = useGetPrompts();
  const { categories, categoriesLoading, categoriesError } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategoryName = searchParams.get("category");

  const selectedCategoryObj = categories.find(
    (cat) => cat.name.toLowerCase() === selectedCategoryName?.toLowerCase()
  );

  const filteredPrompts = selectedCategoryObj
    ? prompts.filter((prompt) => prompt.category?._id === selectedCategoryObj._id)
    : prompts;

  const handleCategoryClick = (categoryName) => {
    if (!categoryName) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryName);
    }
    setSearchParams(searchParams);
  };

  if (promptsLoading || categoriesLoading) {
    return <div className="max-w-4xl mx-auto p-6 font-sans">Loading data...</div>;
  }

  if (promptsError || categoriesError) {
    return (
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <p className="text-red-500">{promptsError || categoriesError}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">All Prompts</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            !selectedCategoryName ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              selectedCategoryName?.toLowerCase() === category.name.toLowerCase()
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div>
        {filteredPrompts.length === 0 ? (
          <p>No prompts available.</p>
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
                  Category: {prompt.category?.name || "N/A"}
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
