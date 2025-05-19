import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryFilter from "../components/CategoryFilter";
import PromptCard from "../components/PrompCard";
import { PROMPTS } from "../utils/constants";
import React from "react";
function Explore() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Prompts</h1>
        <p className="text-gray-600 mb-8">
          Browse through a wide variety of AI prompts created by our community. Filter by category or sort to find the perfect prompt for your needs.
        </p>
        <CategoryFilter />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROMPTS.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </section>
        <div className="flex justify-center mb-16">
          <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-button font-medium hover:bg-gray-50 transition whitespace-nowrap !rounded-button">
            Load More Prompts
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Explore;