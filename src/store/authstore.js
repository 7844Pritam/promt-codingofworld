import { create } from "zustand";
import { apiPost } from "../api/api";
import { saveAuthData } from "../utils/localStorate"; 

const useAuthStore = create((set, get) => ({
  // Signup
  signupFormData: {
    username: "",
    email: "",
    password: "",
  },
  signupResponseData: null,
  signupMessage: "",
  signupLoading: false,

  setSignupFormField: (field, value) =>
    set((state) => ({
      signupFormData: { ...state.signupFormData, [field]: value },
    })),

  signup: async () => {
    set({ signupLoading: true, signupMessage: "", signupResponseData: null });
    try {
      const { signupFormData } = get();
      const { success, data } = await apiPost("/auth/signup", signupFormData,false);

      if (success && data.success) {
        saveAuthData(data.data);
        set({
          signupMessage: `✅ ${data.message}`,
          signupResponseData: data.data,
          signupFormData: { username: "", email: "", password: "" },
        });
      } else {
        set({
          signupMessage: `❌ ${data.message || "Signup failed."}`,
        });
      }
    } catch (error) {
      set({ signupMessage: `❌ ${error.message || "Signup failed."}` });
    } finally {
      set({ signupLoading: false });
    }
  },

  // Login
  loginFormData: {
    email: "",
    password: "",
  },
  loginResponseData: null,
  loginMessage: "",
  loginLoading: false,

  setLoginFormField: (field, value) =>
    set((state) => ({
      loginFormData: { ...state.loginFormData, [field]: value },
    })),

  login: async () => {
    console.log("from store ");
    set({ loginLoading: true, loginMessage: "", loginResponseData: null });
    try {
      const { loginFormData } = get();
      const { success, data } = await apiPost("/auth/login", loginFormData,false);

      if (success && data.success) {
        saveAuthData(data.data);
        set({
          loginMessage: `✅ ${data.message}`,
          loginResponseData: data.data,
        });
      } else {
        set({
          loginMessage: `❌ ${data.message || "Login failed."}`,
        });
      }
    } catch (error) {
      set({ loginMessage: `❌ ${error.message || "Login failed."}` });
    } finally {
      set({ loginLoading: false });
    }
  },
}));

export default useAuthStore;
