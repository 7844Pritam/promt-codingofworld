import { BsEye, BsBookmark, BsCopy,BsImage } from "react-icons/bs";
import React from "react";

function PromptCard({ prompt }) {
  const categoryColors = {
    "Image Generation": "bg-blue-100 text-blue-800",
    Chatbots: "bg-green-100 text-green-800",
    Writing: "bg-purple-100 text-purple-800",
    Coding: "bg-yellow-100 text-yellow-800",
    Business: "bg-red-100 text-red-800",
    Education: "bg-indigo-100 text-indigo-800",
  };

  return (
    <div className="prompt-card bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[prompt.category]}`}>
            <BsImage className="mr-1" /> {prompt.category}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-500 flex items-center">
              <BsEye className="mr-1" /> {prompt.views}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">{prompt.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{prompt.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src={prompt.authorImage} alt="User" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-700">{prompt.author}</span>
          </div>

          <div className="hover-actions opacity-0 transition-opacity flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              <BsBookmark className="text-gray-500" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              <BsCopy className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptCard;