import usePrompt from "../hooks/usePrompt";
import useCategories from "../hooks/useCategories";
import React from "react";
const AddPrompt = () => {
  const { formData, errors, loading, message, handleChange, handleSubmit } = usePrompt();
  const { categories, categoriesLoading, categoriesError } = useCategories();

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create a New Prompt</h1>

      {message && <div>{message}</div>}
      {errors.message && <div className="text-red-500">{errors.message}</div>}
      {categoriesError && <div className="text-red-500">{categoriesError}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Creating..." : "Create Prompt"}
        </button>
      </form>
    </div>
  );
};

export default AddPrompt;
