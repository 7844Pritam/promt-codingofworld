import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

function Community() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Community</h1>
        <p className="text-gray-600 mb-8">
          Join our vibrant community of AI enthusiasts and prompt engineers. Participate in discussions, share your knowledge, and collaborate on exciting projects.
        </p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Discussions</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Community;