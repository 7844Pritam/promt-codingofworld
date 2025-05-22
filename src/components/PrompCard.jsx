import React, { useState } from "react";
import { BsEye, BsBookmark, BsCopy, BsImage, BsArrowRight, BsChatRight, BsCheck } from "react-icons/bs";

function PromptCard({ prompt }) {
  const [showModal, setShowModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const categoryName = prompt.category?.name || "Uncategorized";

  const categoryColors = {
    "Image Generation": "bg-blue-100 text-blue-800",
    Chatbots: "bg-green-100 text-green-800",
    Writing: "bg-purple-100 text-purple-800",
    Coding: "bg-yellow-100 text-yellow-800",
    Business: "bg-red-100 text-red-800",
    Education: "bg-indigo-100 text-indigo-800",
    Uncategorized: "bg-gray-100 text-gray-800",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content || "").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    });
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setShowModal(true)}
        className="prompt-card cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition"
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                categoryColors[categoryName] || "bg-gray-100 text-gray-800"
              }`}
            >
              <BsImage className="mr-1" /> {categoryName}
            </span>

            <span className="text-sm text-gray-500 flex items-center">
              <BsEye className="mr-1" /> 12k
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">{prompt.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{prompt.content}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full overflow-hidden">
                <img src={prompt.authorImage} alt="User" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-gray-700">{prompt.author}</span>
            </div>

            <div className="opacity-80 flex items-center space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <BsBookmark className="text-gray-500" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                {copySuccess ?  <BsCheck className="text-green-500" /> :  <BsCopy className="text-gray-500" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50  bg-opacity-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 transform transition-all duration-300 scale-100 opacity-100 animate-fadeIn"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{prompt.title}</h2>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                categoryColors[categoryName] || "bg-gray-100 text-gray-800"
              }`}
            >
              <BsImage className="mr-1" /> {categoryName}
            </span>

            <p className="text-gray-700 whitespace-pre-wrap mb-4">{prompt.content}</p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={prompt.authorImage} alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-gray-700">{prompt.author}</span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                <BsCopy className="mr-1" />
                {copySuccess ? "Copied!" : "Copy Prompt"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PromptCard;
