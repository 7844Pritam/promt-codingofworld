import { Link } from "react-router-dom";
import React from "react";

function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-indigo-600 rounded-xl p-8 mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to share your own prompts?
        </h2>
        <p className="text-indigo-100 mb-8">
          Join our community of prompt engineers and AI enthusiasts. Share your expertise and discover new ways to leverage AI tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/add-prompt"
            className="bg-white text-primary px-6 py-3 rounded-button font-medium hover:bg-gray-100 transition whitespace-nowrap !rounded-button"
          >
            Create Account
          </Link>
          <button className="bg-transparent text-white border border-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition whitespace-nowrap !rounded-button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;