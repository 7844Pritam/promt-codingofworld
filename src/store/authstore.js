import { create } from "zustand";
import { apiPost } from "../api/api";
import { saveAuthData } from "../utils/localStorate";

const useSignupStore = create((set) => ({
  formData: { username: "", email: "", password: "" },
  responseData: null,
  message: "",
  loading: false,

  setFormField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),

  signup: async () => {
    set({ loading: true, message: "", responseData: null });

    const { formData } = useSignupStore.getState();
    const { success, data } = await apiPost("/auth/signup", formData);

    if (success && data.success) {
      saveAuthData(data.data);
      set({
        message: `✅ ${data.message}`,
        responseData: data.data,
        formData: { username: "", email: "", password: "" },
      });
    } else {
      set({ message: `❌ ${data.message || "Signup failed."}` });
    }

    set({ loading: false });
  },
}));

export default useSignupStore;
