import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";
import { USER_DATA } from "../utils/constants";
import PromptCard from "../components/PrompCard";
import React from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: USER_DATA.name,
    email: USER_DATA.email,
    theme: "light",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to update profile
    console.log("Profile updated:", formData);
    setIsEditing(false);
  };

  const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Profile</h1>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={USER_DATA.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-primary object-cover"
              />
              <div className="flex-1">
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <InputField
                      label="Full Name"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                    />
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Enter your email"
                    />
                    <div className="mb-6">
                      <label
                        htmlFor="theme"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Theme Preference
                      </label>
                      <CustomSelect
                        options={themeOptions}
                        value={formData.theme}
                        onChange={(value) => handleChange("theme", value)}
                        placeholder="Select theme"
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                      >
                        Save Changes
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{formData.name}</h2>
                    <p className="text-gray-600 mb-4">{formData.email}</p>
                    <p className="text-gray-600 mb-4">Theme: {formData.theme}</p>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Prompts</h2>
            {USER_DATA.prompts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {USER_DATA.prompts.map((prompt) => (
                  <PromptCard
                    key={prompt.id}
                    prompt={{
                      ...prompt,
                      author: USER_DATA.name,
                      authorImage: USER_DATA.profileImage,
                    }}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">You haven't created any prompts yet.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;