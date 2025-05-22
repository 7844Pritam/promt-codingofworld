// src/store/usePromptStore.js
import { create } from "zustand";
import { apiPost } from "../api/api"; 

const usePromptStore = create((set, get) => ({
  // Prompt form data
  promptFormData: { 
    title: "",
    content: "",
    category: "",
  },
  promptResponseData: null,
  promptMessage: "",
  promptLoading: false,

  // Set prompt form field values
  setPromptFormField: (field, value) =>
    set((state) => ({
      promptFormData: { ...state.promptFormData, [field]: value },
    })),

  // Submit prompt
  createPrompt: async () => {
    set({ promptLoading: true, promptMessage: "", promptResponseData: null });
    try {
      const { promptFormData } = get();
      const { success, data } = await apiPost("/prompts", promptFormData);  // API call

      if (success && data.success) {
        set({
          promptMessage: `✅ ${data.message}`,
          promptResponseData: data.data,
        });
      } else {
        set({
          promptMessage: `❌ ${data.message || "Prompt creation failed."}`,
        });
      }
    } catch (error) {
      set({ promptMessage: `❌ ${error.message || "Prompt creation failed."}` });
    } finally {
      set({ promptLoading: false });
    }
  },
}));

export default usePromptStore;
