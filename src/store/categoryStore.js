// src/store/categoryStore.js
import { create } from "zustand";
import { apiGet } from "../api/api"; // This uses your axios wrapper

const useCategoryStore = create((set) => ({
  categories: [],
  categoriesLoading: false,
  categoriesError: "",

  fetchCategories: async () => {
    set({ categoriesLoading: true, categoriesError: "" });

    try {
      const { success, data } = await apiGet("/categories");
      if (success) {
        set({ categories: data.data }); // Adjust if your API wraps it differently
      } else {
        set({ categoriesError: data.message || "Failed to fetch categories." });
      }
    } catch (error) {
      set({ categoriesError: error.message || "Something went wrong." });
    } finally {
      set({ categoriesLoading: false });
    }
  },
}));

export default useCategoryStore;
