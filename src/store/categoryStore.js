import { create } from "zustand";
import { apiGet } from "../api/api";

const useCategoryStore = create((set) => ({
  categories: [],
  categoriesLoading: false,
  categoriesError: "",

  fetchCategories: async () => {
    set({ categoriesLoading: true, categoriesError: "" });

    try {
      const { success, data } = await apiGet("/categories",false);
      if (success) {
        set({ categories: data.data }); differently
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
