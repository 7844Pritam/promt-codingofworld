import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromptCard from "../components/PrompCard";
import React from "react";
import {
  BsListUl,
  BsListOl,
  BsCodeSlash,
  BsPlus,
  BsImage,
  BsX,
} from "react-icons/bs";

function AddPrompt() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: ["AI", "Prompt"],
    visibility: "public",
    allowComments: true,
    collection: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagAdd = (e) => {
    if (e.key === "Enter" && e.target.value.trim() && formData.tags.length < 5) {
      setFormData({ ...formData, tags: [...formData.tags, e.target.value.trim()] });
      e.target.value = "";
    }
  };

  const handleTagRemove = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Add New Prompt</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Prompt</h1>
            <p className="text-gray-600">
              Share your prompt with the community. Be clear and specific to help others get the most out of your creation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-6 mb-8">
            <form>
              <div className="mb-6">
                <label htmlFor="prompt-title" className="block text-sm font-medium text-gray-700 mb-2">
                  Prompt Title
                </label>
                <input
                  type="text"
                  id="prompt-title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter a descriptive title (e.g., 'Photorealistic Product Showcase')"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none pr-10"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Image Generation">Image Generation</option>
                    <option value="Chatbots">Chatbots</option>
                    <option value="Coding">Coding</option>
                    <option value="Writing">Writing</option>
                    <option value="Business">Business</option>
                    <option value="Education">Education</option>
                    <option value="Music">Music</option>
                  </select>
                  <BsListUl className="absolute right-3 top-3.5 pointer-events-none text-gray-500" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="prompt-content" className="block text-sm font-medium text-gray-700 mb-2">
                  Prompt Content
                </label>
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="flex items-center space-x-1 p-2 bg-gray-50 border-b border-gray-200">
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsListUl />
                    </button>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsListUl />
                    </button>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsListUl />
                    </button>
                    <span className="h-6 w-px bg-gray-300 mx-1"></span>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsListUl />
                    </button>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsListOl />
                    </button>
                    <span className="h-6 w-px bg-gray-300 mx-1"></span>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsCodeSlash />
                    </button>
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-gray-700">
                      <BsCodeSlash />
                    </button>
                  </div>
                  <textarea
                    id="prompt-content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="10"
                    className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary border-none"
                    placeholder="Write your prompt here. Be specific and include placeholders like [product], [topic], etc. for customization..."
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Use clear instructions and include variables in [brackets] for customization.
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="prompt-tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-200 rounded-md">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                      <button
                        className="ml-1 text-primary/70 hover:text-primary"
                        onClick={() => handleTagRemove(tag)}
                      >
                        <BsX />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    id="prompt-tags"
                    className="flex-1 min-w-[150px] border-none focus:outline-none focus:ring-0 text-sm"
                    placeholder="Add tags (press Enter)"
                    onKeyDown={handleTagAdd}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Add up to 5 tags to help others find your prompt.</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Visibility</label>
                <div className="flex items-center space-x-4">
                  {["public", "private", "unlisted"].map((value) => (
                    <label key={value} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="visibility"
                        value={value}
                        checked={formData.visibility === value}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2 custom-radio">
                        <span
                          className={`w-2 h-2 rounded-full bg-primary ${formData.visibility === value ? "" : "hidden"} radio-checked`}
                        ></span>
                      </span>
                      <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                    </label>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Public prompts are visible to everyone. Private prompts are only visible to you. Unlisted prompts are accessible via direct link.
                </p>
              </div>

              <div className="mb-8 border border-gray-200 rounded-md p-4">
                <h3 className="text-md font-medium text-gray-900 mb-4">Optional Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Allow Comments</h4>
                      <p className="text-xs text-gray-500">Let others leave feedback on your prompt</p>
                    </div>
                    <label className="custom-switch">
                      <input
                        type="checkbox"
                        checked={formData.allowComments}
                        onChange={(e) =>
                          setFormData({ ...formData, allowComments: e.target.checked })
                        }
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">Add to Collection</h4>
                      <p className="text-xs text-gray-500">Include this prompt in one of your collections</p>
                    </div>
                    <div className="relative w-48">
                      <select
                        name="collection"
                        value={formData.collection}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none pr-8"
                      >
                        <option value="">None</option>
                        <option value="collection1">My Best Prompts</option>
                        <option value="collection2">Image Generation</option>
                        <option value="collection3">Writing Helpers</option>
                      </select>
                      <BsListUl className="absolute right-3 top-2.5 pointer-events-none text-gray-500" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-700">Example Outputs</h4>
                      <button type="button" className="text-sm text-primary hover:text-primary/80">
                        <BsPlus className="inline mr-1" /> Add Example
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      Show others what your prompt can generate (optional)
                    </p>
                    <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
                        <BsImage />
                      </div>
                      <p className="text-sm text-gray-500">Drag and drop images or click to upload</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 whitespace-nowrap !rounded-button"
                >
                  Cancel
                </button>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-button font-medium hover:bg-gray-50 transition whitespace-nowrap !rounded-button"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-5 py-2.5 rounded-button font-medium hover:bg-primary/90 transition whitespace-nowrap !rounded-button"
                  >
                    Publish Prompt
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Preview</h2>
            <div className="prompt-card bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <BsImage className="mr-1" /> {formData.category || "Select a category"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {formData.title || "Your Prompt Title"}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {formData.content || "Your prompt content will appear here..."}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20man%20with%20short%20dark%20hair%2C%20neutral%20expression%2C%20high%20quality%20portrait%20photo%2C%20professional%20lighting%2C%20clean%20background&width=100&height=100&seq=user1&orientation=squarish"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Your Name</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200">
                      <BsCodeSlash className="text-gray-500" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200">
                      <BsCodeSlash className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              This is how your prompt will appear to others. The preview updates as you fill out the form.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AddPrompt;