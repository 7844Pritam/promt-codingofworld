import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryFilter from "../components/CategoryFilter";
import PromptCard from "../components/PrompCard";
import CTABanner from "../components/CTABanner";
import React from "react";
import useGetPrompts from "../hooks/useGetPrompt";
import useCategories from "../hooks/useCategories";
import { useState, useMemo } from "react";

function Home() {
  const { prompts, promptsLoading, promptsError } = useGetPrompts();
  const { categories, categoriesLoading, categoriesError } = useCategories();

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrompts = useMemo(() => {
    if (activeCategory === "All") return prompts;
    const categoryMatch = categories.find(
      (cat) => cat.name.toLowerCase() === activeCategory.toLowerCase()
    );
    return categoryMatch
      ? prompts.filter((p) => p.category?._id === categoryMatch._id)
      : [];
  }, [prompts, categories, activeCategory]);

  if (promptsLoading || categoriesLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (promptsError || categoriesError) {
    return <div className="text-red-500 py-10">{promptsError || categoriesError}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <section className="mb-8 sm:mb-12 bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Discover & Share <span className="text-primary">AI Prompts</span> That Work
              </h1>
              <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                Find inspiration from thousands of prompts or share your own creations with the community. Organize by categories and unlock the full potential of AI tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-button font-medium hover:bg-primary/90 transition whitespace-nowrap !rounded-button">
                  Explore Prompts
                </button>
                <button className="bg-white text-primary border border-primary px-4 sm:px-6 py-2 sm:py-3 rounded-button font-medium hover:bg-gray-50 transition whitespace-nowrap !rounded-button">
                  Create Account
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[200px] sm:min-h-[300px]">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20digital%20illustration%20of%20diverse%20people%20collaborating%20on%20creative%20AI%20projects%2C%20sharing%20ideas%2C%20with%20floating%20prompt%20cards%20and%20AI-generated%20imagery%20in%20the%20background%2C%20soft%20gradient%20lighting%2C%20high-quality%20digital%20art%20with%20clean%20design%20aesthetic%2C%20showing%20collaboration%20and%20creativity&width=600&height=500&seq=hero1&orientation=landscape"
                alt="AI Prompts Collaboration"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        <CategoryFilter
          category={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt) => (
              <PromptCard key={prompt._id} prompt={prompt} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No prompts available for this category.
            </p>
          )}
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
