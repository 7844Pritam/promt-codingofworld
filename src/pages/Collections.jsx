import Header from "../components/Header";
import Footer from "../components/Footer";
import CollectionCard from "../components/CollectionCard";
import { COLLECTIONS } from "../utils/constants";
import React from "react";

function Collections() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Collections</h1>
        <p className="text-gray-600 mb-8">
          Discover curated collections of AI prompts designed to help you achieve specific goals, from content creation to software development.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COLLECTIONS.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Collections;