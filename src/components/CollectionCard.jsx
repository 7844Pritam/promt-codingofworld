import * as Icons from "react-icons/bs";
import React from "react";
function CollectionCard({ collection }) {
  const categoryIcons = {
    "Image Generation": { icon: "BsImage", color: "bg-blue-100 text-blue-800" },
    Writing: { icon: "BsPen", color: "bg-purple-100 text-purple-800" },
    Chatbots: { icon: "BsChatDots", color: "bg-green-100 text-green-800" },
    Coding: { icon: "BsCodeSlash", color: "bg-yellow-100 text-yellow-800" },
    Business: { icon: "BsBriefcase", color: "bg-red-100 text-red-800" },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{collection.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img src={collection.authorImage} alt="User" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-medium text-gray-700">{collection.author}</span>
          </div>
          <span className="text-xs text-gray-500">{collection.promptCount} prompts</span>
        </div>
        <div className="flex -space-x-2">
          {collection.categories.map((category, index) => {
            const { icon, color } = categoryIcons[category] || { icon: "BsQuestion", color: "bg-gray-100 text-gray-800" };
            const Icon = Icons[icon];
            return (
              <span
                key={index}
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${color} text-xs`}
              >
                <Icon />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;