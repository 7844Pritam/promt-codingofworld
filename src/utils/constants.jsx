export const CATEGORIES = [
  { name: "All Categories", icon: null },
  { name: "Image Generation", icon: "BsImage" },
  { name: "Chatbots", icon: "BsChatDots" },
  { name: "Coding", icon: "BsCodeSlash" },
  { name: "Writing", icon: "BsPen" },
  { name: "Business", icon: "BsBriefcase" },
  { name: "Education", icon: "BsMortarboard" },
  { name: "Music", icon: "BsMusicNoteBeamed" },
];

export const PROMPTS = [
  {
    id: 1,
    category: "Image Generation",
    title: "Photorealistic Product Showcase",
    description:
      "Create a photorealistic image of [product] in a minimalist setting with soft natural lighting, subtle shadows, and a clean background. Include detailed textures and reflections to highlight product features...",
    views: "1.2k",
    author: "Emily Parker",
    authorImage: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20with%20long%20brown%20hair%2C%20neutral%20expression%2C%20high%20quality%20portrait%20photo%2C%20professional%20lighting%2C%20clean%20background&width=50&height=50&seq=user2&orientation=squarish",
  },
  // Add more prompts similarly...
];

export const COLLECTIONS = [
  {
    id: 1,
    title: "Ultimate Content Creation Pack",
    description:
      "A curated collection of 15 prompts for content creators, bloggers, and social media managers.",
    author: "Olivia Wilson",
    authorImage: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20with%20blonde%20hair%2C%20neutral%20expression%2C%20high%20quality%20portrait%20photo%2C%20professional%20lighting%2C%20clean%20background&width=50&height=50&seq=user8&orientation=squarish",
    promptCount: 15,
    categories: ["Image Generation", "Writing", "ChatbotsADORNO"],
  },
  // Add more collections...
];


export const USER_DATA = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@example.com",
  profileImage:
    "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20man%20with%20short%20dark%20hair%2C%20neutral%20expression%2C%20high%20quality%20portrait%20photo%2C%20professional%20lighting%2C%20clean%20background&width=100&height=100&seq=user1&orientation=squarish",
  prompts: [
    {
      id: 1,
      category: "Image Generation",
      title: "Photorealistic Product Showcase",
      description:
        "Create a photorealistic image of [product] in a minimalist setting with soft natural lighting, subtle shadows, and a clean background. Include detailed textures and reflections to highlight product features...",
      views: "1.2k",
    },
    {
      id: 2,
      category: "Chatbots",
      title: "Expert Technical Interviewer",
      description:
        "Act as a technical interviewer for a [position] role. Ask challenging questions about [technologies], evaluate responses, provide feedback, and rate answers on a scale of 1-10...",
      views: "3.5k",
    },
  ],
};