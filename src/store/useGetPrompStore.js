// src/store/promptStore.js
import { create } from "zustand";
import { apiGet } from "../api/api"; // Your axios wrapper with token support

const useGetPromptStore = create((set) => ({
  prompts: [],
  promptsLoading: false,
  promptsError: "",
  selectedCategory: null, // To track the selected category for filtering

  fetchPrompts: async () => {
    set({ promptsLoading: true, promptsError: "" });
    try {
      const { success, data } = await apiGet("/prompts",false);
      if (success) {
        set({ prompts: data.data }); 
      } else {
        set({ promptsError: data.message || "Failed to fetch prompts." });
      }
    } catch (error) {
      set({ promptsError: error.message || "Something went wrong." });
    } finally {
      set({ promptsLoading: false });
    }
  },

  setSelectedCategory: (categoryId) => {
    set({ selectedCategory: categoryId });
  },
}));

export default useGetPromptStore;