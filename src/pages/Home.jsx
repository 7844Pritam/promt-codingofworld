import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryFilter from "../components/CategoryFilter";
import PromptCard from "../components/PrompCard";
import CollectionCard from "../components/CollectionCard";
import CTABanner from "../components/CTABanner";
import { PROMPTS, COLLECTIONS } from "../utils/constants";
import React from "react";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <section className="mb-12 bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover & Share <span className="text-primary">AI Prompts</span> That Work
              </h1>
              <p className="text-gray-600 mb-8">
                Find inspiration from thousands of prompts or share your own creations with the community. Organize by categories and unlock the full potential of AI tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-primary/90 transition whitespace-nowrap !rounded-button">
                  Explore Prompts
                </button>
                <button className="bg-white text-primary border border-primary px-6 py-3 rounded-button font-medium hover:bg-gray-50 transition whitespace-nowrap !rounded-button">
                  Create Account
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20digital%20illustration%20of%20diverse%20people%20collaborating%20on%20creative%20AI%20projects%2C%20sharing%20ideas%2C%20with%20floating%20prompt%20cards%20and%20AI-generated%20imagery%20in%20the%20background%2C%20soft%20gradient%20lighting%2C%20high-quality%20digital%20art%20with%20clean%20design%20aesthetic%2C%20showing%20collaboration%20and%20creativity&width=600&height=500&seq=hero1&orientation=landscape"
                alt="AI Prompts Collaboration"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

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

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLECTIONS.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default Home;